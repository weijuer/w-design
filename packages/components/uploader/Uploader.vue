<template>
  <div class="w-uploader">
    <input class="w-uploader-input" ref="fileInput" type="file" :accept="accept" :multiple="multiple"
      @change="onChange" />
    <uploader-dragger v-if="drag" @on-click="onTrigger" @handle-files="uploadFiles" />
    <div v-else class="w-uploader-trigger" :class="{ 'w-disabled': disabled || state.isUploaded }" @click="onTrigger">
      <slot></slot>
    </div>

    <div class="w-uploader-tips" v-if="tips">{{ tips }}</div>

    <uploader-list :files="state.files" @on-delete="onDelete" />
  </div>
</template>

<script>
// https://zhuanlan.zhihu.com/p/267683616
// http://www.icodebang.com/article/212821.html
// https://blog.csdn.net/qq_44812835/article/details/113767095

// Element
// https://blog.csdn.net/weixin_30564901/article/details/101975516
export default {
  name: 'w-uploader'
};
</script>

<script setup>
import { reactive, ref, watch, onBeforeUnmount } from 'vue';
import UploaderDragger from './UploaderDragger.vue';
import UploaderList from './UploaderList.vue';
import request from './utils/request';

const props = defineProps({
  url: { type: String, default: '' }, // 后台请求地址
  multiple: { type: Boolean, default: false }, // 是否支持多文件上传
  accept: { type: String, default: '*' }, // 文件类型
  data: { type: Object, default: () => ({}) }, // 上传时附带的额外参数
  name: { type: String, default: 'file' }, // 后台接收参数名
  disabled: { type: Boolean, default: false }, // 是否禁用
  drag: { type: Boolean, default: false }, // 是否支持拖拽上传
  showRemove: { type: Boolean, default: true }, // 是否显示删除按钮
  tips: { type: String, default: '' }, // 文件上传提示
  fileList: { type: Array, default: () => [] }, // 文件列表
  defaultFileList: { type: Array, default: () => [] }, // 默认文件列表
  headers: { type: Object, default: () => { } }, // 设置上传的请求头部，IE10 以上有效
  withCredentials: { type: Boolean, default: false }, // 是否允许跨域上传
  beforeUpload: { type: Function, default: () => { } }, // 上传前的钩子，参数为上传的文件，若返回 false 则停止上传
  remove: { type: Function, default: () => { } }, // 删除文件时的钩子，参数为文件对象
  fileClick: { type: Function, default: () => { } }, // 文件点击时的钩子，参数为文件对象
  chuncked: { type: Boolean, default: false }, // 是否分片上传
  chunckSize: { type: Number, default: 1024 * 1024 }, // 分片大小，默认 1M
  threads: { type: Number, default: 1 } // 分片上传并发数，默认 3 个
});

const fileInput = ref(null);
const state = reactive({
  isUploaded: false, // 是否上传成功
  files: [], // 文件列表
  tempIndex: 0, // 临时文件索引
  reqs: {} // 请求列表
});

const emit = defineEmits(['change']);

const updateFiles = (files) => {
  state.files = files.map((file) => {
    return {
      ...file,
      status: file.status || 'success',
      percent: file.percent || 0,
      uid: Date.now() + state.tempIndex++
    };
  });
  state.isUploaded = files.length > 0;

  if (files.length === 0) {
    fileInput.value.value = '';
  }
};

function onTrigger() {
  if (!props.disabled && !state.isUploaded) {
    fileInput.value.value = null;
    fileInput.value.click();
  }
}

function onChange(e) {
  const rawFiles = Array.from(e.target.files);
  uploadFiles(rawFiles);
}

function uploadFiles(rawFiles) {
  // 上传数量限制
  startUpload(rawFiles);
}

function startUpload(rawFiles) {
  const { chuncked, beforeUpload } = props;

  rawFiles.forEach((rawFile) => {
    const file = normalizeFile(rawFile);
    if (!beforeUpload || beforeUpload(file)) {
      // 是否分片上传
      if (chuncked) {
        uploadChunks(file);
      } else {
        uploadSingle(file);
      }
    }
    state.files.push(file);
  });
}

function normalizeFile(rawFile) {
  return {
    name: rawFile.name, // 文件名
    size: rawFile.size, // 文件大小
    type: rawFile.type, // 文件类型
    percent: 0, // 上传进度
    uid: Date.now() + state.tempIndex++, // 唯一标识
    status: 'init', // value list: init pending success failure
    raw: rawFile // 原生文件对象
  };
}

