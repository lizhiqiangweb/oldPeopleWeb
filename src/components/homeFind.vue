<!--  -->
<template>
  <div class="homeFind">
    <div class="topLink">
      <p>老年公寓><span>老年公寓的寻找方式</span></p>
    </div>
    <div class="findBox">
      <div class="findItem">
        <img :src="item.imgUrl" alt="">
        <h4>{{item.tit}}</h4>
        <p class="address">地址：{{item.adress}}</p>
        <p class="phone">电话：{{item.phone}}</p>
        <p class="dis">{{item.dis}}</p>
      </div>
      <div class="btnBox">
        <button>详情</button>
        <button>咨询</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      findItemList: [
        {
          imgUrl: require('@/assets/img/find/img1-main.jpg'),
          tit: '长沙普亲老年养护院',
          address: '长沙市开福区东风路工商巷87号原湖南省电信公司长途电信线路局大楼',
          phone: '4001-181-080',
          dis: '长沙普亲老年养护院位于长沙开福区东风路下大垅工商巷87号（原为湖南电信公司长途电信线路局），面积约为8000平方，环境优美。'
        },
        {
          imgUrl: require('@/assets/img/find/img2-main.jpg'),
          tit: '长沙普亲老年养护院',
          address: '长沙市开福区东风路工商巷87号原湖南省电信公司长途电信线路局大楼',
          phone: '4001-181-080',
          dis: '长沙普亲老年养护院位于长沙开福区东风路下大垅工商巷87号（原为湖南电信公司长途电信线路局），面积约为8000平方，环境优美。'
        },
        {
          imgUrl: require('@/assets/img/find/img2-main.jpg'),
          tit: '长沙普亲老年养护院',
          address: '长沙市开福区东风路工商巷87号原湖南省电信公司长途电信线路局大楼',
          phone: '4001-181-080',
          dis: '长沙普亲老年养护院位于长沙开福区东风路下大垅工商巷87号（原为湖南电信公司长途电信线路局），面积约为8000平方，环境优美。'
        },
        {
          imgUrl: require('@/assets/img/find/img1-main.jpg'),
          tit: '长沙普亲老年养护院',
          address: '长沙市开福区东风路工商巷87号原湖南省电信公司长途电信线路局大楼',
          phone: '4001-181-080',
          dis: '长沙普亲老年养护院位于长沙开福区东风路下大垅工商巷87号（原为湖南电信公司长途电信线路局），面积约为8000平方，环境优美。'
        },
        {
          imgUrl: require('@/assets/img/find/img1-main.jpg'),
          tit: '长沙普亲老年养护院',
          address: '长沙市开福区东风路工商巷87号原湖南省电信公司长途电信线路局大楼',
          phone: '4001-181-080',
          dis: '长沙普亲老年养护院位于长沙开福区东风路下大垅工商巷87号（原为湖南电信公司长途电信线路局），面积约为8000平方，环境优美。'
        },
        {
          imgUrl: require('@/assets/img/find/img2-main.jpg'),
          tit: '长沙普亲老年养护院',
          address: '长沙市开福区东风路工商巷87号原湖南省电信公司长途电信线路局大楼',
          phone: '4001-181-080',
          dis: '长沙普亲老年养护院位于长沙开福区东风路下大垅工商巷87号（原为湖南电信公司长途电信线路局），面积约为8000平方，环境优美。'
        },
        {
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

  methods: {}
}

</script>
<style lang="scss" scoped>
.homeFind {

}
</style>