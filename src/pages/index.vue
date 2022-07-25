<script setup lang="ts">
import LeftZone from '../components/LeftZone/index.vue'
</script>

<template>
  <div className="editor-wrapper" bg-gray-50 h-100vh>
    <div className="editor-header p-2">
      <headerZone />
    </div>
    <div className="editor-main flex justify-between items-start">
      <div className="editor-left w-30vw">
        <LeftZone />
      </div>
      <div className="editor-container w-35vw">
        <div id="canvas-container" bg-white h-400px>
          <mainZone />
        </div>
      </div>
      <div className="editor-right w-30vw">
        右侧属性区
      </div>
    </div>
  </div>
</template>
