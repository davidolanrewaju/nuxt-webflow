<script setup lang="ts">
  import { useCart } from '~/composables/useCart';
  import type { Product } from '~/composables/useCart';

  const { cart, subtotal } = useCart();
</script>

<template>
  <div class="w-commerce-commercecartfooter cart-footer">
    <div aria-atomic="false" class="w-commerce-commercecartlineitem cart-line-item">
      <div>Subtotal</div>
      <div class="w-commerce-commercecartordervalue">${{ subtotal }}</div>
    </div>
    <div>
      <NuxtLink to="/checkout" value="Continue to Checkout" data-node-type="cart-checkout-button" class="w-commerce-commercecartcheckoutbutton button checkoutbutton" data-loading-text="Hang Tight...">Continue to Checkout</NuxtLink>
    </div>
  </div>
</template>
