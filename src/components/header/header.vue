<template>
    <div class="header">
        <div class="header-top">
            <div class="logo" >
                <div class="picture">
                    <img src="./image/logo.png" alt="">
                </div>
                <div>创知路教育</div>
            </div>
            <div class="top-nav">
                <el-menu :default-active="getActive" class="el-menu-demo" mode="horizontal" @select="handleSelect" active-text-color="#409EFF">
                    <el-menu-item index="1"><p class="nav" @click="goto">关于我们</p></el-menu-item>
                    <el-menu-item index="2"><p class="nav">线上服务</p></el-menu-item>
                    <el-menu-item index="5"><p class="nav">线下培训</p></el-menu-item>
                    <el-menu-item index="4"><p class="nav">联系我们</p></el-menu-item>
                    <el-menu-item index="3"><p class="nav">加入我们</p></el-menu-item>
                </el-menu>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{ }
    },
    computed:{
        getActive(){
            return this.$store.getters.getActive
        },
    },
    methods:{
        handleSelect(key, keyPath) {
          console.log(key)
            if (key == 1) {
                // this.$router.push({path:'/index'})
                // console.log("切换导航",this.$route.name)
                console.log(11111)
            }else if (key == 2) {
                
                // console.log("切换导航",this.$route.name)
                console.log(222222)
            }else if (key == 4){
                //  this.$router.push({path:'/creation/'})
                console.log(33333)
            }else if(key==5){
              //榜单
            //   this.$router.push({path:'/list'})
            this.$router.push({path:'/training'})
            console.log(44444)
            }
        },
        goto(){
            this.$router.push({path:'/index'})
        }
    }
}
</script>
<style scoped lang="less">
@media screen and (max-width: 1600px){
    .header-top{
        // width: 1440px;
        // width: 1397px;
        width: 1200px;
        display: flex;
        margin: 0 auto;
    }
    .header{
        // display: flex;
        height: 90px;
        width: 100%;
        background: #f5f5f5;
        line-height: 29px;
    }
    .logo{
        cursor: pointer;
        width: 220px;
        height: 54px;
        line-height: 54px;
        display: flex;
        font-size: 19px;
        font-family: '微软雅黑';
        // margin-left: 73px;
        margin-top: 18px;
        .picture{
            width: 54px;
            height: 54px;
            margin-right: 18px;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    .top-nav{
        margin-left: auto;
        // margin-right: 84px;
    }
    .nav{
        margin: 0;
        font-size: 15px;
        color: #4C4C4C;
        font-family: '微软雅黑';
    }
    /deep/ .el-menu.el-menu--horizontal{
        border-bottom: none !important;
    }
    /deep/ ul{
        background: #f5f5f5;
    }
    /deep/ .el-menu--horizontal>.el-menu-item{
        line-height: 90px;
        height: 100%;
    }
    /deep/ .el-menu.el-menu--horizontal{
        height: 100%;
    }
}
@media screen and (min-width: 1600px) {
    .header-top{
        // width: 1440px; /* no */
        width: 1200px; /* no */
        display: flex;
        margin: 0 auto;
    }
    .header{
        // display: flex;
        height: 90px; /* no */
        width: 100%;
        background: #f5f5f5;
        line-height: 29px; /* no */
    }
    .logo{
        cursor: pointer;
        width: 220px; /* no */
        height: 54px; /* no */
        line-height: 54px; /* no */
        display: flex;
        font-size: 19px; /* no */
        font-family: '微软雅黑';
        // margin-left: 73px; /* no */
        margin-top: 18px; /* no */
        .picture{ 
            width: 54px; /* no */
            height: 54px; /* no */
            margin-right: 18px; /* no */
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    .top-nav{
        margin-left: auto;
        // margin-right: 84px; /* no */
        height: 90px; /* no */
    }
    .nav{
        margin: 0;
        font-size: 15px; /* no */
        color: #4C4C4C;
        font-family: '微软雅黑';
    }
    /deep/ .el-menu.el-menu--horizontal{
        border-bottom: none !important;
    }
    /deep/ ul{
        background: #f5f5f5;
    }
    /deep/ .el-menu--horizontal>.el-menu-item{
        line-height: 90px; /* no */
        height: 100%;
    }
    /deep/ .el-menu.el-menu--horizontal{
        height: 100%;
    }
}
</style>