<template>
    <div>
        <div class="banner">
            <img src="./image/banner.png" alt="">
        </div>
        <div class="talent">
            <div class="talents">
                <div class="titles">
                    <span></span>
                    人才招聘
                </div>
                <div class="code">
                    <div class="code-img">
                        <img src="./image/code.png" alt="">
                    </div>
                    创知路人才局
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
    methods:{
        goTo(){
            this.$router.push({path:'/contacts'})
        }
    }
}
</script>
<style scoped lang='less'>
@media screen and (max-width:1600px) {
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
        .talents{
            display: flex;
            width: 544px;
            height: 225px;
            background: #fff;
            box-shadow: 4px 4px 0px 0px rgba(207, 232, 255, 0.3);
            border-radius: 13px;
            margin: 0 auto;
            .titles{
                width: 292px;
                height: 225px;
                line-height: 225px;
                text-align: center;
                font-size: 29px;
                // font-weight: bold;
                color: #444;
                span{
                    display: inline-block;
                    width: 6px;
                    height: 20px;
                    background: #2474bc;
                }
            }
            .code{
                // width: 106px;
                text-align: center;
                font-size: 19px;
                font-weight: 400;
                color: #444;
                margin-left: 11px;
                .code-img{
                    margin: 56px auto 0;
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
@media screen and (min-width:1600px) {
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
        .talents{
            display: flex;
            width: 544px; /* no */
            height: 225px; /* no */
            background: #fff;
            box-shadow: 4px 4px 0px 0px rgba(207, 232, 255, 0.3); /* no */
            border-radius: 13px; /* no */
            margin: 0 auto;
            .titles{
                width: 292px; /* no */
                height: 225px; /* no */
                line-height: 225px; /* no */
                text-align: center;
                font-size: 29px; /* no */
                // font-weight: bold;
                color: #444;
                span{
                    display: inline-block;
                    width: 6px; /* no */
                    height: 20px; /* no */
                    background: #2474bc;
                }
            }
            .code{
                // width: 106px;
                text-align: center;
                font-size: 19px; /* no */
                font-weight: 400;
                color: #444;
                margin-left: 11px; /* no */
                .code-img{
                    margin: 56px auto 0; /* no */
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
    }
}
</style>