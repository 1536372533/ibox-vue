<template>
<div id="content">
<h1>我写的垃圾轮播图</h1>
    <div class="scroll" v-for="(img,index) in scrolls" :key="index" v-show="index === imgId">

        <img :src="img.imgurl">

        <div class="scroll-span">
            <span  v-for="(img,index) in scrolls" :key="index"  @click="on(index)" :class="{active: index === imgId }"></span>
        </div>    

   </div>
   

</div>
</template>

<script>

 
export default {
    name:0,
    
    data(){
        return{
            scrolls:[
                {imgurl:require('../../assets/scroll_0.jpg'), tourl:''},
                {imgurl:require('../../assets/scroll_1.jpg'), tourl:''},
                {imgurl:require('../../assets/scroll_2.jpg'), tourl:''},
                ],
                imgId: 0,
        }
    },
    
    methods:{
        on(index){
            while(index > this.imgId){
                this.imgId++
            }
            while(index< this.imgId){
                this.imgId--
            }      
        }
    }
}
</script>

<style scoped>

.scroll{
    width: 100%;
    height: 390px;
    position: relative;
}
.scroll img{
    width: 100%;
    min-width: 1500px;
    height: 390px;
    position: absolute;
    display: block;
    object-fit: cover;
}
.scroll-span{
    display: inline;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 15px;
    text-align: center;
    position: absolute;
    
}
.scroll-span span{
    width: 50px;
    height: 5px;
    border-radius: 6px;
    margin: 10px;
    display: inline-block;
    background: hsla(0,0%,100%,.2);
    cursor: pointer;/* 鼠标箭头变形 */
}

.scroll-span .active{
    background: hsla(0,0%,100%,.5);
}
</style>