<template>
  <div class="header">
    <div class="left">
      <a href="" class="logo"></a>
      <span class="language">中 |</span>
      <span class="language">EN</span>
    </div>
    <div class="content">
      <ul>
        <li class="title">首页</li>
        <li class="title">产品介绍
          <ul>
            <li>海量汇 · 大数据资源中心</li>
            <li>智多星 · 大数据智能分析平台</li>
            <li>万花筒 · 大数据可视化平台</li>
          </ul>
        </li>
        <li class="title">解决方案
          <ul>
            <li>智慧旅游</li>
            <li>智慧海洋</li>
            <li>全域商业</li>
            <li>综合管廊</li>
            <li>智慧交通</li>
          </ul>
        </li>
        <li class="title">合作与发展
          <ul>
            <li>合作申请</li>
            <li>渠道体系</li>
          </ul>
        </li>
        <li class="title">技术与支持
          <ul>
            <li>服务理念</li>
            <li>服务体系</li>
            <li>问题咨询</li>
            <li>建议与投诉</li>
            <li>申请试用</li>       
          </ul>
        </li>
        <li class="title">关于华量
          <ul>
            <li>公司介绍</li>
            <li>荣誉资质</li>
            <li>公司新闻</li>
            <li>社会招聘</li>
            <li>联系我们</li>
          </ul>
        </li>
        <li class="title">|</li>
      </ul>

    </div>
    <span class="search" @click="toggleSearch" ></span>
     <el-input
     class="search-box"
    placeholder="请输入内容"
    suffix-icon="el-icon-search"
     v-show="searchShow">
  </el-input>
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
.header
  position :fixed
  height :50px
  width :100%
  background :rgba(211,77,46,1)
  color :white
  .left
    display:inline-block 
    margin-left:30px
    margin-top:5px
    width:300px
    height:40px
    .logo
      display:inline-block 
      width:139px
      height:100%
      background-image:url('../assets/logo.png')
    .language
      cursor: pointer
      margin-left:5px
      margin-top:12px
      display:inline-block 
      vertical-align:top
      font-size :18px
  .content
    display :inline-block
    vertical-align :top
    margin-left:100px
    ul
      display:flex
      height :50px
      .title
        display :inline-block
        text-align:center
        width:130px
        line-height :50px
        height :50px
        &:first-child
          width:80px
          color:rgb(211,77,46)
          background:#fff
          border-right:1px solid #D34D2E;
        &:nth-of-type(2)
          ul
            li
              padding-left:20px 
              text-align:left
              width:220px
        &:hover
          color:rgb(211,77,46)
          background:#fff
          &:last-child
            color:#fff
            background:rgb(211,77,46)
          ul           
            display:block
        ul
          display :none         
          li
            border-left:1px solid #D34D2E;
            border-right:1px solid #D34D2E;
            display :block
            background :#fff
            white-space:nowrap;
            color:rgb(211,77,46)
            height :60px
            line-height :60px
            &:last-child
              border-bottom:1px solid #D34D2E;
  .search
    display :inline-block
    cursor :pointer
    width:40px
    height:30px
    margin-top :10px
    background-image:url('../assets/search.png')
    background-repeat :no-repeat
  .search-box
    z-index:-1
</style>
