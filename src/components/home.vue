<template>
  <div class="home">
    
    <el-carousel trigger="click"  class="carousel" height="600px" arrow="always" @change="onChange">
      <el-carousel-item v-for="(item,$index) in image1" :key="$index" >
        <img :src="'/static/image/'+item" class="img" >
      </el-carousel-item>
    </el-carousel>
    <div class="content">
        <h2>我们可以为您提供</h2>
        <div class="service">
            <div v-for="(item,$index) in image2" :key="$index" class="logo-box">
                <img :src="'/static/image/'+item" class="logo" >
                <span class="text">{{text1[$index]}}</span>
            </div>
        </div>
        <h2>公司动态</h2>
        <div class="state">
            <div v-for="(item,$index) in image3" :key="$index" class="logo-box">
                <img :src="'/static/image/'+item" class="logo" >
                <span class="text">{{text2[$index]}}</span>
            </div>
        </div>
    </div>

    </div>

</template>

<script>
import { Carousel } from 'element-ui'
export default {
  
   data() {
      return {
        src:'',
        image1:['casr1.jpg','casr2.jpg','casr3.jpg','casr4.png','casr5.png'],
        image2:['pro1.png','pro2.png','pro3.png','pro4.png'],
        image3:['state1.png','state2.png','state3.png','state4.png','state5.png','state6.png'],
        text1:['大数据基础平台','大数据资源中心','大数据智能分析平台','大数据可视化平台'],
        text2:['华量软件亮相海洋信息化科技展','数博会发布《2018中国大数据企业排行榜》，华量软件五次蝉联TOP5榜单','重庆市企业家代表到访华量软件','杭州市数据资源开发协会走进理事单位——华量软件',
        '华量软件携手浙工商 共创全域旅游大数据研究中心','双料荣誉！华量软件获“中国大数据优秀解决方案提供商TOP 50”、“2017年中国大数据优秀应用案例TOP 50” 奖']
      }
    },
    methods: {
    }
}
</script>

<style lang="stylus">
    .home
        position :relative;
        z-index :-1
        top :51px
        margin-bottom :100px
        .carousel
            margin :auto      
            img 
                width:100%
                height:600px
        .content
            padding-top :20px
            h2
                margin-top :60px
                color :#404040
                font-size :36px
                text-align :center
            .service
                display :flex
                margin-top:100px
                .logo-box
                    margin-left :90px;
                    .logo
                        width:220px
                        height:220px
                    .text
                        text-align :center
                        display :block
                        margin-top:40px
                        width:220px
            .state
                display:inline-flex
                flex-wrap:wrap
                margin-top:10px
                .logo-box
                    margin-top:10px
                    margin-left:70px
                    margin-bottom :40px
                    width:360px
                    height:296px
                    .logo
                        width:360px
                        height:280px 
                    .text
                        text-overflow:ellipsis
                        white-space:nowrap
                        overflow:hidden
                        text-align :center
                        display :inline-block
                        margin-top:10px
                        margin-bottom :40px
                        width:360px
                        height:16px
                        line-height :16px                    
        .el-carousel__item h3 
            color: #475669;
            font-size: 14px;
            opacity: 0.75;
            line-height: 200px;
            margin: 0;  
        .el-carousel__item:nth-child(2n) 
            background-color: #99a9bf;      
        .el-carousel__item:nth-child(2n+1) 
            background-color: #d3dce6; 
</style>
