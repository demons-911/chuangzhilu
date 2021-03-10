<template>
    <div>
        <div class="public">
            <div class="wx-public">
                <div class="horizontal-line"></div>
                <div class="wx-publics">微信公众号</div>
                <div class="wx-code">
                    <img src="./image/wxgzh.png" alt="">
                </div>
            </div>
            <div class="Introduction">
                <div>我们通过<span>微信公众号 “创知路教育帮”</span> 发布创知路原创优质内容。</div>
                <div>公众号聚焦小初高升学政策、多阶段学业规划、学科学习方法、家庭教育理念，每年举办超过100场线上、</div>
                <div>线下公益讲座，将创知路前沿的教育观点传递给广大家长、学生。</div>
            </div>
            <div class="wx-img">
                <img src="./image/code.png" alt="">
            </div>
        </div>
        <div class="live">
            <div class="live-online">
                <div class="horizontal-line"></div>
                <div class="live-title">直播网校</div>
                <div class="live-content">
                    <div>创知路网校，通过直播课程，打破时间、空间的限制，</div>
                    <div>将顶尖师资和优质教研教学内容，传递给更广泛的学生群体。</div>
                    <div>直播课程覆盖小学、初中、高中多学段，</div>
                    <div>内容从小初高培优到强基计划、学科竞赛，适合不同水平同学选择。</div>
                </div>
            </div>
            <div class="live-img">
                <img src="./image/live.png" alt="">
            </div>
            <div class="three-introduce">
                <div class="introduces">
                    <div class="introduce-title">小初高培优</div>
                    <div class="lines"></div>
                    <div class="introduce-content">
                        我们为国内升学体系的学生，<br>
                        提供小初高培优课程，<br>
                        通过精致研发的专题，<br>
                        提升学生的学习效率，<br>
                        快速搭建知识体系和方法体系。
                    </div>
                </div>
                <div class="introduces">
                    <div class="introduce-title">强基计划</div>
                    <div class="lines"></div>
                    <div class="introduce-content">
                        我们为目标名校的高中生<br>
                        开设强基计划笔试、面试集训，<br>
                        提供路径规划咨询，<br>
                        为学子的名校之路保驾护航。
                    </div>
                </div>
                <div class="introduces">
                    <div class="introduce-title">学科竞赛</div>
                    <div class="lines"></div>
                    <div class="introduce-content">
                        我们专注于竞赛体系的第一轮知识搭建，<br>
                        为国内数学、物理、化学、生物竞赛生，<br>
                        搭建对应科目的竞赛知识体系。<br>
                        同时，我们为学校提供 <br>
                        竞赛政策咨询和合作课程服务。
                    </div>
                </div>
            </div>
        </div>
        <div class="planning">
            <div class="wx-public">
                <div class="horizontal-line"></div>
                <div class="wx-publics">生涯规划</div>
                <div class="wx-code">
                    <img src="./image/sygh.png" alt="">
                </div>
            </div>
            <div class="Introduction">
                <div><span>微信公众号“知路KnowYourWay”， </span> </div>
                <div>为国内大学生优选考研保研、留学咨询、留学英语、职业培训等优质资源，为大学生生涯发展助力。</div>
            </div>
            <div class="wx-img">
                <img src="./image/planning.png" alt="">
            </div>
            <div class="Introductions">
                我们建立了创知路职业发展中心，基于真实数据、大量案例，<br>
                深入研究国内人才市场需求、各个专业发展路径，编写一系列热门大学专业《专业白皮书》。
            </div>
            <div class="fb-imgs">
                <img src="./image/planning1.png" alt="">
            </div>
            <div class="Introductions">
                我们提供贯穿求学、就业不同阶段的个性化的生涯规划咨询，<br>
                 过来人引领，指引方向。创知路的生涯规划不仅限于志愿填报，更关注持续的成长和发展路径规划。
            </div>
            <div class="fb-images">
                <img src="./image/planning2.png" alt="">
            </div>
        </div>
    </div>
</template>
<script>

