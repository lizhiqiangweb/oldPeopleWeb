<!--  -->
<template>
<div class="homeFind">
  <div class="topLink">
    <p>老年公寓><span>老年公寓的寻找方式</span></p>
  </div>
  <div class="findBox">
    <div class="findItem" v-for="(item, findItemIndex) in findItemList.slice((currentPage-1)*pagesize,currentPage*pagesize)" :key=" findItemIndex">
      <img :src="item.imgUrl" alt="">
      <h4>{{item.tit}}</h4>
      <p class="address">地址：{{item.address}}</p>
      <p class="phone">电话：{{item.phone}}</p>
      <p class="dis">{{item.dis}}</p>
      <div class="btnBox">
        <router-link :to="{ path: '/homeFindContent', query: {house: item.id }  }">
          <button class="ck">详情</button>
        </router-link>
        <button class="zx">咨询</button>
      </div>
    </div>
  </div>
  <div class="page">
    <el-pagination :background="true" layout="prev, pager, next" :pager-count="11" :total="all" @current-change="current_change"></el-pagination>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1, //当前页码
      all: 0, //默认数据总数
      pagesize: 6, //每页的数据显示条数
      findItemList: [{
          id: 'house1',
          imgUrl: require('@/assets/img/find/img1-main.jpg'),
          tit: '长沙普亲老年养护院',
          address: '长沙市开福区东风路工商巷87号原湖南省电信公司长途电信线路局大楼',
          phone: '4001-181-080',
          dis: '长沙普亲老年养护院位于长沙开福区东风路下大垅工商巷87号（原为湖南电信公司长途电信线路局），面积约为8000平方，环境优美。'
        },
        {
          id: 'house2',
          imgUrl: require('@/assets/img/find/img2-main.jpg'),
          tit: '长沙普亲老年养护院',
          address: '长沙市开福区东风路工商巷87号原湖南省电信公司长途电信线路局大楼',
          phone: '4001-181-080',
          dis: '长沙普亲老年养护院位于长沙开福区东风路下大垅工商巷87号（原为湖南电信公司长途电信线路局），面积约为8000平方，环境优美。'
        },
        {
          id: 'house3',
          imgUrl: require('@/assets/img/find/img2-main.jpg'),
          tit: '长沙普亲老年养护院',
          address: '长沙市开福区东风路工商巷87号原湖南省电信公司长途电信线路局大楼',
          phone: '4001-181-080',
          dis: '长沙普亲老年养护院位于长沙开福区东风路下大垅工商巷87号（原为湖南电信公司长途电信线路局），面积约为8000平方，环境优美。'
        },
        {
          id: 'house4',
          imgUrl: require('@/assets/img/find/img1-main.jpg'),
          tit: '长沙普亲老年养护院',
          address: '长沙市开福区东风路工商巷87号原湖南省电信公司长途电信线路局大楼',
          phone: '4001-181-080',
          dis: '长沙普亲老年养护院位于长沙开福区东风路下大垅工商巷87号（原为湖南电信公司长途电信线路局），面积约为8000平方，环境优美。'
        },
        {
          id: 'house5',
          imgUrl: require('@/assets/img/find/img1-main.jpg'),
          tit: '长沙普亲老年养护院',
          address: '长沙市开福区东风路工商巷87号原湖南省电信公司长途电信线路局大楼',
          phone: '4001-181-080',
          dis: '长沙普亲老年养护院位于长沙开福区东风路下大垅工商巷87号（原为湖南电信公司长途电信线路局），面积约为8000平方，环境优美。'
        },
        {
          id: 'house6',
          imgUrl: require('@/assets/img/find/img2-main.jpg'),
          tit: '长沙普亲老年养护院',
          address: '长沙市开福区东风路工商巷87号原湖南省电信公司长途电信线路局大楼',
          phone: '4001-181-080',
          dis: '长沙普亲老年养护院位于长沙开福区东风路下大垅工商巷87号（原为湖南电信公司长途电信线路局），面积约为8000平方，环境优美。'
        },
        {
          id: 'house7',
          imgUrl: require('@/assets/img/find/img2-main.jpg'),
          tit: '长沙普亲老年养护院',
          address: '长沙市开福区东风路工商巷87号原湖南省电信公司长途电信线路局大楼',
          phone: '4001-181-080',
          dis: '长沙普亲老年养护院位于长沙开福区东风路下大垅工商巷87号（原为湖南电信公司长途电信线路局），面积约为8000平方，环境优美。'
        }
      ]
    };
  },

  components: {},

  computed: {},

  mounted() {
    //需要实时监测数据的变化!!!
    this.all = (this.findItemList.length) / 6 * 10;
  },

  methods: {
    current_change(currentPage) { //改变当前页
      this.currentPage = currentPage
    }
  }
}
</script>

<style lang="scss" scoped>
.homeFind {
  width: 1200px;
  margin: 0 auto;

  .topLink {
    margin: 50px 0;

    span {
      color: #038489;
    }
  }

  .findBox {
    display: flex;
    flex-wrap: wrap;

    .findItem {
      border: 1px solid #038489;
      margin: 0 26px 20px 0;
      padding: 10px 10px 22px 10px;
      box-shadow: 1px 1px 6px #aaa;

      img {
        width: 352px;
        height: 216px;
      }

      p {
        width: 352px;
        border-top: 1px solid #666;
        line-height: 1.8;
        padding: 8px 0 8px 0;
      }

      h4 {
        text-align: center;
        margin: 16px 0;
      }

      .btnBox {
        display: flex;
        justify-content: center;
        margin: 12px 0 0 0;

        .ck {
          background: #b1aca8;

        }

        .zx {
          background: #038489;
          color: #fff;
        }

        button {
          border: none;
          width: 120px;
          height: 40px;
          line-height: 40px;
          margin: 0 13px;
          border-radius: 8px;
          outline-style: none;
        }

        button:hover {
          cursor: pointer;
        }

      }
    }
  }
}
</style>
