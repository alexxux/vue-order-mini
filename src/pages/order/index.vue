<template>
  <div class="order">
    <order-header></order-header>
    <order-form></order-form>
    <shop-cart mode="pay"></shop-cart>
  </div>
</template>
<script>
import orderHeader from 'components/header'
import orderForm from 'components/order-form'
import shopCart from 'components/shopcart'

export default {
  components: {
    orderHeader,
    orderForm,
    shopCart
  }
}
</script>
