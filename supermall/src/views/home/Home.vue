<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners = "banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control :titles="titles" :class="tab-control" />
    
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import HomeSwiper from './childcomps/HomeSwiper'
  import RecommendView from './childcomps/RecommendView'
  import FeatureView from './childcomps/FeatureView.vue'
  import TabControl from 'components/content/tabcontrol/TabControl'

  import { getHomeMultidata, getHomeGoods } from 'network/home.js'

  export default {
    name: 'Home',
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
    },
    data() {
      return {
        // result: null,
        banners: [],
        recommends: [],
        titles: ['流行', '新款', '精选'],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
        },
      }
    },
    created() {
      //1.请求多个数据
      this.getHomeMultidata();
      //2.请求商品数据
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
    },
    methods: {
      //1.请求多个数据
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          // this.result = res;
          //console.log(res);
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      //2.请求商品数据
      getHomeGoods(type) {
        const page = this.goods[type].page + 1;
        getHomeGoods(type, page).then(res => {
          console.log(res);
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
        });
      }
      
    }
  }
</script>

<style scoped>
  #home {
    padding-top: 44px;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 9;
  }
  .tab-control {
    position: sticky;
    top: 44px;
  }
</style>
