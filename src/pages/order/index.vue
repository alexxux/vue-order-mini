<template>
  <div class="order">
    <order-header></order-header>
    <order-form :recommend="recommendData"></order-form>
    <shop-cart mode="pay"></shop-cart>
  </div>
</template>
<script>
import orderHeader from 'components/header'
import orderForm from 'components/order-form'
import shopCart from 'components/shopcart'
import recommendJson from 'static/mock/recommend.json'
import { mapMutations } from 'vuex'

export default {
  components: {
    orderHeader,
    orderForm,
    shopCart
  },
  methods: {
    ...mapMutations([
      'set_xrecommend'
    ])
  },
  created() {
    if (recommendJson.code === 0) {
      this.$store.commit('set_xrecommend', recommendJson.data)
    }
  }
}
</script>
