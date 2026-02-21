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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  justify-content: center;
  padding-top: 80px;

  .grid-cell {
    min-width: 20%;
  }
}
</style>
