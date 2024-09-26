<script setup>
  const productName = useRoute().params.name;

  const { products } = useProducts();
  const product = products.find((p) => p.title === productName);
</script>

<template>
  <div>
    <ProductDetail :productTitle="product.title" :productImage="`${product.image}`" :priceNow="product.priceNow" :productDescription="product.description" />
    <Subscribe />
  </div>
</template>
