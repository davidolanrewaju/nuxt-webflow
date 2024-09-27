<script setup>
  import { useCart } from '~/composables/useCart';

  const { cart, removeFromCart } = useCart();
</script>

<template>
  <form data-node-type="commerce-cart-form" style="" class="w-commerce-commercecartform">
    <div v-if="cart.length > 0" class="w-commerce-commercecartlist cart-list">
      <div class="w-commerce-commercecartitem cart-item" v-for="(item, index) in cart" :key="index">
        <img data-wf-bindings="" :src="`${item.image}`" alt="" class="w-commerce-commercecartitemimage image" />
        <div class="w-commerce-commercecartiteminfo div-block">
          <div data-wf-bindings="" class="w-commerce-commercecartproductname">{{ item.title }}</div>
          <div data-wf-bindings="">{{ item.price }}</div>
          <ul data-wf-bindings="" class="w-commerce-commercecartoptionlist" data-wf-collection="database.commerceOrder.userItems.0.product.f_sku_properties_3dr" data-wf-template-id="wf-template-c451091d-f7cf-9fb7-0eeb-cad6d340c58f">
            <li>
              <span data-wf-bindings="">Size</span><span>: </span>
              <span>{{ item.size.join(',') }}</span>
            </li>
          </ul>
          <a @click.prevent="removeFromCart(item.title)" role="" data-wf-bindings="" class="remove w-inline-block" data-wf-cart-action="remove-item" data-commerce-sku-id="5c7b8dc6ced3c7e13be0e8ca" aria-label="Remove item from cart"><div>Remove</div></a>
        </div>
        <input data-wf-bindings="" class="w-commerce-commercecartquantity checkout_quantity" required pattern="^[0-9]+$" inputmode="numeric" type="number" name="quantity" autocomplete="off" data-wf-cart-action="update-item-quantity" data-commerce-sku-id="" :value="`${item.quantity}`" />
      </div>
    </div>
    <div v-else class="w-commerce-commercecartemptystate">
      <div>No items found.</div>
    </div>
    <CartCheckout v-if="cart.length > 0" />
  </form>
</template>
