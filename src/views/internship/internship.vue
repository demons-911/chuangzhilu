<template>
    <div>
        <div class="school">
            <div class="school-recruitment">
                <div class="top-line"></div>
                <div class="social">实习机会</div>
                <div class="social-content">如果你想利用课余时间尝试一份工作 </br> 如果你想深入了解教育行业</div>
                <div class="blue-content">我们诚挚邀请你通过以下 <span>实习项目 加入我们</span></div>
            </div>
            <div class="content-img">
                <img src="./image/internship.png" alt="">
            </div>
            <div class="school-code">
                <div class="sign">
                    <div></div>
                    <div>报名方式</div>
                </div>
                <div class="code-img">
                    <img src="./image/code.png" alt="">
                </div>
                <div class="talent">创知路人才局</div>
            </div>
        </div>
        <div class="recruitments-content">
            <div class="junior-school">
                <div class="left-content">   
                    <div class="titles">
                        <div class="vertical-bar"></div>
                        <div class="title">
                            <span>薪火计划 </span>
                        </div>
                    </div>
                    <div class="introduce">
                        面向已录取清华、北大的高中毕业生的实习计划。
                        每年暑期开展，实习生将参与教育机构的教研、
                        运营工作。
                    </div>
                </div>
                <div class="right-img">
                    <img src="./image/plan.png" alt="">
                </div>
            </div>
            <div class="plan">
                <div class="left-img">
                    <img src="./image/plan1.png" alt="">
                </div>
                <div class="right-content">   
                    <div class="titles">
                        <div class="vertical-bar"></div>
                        <div class="title">
                            <span>新兵计划 </span>
                        </div>
                    </div>
                    <div class="introduce">
                        面向清华、北大大一、大二在校生的实习计划。
                        长期开展，实习生将参与教育机构的教研工作，
                        学期中于北京总部参与教研，寒暑假于各地培
                        训学校与学员面对面分享、交流。
                    </div>
                </div>
            </div>
            <div class="junior-school top">
                <div class="left-content">   
                    <div class="titles">
                        <div class="vertical-bar"></div>
                        <div class="title">
                            <span>寒暑期实习 </span>
                        </div>
                    </div>
                    <div class="introduce">
                        面向清北复浙交科人南大三、大四在校生的实习项目，
                        招募有意向全职加入教育行业的准毕业生。每年暑假、
                        寒假开展，实习生将于各地培训学校与学员面对面
                        分享、交流，参与培训学校的教研、运营工作。表现
                        突出者，可发放RETURN OFFER。
                    </div>
                </div>
                <div class="right-img">
                    <img src="./image/plans.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang='less'>
