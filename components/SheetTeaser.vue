<template>
  <article>
    <nuxt-link :to="`/sheets/${sheet.id}`" class="group">
      <SheetPreview
        :sheet="sheet"
        class="mb-6 transition-transform transform group-hover:scale-105"
      />
      <Heading tag="h3" font-style="h4">{{ sheet.attributes.Name }}</Heading>
      <p class="text-lg text-brand-grey-400">£{{ sheet.attributes.Price }}</p>
    </nuxt-link>
  </article>
</template>

<script setup>
const props = defineProps({
  sheet: Object
});
</script>