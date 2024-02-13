<script lang="ts">
import { useCartStore } from '../../stores/cart'
import { mapState } from 'pinia';

import ShoopingCartItem from './ShoppingCartItem.vue';
import { useProductsStore } from '../../stores/products';
export default {
  components: { ShoopingCartItem },

  computed: {
    ...mapState(useCartStore, ['detailsCart']),
    ...mapState(useProductsStore, ['products'])
  },
}
</script>
<template>
  <div class="static-table " v-if="detailsCart.length > 0">

    <RouterLink custom to="/product" v-slot="{ navigate }">
      <button class="button-click" @click="navigate"> Ver más Productos</button>
    </RouterLink>
    <div class=" pb-6 mt-4 caja-button " >
      <ShoopingCartItem :detail="detail" v-for="detail in detailsCart" :key="detail.product.id" />

    </div>
  </div>
  <div style="  
  position:fixed;
  top: 40%;
  left: 25%;
  transform: translateY(-50%);" 
  class="text-center" v-else>
    <p class="text"> Tu carrito está vacío </p>
    <RouterLink custom to="/product" v-slot="{ navigate }">

      <button class=" mt-2 button-click" @click="navigate"> Ver Productos</button>
    </RouterLink>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Roboto+Mono:wght@300;400&display=swap');

.caja-button {
  border: 1px solid #d6d6d6
}
.button-click {
  background-color: transparent;
  font-family: Montserrat, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #1c1b1b;
  /* Centrar horizontalmente */
  line-height: 1.1em;
  /* Centrar verticalmente */
  border-bottom: #1c1b1b 1px solid
}

.text {

  background-color: transparent;
  font-family: Montserrat, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 14px;

  /* Centrar horizontalmente */
  /* Centrar verticalmente */
  color: #1c1b1b;

}
</style>