@media screen and (max-width: 1600px){
    .school{
        display: flex;
        width: 1200px;
        height: 420px;
        margin: 0 auto;
        .school-recruitment{
            width: 474px;
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
                width: 394px;
                line-height: 34px;
                font-family: '微软雅黑';
                word-break: break-all;
            }
            .blue-content{
                margin-top: 25px;
                margin-left: -32px;
                background: #2474bc;
                width: 474px;
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
        .content-img{
            margin: 46px 0 0 105px;
            width: 444px;
            height: 352px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .school-code{
            width: 114px;
            margin-left: auto;
            .sign{
                display: flex;
                height: 22px;
                margin-top: 164px;
                color: #2474bc;
                font-size: 21px;
                font-family: '微软雅黑';
                font-weight: bold;
                text-align: right;
                div:nth-child(1){
                    width: 6px;
                    height: 18px;
                    background: #2474bc;
                    opacity: 0.86;
                    margin-left: auto;
                    margin-right: 6px;
                    margin-top: 2px;
                }
                div:nth-child(2){
                    line-height: 22px;
                    height: 22px;
                }
            }
            .code-img{
                width: 85px;
                height: 85px;
                margin-top: 14px;
                margin-left: 29px;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .talent{
                font-size: 19px;
                font-weight: 400;
                color: #444444;
                line-height: 22px;
                margin-top: 8px;
                font-family: '微软雅黑';
            }
        }
    }
    .recruitments-content{
        width: 100%;
        background: #f6f6f6;
        padding-top: 60px;
        padding-bottom: 60px;
        .junior-school{
            display: flex;
            width: 1200px;
            height: 272px;
            border-radius: 21px;
            box-shadow: 6px 8px 3px 0px rgba(199, 219, 238, 0.1);
            background: #fff;
            margin: 0 auto 0;
            .left-content{
                .titles{
                    display: flex;
                    height: 29px;
                    margin: 73px 0 0 74px;
                   .vertical-bar{
                       width: 6px;
                       height: 20px;
                       margin-top: 4px;
                       margin-right: 11px;
                       background: #2474bc;
                   } 
                   .title{
                        color: #444;
                        font-family: '微软雅黑';
                        line-height: 29px;
                       span:nth-child(1){
                           font-size: 28px;
                           font-weight: bold;
                       }
                       span:nth-child(2){
                           font-size: 21px;
                       }
                   }
                }
                .introduce{
                    width: 440px;
                    // height: 48px;
                    color: #444;
                    font-size: 20px;
                    font-family: '微软雅黑';
                    font-weight: 400;
                    line-height: 27px;
                    margin: 23px 0 0 90px;
                }
            }
            
            .right-img{
                width: 450px;
                height: 152px;
                margin: 60px 80px 0 auto;
                // box-shadow: 6px 8px 3px 0px rgba(199, 219, 238, 0.1);
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .plan{
            display: flex;
            width: 1200px;
            height: 272px;
            border-radius: 21px;
            box-shadow: 6px 8px 3px 0px rgba(199, 219, 238, 0.1);
            background: #fff;
            margin: 40px auto 0;
            .left-img{
                width: 450px;
                height: 152px;
                margin: 60px 0 0 80px;
                // box-shadow: 6px 8px 3px 0px rgba(199, 219, 238, 0.1);
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .right-content{
                .titles{
                    display: flex;
                    height: 29px;
                    margin: 60px 0 0 144px;
                    .vertical-bar{
                        width: 6px;
                        height: 20px;
                        margin-top: 4px;
                        margin-right: 10px;
                        background: #2474bc;
                    }
                    .title{
                        color: #444;
                        font-family: '微软雅黑';
                        line-height: 29px;
                       span:nth-child(1){
                           font-size: 28px;
                           font-weight: bold;
                       }
                       span:nth-child(2){
                           font-size: 21px;
                       }
                   }
                }
                .introduce{
                    width: 425px;
                    font-size: 20px;
                    font-family: '微软雅黑';
                    font-weight: 400;
                    color: #444444;
                    line-height: 27px;
                    margin: 24px 0 0 160px;
                }
            }
        }
        .top{
            margin-top: 40px;
            height: 300px;
            .left-content{
                .titles{
                    margin: 59px 0 0 74px;
                }
                .introduce{
                    width: 480px;
                    line-height: 27px;
                    margin-top: 23px;
                }
            }
            .right-img{
                margin-top: 74px;
            }
        }
    }
}
@media screen and (min-width: 1600px){
    .school{
        display: flex;
        width: 1200px; /* no */
        height: 420px; /* no */
        margin: 0 auto;
        .school-recruitment{
            width: 474px; /* no */
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
                line-height: 36px; /* no *//* no */
                font-family: "微软雅黑";
                font-weight: bold;
            }
            .social-content{
                margin-top: 30px; /* no */
                font-size: 20px; /* no */
                color: #444;
                font-family: '微软雅黑';
                width: 394px; /* no */
                line-height: 34px; /* no */
                word-break: break-all;
            }
            .blue-content{
                margin-top: 25px; /* no */
                margin-left: -32px;  /* no */
                background: #2474bc;
                width: 474px; /* no */
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
        .content-img{
            margin: 46px 0 0 105px; /* no */
            width: 444px; /* no */
            height: 352px; /* no */
            img{
                width: 100%;
                height: 100%;
            }
        }
        .school-code{
            width: 114px; /* no */
            margin-left: auto;
            .sign{
                display: flex;
                height: 22px; /* no */
                margin-top: 164px; /* no */
                color: #2474bc;
                font-size: 21px; /* no */
                font-family: '微软雅黑';
                font-weight: bold;
                text-align: right;
                div:nth-child(1){
                    width: 6px; /* no */
                    height: 18px; /* no */
                    background: #2474bc;
                    opacity: 0.86; 
                    margin-left: auto;
                    margin-right: 6px; /* no */
                    margin-top: 2px; /* no */
                }
                div:nth-child(2){
                    line-height: 22px; /* no */
                    height: 22px; /* no */
                }
            }
            .code-img{
                width: 85px; /* no */
                height: 85px; /* no */
                margin-top: 14px; /* no */
                margin-left: 29px; /* no */
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .talent{
                font-size: 19px; /* no */
                font-weight: 400;
                font-family: '微软雅黑';
                color: #444444;
                line-height: 22px; /* no */
                margin-top: 8px; /* no */
            }
        }
    }
    .recruitments-content{
        width: 100%; /* no */
        background: #f6f6f6;
        padding-top: 60px; /* no */
        padding-bottom: 60px; /* no */
        .junior-school{
            display: flex;
            width: 1200px; /* no */
            height: 272px; /* no */
            border-radius: 21px; /* no */
            box-shadow: 6px 8px 3px 0px rgba(199, 219, 238, 0.1); /* no */
            background: #fff;
            margin: 0 auto 0;
            .left-content{
                .titles{
                    display: flex;
                    height: 29px; /* no */
                    margin: 73px 0 0 74px; /* no */
                   .vertical-bar{
                       width: 6px; /* no */
                       height: 20px; /* no */
                       margin-top: 4px; /* no */
                       margin-right: 11px; /* no */
                       background: #2474bc;
                   } 
                   .title{
                        color: #444;
                        font-family: '微软雅黑';
                        line-height: 29px; /* no */ 
                       span:nth-child(1){
                           font-size: 28px;/* no */
                           font-weight: bold;
                       }
                       span:nth-child(2){
                           font-size: 21px; /* no */
                       }
                   }
                }
                .introduce{
                    width: 440px; /* no */
                    // height: 48px;
                    color: #444;
                    font-size: 20px; /* no */
                    font-family: '微软雅黑';
                    font-weight: 400; 
                    line-height: 27px; /* no */
                    margin: 23px 0 0 90px; /* no */
                }
            }
            .right-img{
                width: 450px; /* no */
                height: 152px; /* no */
                margin: 60px 80px 0 auto; /* no */
                // box-shadow: 6px 8px 3px 0px rgba(199, 219, 238, 0.1); /* no */
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .plan{
            display: flex; 
            width: 1200px; /* no */
            height: 272px; /* no */
            border-radius: 21px; /* no */
            box-shadow: 6px 8px 3px 0px rgba(199, 219, 238, 0.1); /* no */
            background: #fff;
            margin: 40px auto 0; /* no */
            .left-img{
                width: 450px; /* no */
                height: 152px; /* no */
                margin: 60px 0 0 80px; /* no */
                // box-shadow: 6px 8px 3px 0px rgba(199, 219, 238, 0.1); /* no */
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .right-content{
                .titles{
                    display: flex;
                    height: 29px; /* no */
                    margin: 60px 0 0 144px; /* no */
                    .vertical-bar{
                        width: 6px; /* no */
                        height: 20px; /* no */
                        margin-top: 4px; /* no */
                        margin-right: 10px; /* no */
                        background: #2474bc;
                    }
                    .title{
                        color: #444;
                        font-family: '微软雅黑';
                        line-height: 29px; /* no */
                       span:nth-child(1){
                           font-size: 28px; /* no */
                           font-weight: bold;
                       }
                       span:nth-child(2){
                           font-size: 21px; /* no */
                       }
                   }
                }
                .introduce{
                    width: 425px; /* no */
                    font-size: 20px; /* no *//* no */
                    font-family: '微软雅黑';
                    font-weight: 400;
                    color: #444444;
                    line-height: 27px; /* no */
                    margin: 24px 0 0 160px; /* no */
                }
            }
        }
        .top{
            margin-top: 40px; /* no */
            height: 300px; /* no */
            .left-content{ 
                .titles{
                    margin: 59px 0 0 74px; /* no */
                }
                .introduce{
                    width: 480px; /* no */
                    line-height: 27px; /* no */
                    margin-top: 23px; /* no */
                }
            }
            .right-img{
                margin-top: 74px; /* no */
            }
        }
    }
}
</style>