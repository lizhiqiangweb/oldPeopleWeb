<!--  -->
<template>
<div class="Header">
  <div class="navList">
    <ul class="menu">
      <li class="menuList" v-for="(item, navIndex) in navList" :key="navIndex" @click="navCur=navIndex" :class="navCur==navIndex ? 'active':''">
        <router-link :to="{ path: item.path }">{{item.name}}</router-link>
        <div class="secondMenu" v-if="navIndex == '0'" style="display: none">
          <h3 v-if="item.content != null">{{item.name}}</h3>
          <ul>
            <li v-for="(item1, secondMenuIndex) in item.content" :key="secondMenuIndex">{{item1.title}}</li>
          </ul>
        </div>
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
          path: '/',
          content: [{
              title: '探索老年公寓',
              path: ''
            },
            {
              title: '老年公寓的寻找方式',
              path: ''
            },
            {
              title: '老人心声',
              path: ''
            },
            {
              title: '了解老年痴呆症',
              path: ''
            },
            {
              title: '了解看护保险',
              path: ''
            },
            {
              title: '了解住宅看护',
              path: ''
            }
          ]
        },
        {
          name: '老年设施',
          path: '/facilities'
        },
        {
          name: '老年人医疗',
          path: '/medical'
        },
        {
          name: '老年人看护',
          path: '/nurse'
        },
        {
          name: '老年人保险',
          path: '/insurance'
        },
        {
          name: '老年人旅游',
          path: '/tourism'
        },
        {
          name: '老年人疾病及心理健康及保健',
          path: '/healthy',
          content: [{
              title: '常见老年人疾病介绍',
              path: ''
            },
            {
              title: '老年人心理健康',
              path: ''
            }
          ]
        },
        {
          name: '老年人商城',
          path: '/shopping'
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

  // watch: {
  //   $route(to, from) {
  //     if (this.$route.path === "/activity" || "/team" || "/aboutUs") {
  //       this.bannerShow = false;
  //     }
  //     if (this.$route.path === "/" || this.$route.path === "/familyCase" || this.$route.path === "/strategy" || this.$route.path === "/share" || this.$route.path === "/strategyContent") {
  //       this.bannerShow = true;
  //     }
  //   }
  // }
}
</script>

<style lang="scss" scoped>
.Header {
  .navList {

    .menu {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      border-bottom: 2px solid #038489;
      position: relative;
      height: 100px;

      .menuList {
        margin: 40px 36px;

        .secondMenu {
          height: 300px;
          width: 1920px;
          margin: 12px 0 0 0;
          position: absolute;
          background: rgba($color: #fff, $alpha: .8);
          z-index: 999;
          left: 0;
          display: flex;
          justify-content: center;

          h3 {
            font-weight: 500;
            font-size: 18px;
            display: table-cell;
            vertical-align: middle;
          }

          h3::before {
            content: '';
            width: 34px;
            height: 2px;
            background: #038489;
            display: block;
            margin: 0 0 12px 0;
          }

          ul {
            float: left;
            margin: 24px 0;

            li {
              line-height: 4;
              display: flex;
              flex-flow: column;
              flex-wrap: wrap;
            }
          }
        }

        .secondMenu::after {
          content: '';
          width: 0;
          height: 0;
          display: block;
          clear: both;
        }

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
