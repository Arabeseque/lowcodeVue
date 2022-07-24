<script setup lang='ts'>
import SchemaJSON from './schema.json'

const schema = $ref(SchemaJSON)

console.log(schema)

const containerStyle = computed(() => {
  return {
    height: `${schema.container.width}px`,
    width: `${schema.container.width}px`,
    border: '1px solid #ccc',
    padding: '10px',
  }
})
</script>

<template>
  <div className="editor-wrapper pt-2">
    <div className="editor-header text-center pb-2">
      顶部工具栏
    </div>
    <div className="editor-main  flex items-start justify-around">
      <div className="editor-left">
        左侧物料区
      </div>
      <div className="editor-container">
        <div id="canvas-container" :style="containerStyle">
          编辑区 - 画布
        </div>
      </div>
      <div className="editor-right">
        右侧属性区
      </div>
    </div>
  </div>
</template>
