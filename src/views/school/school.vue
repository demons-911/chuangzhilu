<template>
    <div>
        <div class="f-banner">
            <img src="./image/banner.png" alt="">
        </div>
        <div class="f-school">
            <div class="f-location">
                <div class="f-title">
                    <span></span>
                    培训学校
                </div>
                <div style="height: 55px; display:flex; position:relation">
                    <div class="f-right" v-for="(item , index) in popup" :key="index" @mouseout="changes(false,index)" @mouseover="changeMask(true,index)">
                        <div class="radiu">{{item.address}}</div>
                        <transition name="fade">
                            <div class="wrap" v-if="item.active" @mouseout="changeMasks(false,index)" @mouseover="change(true,index)">
                                <div class="triangle1"></div>
                                <div class="triangle2"></div>
                                <div class="show">
                                    <div class='f-high'>
                                        <div class="f-code">
                                            <img :src="item.img" alt="">
                                        </div>
                                        <span >{{item.names}}</span>
                                    </div>
                                    <div class='f-high' v-if="item.imgs">
                                        <div class="f-code">
                                            <img :src="item.imgs" alt="">
                                        </div>
                                        {{item.name}}
                                    </div>
                                </div>
                            </div>
                        </transition>
                    </div>
                </div>
                <div class="pack" @click="goTo">
                    点击收起
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    
    data(){
        return {
            actives: false,
            popup:[
                {
                    address: '长 沙',
                    active: false,
                    img:require('./image/high.png'),
                    imgs: require('./image/small.png'),
                    names: '子叶创知路-高中',
                    name: '子叶创知路-小初'
                },
                {
                    address: '成 都',
                    active: false,
                    img:require('./image/iphone.png'),
                    imgs: require('./image/iphone1.png'),
                    names: '金苹果创知路-高中',
                    name: '金苹果创知路-小初'
                },
                {
                    address: '西 安',
                    active: false,
                    img:require('./image/service.png'),
                    names: '伯乐创知路-客服'
                },
                {
                    address: '杭 州',
                    active: false,
                    img:require('./image/service1.png'),
                    names: '云骥创知路-客服'
                },
                {
                    address: '天 津',
                    active: false,
                    img:require('./image/service3.png'),
                    names: '新弘毅创知路-客服'
                },
                {
                    address: '重 庆',
                    active: false,
                    img:require('./image/service2.png'),
                    names: '渝峰创知路-客服'
                }
            ]
        }
    },
    methods:{
        changeMask(i,index){
            let that=this
            that.actives=true
            setTimeout(function(){
                that.popup[index].active=i
            },500)
        },
        change(i,num){
            let that=this
            setTimeout(function(){
                if(that.actives){
                    that.popup[num].active=true
                }
            },500)
        },
        changeMasks(i,num){
            let that=this
            setTimeout(function(){
                if(!that.actives){
                    that.popup[num].active=i
                }else{
                    that.popup[num].active=true
                }
            },500)
        },
        changes(i,num){
            let that=this
            setTimeout(function(){
                if(!that.actives){
                    that.popup[num].active=i
                }else{
                    that.popup[num].active=false
                }
            },500)
        },
        goTo(){
            this.$router.push({path:'/contacts'})
        }
    }
}
</script>
<style lang='less'>
@media screen and (max-width: 1600px) {
    
    .wrap {
        position: absolute;
        background-color: white;
        border: 1px solid #9cd0ff;
        width: 307px;
        height: 168px;
        margin-top: 14px;
        box-shadow: 2px 6px 0px 0px rgba(207, 232, 255, 0.3);
        opacity: 0.9;
        border-radius: 9px;
    }
    .triangle1 {
        display: block;
        position: absolute;
        width: 0px;
        height: 0px;
        border: 8px solid transparent;
        border-bottom-color: #9cd0ff;
        top: -17px;
        left: 45px;
    }
    .triangle2 {
        display: block;
        position: absolute;
        width: 0px;
        height: 0px;
        border: 8px solid transparent;
        top: -16px;
        border-bottom-color: #fff;
        left: 45px;
    }
    .f-banner{
        background-image: url('./image/banner.png');
        background-size: cover;
        background-position: 50% 100%;
        width: 100%;
        height: auto;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .f-school{
        display: flex;
        align-items: center;
        width: 100%;
        height: 525px;
        background: #f6f6f6;
        .f-location{
            display: flex;
            align-items: center;
            width: 1200px;
            height: 225px;
            margin: 0 auto;
            background: #FFFFFF;
            box-shadow: 4px 4px 0px 0px rgba(207, 232, 255, 0.3);
            border-radius: 13px;
            .f-title{
                width: 256px;
                line-height: 225px;
                font-size: 29px;
                color: #444;
                font-weight: 400;
                span{
                    display: inline-block;
                    margin-left: 71px;
                    width: 6px;
                    height: 20px;
                    background: #2474bc;
                }
            }
        }
    }
    .f-right{
        margin-right: 45px;
        .radiu{
            text-align: center;
            line-height: 53px;
            width: 103px;
            height: 55px;
            font-size: 25px;
            color: #444;
            background: #F6F6F6;
            box-shadow: 2px 6px 0px 0px rgba(207, 232, 255, 0.3);
            border-radius: 27px !important;
            border: 1px solid #dcdfe6;
        }
    }
    .f-right:nth-child(1),.f-right:nth-child(2){
        .f-high{
            margin-left: 9px;
        }
    }
    .f-right:nth-child(2),.f-right:nth-child(5){
        .wrap{
            .show{
                .f-high{
                    font-size: 16px;
                }
            }
        }
    }

    .f-right:nth-child(3),.f-right:nth-child(4),.f-right:nth-child(5),.f-right:nth-child(6){
        .wrap{
            width: 151px;
            .show{
                .f-high{
                    margin: 20px auto 0;
                }
            }
        }
    }
    .show{
        display: flex;
        align-items: center;
        .f-high{
            width: 135px;
            text-align: center;
            color: #444;
            font-size: 16px;
            font-weight: 400;
            margin-top: 20px;
            .f-code{
                width: 109px;
                height: 109px;
                margin: 0 auto;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            span{
                -webkit-transform:scale(0.8);
            }
        }
        .f-high:nth-child(2){
            margin-left: auto;
            margin-right: 8px;
        }
    }
    .f-middle{
        margin: 0 auto;
    }
    .el-popover{
        height: 168px;
    }
    .el-button{
        width: 103px;
        height: 55px;
        background: #F6F6F6;
        box-shadow: 2px 6px 0px 0px rgba(207, 232, 255, 0.3);
        border-radius: 27px !important;
    }
    .pack{
        width: 35px;
        height: 105px;
        background: #2474BC;
        padding-top: 25px;
        opacity: 0.3;
        font-size: 19px;
        font-family: '微软雅黑';
        line-height: 20px;
        font-weight: 500;
        color: #fff;
        white-space: break-word;
        word-break: normal;
        text-align: center;
        margin-left: auto;
        border-top-left-radius: 35px;
        border-bottom-left-radius: 35px;
    }
    .pack:hover{
        cursor: pointer;
    }
    .fade-enter-active,.fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter,.fade-leave-active {
        opacity: 0
    }
}
@media screen and (min-width: 1600px) {
    .wrap {
        position: absolute;
        background-color: white;
        border: 1px solid #9cd0ff; /* no */
        width: 307px; /* no */
        height: 168px; /* no */
        margin-top: 14px; /* no */
        box-shadow: 2px 6px 0px 0px rgba(207, 232, 255, 0.3); /* no */
        opacity: 0.9;
        border-radius: 9px; /* no */
    }
    .triangle1 {
        display: block;
        position: absolute;
        width: 0px; /* no */
        height: 0px; /* no */
        border: 8px solid transparent; /* no */
        border-bottom-color: #9cd0ff;
        top: -17px; /* no */
        left: 45px; /* no */
    }
    .triangle2 {
        display: block;
        position: absolute;
        width: 0px;
        height: 0px; /* no */
        border: 8px solid transparent; /* no */
        top: -16px; /* no */ 
        border-bottom-color: #fff;
        left: 45px; /* no */
    }
    .f-banner{
        background-image: url('./image/banner.png');
        background-size: cover;
        background-position: 50% 100%;
        width: 100%;
        height: auto;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .f-school{
        display: flex;
        align-items: center;
        width: 100%;
        height: 525px; /* no */
        background: #f6f6f6;
        .f-location{
            display: flex;
            align-items: center;
            width: 1200px; /* no */
            height: 225px; /* no */
            margin: 0 auto;
            background: #FFFFFF;
            box-shadow: 4px 4px 0px 0px rgba(207, 232, 255, 0.3); /* no */
            border-radius: 13px; /* no */
            .f-title{
                width: 256px; /* no */
                line-height: 225px; /* no */
                font-size: 29px; /* no */
                color: #444;
                font-weight: 400;
                span{
                    display: inline-block;
                    margin-left: 71px; /* no */
                    width: 6px; /* no */
                    height: 20px; /* no */
                    background: #2474bc;
                }
            }
        }
    }
    .f-right{
        margin-right: 45px; /* no */
        .radiu{
            font-size: 25px; /* no */
            color: #444;
            text-align: center;
            line-height: 53px; /* no */
            width: 103px; /* no */
            height: 55px; /* no */
            background: #F6F6F6;
            box-shadow: 2px 6px 0px 0px rgba(207, 232, 255, 0.3); /* no */
            border-radius: 27px !important; /* no */
            border: 1px solid #dcdfe6; /* no */
        }
    }
    .f-right:nth-child(1),.f-right:nth-child(2){
        .f-high{
            margin-left: 9px; /* no */
        }
    }
    .f-right:nth-child(2),.f-right:nth-child(5){
        .wrap{
            .show{
                .f-high{
                       font-size: 16px; /* no */
                }
            }
        }
    }

    .f-right:nth-child(3),.f-right:nth-child(4),.f-right:nth-child(5),.f-right:nth-child(6){
        .wrap{
            width: 151px; /* no */
            .show{
                .f-high{
                    margin: 20px auto 0; /* no */
                }
            }
        }
    }
    .show{
        display: flex;
        align-items: center;
        .f-high{
            width: 135px; /* no */
            text-align: center;
            color: #444;
            font-size: 16px; /* no */
            font-weight: 400;
            margin-top: 20px; /* no */
            .f-code{
                width: 109px; /* no */
                height: 109px; /* no */
                margin: 0 auto;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            span{
                -webkit-transform:scale(0.8) !important;
            }
        }
        .f-high:nth-child(2){
            margin-left: auto;
            margin-right: 8px; /* no */
        }
    }
    .f-middle{
        margin: 0 auto;
    }
    .el-popover{
        height: 168px; /* no */
    }
    .el-button{
        width: 103px; /* no */
        height: 55px; /* no */
        background: #F6F6F6;
        box-shadow: 2px 6px 0px 0px rgba(207, 232, 255, 0.3); /* no */
        border-radius: 27px !important; /* no */
    }
    .pack{
        width: 35px; /* no */
        height: 105px; /* no */
        background: #2474BC;
        padding-top: 25px; /* no */
        opacity: 0.3;
        font-size: 19px; /* no */
        font-family: '微软雅黑';
        line-height: 20px; /* no */
        font-weight: 500;
        color: #fff;
        white-space: break-word;
        word-break: normal;
        text-align: center;
        margin-left: auto;
        border-top-left-radius: 35px; /* no */
        border-bottom-left-radius: 35px; /* no */
    }
    .pack:hover{
        cursor: pointer;
    }
    .fade-enter-active,.fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter,.fade-leave-active {
        opacity: 0
    }
}
</style>