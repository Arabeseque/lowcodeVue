<script setup lang='ts'>
import { useMain } from '../../../store/main'

const props = defineProps({
  index: { type: Number, required: true },
  id: String,
})
const main = useMain()

const pointStyle = computed(() => {
  if (main.acIdx.includes(props.index))
    return 'point_active'
})
</script>

<template>
  <div :class="pointStyle">
    <template
      v-if="main.acIdx.length === 1 && main.acIdx.includes(props.index)"
    >
      <div class="point_item point_left_top" @mousedown="main.changeMoveIndex(1)" />
      <div class="point_item point_left_center" @mousedown="main.changeMoveIndex(2)" />
      <div class="point_item point_left_buttom" @mousedown="main.changeMoveIndex(3)" />
      <div class="point_item point_center_top" @mousedown="main.changeMoveIndex(4)" />
      <div class="point_item point_center_buttom" @mousedown="main.changeMoveIndex(5)" />
      <div class="point_item point_right_top" @mousedown="main.changeMoveIndex(6)" />
      <div class="point_item point_right_center" @mousedown="main.changeMoveIndex(7)" />
      <div class="point_item point_right_buttom" @mousedown="main.changeMoveIndex(8)" />
    </template>
    <slot />
  </div>
</template>

<style lang="less" scoped>
.point_active {
  cursor: grab;
  &::after {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    border: 1px solid #2970f6;
  }
  &:active {
    cursor: grabbing;
  }
}
.point_item {
  width: 6px;
  height: 6px;
  border: 1px solid #2970f6;
  background-color: #fff;
  position: absolute;
  z-index: 1000;
  margin-left: -3px;
  margin-top: -3px;
}
.point_left_top {
  cursor: nw-resize;
  top: 0%;
  left: 0%;
}
.point_left_center {
  cursor: w-resize;
  top: 50%;
  left: 0%;
}
.point_left_buttom {
  cursor: sw-resize;
  top: 100%;
  left: 0%;
}
.point_center_top {
  cursor: n-resize;
  top: 0%;
  left: 50%;
}
.point_center_buttom {
  cursor: s-resize;
  top: 100%;
  left: 50%;
}
.point_right_top {
  cursor: ne-resize;
  top: 0%;
  left: 100%;
}
.point_right_center {
  cursor: e-resize;
  top: 50%;
  left: 100%;
}
.point_right_buttom {
  cursor: se-resize;
  top: 100%;
  left: 100%;
}
</style>

