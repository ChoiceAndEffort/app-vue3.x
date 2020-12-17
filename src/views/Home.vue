<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <div class="div1"></div>
    <div class="div2"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    // HelloWorld,
  },
});
</script>
<style lang="scss" scoped>
@import "@/assets/styles/hotcss/px2rem.scss";
    .home{
        .div1{
            width: 100px;
            height: 100px;
            background: #ccc;
        }
        .div2{
            width: px2rem(100);
            height:px2rem(100);
            background: rgb(140, 126, 223);
        }
    }
</style>