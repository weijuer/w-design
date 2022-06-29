<template>
  <div class="uploader-example">
    <form>
      <fieldset>
        <legend>传统上传</legend>
        <w-uploader
          url="http://127.0.0.1:4000/api/upload/file"
          accept="application/zip"
          :tips="tips"
          :default-file-list="fileList"
          :before-upload="beforeUpload"
          @change="handleChange"
        >
          <w-button type="primary">
            <i class="fa fa-upload"></i>
            <span>传统上传</span>
          </w-button>
        </w-uploader>
      </fieldset>

      <fieldset>
        <legend>分片上传</legend>
        <w-uploader
          url="http://127.0.0.1:4000/api/upload/snippet"
          accept="application/zip"
          chuncked
          :tips="tips"
          :default-file-list="fileList"
          :before-upload="beforeUpload"
          @change="handleChange"
        >
          <w-button type="primary">
            <i class="fa fa-upload"></i>
            <span>分片上传</span>
          </w-button>
        </w-uploader>
      </fieldset>

      <fieldset>
        <legend>多文件、拖拽上传</legend>
        <w-uploader
          url="http://127.0.0.1:4000/api/upload/file"
          accept="application/zip"
          multiple
          drag
          :tips="tips"
          :default-file-list="fileList"
          :before-upload="beforeUpload"
          @change="handleChange"
        >
          <w-button type="primary">
            <i class="fa fa-upload"></i>
            <span>拖拽上传</span>
          </w-button>
        </w-uploader>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  name: 'uploader-example',
  data() {
    return {
      tips: '说明：文件包中包含安装包、升级包、配置文件等必须的文件',
      fileList: [
        {
          name: 'LinkdoodUpdate_V6.0.2.zip',
          size: 91109034,
          type: 'application/x-zip-compressed',
          percent: 50,
          uid: 1656398381462,
          status: 'pending',
          raw: '[object File]'
        }
      ]
    };
  },
  methods: {
    beforeUpload: function (file) {
      // 单位Mb
      var fileSize = file.size / 1024 / 1024;
      // 少于100Mb
      var isFileSizeSuccess = fileSize <= 100;

      // 文件大小检验
      if (!isFileSizeSuccess) {
        console.log('文件大小不能超过100M');
      }
      return isFileSizeSuccess;
    },
    handleChange(file, fileList) {
      if (file.status === 'success') {
        console.log(file);
        this.fileList = fileList;
      }
    }
  }
};
</script>

<style lang="scss">
.uploader-example {
  padding: 24px;
}
</style>
