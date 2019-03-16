<template>
  <div class="shopcart">
    <div class="cart-count">
      <span v-show="getXcartcount">{{ getXcartcount }}份</span>
    </div>
    <div class="cart-sumpaid">
      <span v-show="getXcartsumpaid">{{ getXcartsumpaid }}元</span>
    </div>
    <div
     class="cart-submit"
     @click="cartSubmit"
    >
      <span>选好了
      </span>
      <i class="iconfont icon-arrow-right"></i>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'getXcartsumpaid',
      'getXcartcount'
    ])
  },
  methods: {
    cartSubmit() {
      const url = '../logs/main'
      mpvue.navigateTo({ url })
    }
  }
}
</script>
<style
 lang="scss"
 scoped
>
.shopcart {
  background: #050101;
  color: #fff;
  font-size: 16px;
  position: absolute;
  bottom: 0;
  height: 45px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .cart-count {
    text-align: center;
    width: 80px;
  }

  .cart-sumpaid {}

  .cart-submit {
    width: 110px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #dbdbdd;
    color: #050101;

  }
}

</style>
