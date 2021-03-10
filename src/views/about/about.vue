<template>
    <div class="about">
        <div class="situation">
            <div class="lines"></div>
            <div class="bold">创知路概况</div>
            <div class="sizes">
                创知路教育成立于2013年9月，由多位来自清北的国内<br>
                升学体系过来人共同创立，是国内领先的K12民办教育培训机构。
            </div>
            <div class="situation-img">
                <img src="./image/situation.png" alt="">
            </div>
            <div class="sizes size1">
                公司业务包括小初高课外培训、强基计划学科竞赛规划与培训、<br>
                教育机构管理咨询服务、学校合作课程服务，致力于为学生、家长、学校提供多学段、<br>
                多难度的培训服务，致力于全面提升教育培训机构的课程质量与运营效率。
            </div>
            <div class="situation1-img">
                <img src="./image/situation1.png" alt="">
            </div>
            <div class="sizes size2">
                创知路总部位于北京，在长沙、成都、重庆、杭州、西安、天津开设线下培训学校。<br>
                高中教学教研团队全部毕业于清华、北大、复旦、上交、浙大、中科大、人大、南大，<br>
                初中教学教研团队全部毕业于国内优秀985院校，每年带领数千学生进入国内名校。
            </div>
            <div class="situation2-img">
                <img src="./image/situation2.png" alt="">
            </div>
        </div>
        <div class="course">
            <div class="lines"></div>
            <div class="bold">发展历程</div>
            <div class="circle"></div>
            <Wallet></Wallet>
            <div class="fb-lines"></div>
            <div class="values">价值观、愿景与使命</div>
            <div class="values-content">
                创知路是一个教育行业优秀人才共同创业的平台，<br>
                我们努力打造一系列受人尊重的教育培训企业，让社会精英进入教育行业，<br>
                组建由清北、复浙交科人南、优秀985毕业生组成的教学研发团队，助力学生的成长和发展<br>
            </div>
            <div class="values-image">
                <div class="values-img">
                    <img src="./image/values.png" alt="">
                </div>
            </div>
            <div class="values-Introduction">
                <div class="values-title">创知路人坚定理解并实践创知路的价值观：</div>
                <div class="blue">
                    正直、感恩、责任心<br>
                    自律、上进、解决问题<br>
                    利他、不求回报
                </div>
                <div class="values-fotter">我们相信，智慧上进、勇于创新、正直勤奋，一切自然会有所回报。</div>
            </div>
        </div>
    </div>
