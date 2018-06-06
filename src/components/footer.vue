<template>
  <div class="foot">
      <div class="left">
          <img src="../assets/8cm.jpg" width="150" height="150" class="logo">
          <span class="text">码上关注</span>
           <i class="icon"></i><span>400-806-2009</span>  
        </div>
        <div class="content">
      <ul>
        <li class="title">产品介绍
          <ul>
            <li><a href="#">海量汇 · 大数据资源中心</a></li>
            <li><a href="#">智多星 · 大数据智能分析平台</a></li>
            <li><a href="#">万花筒 · 大数据可视化平台</a></li>
          </ul>
        </li>
        <li class="title">解决方案
          <ul>
            <li><a href="#">智慧旅游</a></li>
            <li><a href="#">智慧海洋</a></li>
            <li><a href="#">全域商业</a></li>
            <li><a href="#">综合管廊</a></li>
            <li><a href="#">智慧交通</a></li>
          </ul>
        </li>
        <li class="title">合作与发展
          <ul>
            <li><a href="#">合作申请</a></li>
            <li><a href="#">渠道体系</a></li>
          </ul>
        </li>
        <li class="title">技术与支持
          <ul>
            <li><a href="#">服务理念</a></li>
            <li><a href="#">服务体系</a></li>
            <li><a href="#">问题咨询</a></li>
            <li><a href="#">建议与投诉</a></li>
            <li><a href="#">申请试用</a></li>       
          </ul>
        </li>
        <li class="title">关于华量
          <ul>
            <li><a href="#">公司介绍</a></li>
            <li><a href="#">荣誉资质</a></li>
            <li><a href="#">公司新闻</a></li>
            <li><a href="#">社会招聘</a></li>
            <li><a href="#">联系我们</a></li>
          </ul>
        </li>
      </ul>
        </div>
        <div class="footer">
            <p>版权所有2018 杭州华量软件有限公司 浙ICP备15026301号</p>
        </div>
    </div>
    
</template>

<script>
export default {
  
   data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        searchShow:false
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      toggleSearch(){
        this.searchShow=!this.searchShow
      }
    }
}
</script>

<style lang="stylus">
.foot
    width:100%
    height:360px
    background :#262626
    color:#CCCCCC
    .left 
        display :inline-block
        padding-top:50px
        margin-left :80px
        width:10%
        text-align :center
        .logo
            margin:auto          
            display :block
        span 
            display :inline-block
            margin-top:20px
        .text        
            display :block
            text-align :center
        .icon
            background-image:url('../assets/phone.png')     
            display :inline-block
            width:30px
            height:32px 
            vertical-align :middle
    .content
        width:70%
        display:inline-block  
        vertical-align :top
        margin-top:40px
        margin-left:120px
        ul
            display:inline-flex
            font-size :18px
            li  
                display:inline-block
                margin-right:40px
                width:120px
                ul
                    display:inline-block
                    li
                        display :block
                        width:120px
                        height :auto
                        line-height :20px
                        margin-top:20px
                        a
                            color:#CCCCCC
    .footer
        text-align :center
        margin-top :40px


</style>