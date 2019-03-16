<template>
  <div class="select-foods">
    <div></div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'getXcartfoods',
      'getXcartcount'
    ])
  }
}
</script>
<style
 lang="scss"
 scoped
>
</style>
