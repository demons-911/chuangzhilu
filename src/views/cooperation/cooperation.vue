<template>
    <div>
        <div class="banner">
            <img src="./image/banner.png" alt="">
        </div>
        <div class="talent">
            <div class="content">
                <div class="talents">
                    <div class="titles">
                        <span></span>
                        机构/学校合作
                    </div>
                    <div class="code">
                        <div class="code-img">
                            <img src="./image/smallSchool.png" alt="">
                        </div>
                        创小校
                    </div>
                    <div class="pack" @click="goTo">
                        点击收起
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        goTo(){
            this.$router.push({path:'/contacts'})
        }
    }
}
</script>
<style scoped lang='less'>
@media screen and (max-width: 1600px)  {
    .banner{
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
    .talent{
        display: flex;
        align-items: center;
        width: 100%;
        height: 525px;
        background: #f6f6f6;
        .content{
            width: 1200px;
            margin: 0 auto;
            .talents{
                display: flex;
                width: 538px;
                height: 225px;
                background: #fff;
                box-shadow: 4px 4px 0px 0px rgba(207, 232, 255, 0.3);
                border-radius: 13px;
                margin: 0 49px 0 auto;
                .titles{
                    width: 281px;
                    height: 225px;
                    padding-left: 37px;
                    line-height: 225px;
                    text-align: left;
                    font-size: 29px;
                    font-weight: 400;
                    color: #444;
                    // opacity: 0.1;
                    span{
                        display: inline-block;
                        width: 6px;
                        height: 20px;
                        background: #2474bc;
                    }
                }
                .code{
                    // width: 106px;
                    font-size: 19px;
                    font-weight: 400;
                    color: #444;
                    text-align: center;
                    .code-img{
                        margin-top: 56px;
                        width: 106px;
                        height: 106px;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
                .pack{
                    margin-top: 49px;
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
        }
        
    }
}
@media screen and (min-width: 1600px)  {
    .banner{
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
    .talent{
        display: flex;
        align-items: center;
        width: 100%;
        height: 525px; /* no */
        background: #f6f6f6;
        .content{
            width: 1200px; /* no */
            margin: 0 auto;
            .talents{
                display: flex;
                width: 538px; /* no */
                height: 225px; /* no */
                background: #fff;
                box-shadow: 4px 4px 0px 0px rgba(207, 232, 255, 0.3); /* no */
                border-radius: 13px; /* no */
                margin: 0 49px 0 auto; /* no */
                .titles{
                    width: 281px; /* no */
                    height: 225px; /* no */
                    padding-left: 37px; /* no */
                    line-height: 225px; /* no */
                    text-align: left;
                    font-size: 29px; /* no */
                    font-weight: 400;
                    color: #444;
                    // opacity: 0.1;
                    span{
                        display: inline-block;
                        width: 6px; /* no */
                        height: 20px; /* no */
                        background: #2474bc;
                    }
                }
                .code{
                    // width: 106px;
                    font-size: 19px; /* no */
                    font-weight: 400;
                    color: #444;
                    text-align: center;
                    .code-img{
                        margin-top: 56px; /* no */
                        width: 106px; /* no */
                        height: 106px; /* no */
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
                .pack{
                    margin-top: 49px; /* no */ 
                    width: 35px;/* no */
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
        }
        
    }
}
</style>