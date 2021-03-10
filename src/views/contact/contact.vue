<template>
    <div>
        <div class="school">
            <div class="school-recruitment">
                <div class="top-line"></div>
                <div class="social">校园招聘</div>
                <div class="social-content">如果你也对教育怀抱纯粹对理想 <br> 如果你也想将优质教育资源传递给更多人</div>
                <div class="blue-content">我们诚挚邀请你通过以下 <span>全职项目 加入我们</span></div>
            </div>
            <div class="content-img">
                <img src="./image/school.png" alt="">
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
                            <span>985初中 </span>
                            <span>/小学教研教学团队</span>
                        </div>
                    </div>
                    <div class="introduce">
                        面向本科阶段就读于985高校，<br> 招募具备初中/小学教研授课能力的优秀人才。
                    </div>
                </div>
                <div class="right-img">
                    <img src="./image/highschool.png" alt="">
                </div>
            </div>
            <div class="plan">
                <div class="left-img">
                    <img src="./image/plan.png" alt="">
                </div>
                <div class="right-content">   
                    <div class="titles">
                        <div class="vertical-bar"></div>
                        <div class="title">
                            <span>培风计划 </span>
                            <span>/初高中授课型管理培训生</span>
                        </div>
                    </div>
                    <div class="introduce">
                        面向本科阶段就读于复旦、浙大、上交、<br>
                        中科大、人大、南大的管理培训生计划，<br>
                        招募具备初中/高中教研授课能力的优秀人才。
                    </div>
                </div>
            </div>

            <div class="junior-school top">
                <div class="left-content">   
                    <div class="titles">
                        <div class="vertical-bar"></div>
                        <div class="title">
                            <span>图南计划 </span>
                            <span>/高中授课型管理培训生</span>
                        </div>
                    </div>
                    <div class="introduce">
                        面向本科阶段就读于清华、北大的管理培训生计划，<br> 招募具备高中教研授课能力的顶尖人才。
                    </div>
                </div>
                <div class="right-img">
                    <img src="./image/plan1.png" alt="">
                </div>
            </div>
            
            <div class="plan planing">
                <div class="left-img">
                    <img src="./image/plan3.png" alt="">
                </div>
                <div class="right-content">   
                    <div class="titles">
                        <div class="vertical-bar"></div>
                        <div class="title">
                            <span>千里计划 </span>
                            <span>/销售运营型管理培训生</span>
                        </div>
                    </div>
                    <div class="introduce">
                        向本科阶段就读于985高校的管理培训生计划，<br>
                        招募具有教育理想、出色沟通能力和领导潜质的<br>
                        优秀销售运营人才。
                    </div>
                </div>
            </div>


            <div class="junior-school wood">
                <div class="left-content">   
                    <div class="titles">
                        <div class="vertical-bar"></div>
                        <div class="title">
                            <span>合木计划 </span>
                            <span>/战略运营型管理培训生</span>
                        </div>
                    </div>
                    <div class="introduce">
                        面向本科阶段就读于清华、北大的<br>
                        管理培训生计划，招募具有教育理想、<br>
                        发展潜力和领导潜质的优秀战略运营人才。
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
                box-shadow:inset 0px 2px 8px 0px #F5F9FC;
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
                    margin-right: 2px;
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
            }
        }
    }
    .recruitments-content{
        width: 100%;
        // height: 1328px;
        background: #f6f6f6;
        padding-top: 60px;
        padding-bottom: 56px;
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
                    margin: 86px 0 0 74px;
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
                    width: 409px;
                    height: 48px;
                    color: #444;
                    font-size: 20px;
                    font-family: '微软雅黑';
                    font-weight: 400;
                    line-height: 27px;
                    margin: 23px 0 0 90px;
                }
            }
            .right-img{
                width: 590px;
                height: 161px;
                margin: 60px 0 0 auto;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .wood{
            margin-top: 45px;
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
                width: 590px;
                height: 161px;
                margin-top: 60px;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .right-content{
                .titles{
                    display: flex;
                    height: 29px;
                    margin: 76px 0 0 100px;
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
                    width: 409px;
                    font-size: 20px;
                    font-family: '微软雅黑';
                    font-weight: 400;
                    color: #444444;
                    line-height: 27px;
                    margin: 24px 0 0 116px;
                }
            }
        }
        .planing{
            .left-img{
                width: 449px;
                height: 152px;
                margin-left: 74px;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .right-content{
                .titles{
                    margin-left: 155px;
                }
                .introduce{
                    width: 450px;
                    margin-left: 171px;
                    line-height: 27px;
                }
            }
        }
        .top{
            margin-top: 40px;
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
                line-height: 36px; /* no */
                font-family: "微软雅黑";
                font-weight: bold;
            }
            .social-content{
                margin-top: 30px; /* no */
                font-size: 20px; /* no */
                color: #444;
                width: 394px; /* no */
                line-height: 34px; /* no */
                word-break: break-all;
            }
            .blue-content{
                margin-top: 25px; /* no */
                margin-left: -32px; /* no */
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
                    margin-right: 2px; /* no */
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
                font-size: 19px; /* no *//* no */
                font-weight: 400; 
                color: #444444;
                line-height: 22px; /* no */
                margin-top: 8px; /* no */
            }
        }
    }
    .recruitments-content{
        width: 100%; 
        // height: 1328px; /* no */
        background: #f6f6f6;
        padding-top: 60px; /* no */
        padding-bottom: 56px; /* no */
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
                    margin: 86px 0 0 74px; /* no */
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
                           font-size: 28px; /* no */
                           font-weight: bold;
                       }
                       span:nth-child(2){
                           font-size: 21px; /* no */
                       }
                   }
                }
                .introduce{
                    width: 409px; /* no */
                    height: 48px; /* no */
                    color: #444; 
                    font-size: 20px; /* no */
                    font-family: '微软雅黑';
                    font-weight: 400;
                    line-height: 27px; /* no */
                    margin: 23px 0 0 90px; /* no */
                }
            }
            .right-img{
                width: 590px; /* no */
                height: 161px; /* no */
                margin: 60px 0 0 auto; /* no */
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .wood{
            margin-top: 45px; /* no */
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
                width: 590px; /* no */
                height: 161px; /* no */
                margin-top: 60px; /* no */ 
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .right-content{
                .titles{
                    display: flex;
                    height: 29px; /* no */
                    margin: 76px 0 0 100px; /* no */
                    .vertical-bar{
                        width: 6px; /* no */
                        height: 20px; /* no *//* no */
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
                    width: 409px; /* no */
                    font-size: 20px; /* no */
                    font-family: '微软雅黑';
                    font-weight: 400;
                    color: #444444;
                    line-height: 27px; /* no */
                    margin: 24px 0 0 116px; /* no */
                }
            }
        }
        .planing{
            .left-img{
                width: 449px; /* no */
                height: 152px; /* no */
                margin-left: 74px; /* no */
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .right-content{
                .titles{
                    margin-left: 155px; /* no */
                }
                .introduce{
                    width: 450px; /* no */
                    margin-left: 171px; /* no */
                    line-height: 27px; /* no */
                }
            }
        }
        .top{
            margin-top: 40px; /* no */
        }
    }
}
</style>