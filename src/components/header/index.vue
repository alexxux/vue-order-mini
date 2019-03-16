<template>
  <div class="header">
    <div class="title">
      <div class="welcome-user">
        <span>你好!{{ getXmember.memberName }}</span>
      </div>
      <div class="table">{{ tableinfo }}</div>
      <div class="credits-bar">积分{{ getXmember.memberCredits }}</div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      username: 'Xu',
      tableinfo: '桌号C01',
      credits: 999
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
}

</style>
