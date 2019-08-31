<!--  -->
<template>
<div class="shopping">
  <div class="shopTop">
    <div class="sliderList">
      <ul class="sliderItem">
        <li v-for="(item, sliderListIndex) in sliderList" :key="sliderListIndex">{{item.id}} {{item.tit}}</li>
      </ul>
    </div>
    <div class="banner">
      <img src="@/assets/img/shopping/banner1.jpg" alt="">
    </div>

    <div class="news">
      <div class="login">
        <div class="loginHead">
          <img src="@/assets/img/shopping/icon_img1.jpg" alt="">
          <span>Hi, 您好</span>
        </div>
        <div class="btns">
          <button class="loginBtn">用户登录</button>
          <button class="signBtn">免费注册</button>
        </div>
      </div>
      <div class="newsList">
        <h4>公告</h4>
        <div class="newsListItem">
          <p v-for="(item, newsIndex) in newsList" :key="newsIndex">{{item}}</p>
        </div>
      </div>
    </div>
  </div>

  <div class="shopList content" v-for="(item, shopListIndex) in shopList" :key="shopListIndex">
    <div class="shopListItem">
      <h3>{{item.tit}}</h3>
      <div class="shopContent">
        <div class="contentLeft">
          <div class="leftItem" v-for="(item1, contentLeftIndex) in item.contentLeft" :key="contentLeftIndex">
            <h3>{{item1.name}}</h3>
            <span v-for="(item3, shopTypeIndex) in item1.shopType" :key="shopTypeIndex">{{item3}}</span>
          </div>
        </div>
        <div class="contentRight">
          <div class="rightItem" v-for="(item4, contentRightIndex) in item.contentRight" :key="contentRightIndex">
            <img :src="item4.imgUrl" alt="">
            <p>{{item4.productName}}</p>
            <button>在线询价</button>
          </div>
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
      sliderList: [{
          id: '1F',
          tit: '机构采购专区'
        },
        {
          id: '2F',
          tit: '助行移动'
        },
        {
          id: '3F',
          tit: '健康监测'
        },
        {
          id: '4F',
          tit: '医疗康复'
        },
        {
          id: '5F',
          tit: '娱乐健身'
        },
        {
          id: '6F',
          tit: '适老服饰'
        },
        {
          id: '7F',
          tit: '一次性用品'
        }
      ],
      newsList: [
        '【公告】老年人用品市场调查报告',
        '【公告】中国养老行业现状及市场前景分析',
        '【公告】现代中国老年公寓需求市场分析报告',
        '【公告】广州祈福养生游(新邨景点+自然疗法',
        '【公告】老龄化的中国失能老人该如何养老',
        '【公告】海南第三届中老年人广场健身舞年夜开始了',
        '【公告】老年人如何消除老年斑？',
        '【公告】老年人要盖适合自己材质的被子'
      ],
      shopList: [{
          tit: '1F 机构采购专区',
          contentLeft: [{
              name: '舒适服饰',
              shopType: [
                '工作服', '护士服', '护理服', '功能性服饰', '防滑拖鞋/按摩拖鞋', '健康老年鞋', '其他'
              ]
            },
            {
              name: '饮食辅具',
              shopType: [
                '防溢漏水杯', '适老餐具', '其他'
              ]
            },
            {
              name: '适老家具',
              shopType: [
                '适老椅', '电视柜', '衣柜'
              ]
            },
            {
              name: '入浴辅助',
              shopType: [
                '开门浴缸', '洗澡床', '洗澡椅/机'
              ]
            },
            {
              name: '如厕辅助',
              shopType: [
                '坐便椅', '尿盆/便盆'
              ]
            },
            {
              name: '无障碍设施',
              shopType: [
                '安全扶梯/安全踏板'
              ]
            }
          ],
          contentRight: [{
              imgUrl: require('@/assets/img/shopping/shop_img1-1.jpg'),
              productName: '九安电子血压计KD-5902'
            },
            {
              imgUrl: require('@/assets/img/shopping/shop_img1-2.jpg'),
              productName: '鱼跃呼吸机YH-725S/T'
            },
            {
              imgUrl: require('@/assets/img/shopping/shop_img1-3.jpg'),
              productName: '爱乐沐浴推床PTK-510B/D/E'
            },
            {
              imgUrl: require('@/assets/img/shopping/shop_img1-4.jpg'),
              productName: '瑞迈特呼吸机BMC-E-20A-O'
            },
            {
              imgUrl: require('@/assets/img/shopping/shop_img1-1.jpg'),
              productName: '九安电子血压计KD-5902'
            },
            {
              imgUrl: require('@/assets/img/shopping/shop_img1-2.jpg'),
              productName: '鱼跃呼吸机YH-725S/T'
            },
            {
              imgUrl: require('@/assets/img/shopping/shop_img1-3.jpg'),
              productName: '爱乐沐浴推床PTK-510B/D/E'
            },
            {
              imgUrl: require('@/assets/img/shopping/shop_img1-4.jpg'),
              productName: '瑞迈特呼吸机BMC-E-20A-O'
            }
          ]
        },
        {
          tit: '2F 助行移动',
          contentLeft: [{
              name: '电动轮椅',
              shopType: [
                '全躺/半躺轮椅', '带坐便轮椅', '可折叠轮椅', '功能性服饰', '防滑拖鞋/按摩拖鞋', '健康老年鞋', '其他'
              ]
            },
            {
              name: '饮食辅具',
              shopType: [
                '防溢漏水杯', '适老餐具', '其他'
              ]
            },
            {
              name: '适老家具',
              shopType: [
                '适老椅', '电视柜', '衣柜'
              ]
            },
            {
              name: '入浴辅助',
              shopType: [
                '开门浴缸', '洗澡床', '洗澡椅/机'
              ]
            },
            {
              name: '如厕辅助',
              shopType: [
                '坐便椅', '尿盆/便盆'
              ]
            },
            {
              name: '无障碍设施',
              shopType: [
                '安全扶梯/安全踏板'
              ]
            }
          ],
          contentRight: [{
              imgUrl: require('@/assets/img/shopping/shop_img2-1.jpg'),
              productName: '九安电子血压计KD-5902'
            },
            {
              imgUrl: require('@/assets/img/shopping/shop_img2-2.jpg'),
              productName: '鱼跃呼吸机YH-725S/T'
            },
            {
              imgUrl: require('@/assets/img/shopping/shop_img2-3.jpg'),
              productName: '爱乐沐浴推床PTK-510B/D/E'
            },
            {
              imgUrl: require('@/assets/img/shopping/shop_img2-4.jpg'),
              productName: '瑞迈特呼吸机BMC-E-20A-O'
            },
            {
              imgUrl: require('@/assets/img/shopping/shop_img2-1.jpg'),
              productName: '九安电子血压计KD-5902'
            },
            {
              imgUrl: require('@/assets/img/shopping/shop_img2-2.jpg'),
              productName: '鱼跃呼吸机YH-725S/T'
            },
            {
              imgUrl: require('@/assets/img/shopping/shop_img2-3.jpg'),
              productName: '爱乐沐浴推床PTK-510B/D/E'
            },
            {
              imgUrl: require('@/assets/img/shopping/shop_img2-4.jpg'),
              productName: '瑞迈特呼吸机BMC-E-20A-O'
            }
          ]
        },
        {
          tit: '3F 健康监测',
          contentLeft: [{
              name: '电动轮椅',
              shopType: [
                '全躺/半躺轮椅', '带坐便轮椅', '可折叠轮椅', '功能性服饰', '防滑拖鞋/按摩拖鞋', '健康老年鞋', '其他'
              ]
            },
            {
              name: '饮食辅具',
              shopType: [
                '防溢漏水杯', '适老餐具', '其他'
              ]
            },
            {
              name: '适老家具',
              shopType: [
                '适老椅', '电视柜', '衣柜'
              ]
            },
            {
              name: '入浴辅助',
              shopType: [
                '开门浴缸', '洗澡床', '洗澡椅/机'
              ]
            },
            {
              name: '如厕辅助',
              shopType: [
                '坐便椅', '尿盆/便盆'
              ]
            },
            {
              name: '无障碍设施',
              shopType: [
                '安全扶梯/安全踏板'
              ]
            }
          ],
          contentRight: [{
              imgUrl: require('@/assets/img/shopping/shop_img3-1.jpg'),
              productName: '九安电子血压计KD-5902'
            },
            {
              imgUrl: require('@/assets/img/shopping/shop_img3-2.jpg'),
              productName: '鱼跃呼吸机YH-725S/T'
            },
            {
              imgUrl: require('@/assets/img/shopping/shop_img3-3.jpg'),
              productName: '爱乐沐浴推床PTK-510B/D/E'
            },
            {
              imgUrl: require('@/assets/img/shopping/shop_img3-4.jpg'),
              productName: '瑞迈特呼吸机BMC-E-20A-O'
            },
            {
              imgUrl: require('@/assets/img/shopping/shop_img3-1.jpg'),
              productName: '九安电子血压计KD-5902'
            },
            {
              imgUrl: require('@/assets/img/shopping/shop_img3-2.jpg'),
              productName: '鱼跃呼吸机YH-725S/T'
            },
            {
              imgUrl: require('@/assets/img/shopping/shop_img3-3.jpg'),
              productName: '爱乐沐浴推床PTK-510B/D/E'
            },
            {
              imgUrl: require('@/assets/img/shopping/shop_img3-4.jpg'),
              productName: '瑞迈特呼吸机BMC-E-20A-O'
            }
          ]
        },
        {
          tit: '4F 医疗康复',
          contentLeft: [{
              name: '电动轮椅',
              shopType: [
                '全躺/半躺轮椅', '带坐便轮椅', '可折叠轮椅', '功能性服饰', '防滑拖鞋/按摩拖鞋', '健康老年鞋', '其他'
              ]
            },
            {
              name: '饮食辅具',
              shopType: [
                '防溢漏水杯', '适老餐具', '其他'
              ]
            },
            {
              name: '适老家具',
              shopType: [
                '适老椅', '电视柜', '衣柜'
              ]
            },
            {
              name: '入浴辅助',
              shopType: [
                '开门浴缸', '洗澡床', '洗澡椅/机'
              ]
            },
            {
              name: '如厕辅助',
              shopType: [
                '坐便椅', '尿盆/便盆'
              ]
            },
            {
              name: '无障碍设施',
              shopType: [
                '安全扶梯/安全踏板'
              ]
            }
          ],
          contentRight: [{
              imgUrl: require('@/assets/img/shopping/shop_img4-1.jpg'),
              productName: '九安电子血压计KD-5902'
            },
            {
              imgUrl: require('@/assets/img/shopping/shop_img4-2.jpg'),
              productName: '鱼跃呼吸机YH-725S/T'
            },
            {
              imgUrl: require('@/assets/img/shopping/shop_img4-3.jpg'),
              productName: '爱乐沐浴推床PTK-510B/D/E'
            },
            {
              imgUrl: require('@/assets/img/shopping/shop_img4-4.jpg'),
              productName: '瑞迈特呼吸机BMC-E-20A-O'
            },
            {
              imgUrl: require('@/assets/img/shopping/shop_img4-1.jpg'),
              productName: '九安电子血压计KD-5902'
            },
            {
              imgUrl: require('@/assets/img/shopping/shop_img4-2.jpg'),
              productName: '鱼跃呼吸机YH-725S/T'
            },
            {
              imgUrl: require('@/assets/img/shopping/shop_img4-3.jpg'),
              productName: '爱乐沐浴推床PTK-510B/D/E'
            },
            {
              imgUrl: require('@/assets/img/shopping/shop_img4-4.jpg'),
              productName: '瑞迈特呼吸机BMC-E-20A-O'
            }
          ]
        },
        {
          tit: '5F 娱乐健身',
          contentLeft: [{
              name: '电动轮椅',
              shopType: [
                '全躺/半躺轮椅', '带坐便轮椅', '可折叠轮椅', '功能性服饰', '防滑拖鞋/按摩拖鞋', '健康老年鞋', '其他'
              ]
            },
            {
              name: '饮食辅具',
              shopType: [
                '防溢漏水杯', '适老餐具', '其他'
              ]
            },
            {
              name: '适老家具',
              shopType: [
                '适老椅', '电视柜', '衣柜'
              ]
            },
            {
              name: '入浴辅助',
              shopType: [
                '开门浴缸', '洗澡床', '洗澡椅/机'
              ]
            },
            {
              name: '如厕辅助',
              shopType: [
                '坐便椅', '尿盆/便盆'
              ]
            },
            {
              name: '无障碍设施',
              shopType: [
                '安全扶梯/安全踏板'
              ]
            }
          ],
          contentRight: [{
              imgUrl: require('@/assets/img/shopping/shop_img5-1.jpg'),
              productName: '九安电子血压计KD-5902'
            },
            {
              imgUrl: require('@/assets/img/shopping/shop_img5-2.jpg'),
              productName: '鱼跃呼吸机YH-725S/T'
            },
            {
              imgUrl: require('@/assets/img/shopping/shop_img5-3.jpg'),
              productName: '爱乐沐浴推床PTK-510B/D/E'
            },
            {
              imgUrl: require('@/assets/img/shopping/shop_img5-4.jpg'),
              productName: '瑞迈特呼吸机BMC-E-20A-O'
            },
            {
              imgUrl: require('@/assets/img/shopping/shop_img5-1.jpg'),
              productName: '九安电子血压计KD-5902'
            },
            {
              imgUrl: require('@/assets/img/shopping/shop_img5-2.jpg'),
              productName: '鱼跃呼吸机YH-725S/T'
            },
            {
              imgUrl: require('@/assets/img/shopping/shop_img5-3.jpg'),
              productName: '爱乐沐浴推床PTK-510B/D/E'
            },
            {
              imgUrl: require('@/assets/img/shopping/shop_img5-4.jpg'),
              productName: '瑞迈特呼吸机BMC-E-20A-O'
            }
          ]
        },
        {
          tit: '6F 适老服饰',
          contentLeft: [{
              name: '电动轮椅',
              shopType: [
                '全躺/半躺轮椅', '带坐便轮椅', '可折叠轮椅', '功能性服饰', '防滑拖鞋/按摩拖鞋', '健康老年鞋', '其他'
              ]
            },
            {
              name: '饮食辅具',
              shopType: [
                '防溢漏水杯', '适老餐具', '其他'
              ]
            },
            {
              name: '适老家具',
              shopType: [
                '适老椅', '电视柜', '衣柜'
              ]
            },
            {
              name: '入浴辅助',
              shopType: [
                '开门浴缸', '洗澡床', '洗澡椅/机'
              ]
            },
            {
              name: '如厕辅助',
              shopType: [
                '坐便椅', '尿盆/便盆'
              ]
            },
            {
              name: '无障碍设施',
              shopType: [
                '安全扶梯/安全踏板'
              ]
            }
          ],
          contentRight: [{
              imgUrl: require('@/assets/img/shopping/shop_img6-1.jpg'),
              productName: '九安电子血压计KD-5902'
            },
            {
              imgUrl: require('@/assets/img/shopping/shop_img6-2.jpg'),
              productName: '鱼跃呼吸机YH-725S/T'
            },
            {
              imgUrl: require('@/assets/img/shopping/shop_img6-3.jpg'),
              productName: '爱乐沐浴推床PTK-510B/D/E'
            },
            {
              imgUrl: require('@/assets/img/shopping/shop_img6-4.jpg'),
              productName: '瑞迈特呼吸机BMC-E-20A-O'
            },
            {
              imgUrl: require('@/assets/img/shopping/shop_img6-1.jpg'),
              productName: '九安电子血压计KD-5902'
            },
            {
              imgUrl: require('@/assets/img/shopping/shop_img6-2.jpg'),
              productName: '鱼跃呼吸机YH-725S/T'
            },
            {
              imgUrl: require('@/assets/img/shopping/shop_img6-3.jpg'),
              productName: '爱乐沐浴推床PTK-510B/D/E'
            },
            {
              imgUrl: require('@/assets/img/shopping/shop_img6-4.jpg'),
              productName: '瑞迈特呼吸机BMC-E-20A-O'
            }
          ]
        },
        {
          tit: '7F 一次性用品',
          contentLeft: [{
              name: '电动轮椅',
              shopType: [
                '全躺/半躺轮椅', '带坐便轮椅', '可折叠轮椅', '功能性服饰', '防滑拖鞋/按摩拖鞋', '健康老年鞋', '其他'
              ]
            },
            {
              name: '饮食辅具',
              shopType: [
                '防溢漏水杯', '适老餐具', '其他'
              ]
            },
            {
              name: '适老家具',
              shopType: [
                '适老椅', '电视柜', '衣柜'
              ]
            },
            {
              name: '入浴辅助',
              shopType: [
                '开门浴缸', '洗澡床', '洗澡椅/机'
              ]
            },
            {
              name: '如厕辅助',
              shopType: [
                '坐便椅', '尿盆/便盆'
              ]
            },
            {
              name: '无障碍设施',
              shopType: [
                '安全扶梯/安全踏板'
              ]
            }
          ],
          contentRight: [{
              imgUrl: require('@/assets/img/shopping/shop_img7-1.jpg'),
              productName: '九安电子血压计KD-5902'
            },
            {
              imgUrl: require('@/assets/img/shopping/shop_img7-2.jpg'),
              productName: '鱼跃呼吸机YH-725S/T'
            },
            {
              imgUrl: require('@/assets/img/shopping/shop_img7-3.jpg'),
              productName: '爱乐沐浴推床PTK-510B/D/E'
            },
            {
              imgUrl: require('@/assets/img/shopping/shop_img7-4.jpg'),
              productName: '瑞迈特呼吸机BMC-E-20A-O'
            },
            {
              imgUrl: require('@/assets/img/shopping/shop_img7-1.jpg'),
              productName: '九安电子血压计KD-5902'
            },
            {
              imgUrl: require('@/assets/img/shopping/shop_img7-2.jpg'),
              productName: '鱼跃呼吸机YH-725S/T'
            },
            {
              imgUrl: require('@/assets/img/shopping/shop_img7-3.jpg'),
              productName: '爱乐沐浴推床PTK-510B/D/E'
            },
            {
              imgUrl: require('@/assets/img/shopping/shop_img7-4.jpg'),
              productName: '瑞迈特呼吸机BMC-E-20A-O'
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
.shopping {
  background: #ececec;
  padding: 0 0 120px 0;

  .shopTop {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    padding: 10px 0 26px 0;

    .sliderList {

      .sliderItem {
        width: 165px;
        background: #fff;

        li {
          padding: 22px 0 22px 24px;
          color: #333;
        }

        li:last-child {
          padding: 22px 0 66px 24px;
        }
      }
    }

    .banner {
      margin: 0 10px;
    }
  }

  .news {
    background: #fff;
    padding: 24px 10px;
    height: 452px;
    width: 230px;

    .login {
      .loginHead {
        display: flex;
        height: 77px;
        line-height: 77px;
        justify-content: center;

        img {
          margin: 0 24px 0 0;
          width: 77px;
          height: 77px;
        }
      }

      .btns {
        margin: 0 0 0 10px;
        border-bottom: 1px solid #999;

        button {
          width: 200px;
          height: 40px;
          line-height: 40px;
          border-radius: 6px;
          outline-style: none;
          border: none;
        }

        button:hover {
          cursor: pointer;
        }

        .loginBtn {
          background: #038489;
          color: #fff;
          margin: 24px 0 0 0;
        }

        .signBtn {
          background: #b1aca8;
          margin: 18px 0 22px 0;
        }
      }
    }

    .newsList {
      h4 {
        font-size: 14px;
        margin: 14px 0 6px 0;
        border-bottom: 1px solid #999;
        padding: 0 0 12px 0;
        position: relative;
      }

      h4::after {
        content: '';
        width: 28px;
        height: 4px;
        background: #038489;
        display: block;
        position: relative;
        top: 12px;
      }

      p {
        font-size: 12px;
        color: #666;
        width: 210px;
        height: 24px;
        line-height: 24px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }

      p:hover {
        cursor: pointer;
      }
    }
  }

  .content {
    width: 1200px;
    margin: 60px auto 0;
  }

  .shopList {
    .shopListItem {
      h3 {
        font-weight: 500;
        margin: 0 0 16px 0;
      }

      .shopContent {
        display: flex;
        border-top: 3px solid #038489;

        .contentLeft {
          background: #fff;
          padding: 0 24px;
          margin: 0 10px 0 0;
          width: 368px;

          h3 {
            font-size: 16px;
            color: #333;
            margin: 24px 0 14px 0;
          }

          span {
            color: #666;
            font-size: 14px;
            margin: 0 16px 0 0;
          }
        }

        .contentRight {
          background: #fff;
          display: flex;
          flex-wrap: wrap;
          padding: 10px 10px;
          justify-content: center;

          .rightItem {
            margin: 18px 10px;

            img {
              border: 1px solid #999;

            }

            p {
              margin: 22px 0 12px 0;
            }

            button {
              width: 158px;
              height: 40px;
              line-height: 40px;
              border: none;
              outline-style: none;
              border-radius: 6px;
              margin: 0 0 0 22px;
              background: #038489;
              color: #fff;
            }

            button:hover {
              cursor: pointer;
            }
          }
        }
      }

    }
  }
}
</style>
