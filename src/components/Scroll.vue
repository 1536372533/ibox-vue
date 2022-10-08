<template>

<div>
   <swiper ref="mySwiper"   :options="swiperOptions">

    <swiper-slide v-for="(img,index) in scrolls" :key="index">
        <img :src="img.imgurl">  
    </swiper-slide>

    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  
</div>
 

</template>

<script>

import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
 
export default {
    name:'Scroll',
    components: {
      Swiper,
      SwiperSlide
    },
  data() {
    return {
      scrolls:[
        {imgurl:require('../assets/scroll_0.jpg'), tourl:''},
        {imgurl:require('../assets/scroll_1.jpg'), tourl:''},
        {imgurl:require('../assets/scroll_2.jpg'), tourl:''},
        ],
      imgId: 0,
      swiperOptions: {
        // 显示分页
        pagination: {
          el: '.swiper-pagination',
          clickable: true ,// 允许分页点击跳转
          grabCursor: true,//鼠标滑过，箭头变手型
          bulletClass: 'my-bullet',//需设置.my-bullet样式
          bulletActiveClass: 'my-bullet-active',
        },
        // // 设置点击箭头
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev'
        // }
        //无限循环
        loop: true,
      }
    }
  },
}
</script>
<style >

.swiper-container {
  width: 100%;
  height: 390px;
}
.swiper-container img{
    width: 100%;
    min-width: 1500px;
    height: 390px;  
    object-fit: cover;
}
.my-bullet{
    width: 50px;
    height: 5px;
    border-radius: 6px;
    margin: 10px;
    display: inline-block;
    background: hsla(0,0%,100%,.2);
    cursor: pointer;/* 鼠标箭头变形 */
}
.my-bullet-active{
  background: hsla(0,0%,100%,.5);

}
</style>