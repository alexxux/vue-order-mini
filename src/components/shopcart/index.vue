<template>
  <div class="shopcart">
    <div class="cart-count">
      <span v-show="getXcartcount">{{ getXcartcount }}份</span>
    </div>
    <div class="cart-sumpaid">
      <span v-show="getXcartsumpaid">{{ getXcartsumpaid }}元</span>
    </div>
    <div
     class="cart-submit submit"
     @click="cartSubmit"
     v-if="mode==='preview'"
    >
      <span>选好了
      </span>
      <i class="iconfont icon-arrow-right"></i>
    </div>
    <div
     class="pay-submit submit"
     @click="paySubmit"
     v-if="mode==='pay'"
    >
      <span>去支付
      </span>
      <i class="iconfont icon-arrow-right"></i>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    mode: String
  },
  computed: {
    ...mapGetters([
      'getXcartsumpaid',
      'getXcartcount'
    ])
  },
  methods: {
    cartSubmit() {
      if (this.getXcartcount !== 0) {
        const url = '../order/main'
        mpvue.navigateTo({ url })
      } else {
        wx.showToast({
          title: '请选择菜品',
          icon: 'none',
          duration: 2000
        })
      }
    },
    paySubmit() {
      let msg = `订单金额：${this.getXcartsumpaid}元`
      wx.showToast({
        title: msg,
        icon: 'none',
        duration: 2000
      })
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

  .submit {
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