</template>
<script>
import Wallet from './wallet-steps.vue'
export default {
    components:{ Wallet }
}
</script>
<style scoped lang='less'>
@media screen and (max-width: 1600px) {
    .about{
        width: 100%;
        height: auto;
        .situation{
            width: 1200px;
            margin: 0 auto;
            margin-top: 164px;
            .lines{
                width: 40px;
                height: 6px;
                background-color: #2474bc;
                margin: 0 auto;
            }
            .bold{
                font-size: 36px;
                color: #444;
                line-height: 37px;
                font-weight: bold;
                margin: 16px auto 0;
                text-align: center;
            }
            .sizes{
                font-size: 21px;
                color: #444;
                line-height: 42px;
                text-align: center;
                margin-top: 28px;
            }
            .size1{
                margin-top: 185px;
            }
            .size1{
                margin-top: 162px;
            }
            .situation-img{
                width: 897px;
                height: 462px;
                margin: 99px auto 0 68px;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .situation1-img{
                width: 945px;
                height: 544px;
                margin: 129px auto 0 218px;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .situation2-img{
                width: 1078px;
                height: 620px;
                margin: 168px auto 190px 62px;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .course{
            width: 100%;
            height: auto;
            background-color: #f6f6f6;
            overflow: hidden;
            text-align: center;
            .lines{
                width: 40px;
                height: 6px;
                background-color: #2474bc;
                margin: 187px auto 0;
            }
            .bold{
                font-size: 36px;
                color: #444;
                line-height: 37px;
                font-weight: bold;
                margin: 16px auto 0;
                text-align: center;
            }
            .circle{
                width: 18px;
                height: 18px;
                border: 3px solid #2474bc;
                border-radius: 50%;
                margin: 89px auto 19px;
            }
            .fb-lines{
                width: 40px;
                height: 6px;
                background: #2474bc;
                margin: 0 auto;
                margin-top: 306px;
            }
            .values{
                font-size: 36px;
                color: #444;
                font-weight: 400;
                margin-top: 16px;
            }
            .values-content{
                text-align: center;
                font-size: 21px;
                color: #444;
                line-height: 42px;
                margin-top: 36px;
            }
            .values-image{
                width: 1200px;
                margin: 110px auto 0;
                .values-img{
                    width: 975px;
                    height: 455px;
                    margin-left: 38px;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .values-Introduction{
                width: 1200px;
                height: 353px;
                color: #444;
                font-size: 21px;
                margin: 103px auto 180px;
                text-align: center;
                border-radius: 57px;
                box-shadow: 0px 6px 10px 0px rgba(71, 73, 68, 0.17);
                background-color: #fff;
                overflow: hidden;
                .values-title{
                    margin-top: 57px;
                }
                .blue{
                    color: #2474bc;
                    margin-top: 40px;
                    line-height: 42px;
                }
                .values-fotter{
                    margin-top: 47px;
                }
            }
            
        }
    }
}
@media screen and (min-width: 1600px) {
    .about{
        width: 100%;
        height: auto;
        .situation{
            width: 1200px; /* no */
            margin: 0 auto;
            margin-top: 164px; /* no */
            .lines{
                width: 40px; /* no */
                height: 6px; /* no */
                background-color: #2474bc;
                margin: 0 auto; 
            }
            .bold{
                font-size: 36px; /* no */
                color: #444;
                line-height: 37px; /* no */
                font-weight: bold;
                margin: 16px auto 0; /* no */
                text-align: center;
            }
            .sizes{
                font-size: 21px; /* no */
                color: #444;
                line-height: 42px; /* no */
                text-align: center;
                margin-top: 28px; /* no */
            }
            .size1{
                margin-top: 185px; /* no */
            }
            .size1{
                margin-top: 162px; /* no */
            }
            .situation-img{
                width: 897px; /* no */
                height: 462px; /* no */
                margin: 99px auto 0 68px; /* no */
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .situation1-img{
                width: 945px; /* no */
                height: 544px; /* no */
                margin: 129px auto 0 218px; /* no */
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .situation2-img{
                width: 1078px; /* no */ 
                height: 620px; /* no */
                margin: 168px auto 190px 62px; /* no */
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .course{
            width: 100%;
            height: auto;
            background-color: #f6f6f6;
            overflow: hidden;
            text-align: center;
            .lines{
                width: 40px; /* no */
                height: 6px; /* no */
                background-color: #2474bc;
                margin: 187px auto 0; /* no */
            }
            .bold{
                font-size: 36px; /* no */
                color: #444;
                line-height: 37px; /* no */
                font-weight: bold;
                margin: 16px auto 0; /* no */
                text-align: center;
            }
            .circle{
                width: 18px; /* no */
                height: 18px; /* no */
                border: 3px solid #2474bc; /* no */
                border-radius: 50%;
                margin: 89px auto 19px; /* no */
            }
            .fb-lines{
                width: 40px; /* no */
                height: 6px; /* no */
                background: #2474bc;
                margin: 0 auto;
                margin-top: 306px; /* no */
            }
            .values{
                font-size: 36px; /* no */
                color: #444;
                font-weight: 400;
                margin-top: 16px; /* no */
            }
            .values-content{
                text-align: center;
                font-size: 21px; /* no */
                color: #444;
                line-height: 42px; /* no */
                margin-top: 36px; /* no */
            }
            .values-image{
                width: 1200px; /* no */
                margin: 110px auto 0; /* no */
                .values-img{
                    width: 975px; /* no */
                    height: 455px; /* no */
                    margin-left: 38px; /* no */
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .values-Introduction{
                width: 1200px; /* no */
                height: 353px; /* no */
                color: #444;
                font-size: 21px; /* no */
                margin: 103px auto 180px; /* no */
                text-align: center;
                border-radius: 57px; /* no */
                box-shadow: 0px 6px 10px 0px rgba(71, 73, 68, 0.17); /* no */
                background-color: #fff;
                overflow: hidden;
                .values-title{
                    margin-top: 57px; /* no */
                }
                .blue{
                    color: #2474bc;
                    margin-top: 40px; /* no */
                    line-height: 42px; /* no */
                }
                .values-fotter{
                    margin-top: 47px; /* no */
                }
            }
            
        }
    }
}

</style>