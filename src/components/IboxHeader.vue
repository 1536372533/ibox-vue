<template>
  <div id="header">

    <div class="logo">
      <div class="img" ></div>
    </div>

    <div >
      <input class="search" placeholder="         搜索商品、专辑、盲盒">
    </div>

    <div class="link" v-for="w in links" :key="w.title" >
      <ul>
        <li :class="{ active: isActive == w.name }" @click="link(w.name)">{{w.title}}</li>
      </ul>
    </div>
      
    <div>
      <button class="login">登录</button> 
    </div>
  </div>
</template>
<script>
export default {
    name:'IboxHeader',
    data(){
      return{
         links:[
          {name:'0', title:'首页'},
          {name:'1', title:'新品'},
          {name:'2', title:'盲盒'},
          {name:'3', title:'市场'},
          {name:'4', title:'元宇宙'},
          {name:'5', title:'我的'},
          {name:'6', title:'公告'},
          {name:'7', title:'谣言曝光'},
          {name:'8', title:'新闻中心'},
          {name:'9', title:'下载APP'},
        ],
        isActive: 0
      }
     
    },
    methods:{
      link(name){

        this.isActive = name

        this.$router.push({name:name})
      }
    },
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  }
#header{
  min-width: 1300px;
  height: 80px;
  padding: 0 15px;
  justify-content: center;/*垂直居中*/
  align-items: center;/*水平居中*/
  border-bottom: 1px solid rgba(199,187,237,.5);
  display: flex;}
.img{
  width: 158px;
  height: 54px;
  background: url(../../static/login.png) 50% no-repeat;
  background-size: 70% auto;}
.search{
  width: 300px;
  height: 40px;
  background: #ecf1f8;
  border-radius: 20px;
  border: none;
  padding-left: 35px;
  color: #141519;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
}
li{
  padding: 0 15px;
  float: left;
  font-size: 14px;
  color: #2c2c34;
  list-style-type: none;
  text-decoration: none;
}
li.active{
  font-weight: 700;
  color: #0066ed;
 }

.login{
  height: 40px;
  width: 68px;
  background: #0066ed;
  font-size: 14px;
  color: rgb(255, 255, 255);
  border-radius: 20px ;
  border: none;
}
</style>