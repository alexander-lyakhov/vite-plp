<template>
  <div class="grid">
    <div class="grid-cell" v-for="(cart, index) in products" :key="index">
      <slot v-bind="cart" />
    </div>
  </div>
</template>

<script setup lang="ts">
  // @@@ @js@
  import type { Cart } from '@/components/plp-cart.vue';

  const props = defineProps<{
    products: Cart[];
  }>();
</script>

<style lang="scss" scoped>
/* @@@ @SCSS@ */

.grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 80px;

  .grid-cell {
    min-width: 20%;
  }
}
@media screen and (max-width: 1600px) {
  .grid .grid-cell {
    min-width: 25%;
  }
}

@media screen and (max-width: 1280px) {
  .grid .grid-cell {
    min-width: 33.33%;
  }
}

@media screen and (max-width: 930px) {
  .grid .grid-cell {
    min-width: 50%;
  }
}
</style>
