<!--  -->
<template>
<div class="Header">
  <div class="navList">
    <ul>
      <li v-for="(item, navIndex) in navList" :key="navIndex" @click="navCur=navIndex" :class="navCur==navIndex ? 'active':''">
        <router-link :to="{ path: item.path }">{{item.name}}</router-link>
      </li>
    </ul>
  </div>

  <div class="swiper" v-if="bannerShow">
    <el-carousel :interval="5000" arrow="always" :height="bannerH +'px'">
      <el-carousel-item v-for="(item, swiperNum) in bannerList" :key="swiperNum">
        <img :src="item.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      navCur: '0',
      bannerShow: true,
      bannerH: 605,
      navList: [{
          name: '老年公寓',
          path: '/'
        },
        {
          name: '老年设施',
          path: '/'
        },
        {
          name: '老年人医疗',
          path: '/'
        },
        {
          name: '老年人看护',
          path: '/'
        },
        {
          name: '老年人保险',
          path: '/'
        },
        {
          name: '老年人旅游',
          path: '/'
        },
        {
          name: '老年人疾病及心理健康及保健',
          path: '/'
        },
        {
          name: '老年人商城',
          path: '/'
        }
      ],
      bannerList: [{
          id: 1,
          imgUrl: require('@/assets/img/banner1.jpg')
        },
        {
          id: 2,
          imgUrl: require('@/assets/img/banner1.jpg')
        }
      ]
    };
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {},

  watch: {
    $route(to, from) {
      if (this.$route.path === "/activity" || "/team" || "/aboutUs") {
        this.bannerShow = false;
      }
      if (this.$route.path === "/" || this.$route.path === "/familyCase" || this.$route.path === "/strategy" || this.$route.path === "/share" || this.$route.path === "/strategyContent") {
        this.bannerShow = true;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.Header {
  .navList {
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      border-bottom: 2px solid #038489;

      li {
        margin: 40px 36px;

        a {
          position: relative;
          transition: all .3s ease-in;
        }

        a::before {
          content: '';
          position: absolute;
          left: 50%;
          bottom: -12px;
          width: 100%;
          height: 2px;
          background-color: #038489;
          transform-origin: center;
          transform: translate(-50%, 0) scaleX(0);
          transition: transform 0.3s ease-in-out;
        }

      }

      .active {
        a::before {
          transform: translate(-50%, 0) scaleX(1);
        }

        a {
          color: #038489;
        }
      }
    }
  }
}
</style>
