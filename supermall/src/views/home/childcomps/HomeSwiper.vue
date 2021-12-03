<template>
  <swiper>
    <swiper-item v-for="item in banners" :key="item.acm">
      <a v-bind:href="item.link">
        <img v-bind:src="item.image" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'
  export default {
    name: "HomeSwiper",
    props:{
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style>
</style>
