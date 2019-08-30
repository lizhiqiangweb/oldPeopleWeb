<!--  -->
<template>
<div class="homeFindContent">
  <div class="contentTop">
    <p>老年公寓>老年公寓的寻找方式><span>长沙普亲老年养护院</span></p>
  </div>
  <div class="content" v-for="(item, homeFindContentIndex) in dataList" :key="homeFindContentIndex">
    <div class="contentDis">
      <h3>机构简介及基本信息</h3>
      <div class="dis">
        <div class="disLeft">
          <p v-for="(item1, disContentIndex) in item.disContent" :key="disContentIndex">{{item1}}</p>
        </div>
        <div class="disRight">
          <img src="item.imgUrl" alt="">
        </div>
      </div>
    </div>

    <div class="tabList">
      <h3>温馨环境展示</h3>
      <div class="tabItem">
        <ul>
          <li v-for="(item2, tabListIndex) in item.tabList" :key="tabListIndex">{{item2.tit}}</li>
        </ul>
        <div class="tabImgList">
          <div class="imgListItem" v-for="(item3, imgListItemIndex) in item.tabList" :key="imgListItemIndex">
            <img v-for="(item4, index) in item3.imgList" :key="index" :src="item4" alt="">
            <div class="imgLeft"></div>
            <div class="imgRight"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="address">
      <h3>{{item.addressTit}}</h3>
      <div class="addressLeft">
        <h3>{{item.tit}}</h3>
        <p>{{item.addressDis}}</p>
      </div>
      <div class="addressRight">
        <img :src="item.addressImgUrl" alt="">
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      dataList: [{
        disContent: [
          '普亲先锋社区老年养护中心是长沙市岳麓区唯一一家特长专注为生活不能自理、半自理、失智老人提供专业护理的正规养老机构。',
          '养护中心位于长沙市岳麓区西湖街道先锋社区综合服务中心，北临咸嘉湖路，南邻枫林一路，紧挨「西湖文化公园」，建筑面积约2000平方米，拥有78张全护理床位。',
          '养护中心交通非常便利，依山傍水环境好，更重要的是扎根社区，实现了家门口养老，家属可以随时探望。'
        ],
        imgUrl: require('@/assets/img/find/img1-main.jpg'),
        tabList: [{
            tit: '周边环境',
            imgList: [
              require('@/assets/img/findContent/img1.jpg'),
              require('@/assets/img/findContent/img4.jpg'),
              require('@/assets/img/findContent/img3.jpg'),
              require('@/assets/img/findContent/img2.jpg'),
            ]
          },
          {
            tit: '公共环境',
            imgList: ''
          },
          {
            tit: '房间环境',
            imgList: ''
          },
          {
            tit: '体育娱乐',
            imgList: ''
          },
          {
            tit: '智能设备',
            imgList: ''
          }
        ],
        addressTit: '长沙普亲老年养护院 · 机构地址',
        addresssDis: [{
            tit: '机构地址',
            dis: '长沙市岳麓区西湖街道湖韵佳苑小区内先锋社区服务中心（紧挨西湖文化公园）'
          },
          {
            tit: '乘车路线',
            dis: '6、12、18、63、303、309、312、314、315、325、355、902、908区间线到“省人防办东站”下车，向西湖公园方向步行至湖韵佳苑'
          }
        ],
        addressImgUrl: require('@/assets/img/findContent/img5.jpg')
      }]
    };
  },

  components: {},

  computed: {},

  methods: {}
}
</script>