function uploadChunks(file) {
  const { uid, raw } = file;
  const { url, name, data, headers, withCredentials } = props;
  let chunks = createChunks(raw);
  const options = {
    url,
    data: {
      ...data,
      chunks: chunks.length,
      uid: uid
    },
    name,
    headers,
    withCredentials,
    onSuccess: handleSuccess.bind(null, file),
    onError: handleError.bind(null, file),
    onProgress: handleProgress.bind(null, file)
  };

  file.status = 'pending';

  // 分片上传
  chunks.map((chunk, index) => {
    options.data['chunk'] = index + 1;
    options[name] = chunk;
    request(options);
    onChangeFile(file);
    emit('change', file, state.files);
  });
}

function createChunks(file) {
  const { chunckSize } = props;
  const { size, uid, name } = file;
  let current = 0;
  let chunks = [];
  let chunkSize = chunckSize;
  while (current < size) {
    let end = Math.min(current + chunkSize, size);
    let chunk = file.slice(current, end);
    chunk.name = `${name}.${uid}.${current}`;
    chunks.push(chunk);
    current = end;
  }
  return chunks;
}

/**
 * 上传整个文件
 * @param {*} file
 */
function uploadSingle(file) {
  const { url, name, data, headers, withCredentials } = props;
  const { uid, raw } = file;
  const options = {
    url,
    name,
    file: raw,
    data,
    headers,
    withCredentials,
    onSuccess: handleSuccess.bind(null, file),
    onError: handleError.bind(null, file),
    onProgress: handleProgress.bind(null, file)
  };

  file.status = 'pending';
  onChangeFile(file);
  emit('change', file, state.files);
  const req = request(options);
  state.reqs[uid] = req;
}

function handleSuccess(file, response) {
  const { chuncked } = props;

  if (chuncked) {
  } else {
    file.status = 'success';
    file.response = response;
    file.url = response.data;
    // this.$set(file, 'response', response);
    // this.$set(file, 'url', response.data);
  }
  onChangeFile(file);
  emit('change', file, state.files);
}

/**
 * 更新文件状态
 * @param {*} file
 */
function onChangeFile(file) {
  state.files = state.files.map((item) => {
    if (file.uid === item.uid) {
      item.status = file.status;
      item.percent = file.percent;
    }
    return item;
  });
}

function handleProgress(file, event) {
  file.percent = event.percent;
  onChangeFile(file);
  emit('change', file, state.files);
}

function handleError(file, event) {
  file.status = 'failure';
  onChangeFile(file);
  emit('change', file, state.files);
}

function onDelete(file) {
  const index = state.files.indexOf(file);
  state.files.splice(index, 1);
  abort(file);

  props.remove(file);
  fileInput.value.value = '';
  state.isUploaded = false;
}

function abort(file) {
  const { uid } = file;
  if (state.reqs[uid]) {
    state.reqs[uid].abort();
    delete state.reqs[uid];
  }
}

watch(
  () => props.fileList,
  (fileList) => {
    if (fileList.length > 0) {
      updateFiles(fileList);
    }
  },
  { immediate: true }
);

watch(
  () => props.defaultFileList,
  (defaultFileList) => {
    if (defaultFileList.length > 0) {
      updateFiles(defaultFileList);
    }
  },
  { immediate: true }
);

onBeforeUnmount(() => {
  state.files.forEach((file) => {
    if (file.url && file.url.indexOf('blob:') === 0) {
      URL.revokeObjectURL(file.url);
    }
  });
});
</script>

<style lang="scss" scoped>
.w-uploader {
  position: relative;

  .w-uploader-input {
    display: none;
    z-index: -1;
    opacity: 0;
    filter: alpha(opacity=0);
  }

  .w-uploader-trigger {
    display: inline-block;
    margin: 0;
    padding: 0;
    font-size: 14px;
    line-height: 1.5;
    outline: 0;
    box-sizing: border-box;

    &.w-disabled .w-btn {
      background: #eee;
      cursor: not-allowed;
    }
  }

  .w-uploader-tips {
    display: block;
    margin-top: 12px;
    font-size: 12px;
    color: #aaa;
  }
}
</style>
