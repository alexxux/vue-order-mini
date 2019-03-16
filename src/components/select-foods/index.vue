<template>
  <div class="select-foods">
    <div class="select-box box">
      <div class="select-title">已选菜品：共{{ getXcartcount }}份</div>
      <ul class="select-list">
        <li
         v-for="(food, index) in getXcartfoods"
         :key="index"
         class="food-item"
        >
          <span>{{food.name}} X {{ food.count }}</span>
          <span>￥{{ food.count * food.price}}</span>
        </li>
      </ul>
    </div>
    <div class="recommend-box box">
      <div class="recommend-title">超值搭配</div>
      <ul class="recommend-list">
        <li
         v-for="(item, index) in getXrecommend"
         :key="index"
         class="recommend-item"
        >
          <img :src="item.icon" class="item-icon">
          <div class="item-content">
            <div class="item-name">
              {{ item.name }}
            </div>
            <div class="item-price">
              ￥{{item.price}}
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="member-box box">
      <div class="member-text">
        <span>会员优惠券</span>
        <div v-if="coupon.couponCount>0" class="coupon-count">
          {{ coupon.couponCount }}张可用
          <span class="iconfont icon-arrow-right"></span>
        </div>
        <div v-if="coupon.couponCount<1" class="coupon-count">
          无可用优惠券
          <span class="iconfont icon-arrow-right"></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      coupon: {}
    }
  },
  computed: {
    ...mapGetters([
      'getXcartfoods',
      'getXcartcount',
      'getXrecommend',
      'getXmember'
    ])
  },
  created() {
    this.coupon = this.getXmember.memberCoupon
  }
}
</script>
<style
 lang="scss"
 scoped
>
.box {
  margin-top: 9px;
}

.select-foods {
  .select-box {
    background: #ffffff;
    font-size: 16px;

    .select-title {
      padding: 10px 0;
      margin-left: 19px;
      border-bottom: 1px solid #e6e6e8;
    }

    .select-list {
      .food-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 28px;
      }
    }
  }

  .recommend-box {
    background: #ffffff;
    font-size: 16px;

    .recommend-title {
      padding: 10px 0;
      margin-left: 19px;
      border-bottom: 1px solid #e6e6e8;
    }

    .recommend-list {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin: 10px 15px;

      .recommend-item {
        font-size: 14px;
        margin-bottom: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .item-icon {
          width: 70px;
          height: 70px;
        }

        .item-content {
          text-align: center;
        }
      }
    }
  }

  .member-box {
    background: #ffffff;
    .member-text {
    padding: 10px 0;
    margin-left: 19px;
      display: flex;
      justify-content: space-between;
      .coupon-count {
        margin-right:19px;
        color: #ae423f;
      }
    }
  }
}

</style>
