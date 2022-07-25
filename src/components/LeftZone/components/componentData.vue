<script setup lang='ts'>
const baseComp = reactive([
  {
    icon: 'i-material-symbols-add-photo-alternate-outline-rounded',
    text: '图片',
    name: 'y-img',
  },
  {
    icon: 'i-material-symbols-format-color-text',
    text: '文本',
    name: 'y-p',
  },
  {
    icon: 'i-material-symbols-text-fields',
    text: '富文本',
    name: 'y-edit',
  },
  {
    icon: 'i-ion-logo-web-component',
    text: '模块',
    name: 'y-div',
  },
  {
    icon: 'i-material-symbols-radio-button-checked-outline',
    text: '按钮',
    name: 'y-button',
  },
])

// 传递name属性
function dragstart(event: DragEvent, name: string) {
  event.dataTransfer!.setData('compIndex', name)
}
</script>

<template>
  <div>Test</div>
  <div class="component_list flex flex-wrap">
    <div
      v-for="item in baseComp"
      :key="item.icon"
      class="p-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 m-1 flex flex-col justify-center items-center"
      :draggable="true"
      @dragstart="dragstart($event, item.name)"
    >
      <div :class="item.icon" />
      <span class="item_span">{{ item.text }}</span>
    </div>
  </div>
</template>
