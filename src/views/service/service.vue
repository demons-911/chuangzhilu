<template>
    <div>
        <div class="bg">
            <img src="./image/banner.png" alt="">
        </div>
        <div class="default">
            <div class="customer" v-if="active">
                <div class="all" @click="tab">
                    查看全部
                </div>
                <div class="three-code">
                    <div class="service">
                        <span></span>
                        官方客服
                    </div>
                    <div class="imgs">
                        <div class="three-img">
                            <img src="./image/smallSchool.png" alt="">
                        </div>
                        创小校
                    </div>
                    <div class="imgs">
                        <div class="three-img">
                            <img src="./image/studies.png" alt="">
                        </div>
                        创小教
                    </div>
                    <div class="imgs">
                        <div class="three-img">
                            <img src="./image/smallGroup.png" alt="">
                        </div>
                        创小群
                    </div>
                    <div class="pack" @click="goTo">
                        点击收起
                    </div>
                </div>
            </div>
            <div v-else class="customer none">
                <div class="service">
                    <span></span>
                    官方客服
                </div>
                <div class="none-img">
                    <div class="images">
                        <div class="img">
                            <img src="./image/smallAnd.png" alt="">
                        </div>
                        创小创
                    </div>
                    <div class="images">
                        <div class="img">
                            <img src="./image/know.png" alt="">
                        </div>
                        创小知
                    </div>
                    <div class="images">
                        <div class="img">
                            <img src="./image/road.png" alt="">
                        </div>
                        创小路
                    </div>
                    <div class="images">
                        <div class="img">
                            <img src="./image/education.png" alt="">
                        </div>
                        创知路教育
                    </div>
                    <div class="images">
                        <div class="img">
                            <img src="./image/studies.png" alt="">
                        </div>
                        创小教
                    </div>
                    <div class="images">
                        <div class="img">
                            <img src="./image/yukon.png" alt="">
                        </div>
                        创小育
                    </div>
                    <div class="images">
                        <div class="img">
                            <img src="./image/group.png" alt="">
                        </div>
                        创小群
                    </div>
                    <div class="images">
                        <div class="img">
                            <img src="./image/speak.png" alt="">
                        </div>
                        创小讲
                    </div>
                    <div class="images">
                        <div class="img">
                            <img src="./image/smallSchool.png" alt="">
                        </div>
                        创小校
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
            active: true,
        }
    },
    methods:{
        tab(){
            this.active=false
        },
        goTo(){
            this.$router.push({path:'/contacts'})
        }
    }
}
</script>
<style lang="less" scoped>
@media screen and (max-width: 1600px){
    .bg{
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
    .default{
        display: flex;
        width: 100%;
        height: 525px;
        background: #f6f6f6;
        align-items: center;
        .customer{
            width: 849px;
            height: 225px;
            box-shadow: 4px 4px 0px 0px rgba(207, 232, 255, 03);
            border-radius: 23px;
            margin: 0 auto;
            background: #fff;
            overflow: hidden;
            .all{
                margin-left: 65px;
                width: 128px;
                height: 35px;
                text-align: center;
                line-height: 35px;
                color: #fff;
                font-weight: 500;
                font-family: '微软雅黑';
                font-size: 19px;
                background: #2474BC;
                opacity: 0.3;
                border-bottom-left-radius: 35px;
                border-bottom-right-radius: 35px;
            }
            .all:hover{
                cursor: pointer;
            }
            .three-code{
                margin-top: 17px;
                display: flex;
                .service{
                    background: #fff;
                    font-size: 29px;
                    font-family: '微软雅黑';
                    color: #444;
                    font-weight: 400;
                    line-height: 121px;
                    margin-left: 70px;
                    margin-right: 99px;
                    span{
                        display: inline-block;
                        width: 6px;
                        height: 20px;
                        background: #2474bc;
                    }
                }
                .imgs{
                    text-align: center;
                    margin-right: 53px;
                    font-size: 19px;
                    font-family: '微软雅黑';
                    color: #444;
                    font-weight: 400;
                    line-height: 27px;
                    .three-img{
                        width: 110px;
                        height: 110px;
                        // margin-bottom: 5px;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
            }
        }
        .none{
            display: flex;
            align-items: center;
            width: 850px;
            height: 474px;
            .service{
                background: #fff;
                font-size: 29px;
                font-family: '微软雅黑';
                color: #444;
                font-weight: 400;
                line-height: 106px;
                margin-left: 70px;
                margin-right: 105px;
                span{
                    display: inline-block;
                    width: 6px;
                    height: 20px;
                    background: #2474bc;
                }
            }
            .none-img{
                width: 444px;
                // margin-top: 22px;
                .images{
                    float: left;
                    margin-right: 57px;
                    text-align: center;
                    font-size: 19px;
                    font-family: '微软雅黑';
                    line-height: 27px;
                    color: #444;
                    font-weight: 400;
                    margin-bottom: 13px;
                    .img{
                        width: 103px;
                        height: 103px;
                        margin-bottom: 8px;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
                .images:nth-child(3){
                    margin: 0;
                }
                .images:nth-child(6){
                    margin: 0;
                }
                .images:nth-child(7){
                    margin-bottom: 0;
                }
                .images:nth-child(8){
                    margin-bottom: 0;
                }
                .images:nth-child(9){
                    margin: 0;
                }
            }
        }
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
}
@media screen and (min-width: 1600px){
    .bg{
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
    .default{
        display: flex;
        width: 100%;
        height: 525px; /* no */
        background: #f6f6f6;
        align-items: center;
        .customer{
            width: 849px; /* no */
            height: 225px; /* no */
            box-shadow: 4px 4px 0px 0px rgba(207, 232, 255, 03); /* no */
            border-radius: 23px; /* no */
            margin: 0 auto;
            background: #fff;
            overflow: hidden;
            .all{
                margin-left: 65px; /* no */
                width: 128px; /* no */
                height: 35px; /* no */
                text-align: center;
                line-height: 35px; /* no */
                color: #fff;
                font-weight: 500;
                font-family: '微软雅黑';
                font-size: 19px; /* no */
                background: #2474BC;
                opacity: 0.3;
                border-bottom-left-radius: 35px; /* no */
                border-bottom-right-radius: 35px; /* no */
            }
            .all:hover{
                cursor: pointer;
            }
            .three-code{
                margin-top: 17px; /* no */
                display: flex;
                .service{
                    background: #fff;
                    font-size: 29px; /* no */
                    font-family: '微软雅黑';
                    color: #444;
                    font-weight: 400;
                    line-height: 121px; /* no */
                    margin-left: 70px; /* no */
                    margin-right: 99px; /* no */
                    span{
                        display: inline-block;
                        width: 6px; /* no */
                        height: 20px; /* no */
                        background: #2474bc;
                    }
                }
                .imgs{
                    text-align: center;
                    margin-right: 53px; /* no */
                    font-size: 19px; /* no */
                    font-family: '微软雅黑';
                    color: #444;
                    font-weight: 400;
                    line-height: 27px; /* no */
                    .three-img{
                        width: 110px; /* no */
                        height: 110px; /* no */
                        // margin-bottom: 5px;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
            }
        }
        .none{
            display: flex;
            align-items: center;
            width: 850px; /* no */
            height: 474px; /* no */
            .service{
                background: #fff;
                font-size: 29px; /* no */
                font-family: '微软雅黑';
                color: #444;
                font-weight: 400;
                line-height: 106px; /* no */
                margin-left: 70px;/* no */
                margin-right: 105px; /* no */ 
                span{
                    display: inline-block;
                    width: 6px; /* no */
                    height: 20px; /* no */
                    background: #2474bc;
                }
            }
            .none-img{
                width: 444px; /* no */
                // margin-top: 22px;
                .images{
                    float: left;
                    margin-right: 57px; /* no */
                    text-align: center;
                    font-size: 19px; /* no */
                    font-family: '微软雅黑';
                    line-height: 27px; /* no */
                    color: #444;
                    font-weight: 400;
                    margin-bottom: 13px; /* no */
                    .img{
                        width: 103px; /* no */
                        height: 103px; /* no */
                        margin-bottom: 8px; /* no */
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
                .images:nth-child(3){
                    margin: 0;
                }
                .images:nth-child(6){
                    margin: 0;
                }
                .images:nth-child(7){
                    margin-bottom: 0;
                }
                .images:nth-child(8){
                    margin-bottom: 0;
                }
                .images:nth-child(9){
                    margin: 0;
                }
            }
        }
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
}
</style>