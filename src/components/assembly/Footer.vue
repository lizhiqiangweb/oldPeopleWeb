<!--  -->
<template>
<div class="Footer centerFlexWrap">
  <div class="logo footerItem">
    <img src="" alt="">
    <p>关怀呵护 ，尊重人格，独立能
      力，量身定制 ，守护亲情</p>
  </div>
  <div class="contact footerItem">
    <h3>联系我们</h3>
    <p v-for="(item, contactIndex) in contact" :key="contactIndex">{{item}}</p>
  </div>
  <div class="contactCode footerItem">
    <h3>联系我们</h3>
    <div class="codeImg">
      <img v-for="(item, contactCodeIndex) in contactCode" :key="contactCodeIndex" :src="item" alt="">
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      contact: [
        '联系电话：000-0000-000',
        '联系邮箱：8888888@qq.com',
        '地址：********'
      ],
      contactCode: [
        require('@/assets/img/wx_img1.jpg'),
        require('@/assets/img/wx_img1.jpg')
      ]
    };
  },

  components: {},

  computed: {},

  methods: {}
}
</script>

<style lang="scss" scoped>
.Footer {
  background: #038489;
  height: 240px;
  padding: 60px 0 0 0;

  .footerItem {
    margin: 0 90px;
  }

  .logo {
    p {
      width: 185px;
      color: #fff;
    }
  }

  .contact {
    p {
      color: #fff;
      line-height: 3;
    }
  }

  .contactCode {
    .codeImg {
      display: flex;

      img {
        width: 125px;
        height: 125px;
        margin: 0 5px;
      }

    }

  }
}

h3 {
  color: #fff;
  border-bottom: 1px solid #fff;
  margin: 0 0 30px 0;
  padding: 0 0 14px 0;
  position: relative;
}
h3::after {
  content: '';
  width: 74px;
  height: 2px;
  background: #fff;
  display: block;
  position: relative;
  top: 17px;
}
</style>
