<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">
        购物街
      </div>
    </nav-bar>
    <div>
      {{ this.banner[0] }}
    </div>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import { getHomeMultidata } from 'network/home.js'

  export default {
    name: 'Home',
    components: {
      NavBar
    },
    data() {
      return {
        // result: null,
        banner: [],
        recommend: []
      }
    },
    created() {
      //1.请求多个数据
      getHomeMultidata().then(res => {
        // this.result = res;
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      })
    }
  }
</script>

<style scoped="scoped">
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
