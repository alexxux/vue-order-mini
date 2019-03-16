<template>
  <div class="header">
    <div class="title">
      <div class="welcome-user">
        <span>你好!{{ username }}</span>
      </div>
      <div class="table">{{ tableinfo }}</div>
      <div class="credits-bar">积分{{ credits }}</div>
    </div>
    <swiper class="swiper-box">
      <swiper-item v-for="item in swiperList" :key="item.id">
        <img :src="item.img" alt="swiperImg" class="swiper-img">
        <div class="swiper-content">
          <div>{{item.title}}</div>
          <div>{{item.des}}</div>
        </div>
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: 'Xu',
      tableinfo: '桌号C01',
      credits: 999,
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
.header {
  .title {
    height: 40px;
    background: #050101;
    color: #fff;
    font-size: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .welcome-user {
      margin-left: 13px;
    }

    .credits-bar {
      margin-right: 13px;
      background: #fff;
      color: black;
      text-align: center;
      width: 70px;
      border-radius: 15px;
    }
  }

  .swiper-box {
    height:125px;
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
}

</style>
