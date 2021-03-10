<template>
    <div>
        <div class="recruitment">
            <div class="fb-top">
                <div class="fb-left-recruitment">
                    <div class="top-line"></div>
                    <div class="social">社会招聘</div>
                    <div class="social-content">不论在北京、长沙、成都、重庆、杭州、西安、天津， 我们相信,你在创知路的工作将富有挑战，也充满乐趣。</div>
                    <div class="blue-content">欢迎通过以下渠道 <span>了解或加入我们</span></div>
                </div>
                <div class="right-img">
                    <img src="./image/social.png" alt="">
                </div>
            </div>
        </div>
        <div class="contents-picture">
            <div class="img-content">
                <div class="beijing">
                    <div class="address">北 京</div>
                    <div class="code">
                        <img src="./image/beijing.png" alt="">
                    </div>
                </div>
                <div class="xian">
                    <div class="address">西 安</div>
                    <div class="xian-code">
                        <img src="./image/xian1.png" alt="">
                    </div>
                </div>
                <div class="changsha">
                    <div class="address">长 沙</div>
                    <div class="changsha-code">
                        <img src="./image/changsha1.png" alt="">
                    </div>
                </div>
                <div class="tianjin">
                    <div class="tianjin-address">天 津</div>
                    <div class="tianjin-code">
                        <img src="./image/tianjin1.png" alt="">
                    </div>
                </div>
                <div class="hangzhou">
                    <div class="hangzhou-address">杭 州</div>
                    <div class="hangzhou-code">
                        <img src="./image/hangzhou1.png" alt="">
                    </div>
                </div>
                <div class="chongqing">
                    <div class="chongqing-address">重 庆</div>
                    <div class="chongqing-code">
                        <img src="./image/chongqing1.png" alt="">
                    </div>
                </div>
                <div class="chengdu">
                    <div class="chengdu-address">成 都</div>
                    <div class="chengdu-code">
                        <img src="./image/chengdu1.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
