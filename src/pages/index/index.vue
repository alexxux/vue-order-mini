<template>
  <div class="main">
    <order-header></order-header>
    <order-menu></order-menu>
    <shop-cart></shop-cart>
  </div>
</template>

<script>
import orderHeader from 'components/header'
import orderMenu from 'components/menu'
import shopCart from 'components/shopcart'
export default {
  components: {
    orderHeader,
    orderMenu,
    shopCart
  }
}
</script>

<style lang="scss" scoped>

</style>
