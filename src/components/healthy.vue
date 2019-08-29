<!--  -->
<template>
<div class="healthy">
  <div class="tabList">
    <span v-for="(item, tabListIndex) in tabList" :key="tabListIndex" @click="tabCur=tabListIndex" :class="tabCur == tabListIndex ? 'tabActive' : ''">{{item}}</span>
  </div>

  <div class="healthyContent">
    <h2></h2>

  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      tabCur: '0',
      tabList: [
        '老年痴呆',
        '糖尿病',
        '高血压'
      ]
    };
  },

  components: {},

  computed: {},

  methods: {}
}
</script>

<style lang="scss" scoped>
.healthy {
  .tabList {
    display: flex;
    justify-content: center;
    margin: 0 auto 120px;

    span {
      display: block;
      width: 380px;
      height: 120px;
      line-height: 120px;
      background: #fff;
      text-align: center;
      border: 1px solid #038489;
      margin: -60px 15px 0;
      color: #038489;
      font-size: 24px;
      position: relative;
      z-index: 999;
      transition: all .3s ease-in;
    }
    span:hover {
      cursor: pointer;
    }
    .tabActive {
      background: #038489;
      color: #fff;
    }
  }
}
</style>
