<template>
  <div id="home">
    <Header></Header>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/assembly/Header'

export default {
  name: 'home',
  components: {
    Header
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
li {
  list-style: none;
}
img {
  display: block;
}
</style>