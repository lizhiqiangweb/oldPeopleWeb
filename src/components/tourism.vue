<!--  -->
<template>
<div class="tourism">
  <div class="tourismItem" v-for="(item, tourismItemIndex) in dataList" :key="tourismItemIndex">
    <h4>{{item.tit}}</h4>
    <div class="main">
      <div class="mainLeft">
        <img :src="item.mainImgUrl" alt="">
        <div class="dis">
          <p class="dis1">{{item.dis1}}</p>
          <p class="dis2">{{item.dis2}}</p>
        </div>
        <p class="price">¥<span>{{item.price}}</span>/人</p>
        <p class="liyou">推荐理由：</p>
        <p class="liyou" v-for="(item1, liyouIndex) in item.liyou" :key="liyouIndex">{{item1}}</p>
      </div>

      <div class="mainRight">
        <div class="placeListItem" v-for="(item2, index) in item.placeList" :key="index">
          <img :src="item2.imgUrl" alt="">
          <p class="placeDis">{{item2.dis}}</p>
          <p class="placePrice">¥<span>{{item2.price}}</span>起</p>
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
      dataList: [{
          tit: '出国游',
          mainImgUrl: require('@/assets/img/tourism/img1-main.jpg'),
          dis1: '沙巴6日5晚自由行『3晚+2晚双酒店！赠接机！』',
          dis2: '【人气爆棚/经典线路推荐】市区/海边酒店任选',
          price: '2460',
          liyou: [
            '★ 直飞/转机机票资源，满足多种需求，赠24h凌晨接机 省心度假！',
            '★ 【优势酒店】3+2晚双酒店任选，推荐3晚市区+2晚海边度假',
            '★ 旅行只为舒心~~更多一日游行程可在下一步选到，省心度假~！'
          ],
          placeList: [{
              imgUrl: require('@/assets/img/tourism/img1-1.jpg'),
              dis: '马尔代夫吉哈Kihaa7日5晚自由行『懒人计划·含全餐』',
              price: '8574'
            },
            {
              imgUrl: require('@/assets/img/tourism/img1-2.jpg'),
              dis: '日本大阪+京都2-15日自由行1晚起住·自由搭配行程！',
              price: '2059'
            },
            {
              imgUrl: require('@/assets/img/tourism/img1-3.jpg'),
              dis: '德国11日自由行『全程国际5星』【璀璨双城】',
              price: '10223'
            },
            {
              imgUrl: require('@/assets/img/tourism/img1-4.jpg'),
              dis: '泰国普吉岛7日5晚半自助游【24h管家+2天自由活动】',
              price: '2620'
            },
            {
              imgUrl: require('@/assets/img/tourism/img1-5.jpg'),
              dis: '沙巴7日5晚自由行太平洋/麦哲伦/香格里拉合集',
              price: '1961'
            },
            {
              imgUrl: require('@/assets/img/tourism/img1-6.jpg'),
              dis: '埃及开罗+卢克索+红海Red Sea+阿联酋迪拜+阿布扎比10日跟团游',
              price: '10549'
            }
          ]
        },
        {
          tit: '国内游',
          mainImgUrl: require('@/assets/img/tourism/img2-main.jpg'),
          dis1: '北京5日4晚跟团游',
          dis2: '【万人游产品 双成人立减1000元】',
          price: '1942',
          liyou: [
            '★ 【双成人立减1000元】全程精选商务型酒店，品地道京味餐，升级一顿全聚德烤鸭',
            '★ 【性价比之选】一次出游畅游皇城精华景点,帝都风貌一览到底,不留遗憾！',
            '★ 【携程官方旗舰王】获奖导游带团+24小时旅游管家+北京当地接送服务'
          ],
          placeList: [{
              imgUrl: require('@/assets/img/tourism/img2-1.jpg'),
              dis: '海南三亚5日4晚跟团游『红树林王国/180度海景/酒店任选』',
              price: '1870'
            },
            {
              imgUrl: require('@/assets/img/tourism/img2-2.jpg'),
              dis: '云南昆明+大理+丽江6日5晚跟团游【希尔顿+豪生酒店+温泉酒店】',
              price: '1600'
            },
            {
              imgUrl: require('@/assets/img/tourism/img2-3.jpg'),
              dis: '鼓浪屿+厦门4日自由行【2晚市区先住&1晚鼓浪屿】',
              price: '1124'
            },
            {
              imgUrl: require('@/assets/img/tourism/img2-4.jpg'),
              dis: '泰国普吉岛7日5晚半自助游【24h管家+2天自由活动】',
              price: '2620'
            },
            {
              imgUrl: require('@/assets/img/tourism/img2-5.jpg'),
              dis: '广西桂林+阳朔+漓江5日4晚跟团游【纯玩0自费 一价全包】',
              price: '2228'
            },
            {
              imgUrl: require('@/assets/img/tourism/img2-6.jpg'),
              dis: '重庆+成都+都江堰+峨眉山+乐山6日5晚半自助游',
              price: '1525'
            }
          ]
        },
        {
          tit: '周边游',
          mainImgUrl: require('@/assets/img/tourism/img3-main.jpg'),
          dis1: '张家界+天门山+湘西+凤凰3日2晚跟团游',
          dis2: '『网红玻璃桥+玻璃栈道+天门天眼+凤凰夜景』',
          price: '1068',
          liyou: [
            '★ 【度假首选】『自营保障品质游』赠古苗族聚集地-110元芙蓉镇+赠洗漱用品+三大湘西美食！',
            '★ 【贴心赠送】[自营敢为人先]不转不卖团，实惠的价格+高品质服务=您的选择',
            '★ 【缤纷景点】[自营自研自售]自选A线大峡谷玻璃桥orB线节省时间节省钱的晚班出发！！'
          ],
          placeList: [{
              imgUrl: require('@/assets/img/tourism/img3-1.jpg'),
              dis: '长沙+张家界+凤凰3日2晚跟团游「匠心设计精华景点全含」',
              price: '1269'
            },
            {
              imgUrl: require('@/assets/img/tourism/img3-2.jpg'),
              dis: '桂林-阳朔-兴坪漓江-象鼻山-遇龙河-银子岩-世外桃源高铁4日游',
              price: '1194'
            },
            {
              imgUrl: require('@/assets/img/tourism/img3-3.jpg'),
              dis: '张家界玻璃桥-森林公园-天门山玻璃栈道-芙蓉镇-凤凰古城汽车4日游',
              price: '1415'
            },
            {
              imgUrl: require('@/assets/img/tourism/img3-4.jpg'),
              dis: '彭德怀故居-韶山毛主席故居-南岸私塾1日游',
              price: '1503'
            }
          ]
        },
        {
          tit: '跟团游',
          mainImgUrl: require('@/assets/img/tourism/img4-main.jpg'),
          dis1: '沙巴6日5晚自由行『3晚+2晚双酒店！赠接机！』',
          dis2: '【人气爆棚/经典线路推荐】 市区/海边酒店任选',
          price: '2460',
          liyou: [
            '★ 直飞/转机机票资源，满足多种需求，赠24h凌晨接机 省心度假！',
            '★ 【优势酒店】3+2晚双酒店任选，推荐3晚市区+2晚海边度假',
            '★ 旅行只为舒心~~更多一日游行程可在下一步选到，省心度假~！'
          ],
          placeList: [{
              imgUrl: require('@/assets/img/tourism/img4-1.jpg'),
              dis: '埃及开罗+卢克索+红海Red Sea+阿联酋迪拜+阿布扎比10日跟团游',
              price: '10549'
            },
            {
              imgUrl: require('@/assets/img/tourism/img4-2.jpg'),
              dis: '海南三亚5日4晚跟团游『红树林王国/180度海景/酒店任选』',
              price: '1870'
            },
            {
              imgUrl: require('@/assets/img/tourism/img4-3.jpg'),
              dis: '贵州黄果树+荔波+西江千户苗寨+青岩古镇5日4晚跟团游',
              price: '1635'
            },
            {
              imgUrl: require('@/assets/img/tourism/img4-4.jpg'),
              dis: '广西桂林+阳朔+漓江5日4晚跟团游【纯玩0自费 一价全包】',
              price: '2228'
            }
          ]
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
.tourism {
  background: #ececec;

  .tourismItem:first-child h4 {
    padding: 30px 0 18px 0;
  }
  .tourismItem:last-child {
    padding: 0 0 106px 0;
  }

  .tourismItem {
    width: 1200px;
    margin: 0 auto;

    h4 {
      padding: 60px 0 18px 0;
    }

    .main {
      display: flex;
      background: #fff;
      padding: 16px 10px 0 10px;
      box-shadow: 1px 1px 12px #aaa;
      border-top: 2px solid #038489;

      .mainLeft {
        width: 340px;
        margin: 0 15px 0 0;

        .price {
          margin: 18px 0;

          span:first-child {
            font-size: 24px;
            color: red;
          }
        }

        .dis {
          .dis1 {
            font-weight: 600;
          }

          .dis2 {
            font-weight: 600;
          }
        }

        img {
          width: 340px;
          height: 220px;
        }

        .liyou {
          font-size: 14px;
          line-height: 1.6;
          color: #666;
        }

      }

      .mainRight {
        display: flex;
        flex-wrap: wrap;

        .placeListItem {
          margin: 0 5px 12px;

          p {
            line-height: 1.6;
          }

          img {
            width: 265px;
            height: 180px;
          }

          .placeDis {
            width: 265px;
          }

          .placePrice {
            span {
              font-size: 24px;
              color: red;
            }

          }
        }

      }
    }
  }
}
</style>