export default {
    
}
</script>
<style scoped lang='less'>
@media screen and (max-width: 1600px) {
    .public{
        width: 100%;
        height: auto;
        .wx-public{
            width: 1200px;
            height: auto;
            margin: 164px auto 0;
            .wx-publics{
                width: 185px;
                font-size: 36px;
                color: #444;
                font-weight: bold;
                margin: 16px auto 0;
            }
            .wx-code{
                width: 168px;
                height: 168px;
                margin: 51px auto 0;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .Introduction{
            width: 1011px;
            height: auto;
            font-size: 21px;
            color: #444;
            font-weight: 400;
            margin: 50px auto 0;
            text-align: center;
            line-height: 42px;
            div{
                span{
                    font-weight: bold;
                }
            }
        }
        .wx-img{
            width: 1003px;
            height: 548px;
            margin: 138px auto 112px;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    .live{
        width: 100%;
        height: auto;
        background-color: #f6f6f6;
        overflow: hidden;
        .live-online{
            width: 641px;
            height: auto;
            margin: 177px auto 0;
            text-align: center;
            .live-title{
                font-size: 36px;
                color: #444;
                font-weight: bold;
                margin-top: 16px;
            }
            .live-content{
                font-size: 21px;
                color: #444;
                line-height: 42px;
                font-weight: 400;
                margin-top: 36px;
            }
        }
        .live-img{
            width: 1087px;
            height: 484px;
            margin: 108px auto 0;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .three-introduce{
            width: 1196px;
            margin: 103px auto 225px;
            display: flex;
            .introduces{
                width: 378px;
                height: 353px;
                background-color: #fff;
                box-shadow: 0px 6px 10px 0px rgba(71, 73, 68, 0.17);        
                border-radius: 57px;
                text-align: center;
                overflow: hidden;
                margin-right: 31px;
                .introduce-title{
                    font-size: 29px;
                    font-weight: 400;
                    color: #444;
                    margin-top: 41px;
                }
                .lines{
                    width: 64px;
                    height: 5px;
                    background-color: #2474BC;
                    margin: 31px auto 0;
                }
                .introduce-content{
                    margin: 30px auto 0;
                    font-size: 19px;
                    color: #444;
                    font-weight: 400;
                    line-height: 38px;
                    text-align: center;
                    font-family: '微软雅黑';
                }
            }
        }
    }
    .planning{
        width: 100;
        margin: 0 auto;
        .wx-public{
            width: 1200px;
            height: auto;
            margin: 165px auto 0;
            .wx-publics{
                width: 145px;
                font-size: 36px;
                color: #444;
                font-weight: bold;
                margin: 16px auto 0;
            }
            .wx-code{
                width: 168px;
                height: 168px;
                margin: 51px auto 0;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .Introduction{
            width: 1011px;
            height: auto;
            font-size: 21px;
            color: #444;
            font-weight: 400;
            margin: 47px auto 0;
            text-align: center;
            line-height: 42px;
            div{
                span{
                    font-weight: bold;
                }
            }
        }
        .wx-img{
            width: 850px;
            height: 519px;
            margin: 94px auto 121px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .Introductions{
            width: 885px;
            text-align: center;
            line-height: 42px;
            color: #444;
            font-size: 21px;
            margin: 0 auto 125px;
        }
        .fb-imgs{
            width: 992px;
            height: 676px;
            margin: 0 auto 83px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .fb-images{
            width: 991px;
            height: 446px;
            margin: 0 auto 145px;
            img{
                width: 100;
                height: 100%;
            }
        }
    }
    .horizontal-line{
        width: 40px;
        height: 6px;
        background: #2474BC;
        margin: 0 auto;
    }
}
@media screen and (min-width: 1600px) {
    .public{
        width: 100%;
        height: auto;
        .wx-public{
            width: 1200px; /* no */
            height: auto;
            margin: 164px auto 0; /* no */
            .wx-publics{
                width: 185px; /* no */
                font-size: 36px; /* no */
                color: #444;
                font-weight: bold;
                margin: 16px auto 0; /* no */
            }
            .wx-code{
                width: 168px; /* no */
                height: 168px; /* no */
                margin: 51px auto 0; /* no */
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .Introduction{
            width: 1011px; /* no */
            height: auto;
            font-size: 21px; /* no */
            color: #444;
            font-weight: 400;
            margin: 50px auto 0; /* no */
            text-align: center;
            line-height: 42px; /* no */
            div{
                span{
                    font-weight: bold;
                }
            }
        }
        .wx-img{
            width: 1003px; /* no */
            height: 548px; /* no */
            margin: 138px auto 112px; /* no */
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    .live{
        width: 100%;
        height: auto;
        background-color: #f6f6f6;
        overflow: hidden;
        .live-online{
            width: 641px; /* no */
            height: auto;
            margin: 177px auto 0; /* no */
            text-align: center;
            .live-title{
                font-size: 36px; /* no */
                color: #444;
                font-weight: bold;
                margin-top: 16px; /* no */
            }
            .live-content{
                font-size: 21px; /* no */
                color: #444;
                line-height: 42px; /* no */
                font-weight: 400; 
                margin-top: 36px; /* no */
            }
        }
        .live-img{
            width: 1087px; /* no */
            height: 484px; /* no */
            margin: 108px auto 0; /* no */
            img{
                width: 100%;
                height: 100%;
            }
        }
        .three-introduce{
            width: 1196px; /* no */
            margin: 103px auto 225px; /* no */
            display: flex;
            .introduces{
                width: 378px; /* no */ 
                height: 353px; /* no */
                background-color: #fff;
                box-shadow: 0px 6px 10px 0px rgba(71, 73, 68, 0.17); /* no */   
                border-radius: 57px; /* no */
                text-align: center;
                overflow: hidden;
                margin-right: 31px; /* no */
                .introduce-title{
                    font-size: 29px; /* no */
                    font-weight: 400;
                    color: #444;
                    margin-top: 41px; /* no */
                }
                .lines{
                    width: 64px; /* no */
                    height: 5px; /* no */
                    background-color: #2474BC;
                    margin: 31px auto 0; /* no */
                }
                .introduce-content{
                    margin: 30px auto 0; /* no */
                    font-size: 19px; /* no */
                    color: #444;
                    font-weight: 400;
                    line-height: 38px; /* no */
                    text-align: center;
                    font-family: '微软雅黑';
                }
            }
        }
    }
    .planning{
        width: 100;
        margin: 0 auto;
        .wx-public{
            width: 1200px; /* no */
            height: auto;
            margin: 165px auto 0; /* no */
            .wx-publics{
                width: 145px; /* no */
                font-size: 36px; /* no */
                color: #444;
                font-weight: bold;
                margin: 16px auto 0; /* no */
            }
            .wx-code{
                width: 168px; /* no */
                height: 168px; /* no */
                margin: 51px auto 0; /* no */
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .Introduction{
            width: 1011px; /* no */
            height: auto;
            font-size: 21px; /* no */
            color: #444;
            font-weight: 400;
            margin: 47px auto 0; /* no */
            text-align: center;
            line-height: 42px; /* no */
            div{
                span{
                    font-weight: bold;
                }
            }
        }
        .wx-img{ 
            width: 850px; /* no */
            height: 519px; /* no */
            margin: 94px auto 121px; /* no */
            img{
                width: 100%;
                height: 100%;
            }
        }
        .Introductions{
            width: 885px; /* no */
            text-align: center;
            line-height: 42px; /* no */
            color: #444;
            font-size: 21px; /* no */
            margin: 0 auto 125px; /* no */
        }
        .fb-imgs{
            width: 992px; /* no */
            height: 676px; /* no */
            margin: 0 auto 83px; /* no */
            img{
                width: 100%;
                height: 100%;
            }
        }
        .fb-images{
            width: 991px; /* no */
            height: 446px; /* no */
            margin: 0 auto 145px; /* no */
            img{
                width: 100;
                height: 100%;
            }
        }
    }
    .horizontal-line{
        width: 40px; /* no */
        height: 6px; /* no */
        background: #2474BC;
        margin: 0 auto;
    }
}
</style>