<template>
<div id="home">
  <Header></Header>
  <transition name="fade">
    <router-view />
  </transition>
  <Footer></Footer>
</div>
</template>

<script>
import Header from '@/components/assembly/Header'
import Footer from '@/components/assembly/Footer'

export default {
  name: 'home',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
  color: #333;
}

p {
  color: #333;
}

li {
  list-style: none;
}

img {
  display: block;
}

.centerFlexWrap {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

// 全局动画
.fade-enter-active,
.fade-leave-active {
  transition: all .5s ease-in;
  transform: scale(.8);
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.show-enter-active,
.show-leave-active {
  transition: all .5s ease-in;
}

.show-enter,
.show-leave-active {
  opacity: 0;
}

.page {
  display: flex;
  justify-content: center;
  padding: 50px 0 50px 0;
}
</style>
