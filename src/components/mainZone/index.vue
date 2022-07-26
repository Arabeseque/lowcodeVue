<script setup lang='ts'>
import { useMain } from '../../store/main'
import { contResetCss } from '../../utils/index'
const main = useMain()

function drop(evt: any) {
  let offsetX
  let offsetY
  if (evt.target.className.includes('core_temp')) {
    offsetY = evt.offsetY
    offsetX = evt.offsetX
  }

  const name = evt.dataTransfer.getData('compIndex')
  if (name) {
    main.addComp(name, {
      top: offsetY,
      left: offsetX,
    })
  }
  evt.preventDefault()
}
// 鼠标进入
function mouseOver(evt: any, index: number) {
  main.hoverCompIndex = index
  evt.preventDefault()
}
// 鼠标离开
function mouseOut(evt: any) {
  main.hoverCompIndex = -1
  evt.preventDefault()
}
// 按下鼠标
function mouseDown(evt: any, index: number) {
  // 元素操作
  main.toggleComp(index)
  // 辅助线逻辑

  // 选中框逻辑
  evt.preventDefault()
}
</script>

<template>
  <div>编辑区</div>
  <div
    class="core_temp"
    relative
    :style="{ height: `${main.pageHeight}px`, background: main.backColor }"
    @drop="drop"
    @dragover="(evt) => evt.preventDefault()"
    @dragend="(evt) => evt.preventDefault()"
    @dragleave="(evt) => evt.preventDefault()"
  >
    <template v-for="(item, index) in main.template" :key="item.id">
      <point
        :id="item.id"
        :index="index"
        :style="{ ...contResetCss(item.cssModule), 'z-index': index }"
        @mouseover="mouseOver($event, index)"
        @mouseout="mouseOut"
        @mousedown="mouseDown($event, index)"
      >
        <comp-dom :item="item" />
      </point>
    </template>
  </div>
</template>
