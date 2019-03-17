<template>
  <div class="pay-panel">
    <div class="pay-title">请选择支付方式</div>
    <div class="pay-content">
      <radio-group class="radio-group">
        <label
         class="radio-item"
         v-for="(pay, index) in payList"
         :key="pay.id"
        >
          <div class="pay-item">
            <i v-if="pay.type==='member'" :class="{'iconfont icon-ly_huiyuanka' : pay.type==='member'}" class="pay-icon"></i>
            <i v-if="pay.type==='wxpay'" :class="{'iconfont icon-weixin' : pay.type==='wxpay'}" class="pay-icon"></i>
            <div class="pay-text">
              <span>{{pay.name}}</span>
              <span v-show="pay.type==='member'">￥{{ getXmember.memberSum }}</span></div>
            <radio
             :value="pay.id"
             :checked="pay.checked"
             class="radio-bottom"
            />
          </div>
          <ul
           v-show="pay.member"
           class="member-sales"
          >
            <li
             v-for="(item, indexC) in pay.member"
             :key="item.id"
             class="sales-item"
            >
              <div class="text">{{ item.title }}</div>
              <div class="des">{{ item.des }}</div>
            </li>
          </ul>
        </label>
      </radio-group>
    </div>
  </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import payJson from 'static/mock/pay.json'
export default {
  data() {
    return {
      payList: payJson.data.payList
    }
  },
  computed: {
    ...mapGetters([
      'getXmember'
    ])
  }
}
</script>
<style
 lang="scss"
 scoped
>
.pay-panel {
  margin-top: 9px;
  background: #ffffff;
  font-size: 16px;

  .pay-title {
    padding: 10px 0;
    margin-left: 19px;
    border-bottom: 1px solid #e6e6e8;
  }

  .pay-content {
    .radio-group {
      .radio-item {
        padding: 10px 28px;
        display: flex;
        flex-direction: column;

        .pay-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;

          .pay-icon {
            font-size: 40px;
          }

          .pay-text {
            flex: 1;
            margin-left: 20px;
          }

          .radio-bottom {}
        }

        .member-sales {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 10px;

          .sales-item {
            border: 2px solid #2d556d;
            width: 95px;
            height: 65px;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: #a3a6b3;
            font-size: 15px;

            .des {
              color: #ad423f;
              font-size: 13px;
            }
          }
        }
      }
    }
  }
}

</style>
