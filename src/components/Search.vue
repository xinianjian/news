<template>
  <aside class="search flex items-center content-between">
    <em class="title">发现</em>
    <input v-model="content" type="text" class="input flex-a" />
    <button
      @click="search"
      class="icon">
    </button>
  </aside>
</template>

<script>
"use strict";
export default {
  name: "Search",
  data () {
    return {
      content: ''
    }
  },
  methods: {
    search () {
      this.$router.push({
        path: '/search',
        query: {
          content: this.content
        }
      })
    }
  }
};
</script>

<style scoped lang="stylus">
.search
  box-sizing border-box
  position relative
  padding 0 2.2rem
  height 5rem
  color red
  .title
    color #222222
    font-size 2.4rem
  .input
    padding 0 3.5rem 0 1rem
    height 2rem
    font-size 1.6rem
  .icon
    position absolute
    right 2.2rem
    width 3rem
    height 3rem
    background url("~@/common/icon/icon-search.png") no-repeat center
    background-size 2.5rem 2.5rem
</style>
