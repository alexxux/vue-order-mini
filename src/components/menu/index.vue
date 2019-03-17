<template>
  <div class="menu">
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
         :class="{ activateMenu: selectMenu===index }"
        >
          <img :src="item.icon" alt="icon" class="menu-icon">
          <div class="menu-text">{{ item.name }}</div>
          <i :class="{ activateMenuLine: selectMenu===index }"></i>
        </li>
      </ul>
    </scroll-view>
    <scroll-view
     scroll-y
     class="menu-list-sv"
    >
      <ul class="menu-list">
        <li
         v-for="(food, index) in goods[selectMenu].foods"
         :key="index"
         class="food-item"
        >
          <div class="food-icon-box">
            <img :src="food.icon" alt="foodicon" class="food-icon">
          </div>
            <div class="food-content">
              <div class="food-name">{{ food.name }}</div>
              <div class="food-price">{{ food.price }}{{ food.currency}}/{{ food.unit }}</div>
              <cart-control
               @add="addFood"
               :food="food"
              ></cart-control>
            </div>
        </li>
      </ul>
    </scroll-view>
  </div>
</template>
<script>
import cartControl from 'components/cartcontrol'
import goodsjson from 'static/mock/goods.json'
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      selectMenu: 0,
      goods: []
    }
  },
  computed: {
    cartFoods() {
      let foods = []
      this.goods.forEach((good) => {
        good.foods.forEach((food) => {
          if (food.count) {
            foods.push(food)
          }
        })
      })
      return foods
    },
    cartSumpaid() {
      let sumpaid = 0
      this.goods.forEach((good) => {
        good.foods.forEach((food) => {
          if (food.count) {
            sumpaid += food.price * food.count
          }
        })
      })
      return sumpaid
    },
    cartCount() {
      let count = 0
      this.goods.forEach((good) => {
        good.foods.forEach((food) => {
          if (food.count) {
            count += food.count
          }
        })
      })
      return count
    }
  },
  methods: {
    selectClass(index) {
      this.selectMenu = index
    },
    ...mapMutations([
      'set_xcartfoods',
      'set_xcartsumpaid',
      'set_xcartcount'
    ])
  },
  created() {
    this.goods = goodsjson.data
  },
  components: {
    cartControl
  },
  watch: {
    cartFoods(newData) {
      this.$store.commit('set_xcartfoods', newData)
    },
    cartSumpaid(newData) {
      this.$store.commit('set_xcartsumpaid', newData)
    },
    cartCount(newData) {
      this.$store.commit('set_xcartcount', newData)
    }
  }
}
</script>
<style
 lang="scss"
 scoped
>
.menu {
  display: flex;
  position: absolute;
  top: 165px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;

  .menu-class {
    position: absolute;
    top: 0;
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

      .menu-text {
        margin-top: 5px;
        font-size: 14px;
      }
    }
  }

  .menu-list-sv {
    position: absolute;
    top: 0;
    left: 80px;
    right: 0;
    bottom: 45px;
    background: #f2f2f2;

    .menu-list {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .food-item {
        display: flex;
        width: 275px;
        height: 145px;
        margin: 6px 0;
        margin-left: -80px; // ??
        justify-content: space-between;
        align-items: center;
        background: #fff;

        .food-icon {
          width: 122px;
          height: 122px;
          padding: 10px;
        }

        .food-content {
          position: relative;
          padding-right: 20px;
          font-size: 18px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-end;
        }
      }
    }
  }
}

.activateMenu {
  background: #f2f2f2;
}

.activateMenuLine {
  border-left: 10px solid black;
  position: absolute;
  width: 80px;
  height: 90px;
}

</style>
