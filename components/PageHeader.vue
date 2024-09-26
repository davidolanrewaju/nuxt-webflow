<script setup>
  defineProps({
    title: {
      type: String,
      required: true,
    },
  });
</script>

<template>
  <div class="hero_checkout">
    <h1 class="largeheading">{{ title }}</h1>
  </div>
</template>
