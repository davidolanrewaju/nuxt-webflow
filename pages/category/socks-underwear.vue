<script setup>
  import { useProducts } from '~/composables/useProducts';

  const { products } = useProducts();

  const accessories = products.filter((product) => product.category === 'accessories');
</script>

<template>
  <div>
    <PageHeader title="Socks & Underwear" />
    <div>
      <div class="w-dyn-list">
        <div role="list" class="w-dyn-items w-row">
          <ProductCard v-for="(accessory, index) in accessories" :key="index" :productLink="accessory.link" :productTitle="accessory.title" :productImage="accessory.image" :priceNow="accessory.priceNow" :priceWas="accessory.priceWas" />
        </div>
        <div class="w-dyn-empty" v-if="!accessories.length">
          <div>No items found.</div>
        </div>
      </div>
    </div>
    <Subscribe />
  </div>
</template>
