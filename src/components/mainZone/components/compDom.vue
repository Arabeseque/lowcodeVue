<script setup lang="ts">
const props = defineProps({
  item: {
    default: () => {},
    type: Object,
  },
})
</script>

<template>
  <yd-button v-if="item.name === 'y-button'" :comp-data="item" :is-mobile="false" />
  <yd-div v-if="item.name === 'y-div'" :comp-data="item" :is-mobile="false" />
  <yd-img v-if="item.name === 'y-img'" :comp-data="item" :is-mobile="false" />
  <yd-edit v-else-if="item.name === 'y-edit'" :comp-data="item" :is-mobile="false" />
  <yd-p v-else-if="item.name === 'y-p'" :comp-data="item" :is-mobile="false" />
  <yd-swiper v-else-if="item.name === 'y-swiper'" :comp-data="item" :is-mobile="false" />
</template>

