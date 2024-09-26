<template>
  <div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav">
    <a href="index.html" aria-current="page" class="brand w-nav-brand w--current">
      <h1 class="logo">MDLR</h1>
      <h2 class="logo subhead">Online Store</h2>
    </a>
    <nav role="navigation" class="nav-menu w-nav-menu">
      <a href="index.html" aria-current="page" class="nav-link w-nav-link w--current">Home</a>
      <a href="https://mdlr-shop.webflow.io/category/tops" class="nav-link w-nav-link">Tops</a>
      <a href="https://mdlr-shop.webflow.io/category/bottoms" class="nav-link w-nav-link">Bottoms</a>
      <a href="https://mdlr-shop.webflow.io/category/socks-underwear" class="nav-link w-nav-link">Accessories</a>
      <a href="#" class="nav-link w-nav-link">Contact</a>
    </nav>
    <div data-node-type="commerce-cart-wrapper" data-open-product="" data-wf-cart-type="rightSidebar" data-wf-cart-query="" data-wf-page-link-href-prefix="" class="w-commerce-commercecartwrapper cart-2">
      <a href="#" data-node-type="commerce-cart-open-link" class="w-commerce-commercecartopenlink cart-button w-inline-block" role="button" aria-haspopup="dialog" aria-label="Open cart"
        ><img src="/images/bx-cart.svg" alt="" />
        <div class="w-commerce-commercecartopenlinkcount cart-quantity">0</div>
      </a>
      <CartInfo />
    </div>
    <div class="menu-button w-nav-button" aria-label="menu" role="button" tabindex="0" aria-controls="w-nav-overlay-0" aria-haspopup="menu" aria-expanded="false">
      <img src="/images/bx-menu-alt-right.svg" alt="" />
    </div>
    <div class="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0"></div>
  </div>
</template>
