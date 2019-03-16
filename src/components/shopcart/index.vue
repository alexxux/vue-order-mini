<template>
  <div class="shopcart">
    <div class="cart-count">
      {{ getXcartcount }}份
    </div>
    <div class="cart-sumpaid">
      {{ getXcartsumpaid }}元
    </div>
    <div class="cart-submit">
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
