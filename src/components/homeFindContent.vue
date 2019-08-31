<!--  -->
<template>
<div class="homeFindContent">
  <div class="contentTop">
    <p>老年公寓>老年公寓的寻找方式><span>长沙普亲老年养护院</span></p>
  </div>
  <div class="content" v-for="(item, homeFindContentIndex) in dataList" :key="homeFindContentIndex">
    <div class="contentDis">
      <h3 style="margin: 0 auto 58px;">机构简介及基本信息</h3>
      <div class="dis">
        <div class="disLeft">
          <p v-for="(item1, disContentIndex) in item.disContent" :key="disContentIndex">{{item1}}</p>
        </div>
        <div class="disRight">
          <img :src="item.imgUrl" alt="">
        </div>
      </div>
    </div>

    <div class="tabList">
      <h3>温馨环境展示</h3>
      <div class="tabItem">
        <ul>
          <li v-for="(item2, tabListIndex) in item.tabList" :key="tabListIndex" @click="tabCur=tabListIndex" :class="tabListIndex==tabCur?'tabActive':''">{{item2.tit}}</li>
        </ul>
        <div class="tabImgList">
          <div class="imgListItem" v-for="(item3, imgListItemIndex) in item.tabList" :key="imgListItemIndex" v-show="imgListItemIndex==tabCur">
            <div class="imgLeft">
              <img v-for="(item4, imgLeftIndex) in item3.imgListLeft" :key="imgLeftIndex" :src="item4" alt="">
            </div>
            <div class="imgRight">
              <img v-for="(item5, imgRightIndex) in item3.imgListRight" :key="imgRightIndex" :src="item5" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="address">
      <h3>{{item.addressTit}}</h3>
      <div class="adressContent">
        <div class="addressLeft">
          <div class="addressLeftItem" v-for="(item6, addressLeftIndex) in item.addressDis" :key="addressLeftIndex">
            <h4>{{item6.tit}}</h4>
            <p>{{item6.dis}}</p>
          </div>
        </div>
        <div class="addressRight">
          <img :src="item.addressImgUrl" alt="">
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      tabCur: '0',
      dataList: [{
        disContent: [
          '普亲先锋社区老年养护中心是长沙市岳麓区唯一一家特长专注为生活不能自理、半自理、失智老人提供专业护理的正规养老机构。',
          '养护中心位于长沙市岳麓区西湖街道先锋社区综合服务中心，北临咸嘉湖路，南邻枫林一路，紧挨「西湖文化公园」，建筑面积约2000平方米，拥有78张全护理床位。',
          '养护中心交通非常便利，依山傍水环境好，更重要的是扎根社区，实现了家门口养老，家属可以随时探望。'
        ],
        imgUrl: require('@/assets/img/findContent/img-main.jpg'),
        tabList: [{
            tit: '周边环境',
            imgListLeft: [
              require('@/assets/img/findContent/img1.jpg'),
              require('@/assets/img/findContent/img4.jpg')
            ],
            imgListRight: [
              require('@/assets/img/findContent/img2.jpg'),
              require('@/assets/img/findContent/img3.jpg')
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
        addressDis: [{
            tit: '机构地址：',
            dis: '长沙市岳麓区西湖街道湖韵佳苑小区内先锋社区服务中心（紧挨西湖文化公园）'
          },
          {
            tit: '乘车路线：',
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

<style lang="scss" scoped>
.homeFindContent {
  width: 1200px;
  margin: 0 auto;

  h3 {
    text-align: center;
    font-weight: 500;
    font-size: 24px;
    margin: 120px auto 58px;
  }

  .contentTop {
    margin: 50px 0;

    span {
      color: #038489;
    }
  }

  .content {
    .contentDis {
      .dis {
        display: flex;
        margin: 58px 0 0 0;

        .disLeft {
          margin: 86px 24px 0 0;

          p {
            text-indent: 2em;
            line-height: 1.8;
          }
        }

        .disRight {
          box-shadow: 1px 1px 12px #999;
        }
      }
    }

    .tabList {
      .tabItem {
        ul {
          display: flex;
          margin: 0 0 14px 0;

          li {
            width: 240px;
            height: 80px;
            line-height: 80px;
            text-align: center;
            background: #d1d1d1;
            border: 1px solid #fff;
            transition: all .5s ease-in;
          }

          li:hover {
            cursor: pointer;
            background: #038489;
            color: #fff;
          }
        }

        .tabImgList {
          .imgListItem {
            display: flex;

            .imgLeft {
              img:last-child {
                margin: 12px 0 0 0;
              }

              img {
                margin-right: 7px;
              }
            }

            .imgRight {
              display: flex;

              img {
                margin: 0 5px;
              }
            }
          }
        }

      }

    }

    .address {
      margin: 0 0 120px 0;

      .adressContent {
        display: flex;

        .addressLeft {
          margin: 38px 86px 0 0;

          h4,
          p {
            color: #666;
          }

          h4 {
            margin: 22px 0 18px 0;
          }

          p {
            line-height: 1.8;
          }
        }

        .addressRight {
          box-shadow: 1px 1px 8px #aaa;
        }
      }
    }
  }
}
</style>
