<template>
  <div class="bg-gray-100 shadow-xl aspect-w-1 aspect-h-1">
    <img :src="imageUrl" :alt="sheet.attributes.Name" loading="lazy" />
  </div>
</template>

<script setup>
const props = defineProps({
  sheet: Object
});

const config = useRuntimeConfig();
const imageUrl = computed(() => {
  return `${config.API_URL}${props.sheet.attributes.Preview.data[0].attributes.formats.medium.url}`
});
</script>