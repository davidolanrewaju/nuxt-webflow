<script setup>
  import { useProducts } from '~/composables/useProducts';

  const { products } = useProducts();
</script>

<template>
  <div>
    <Hero />
    <About />
    <div>
      <div class="w-dyn-list">
        <div role="list" class="w-dyn-items w-row">
          <ProductCard v-for="(product, index) in products" :key="index" :productLink="product.link" :productTitle="product.title" :productImage="product.image" :priceNow="product.priceNow" :priceWas="product.priceWas" />
        </div>
        <div class="w-dyn-empty" v-if="!products.length">
          <div>No items found.</div>
        </div>
      </div>
    </div>
    <Subscribe />
  </div>
</template>
