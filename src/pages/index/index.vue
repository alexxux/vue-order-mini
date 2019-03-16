<template>
  <div class="main">
    <order-header></order-header>
    <swiper-bar></swiper-bar>
    <order-menu></order-menu>
    <shop-cart></shop-cart>
  </div>
</template>
<script>
import orderHeader from 'components/header'
import swiperBar from 'components/swiper-bar'
import orderMenu from 'components/menu'
import shopCart from 'components/shopcart'
import memberjson from 'static/mock/member.json'
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      memberData: {}
    }
  },
  components: {
    orderHeader,
    swiperBar,
    orderMenu,
    shopCart
  },
  created() {
    if (memberjson.code === 0) {
      this.$store.commit('set_xmember', memberjson.data)
    }
  },
  methods: {
    ...mapMutations([
      'set_xmember'
    ])
  }
}
</script>
<style
 lang="scss"
 scoped
>
.main {
  overflow: hidden;
}

</style>
