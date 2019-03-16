<template>
  <div class="menu">
    <div class="s-view">
      <div class="menu-box">
        <scroll-view
         scroll-y
         class="menu-class"
        >
          <ul>
            <li
             v-for="(item, index) in goods"
             :key="index"
             @click="selectClass(index)"
             class="menu-item"
            >
              <img :src="item.icon" alt="icon" class="menu-icon">
              <div>{{ item.name }}</div>
            </li>
          </ul>
        </scroll-view>
        <scroll-view
         scroll-y
         class="menu-list-sv"
        >
          <ul class="menu-list">
            <li
             v-for="(item, index) in goods[selectMenu].foods"
             :key="index"
             class="food-item"
            >
              <div class="food-icon-box">
                <img :src="item.icon" alt="foodicon" class="food-icon">
              </div>
                <div class="food-content">
                  <div class="food-name">{{ item.name }}</div>
                  <div class="food-price">{{ item.price }}{{ item.currency}}/{{ item.unit }}</div>
                </div>
            </li>
          </ul>
        </scroll-view>
      </div>
    </div>
  </div>
</template>
<script>
import goodsjson from 'static/mock/goods.json'
export default {
  data() {
    return {
      selectMenu: 0,
      goods: []
    }
  },
  methods: {
    selectClass(index) {
      this.selectMenu = index
    }
  },
  created() {
    this.goods = goodsjson.data
    console.log(this.goods)
  }
}
</script>
<style
 lang="scss"
 scoped
>
.menu {
  .s-view {}
}

.menu-box {
  display: flex;
  background: red;

  .menu-class {
    position: absolute;
    top: 165px;
    bottom: 45px;
    width: 80px;
    background: #dbdbdd;

    .menu-item {
      width: 80px;
      height: 90px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      .menu-icon {
        width: 38px;
        height: 38px;
      }
    }
  }

  .menu-list-sv {
    position: absolute;
    top: 165px;
    left: 80px;
    right: 0;
    bottom: 45px;
    width: 100%;
    .menu-list {
      background: #f2f2f2;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      .food-item {
        display: flex;
        width: 275px;
        height: 145px;
        margin-left:-80px;  // ??
        justify-content: space-between;
        align-items: center;
        background: #ffffff;

        .food-icon {
          width: 122px;
          height: 122px;
        }
      }
    }
  }
}

</style>
