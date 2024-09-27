<template>
  <div data-node-type="commerce-cart-container-wrapper" class="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-rightSidebar cart-wrapper">
    <div data-node-type="commerce-cart-container" role="dialog" class="w-commerce-commercecartcontainer cart-container">
      <div class="w-commerce-commercecartheader cart-header">
        <h4 class="w-commerce-commercecartheading">Your Cart</h4>
        <a @click="$emit('close')" data-node-type="commerce-cart-close-link" class="w-commerce-commercecartcloselink w-inline-block" role="button" aria-label="Close cart"
          ><svg width="16px" height="16px" viewBox="0 0 16 16">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g fill-rule="nonzero" fill="#333333">
                <polygon points="6.23223305 8 0.616116524 13.6161165 2.38388348 15.3838835 8 9.76776695 13.6161165 15.3838835 15.3838835 13.6161165 9.76776695 8 15.3838835 2.38388348 13.6161165 0.616116524 8 6.23223305 2.38388348 0.616116524 0.616116524 2.38388348 6.23223305 8"></polygon>
              </g>
            </g></svg
        ></a>
      </div>
      <div class="w-commerce-commercecartformwrapper">
        <CartList />
        <CartError />
      </div>
    </div>
  </div>
</template>
