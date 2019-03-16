<template>
    <swiper class="swiper-box">
      <swiper-item
       v-for="item in swiperList"
       :key="item.id"
      >
        <img :src="item.img" alt="swiperImg" class="swiper-img">
        <div class="swiper-content">
          <div>{{item.title}}</div>
          <div>{{item.des}}</div>
        </div>
      </swiper-item>
    </swiper>
</template>
<script>
export default {
  data() {
    return {
      swiperList: [{
        id: '01',
        img: require('common/images/swiper01.jpg'),
        title: '399积分',
        des: '黑咖啡'
      }]
    }
  }
}
</script>
<style
 lang="scss"
 scoped
>
.swiper-box {
  height: 125px;
   position: relative;
  .swiper-img {
    width: 100%;
  }

  .swiper-content {
    color: #FFF;
    position: absolute;
    right: 15px;
    top: 20px;
  }
}

</style>
