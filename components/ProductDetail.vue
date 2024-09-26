<script setup>
  import { computed } from 'vue';

  const props = defineProps({
    productTitle: {
      type: String,
      required: true,
    },
    productImage: {
      type: String,
      required: true,
    },
    priceNow: {
      type: String,
      required: true,
    },
    productDescription: {
      type: String,
      default: '',
    },
  });

  const backgroundImageStyle = computed(() => {
    return { backgroundImage: `url(${props.productImage})` };
  });
</script>

<template>
  <div class="product_section">
    <div class="product_photo" :style="backgroundImageStyle"></div>
    <div class="product_content">
      <h1 class="product_title">{{ productTitle }}</h1>
      <div class="product_price">{{ priceNow }}</div>
      <p class="product_description">{{ productDescription }}</p>
      <div>
        <form data-node-type="commerce-add-to-cart-form" class="w-commerce-commerceaddtocartform">
          <label for="quantity-54ad9a0e0a51a3aa72ae06e76b969221">Quantity</label>
          <input type="number" pattern="^[0-9]+$" inputmode="numeric" id="quantity-54ad9a0e0a51a3aa72ae06e76b969221" name="commerce-add-to-cart-quantity-input" min="1" class="w-commerce-commerceaddtocartquantityinput" value="1" />
          <input type="submit" data-node-type="commerce-add-to-cart-button" data-loading-text="Adding to cart..." aria-busy="false" aria-haspopup="dialog" class="w-commerce-commerceaddtocartbutton button" value="Add to Cart" />
        </form>
        <div style="display: none" class="w-commerce-commerceaddtocartoutofstock" tabindex="0">
          <div>This product is out of stock.</div>
        </div>
        <div data-node-type="commerce-add-to-cart-error" style="display: none" class="w-commerce-commerceaddtocarterror">
          <div
            data-node-type="commerce-add-to-cart-error"
            data-w-add-to-cart-quantity-error="Product is not available in this quantity."
            data-w-add-to-cart-general-error="Something went wrong when adding this item to the cart."
            data-w-add-to-cart-mixed-cart-error="You can't purchase another product with a subscription."
            data-w-add-to-cart-buy-now-error="Something went wrong when trying to purchase this item."
            data-w-add-to-cart-checkout-disabled-error="Checkout is disabled on this site."
            data-w-add-to-cart-select-all-options-error="Please select an option in each set."
          >
            Product is not available in this quantity.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
