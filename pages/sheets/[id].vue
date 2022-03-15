<template>
  <div>
    <Container class="grid grid-cols-12 gap-2 pt-32 pb-24 md:gap-12">
      <div class="col-span-12 md:col-span-6 lg:col-span-5">
        <SheetPreview :sheet="sheet.data" />
      </div>
      <div class="col-span-12 md:col-span-6 lg:col-span-7">
        <Heading tag="h2" font-style="h1">{{ sheet.data.attributes.Name }}</Heading>
        <p class="mb-6 text-2xl text-brand-grey-600">£{{ sheet.data.attributes.Price }}</p>
        <p class="pr-12 mb-6 text-brand-grey-400">{{ sheet.data.attributes.Description }}</p>

        <div class="flex items-center">
          <InputField type="number" class="mr-4" min="1" v-model="quantity" />
          <Button
            class="snipcart-add-item"
            data-item-max-quantity=1
            :data-item-url="`${config.API_URL}/api/sheets/${sheet.data.id}`"
            :data-item-id="sheet.data.id"
            :data-item-price="sheet.data.attributes.Price"
            :data-item-description="sheet.data.attributes.Description"
            :data-item-name="sheet.data.attributes.Name"
            :data-item-file-guid="sheet.data.attributes.SnipcartFileGuid"
            :data-item-image="imageUrl"
            :data-item-quantity="quantity"
            @update:modelValue="pageTitle = $event"
          >Add to basket</Button>
        </div>
      </div>
    </Container>
    <Container>
      <div class="pb-8">
        <Heading tag="h3" font-style="h3">Related products</Heading>
        <Heading tag="h2" font-style="h2">Other sick wicks</Heading>
      </div>
      <div class="grid grid-cols-2 gap-12 md:grid-cols-4">
        <SheetTeaser
          class="col-span-1"
          v-for="sheet in sheets.data"
          :key="sheet.id"
          :sheet="sheet"
        />
      </div>
      <div class="flex justify-center pt-12 pb-32">
        <Button theme="secondary">View the other sick wicks</Button>
      </div>
    </Container>
  </div>
</template>

<script setup>
const route = useRoute();
const config = useRuntimeConfig();
const quantity = ref(1);
const { data: sheets } = await useFetch(`${config.API_URL}/api/sheets?populate=*`)
const { data: sheet } = await useFetch(`${config.API_URL}/api/sheets/${route.params.id}?populate=*`)
const imageUrl = computed(() => {
  if (!sheet.value.data) {
    return null;
  }

  return `${config.API_URL}${sheet.value.data.attributes.Preview.data[0].attributes.url}`
});
</script>