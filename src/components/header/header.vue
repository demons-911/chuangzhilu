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
                    <el-menu-item index="3">
                        <p class="nav">
                            <el-dropdown @command="sumTypeCkeck">
                                <span class="el-dropdown-link">
                                    {{sumType}}
                                </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item v-for="(item,index) in sumTypeArray" :key='index' v-text="item" :command="item">校园招聘</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </p>
                    </el-menu-item>
                </el-menu>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{ 
            sumType: '加入我们',
            sumTypeArray:['校园招聘','实习机会','社会招聘'],
        }
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
                
            }else if (key == 2) {
                console.log(222222)
            }else if(key==3){
                console.log(333333)

            }else if (key == 4){
                 this.$router.push({path:'/contacts/'})
            }else if(key==5){
                this.$router.push({path:'/training'})
                console.log(44444)
            }
        },
        goto(){
            this.$router.push({path:'/index'})
        },
        sumTypeCkeck(type){
            // this.sumType=type
            if(type=='社会招聘'){
                this.$router.push({path:'/join'})
            }else if(type=='校园招聘'){
                this.$router.push({path:'/contact'})
            }else if(type=='实习机会'){
                this.$router.push({path:'/internship'})
            }
        }
    }
}
</script>
<style scoped lang="less">
@media screen and (max-width: 1600px){
    .el-dropdown{
        display: block;
        height: 100%;
        vertical-align: inherit !important;
        span{
            display: inline-block;
            height: 90px;
            line-height: 90px;
            font-size: 15px;
        }
    }
    .el-dropdown-link {
        cursor: pointer;
    }
    .header-top{
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
        height: 90px;
        margin-right: -20px;
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
        // padding-right: 0 !important;
    }
    /deep/ .el-menu.el-menu--horizontal{
        height: 100%;
    }
    .el-dropdown-menu{
        position: absolute;
        left: 1280px !important;
        right: 140px;
        font-size: 15px;
    }
    .el-dropdown-menu__item{
        text-align: center;
    }
    .el-menu-item * {
        vertical-align: inherit;
    }
}
@media screen and (min-width: 1600px) {
    .el-dropdown{
        display: block;
        height: 100%;
        vertical-align: inherit !important;
        span{
            display: inline-block;
            height: 90px; /* no */
            line-height: 90px; /* no */
            font-size: 15px; /* no */
        }
    }
    .el-dropdown-link {
        cursor: pointer;
    }
    .header-top{
        width: 1200px; /* no */
        display: flex;
        margin: 0 auto;
    }
    .header{
        height: 90px; /* no */
        width: 100%; /* no */
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
        height: 90px; /* no */
        margin-right: -20px; /* no */
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
    .el-dropdown-menu{
        position: absolute;
        left: 75% !important;
        font-size: 15px; /* no */
    }
    .el-dropdown-menu__item{
        text-align: center;
    }
    .el-menu-item * {
        vertical-align: inherit;
    }
}
</style>