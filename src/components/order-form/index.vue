<template>
  <div class="order-form">
    <div class="people">
      <div class="people-text">用餐人数</div>
      <div class="people-control">
        <div
         class="people-decrease iconfont icon-jianhao"
         @click.stop.prevent="decreasePeople"
        >
        </div>
        <div class="people-count">{{peopleCount}}</div>
        <div
         class="people-add iconfont icon-jiahao"
         @click.stop.prevent="addPeople"
        ></div>
      </div>
    </div>
    <select-foods></select-foods>
  </div>
</template>
<script>
import selectFoods from 'components/select-foods'
export default {
  data() {
    return {
      peopleCount: 1
    }
  },
  methods: {
    addPeople() {
      this.peopleCount++
    },
    decreasePeople() {
      if (this.peopleCount > 1) {
        this.peopleCount--
      } else {
        wx.showToast({
          title: '最低人数为1',
          icon: 'none',
          duration: 2000
        })
      }
    }
  },
  components: {
    selectFoods
  }
}
</script>
<style
 lang="scss"
 scoped
>
.order-form {
  background: #e6e6e8;
  position: absolute;
  top: 40px;
  bottom: 45px;
  left:0;
  right:0;
  .people {
    display: flex;
    font-size: 16px;
    justify-content: space-between;
    align-items: center;
    height: 38px;
    background: #ffffff;
    margin-top: 9px;
    .people-text {
      margin-left: 20px;
    }
    .people-control {
      display: flex;
      margin-right: 25px;
      .people-count {
        margin: 0 8px;
      }
    }
  }
}
</style>
