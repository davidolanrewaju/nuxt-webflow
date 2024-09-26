<script setup>
  import { useProducts } from '~/composables/useProducts';

  const { products } = useProducts();

  const bottoms = products.filter((product) => product.category === 'bottoms');
</script>

<template>
  <div>
    <PageHeader title="Bottoms" />
    <div>
      <div class="w-dyn-list">
        <div role="list" class="w-dyn-items w-row">
          <ProductCard v-for="(bottom, index) in bottoms" :key="index" :productLink="bottom.link" :productTitle="bottom.title" :productImage="bottom.image" :priceNow="bottom.priceNow" :priceWas="bottom.priceWas" />
        </div>
        <div class="w-dyn-empty" v-if="!bottoms.length">
          <div>No items found.</div>
        </div>
      </div>
    </div>
    <Subscribe />
  </div>
</template>
