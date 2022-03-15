<template>
  <div class="relative font-body">
    <HeaderSection />
    <div class="pt-24 bg-brand-beige-300">
      <slot />
      <div 
        id="snipcart"
        data-config-modal-style="side"
        data-api-key="YjAzNmM2ZTgtZjcxMS00NzBkLTg3YzItMDJkYzlkNDg0Y2E0NjM3Nzc5NzM1NDcyNDUxMTA2" 
        hidden></div>
    </div>
    <FooterSection />
  </div>
</template>



<style scoped>
body {
  -webkit-font-smoothing: antialiased;
}
</style>