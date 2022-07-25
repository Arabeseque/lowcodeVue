<script setup lang="ts">
const props = defineProps({
  item: {
    default: () => {},
    type: Object,
  },
})
</script>

<template>
  <button v-if="item.name === 'y-button'" class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
    <span class="relative px-5 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      button
    </span>
  </button>
  <div v-if="item.name === 'y-div'" w-20 h-10 bg-gray-200 />
  <img v-if="item.name === 'y-img'" src="https://6d61-mall-2gdgzk540aab98cd-1257324019.tcb.qcloud.la/staticImg/%E7%B4%A0%E6%9D%90.png" h-10>
  <p v-else-if="item.name === 'y-edit'">
    富文本
  </p>
  <p v-else-if="item.name === 'y-p'">
    文本
  </p>
  <yd-swiper v-else-if="item.name === 'y-swiper'" :comp-data="item" :is-mobile="false" />
</template>

