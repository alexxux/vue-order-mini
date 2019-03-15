<template>
  <div class="menu">
    <scroll-view
     :scroll-y="true"
     class="s-view"
    >
    
    </scroll-view>
  </div>
</template>
<script>
export default {

}
</script>
<style
 lang="scss"
 scoped
>
.menu {
  .s-view {
    background: red;
    position: absolute;
    top:165px;
    bottom: 45px;
  }
}

</style>
