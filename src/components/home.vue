<!--  -->
<template>
<div class="home">
  <div class="homeDis">
    <div class="disTit">
      <h3>选我们，准没错</h3>
    </div>
    <div class="homeDisBox">
      <div class="disContentItem" v-for="(item, homeDisIndex) in homeDis" :key="homeDisIndex">
        <img :src="item.imgUrl" alt="">
        <p>{{item.tit}}</p>
      </div>
    </div>
  </div>

  <!-- 老年公寓描述 -->
  <div class="disContent centerFlexWrap">
    <div class="disLeft">
      <h3>老年公寓</h3>
      <p>老年公寓是专供老年人集中居住，符合老年体
        能心态特征的公寓式老年住宅，具备餐饮、清洁卫
        生、文化娱乐、医疗保健服务体系，是综合管理的
        住宅类型;</p>
      <p>本着“以人为本、孝行天下、服务老人、回报
        社会”的办院宗旨，以诚信服务、传递爱心的服务
        理念，立足于老年市场，引进世界先进的养老护理
        理念，</p>
    </div>
    <div class="disItem" v-for="(item, disListIndex) in disList" :key="disListIndex">
      <h3>{{item.tit}}</h3>
      <p v-for="(item1, disContentIndex) in item.content" :key="disContentIndex">{{item1}}</p>
    </div>
  </div>

  <!-- 6大服务内容 -->
  <div class="service">
    <h2>6大服务内容</h2>
    <div class="serviceBox centerFlexWrap">
      <div class="serviceItem" v-for="(item, serviceListIndex) in serviceList" :key="serviceListIndex">
        <img :src="item.imgUrl" alt="">
        <h4>{{item.tit}}</h4>
        <p>{{item.content}}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      homeDis: [{
          tit: '日常生活更方便',
          imgUrl: require('@/assets/img/dis_img1.jpg')
        },
        {
          tit: '医疗护理更放心',
          imgUrl: require('@/assets/img/dis_img2.jpg')
        },
        {
          tit: '业余生活更丰富',
          imgUrl: require('@/assets/img/dis_img3.jpg')
        }
      ],
      disList: [{
          tit: '老年公寓',
          content: [
            '服务对象:60~79岁健康活力老人',
            '客户需求:追求美好晚年生活的心理刚需',
            '核心服务:餐饮、健康管理、文娱活动、社交服务'
          ]
        },
        {
          tit: '老人院',
          content: [
            '服务对象:80岁以上高龄自理、护理老人',
            '客户需求:专业医疗、照护的身体刚需',
            '核心服务：餐饮、康复训练、专业护理、生活照料、心灵慰藉'
          ]
        }
      ],
      serviceList: [{
          imgUrl: require('@/assets/img/icon_img1.jpg'),
          tit: '住宿服务',
          content: '按照喜好布置房间，欢迎来到新家，在浪漫的氛围中，享受高品质的老年生活。'
        },
        {
          imgUrl: require('@/assets/img/icon_img2.jpg'),
          tit: '膳食服务',
          content: '专业营养师精心制定营养食谱，再根据季节时令变化更换菜色品种，制定个性化营养食谱方案。'
        },
        {
          imgUrl: require('@/assets/img/icon_img3.jpg'),
          tit: '医疗服务',
          content: '和周边的医院，建立医养联盟合作，提供日常巡诊、慢病管理、健康查设立就医"绿色通道"。'
        },
        {
          imgUrl: require('@/assets/img/icon_img4.jpg'),
          tit: '娱乐休闲服务',
          content: '根据长者的身体状况、兴趣爱好量身定制益智类、美工类、绘画类、娱乐类等活动及康复训练，让老人老有所养，老有所乐。'
        },
        {
          imgUrl: require('@/assets/img/icon_img5.jpg'),
          tit: '购物服务',
          content: '为入住长者提供物品及服务方面的导购、代购、团购等服务，使老人购物消费更轻松，更经济，更便捷。'
        },
        {
          imgUrl: require('@/assets/img/icon_img6.jpg'),
          tit: '交通服务',
          content: '为交通出行提供安全的交通服务，使老人可提前安排出行计划，变更出行路线，使出行更安全、更便捷、更可靠。'
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
.home {
  .homeDis {
    margin: 100px auto 120px;

    h3 {
      font-size: 24px;
      margin: 0 auto 60px;
      font-weight: 500;
      text-align: center;
    }

    .homeDisBox {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      .disContentItem {
        border: 1px solid #038489;
        width: 384px;
        height: 280px;
        margin: 0 10px;
        box-shadow: 1px 1px 12px #ccc;

        img {
          margin: 20px auto 38px;
        }

        p {
          text-align: center;
        }
      }
    }
  }

  .disContent {
    background: url('../assets/img/dis_bg.jpg') no-repeat;
    padding: 60px 0 60px 0;

    .disLeft {
      background: #fff;
      padding: 72px 22px;

      h3 {
        margin: 0 auto 32px;
        text-align: center;
        font-size: 24px;
      }

      p {
        width: 350px;
        line-height: 1.6;
        text-indent: 2em;
      }
    }

    .disItem {
      margin: 0 0 0 20px;

      h3 {
        background: #fff;
        width: 385px;
        height: 60px;
        line-height: 60px;
        margin: 0 0 18px 0;
        text-align: center;
        font-weight: 500;
      }

      p {
        width: 385px;
        height: 100px;
        display: flex;
        flex-flow: column;
        flex-wrap: wrap;
        justify-content: center;
        background: #fff;
        margin: 0 0 18px 0;
        text-align: center;
      }

      p:last-child {
        margin: 0 0 0 0;
      }
    }
  }
}

.service {
  width: 1200px;
  margin: 125px auto 0;

  h2 {
    margin: 0 auto 60px;
    text-align: center;
  }

  .serviceBox {
    .serviceItem {
      margin: 0 45px 120px;

      img {
        margin: 0 auto 24px;
      }

      h4 {
        margin: 0 0 34px 0;
        text-align: center;
      }

      p {
        width: 290px;
        line-height: 1.6;
      }
    }
  }

}
</style>
