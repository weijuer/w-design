<template>
  <div class="w-pagination">
    <ul class="w-pagination-list">
      <li class="w-pagination-item" v-if="pageCount > 1">
        <a class="w-pagination-link" href="javascript:;" @click="changePage(1)">首页</a>
      </li>
      <li class="w-pagination-item" v-if="pageCount > 1">
        <a class="w-pagination-link" href="javascript:;" @click="changePage(page - 1)">上一页</a>
      </li>
      <li
        class="w-pagination-item"
        v-for="page in pages"
        :class="{ 'w-pagination-item-active': page == currentPage }"
      >
        <a class="w-pagination-link" href="javascript:;" @click="changePage(page)">{{ page }}</a>
      </li>
      <li class="w-pagination-item" v-if="pageCount > 1">
        <a class="w-pagination-link" href="javascript:;" @click="changePage(page + 1)">下一页</a>
      </li>
      <li class="w-pagination-item" v-if="pageCount > 1">
        <a class="w-pagination-link" href="javascript:;" @click="changePage(pageCount)">尾页</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  pageCount: {
    type: Number,
    default: 1
  },
  currentPage: {
    type: Number,
    default: 1
  },
  pageSize: {
    type: Number,
    default: 10
  }
});

const emit = defineEmits(['changePage']);

const changePage = (page) => {
  if (page < 1) {
    page = 1;
  }
  if (page > props.pageCount) {
    page = props.pageCount;
  }
  emit('changePage', page);
};
</script>


<style lang="stylus">
.w-pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

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

      &.w-pagination-item-active {
        color: #fff;
        background-color: #1890ff;
        border-color: #1890ff;
      }
    }

    .w-pagination-link {
      display: inline-block;
      padding: 0 15px;
      height: 32px;
      line-height: 32px;
      color: #666;
      background-color: #fff;
      border: 1px solid #d9d9d9;
      border-radius: 4px;
      margin-right: 8px;
      font-size: 14px;
      text-decoration: none;
    }
  }
}
</style>