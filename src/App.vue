<template>
  <div>
    <plp-header
      :total-products="totalProducts"
      :total-price="totalPrice"
    />

    <plp-grid :products="products" v-slot="cart">
      <plp-cart
        :cart="cart"
        @cart-update="onCartUpdate"
        @cart-reset="onCartReset"
      />
    </plp-grid>
  </div>
</template>

<script setup lang="ts">
  // @@@ @js@
  import { ref }   from 'vue';
  import PlpHeader from '@/components/plp-header.vue';
  import PlpGrid   from '@/components/plp-grid.vue';
  import PlpCart   from '@/components/plp-cart.vue';
  import products  from '@/store/data.json';

  const totalProducts = ref<number>(0);
  const totalPrice    = ref<number>(0);

  function onCartUpdate(price: number) {
    if (price > 0) {
      totalProducts.value++;
    }
    else {
      totalProducts.value--;
    }
    totalPrice.value += +price;
  }

  function onCartReset(quantity: number, price: number) {
    totalProducts.value -= quantity;
    totalPrice.value -= price;
  }
</script>
