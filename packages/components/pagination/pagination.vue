<template>
  <div class="w-pagination">
    <div class="w-pagination-info">
      <span class="w-pagination-info-text">
        共
        <span class="w-pagination-info-total">{{ total }}</span>
        条记录
      </span>
      <span class="w-pagination-info-text">
        每页显示
        <select class="w-pagination-info-select" v-model="pageSize" @change="onPageSizeChange">
          <option v-for="item in pageSizes" :value="item">{{ item }}</option>
        </select>
        条
      </span>
    </div>

    <ul class="w-pagination-list">
      <li class="w-pagination-item" v-if="total > 1">
        <a class="w-pagination-link" href="javascript:;" @click="changePage(1)">首页</a>
      </li>
      <li class="w-pagination-item" v-if="total > 1">
        <a class="w-pagination-link" href="javascript:;" @click="changePage(current - 1)">上一页</a>
      </li>
      <li
        class="w-pagination-item"
        v-for="page in pages"
        :class="{ 'w-pagination-item-active': page === current }"
      >
        <a class="w-pagination-link" href="javascript:;" @click="changePage(page)">{{ page }}</a>
      </li>
      <li class="w-pagination-item" v-if="total > 1">
        <a class="w-pagination-link" href="javascript:;" @click="changePage(current + 1)">下一页</a>
      </li>
      <li class="w-pagination-item" v-if="total > 1">
        <a class="w-pagination-link" href="javascript:;" @click="changePage(total)">尾页</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'w-pagination'
};
</script>

<script setup>
import { computed, reactive, toRefs } from 'vue';

const props = defineProps({
  total: {
    type: Number,
    default: 100
  },
  current: {
    type: Number,
    default: 1
  },
  pageSize: {
    type: Number,
    default: 10
  },
  pageSizes: {
    type: Array,
    default: []
  },
  locale: {
    type: Object,
    default: () => {
      return {
        total: '共',
        count: '条',
        perPage: '每页'
      };
    }
  }
});

const emit = defineEmits(['change', 'update:current']);

// 计算分页
const pages = computed(() => {
  const { total, current } = props;
  const totalArray = [];
  if (total <= 5) {
    for (let i = 1; i <= total; i++) {
      totalArray.push(i);
    }
  } else {
    if (current <= 3) {
      for (let i = 1; i <= 5; i++) {
        totalArray.push(i);
      }
      totalArray.push('...');
      totalArray.push(total);
    } else if (current >= total - 2) {
      totalArray.push(1);
      totalArray.push('...');
      for (let i = total - 4; i <= total; i++) {
        totalArray.push(i);
      }
    } else {
      totalArray.push(1);
      totalArray.push('...');
      for (let i = current - 2; i <= current + 2; i++) {
        totalArray.push(i);
      }
      totalArray.push('...');
      totalArray.push(total);
    }
  }
  return totalArray;
});

const onPageSizeChange = () => {
  emit('update:current', 1);
  emit('change', {
    current: 1,
    pageSize: props.pageSize
  });
};

const changePage = (page) => {
  if (page < 1) {
    page = 1;
  }
  if (page > props.total) {
    page = props.total;
  }
  emit('update:current', page);
};
</script>


<style lang="stylus">
.w-pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 40px;
  height: 40px;

  .w-pagination-list {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style: none;

    .w-pagination-item {
      display: inline-block;
      margin: 0;
      padding: 0;
      list-style: none;
      margin-right: 10px;

      .w-pagination-link {
        display: inline-block;
        margin: 0;
        padding: 0;
        list-style: none;
        color: #666;
        cursor: pointer;
        text-decoration: none;
        font-size: 14px;
        line-height: 1;
        border: 1px solid #d9d9d9;
        border-radius: 4px;
        background-color: #fff;
        padding: 5px 10px;
        transition: all 0.3s;

        &:hover {
          color: #1890ff;
          border-color: #1890ff;
          background-color: #f5f5f5;
        }
      }

      &.w-pagination-item-active {
        color: #1890ff;

        .w-pagination-link {
          color: #1890ff;
          border-color: #1890ff;
          background-color: #f5f5f5;
        }
      }
    }
  }
}
</style>