@media screen and (max-width: 1600px){
    .recruitment{
        width: 100%;
        height: 420px;
        .fb-top{
            display: flex;
            width: 1200px;
            height: 420px;
            margin: 0 auto;
            .fb-left-recruitment{
                .top-line{
                    width: 40px;
                    height: 6px;
                    background: #2474bc;
                    margin-top: 105px;
                }
                .social{
                    margin-top: 15px;
                    color: #444;
                    font-size: 36px;
                    line-height: 36px;
                    font-family: "微软雅黑";
                    font-weight: bold;
                }
                .social-content{
                    margin-top: 30px;
                    font-size: 20px;
                    color: #444;
                    width: 485px;
                    height: 54px;
                    line-height: 34px;
                    word-break: break-all;
                }
                .blue-content{
                    margin-top: 25px;
                    margin-left: -35px;
                    background: #2474bc;
                    width: 398px;
                    height: 45px;
                    border-radius: 22px;
                    opacity: 0.9;
                    box-shadow: inset 0px 2px 8px 0px #F5F9FC;
                    color: #fff;
                    font-size: 21px;
                    line-height: 45px;
                    font-weight: 400;
                    font-family: "微软雅黑";
                    text-align: center;
                    span{
                        font-weight: bold;
                    }
                }
            }
            .right-img{
                width: 492px;
                height: 391px;
                margin-top: 29px;
                margin-left: auto;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
    .contents-picture{
        width: 100%;
        height: 878px;
        background: #f6f6f6;
        .img-content{
            position: relative;
            width: 1200px;
            margin: 0 auto;
            .beijing{
                position: absolute;
                top: 60px;
                left: 0;
                width: 582px;
                height: 233px;
                background-image: url('./image/beijin.png');
                background-size: 100% 100%;
                background-repeat: no-repeat;
                .address{
                    font-size: 28px;
                    color: #2474bc;
                    font-family: '微软雅黑';
                    font-weight: bold;
                    margin: 25px 0 0 25px;
                }
                .code{
                    width: 101px;
                    height: 101px;
                    box-shadow: 5px 5px 2px 0px rgba(38, 55, 71, 0.1);
                    border-radius: 10px;
                    margin: 38px 0 0 461px;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .xian{
                position: absolute;
                top: 332px;
                left: 0;
                width: 267px;
                height: 486px;
                background-image: url('./image/xian.png');
                background-size: 100% 100%;
                background-repeat: no-repeat;
                .address{
                    font-size: 28px;
                    color: #2474bc;
                    font-family: '微软雅黑';
                    font-weight: bold;
                    margin: 25px 0 0 25px;
                }
                .xian-code{
                    width: 101px;
                    height: 101px;
                    box-shadow: 5px 5px 2px 0px rgba(38, 55, 71, 0.1);
                    border-radius: 10px;
                    margin: 291px 0 0 145px;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .changsha{
                position: absolute;
                top: 332px;
                left: 304px;
                width: 276px;
                height: 272px;
                background-image: url('./image/changsha.png');
                background-size: 100% 100%;
                background-repeat: no-repeat;
                .address{
                    font-size: 28px;
                    color: #2474bc;
                    font-family: '微软雅黑';
                    font-weight: bold;
                    margin: 25px 0 0 25px;
                }
                .changsha-code{
                    width: 101px;
                    height: 101px;
                    box-shadow: 5px 5px 2px 0px rgba(38, 55, 71, 0.1);
                    border-radius: 10px;
                    margin: 78px 0 0 155px;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .tianjin{
                display: flex;
                position: absolute;
                top: 0;
                right: 0;
                width: 582px;
                height: 220px;
                background-image: url('./image/tianjin3.png');
                background-size: cover;
                background-repeat: no-repeat;
                .tianjin-address{
                    font-size: 28px;
                    color: #2474bc;
                    font-family: '微软雅黑';
                    font-weight: bold;
                    margin: 81px 0 0 25px;
                }
                .tianjin-code{
                    width: 101px;
                    height: 101px;
                    box-shadow: 5px 5px 2px 0px rgba(38, 55, 71, 0.1);
                    border-radius: 10px;
                    margin: 78px 25px 0 auto;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .hangzhou{
                display: flex;
                position: absolute;
                top: 236px;
                right: 0;
                width: 582px;
                height: 192px;
                background-image: url('./image/hangzhou.png');
                background-size: 100% 100%;
                background-repeat: no-repeat;
                .hangzhou-address{
                    font-size: 28px;
                    color: #2474bc;
                    font-family: '微软雅黑';
                    font-weight: bold;
                    margin: 25px 0 0 25px;
                }
                .hangzhou-code{
                    width: 101px;
                    height: 101px;
                    box-shadow: 5px 5px 2px 0px rgba(38, 55, 71, 0.1);
                    border-radius: 10px;
                    margin: 61px 25px 0 auto;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .chongqing{
                display: flex;
                position: absolute;
                top: 440px;
                right: 0;
                width:582px;
                height: 164px;
                background-image: url('./image/chongqing.png');
                background-size: 100% 100%;
                background-repeat: no-repeat;
                .chongqing-address{
                    font-size: 28px;
                    color: #2474bc;
                    font-family: '微软雅黑';
                    font-weight: bold;
                    margin: 35px 0 0 25px;
                }
                .chongqing-code{
                    width: 101px;
                    height: 101px;
                    box-shadow: 5px 5px 2px 0px rgba(38, 55, 71, 0.1);
                    border-radius: 10px;
                    margin: 35px 25px 0 auto;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .chengdu{
                display: flex;
                position: absolute;
                top: 578px;
                right: 0;
                width: 898px;
                height: 240px;
                background-image: url('./image/chengdu.png');
                background-size: 100% 100%;
                background-repeat: no-repeat;
                .chengdu-address{
                    font-size: 28px;
                    color: #2474bc;
                    font-family: '微软雅黑';
                    font-weight: bold;
                    margin: 75px 0 0 25px;
                }
                .chengdu-code{
                    width: 101px;
                    height: 101px;
                    box-shadow: 5px 5px 2px 0px rgba(38, 55, 71, 0.1);
                    border-radius: 10px;
                    margin: 109px 25px 0 auto;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
    }
}
@media screen and (min-width: 1600px){
    .recruitment{
        width: 100%;
        height: 420px; /* no */
        .fb-top{
            display: flex;
            width: 1200px; /* no */
            height: 420px; /* no */
            margin: 0 auto;
            .fb-left-recruitment{
                .top-line{
                    width: 40px; /* no */
                    height: 6px; /* no */
                    background: #2474bc;
                    margin-top: 105px; /* no */
                }
                .social{
                    margin-top: 15px; /* no */
                    color: #444;
                    font-size: 36px; /* no */
                    line-height: 36px; /* no */
                    font-family: "微软雅黑";
                    font-weight: bold;
                }
                .social-content{
                    margin-top: 30px; /* no */
                    font-size: 20px; /* no */
                    color: #444;
                    width: 485px; /* no */
                    height: 54px; /* no */
                    line-height: 34px; /* no */
                    word-break: break-all;
                }
                .blue-content{
                    margin-top: 25px; /* no */
                    margin-left: -35px; /* no */
                    background: #2474bc; 
                    width: 398px; /* no */
                    height: 45px; /* no */
                    border-radius: 22px; /* no */
                    opacity: 0.9;
                    box-shadow: inset 0px 2px 8px 0px #F5F9FC; /* no */
                    color: #fff;
                    font-size: 21px; /* no */
                    line-height: 45px; /* no */
                    font-weight: 400;
                    font-family: "微软雅黑";
                    text-align: center;
                    span{
                        font-weight: bold;
                    }
                }
            }
            .right-img{
                width: 492px; /* no */
                height: 391px; /* no */
                margin-top: 29px; /* no */
                margin-left: auto;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
    .contents-picture{
        width: 100%;
        height: 878px; /* no */
        background: #f6f6f6;
        .img-content{
            position: relative; 
            width: 1200px; /* no */
            margin: 0 auto;
            .beijing{
                position: absolute;
                top: 60px; /* no */
                left: 0;
                width: 582px; /* no */
                height: 233px; /* no */
                background-image: url('./image/beijin.png');
                background-size: 100% 100%;
                background-repeat: no-repeat;
                .address{
                    font-size: 28px; /* no */
                    color: #2474bc;
                    font-family: '微软雅黑';
                    font-weight: bold;
                    margin: 25px 0 0 25px; /* no */
                }
                .code{
                    width: 101px; /* no */
                    height: 101px; /* no */
                    box-shadow: 5px 5px 2px 0px rgba(38, 55, 71, 0.1); /* no */
                    border-radius: 10px; /* no */
                    margin: 38px 0 0 461px; /* no */
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .xian{
                position: absolute;
                top: 332px; /* no */
                left: 0;
                width: 267px; /* no */
                height: 486px; /* no */ 
                background-image: url('./image/xian.png');
                background-size: 100% 100%;
                background-repeat: no-repeat;
                .address{
                    font-size: 28px;/* no */
                    color: #2474bc;
                    font-family: '微软雅黑';
                    font-weight: bold;
                    margin: 25px 0 0 25px; /* no */
                }
                .xian-code{
                    width: 101px; /* no *//* no */
                    height: 101px; /* no */
                    box-shadow: 5px 5px 2px 0px rgba(38, 55, 71, 0.1); /* no */
                    border-radius: 10px; /* no */
                    margin: 291px 0 0 145px; /* no */
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .changsha{
                position: absolute;
                top: 332px; /* no */
                left: 304px; /* no */
                width: 276px; /* no */
                height: 272px; /* no */
                background-image: url('./image/changsha.png');
                background-size: 100% 100%;
                background-repeat: no-repeat;
                .address{
                    font-size: 28px; /* no */
                    color: #2474bc;
                    font-family: '微软雅黑';
                    font-weight: bold;
                    margin: 25px 0 0 25px; /* no */
                }
                .changsha-code{
                    width: 101px; /* no */
                    height: 101px; /* no */
                    box-shadow: 5px 5px 2px 0px rgba(38, 55, 71, 0.1); /* no */
                    border-radius: 10px; /* no */
                    margin: 78px 0 0 155px; /* no */
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .tianjin{
                display: flex;
                position: absolute;
                top: 0; /* no */
                right: 0;
                width: 582px; /* no */
                height: 220px; /* no */
                background-image: url('./image/tianjin3.png');
                background-size: cover;
                background-repeat: no-repeat;
                .tianjin-address{
                    font-size: 28px; /* no */
                    color: #2474bc; 
                    font-family: '微软雅黑';
                    font-weight: bold;
                    margin: 81px 0 0 25px; /* no */
                }
                .tianjin-code{
                    width: 101px; /* no */
                    height: 101px; /* no */
                    box-shadow: 5px 5px 2px 0px rgba(38, 55, 71, 0.1); /* no */
                    border-radius: 10px; /* no */
                    margin: 78px 25px 0 auto; /* no */
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .hangzhou{
                display: flex;
                position: absolute;
                top: 236px; /* no */
                right: 0;
                width: 582px; /* no */
                height: 192px; /* no */
                background-image: url('./image/hangzhou.png');
                background-size: 100% 100%;
                background-repeat: no-repeat;
                .hangzhou-address{
                    font-size: 28px; /* no */
                    color: #2474bc;
                    font-family: '微软雅黑';
                    font-weight: bold;
                    margin: 25px 0 0 25px; /* no */
                }
                .hangzhou-code{
                    width: 101px; /* no */
                    height: 101px; /* no */
                    box-shadow: 5px 5px 2px 0px rgba(38, 55, 71, 0.1); /* no */
                    border-radius: 10px; /* no */
                    margin: 61px 25px 0 auto; /* no */
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .chongqing{
                display: flex;
                position: absolute;
                top: 440px; /* no */
                right: 0;
                width:582px; /* no */
                height: 164px; /* no */
                background-image: url('./image/chongqing.png');
                background-size: 100% 100%;
                background-repeat: no-repeat;
                .chongqing-address{
                    font-size: 28px; /* no */
                    color: #2474bc;
                    font-family: '微软雅黑';
                    font-weight: bold;
                    margin: 35px 0 0 25px; /* no */
                }
                .chongqing-code{
                    width: 101px; /* no */
                    height: 101px; /* no */
                    box-shadow: 5px 5px 2px 0px rgba(38, 55, 71, 0.1); /* no */
                    border-radius: 10px; /* no */
                    margin: 35px 25px 0 auto; /* no */
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .chengdu{
                display: flex;
                position: absolute;
                top: 578px; /* no */
                right: 0;
                width: 898px; /* no */
                height: 240px; /* no */
                background-image: url('./image/chengdu.png');
                background-size: 100% 100%;
                background-repeat: no-repeat;
                .chengdu-address{
                    font-size: 28px; /* no */
                    color: #2474bc;
                    font-family: '微软雅黑';
                    font-weight: bold;
                    margin: 75px 0 0 25px; /* no */
                }
                .chengdu-code{
                    width: 101px; /* no */
                    height: 101px; /* no */
                    box-shadow: 5px 5px 2px 0px rgba(38, 55, 71, 0.1); /* no */
                    border-radius: 10px; /* no */
                    margin: 109px 25px 0 auto; /* no */
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
    }
}
</style>