<template>
    <div>
        <div class="bg">
            <div class="contacts-img">
                <img src="./image/banner1.png" alt="">
            </div>
            
        </div>
        <div class="nav">
            <div class="four-nav">
                <div class="service" @click="detail('service')">
                    <span></span>
                    官方客服
                </div>
                <div class="service" @click="detail('talent')">
                    <span></span>
                    人才招聘
                </div>
                <div class="service" @click="detail('cooperation')">
                    <span></span>
                    机构/学校合作
                </div>
                <div class="service" @click="detail('school')">
                    <span></span>
                    培训学校
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    methods:{
        detail(type){
            let that=this
            that.$router.push({path:"/"+type})
        }
    }
}
</script>
<style scoped lang='less'>
@media screen and (max-width: 1600px){
    .bg{
        width: 1200px;
        height: auto;
        margin: 0 auto;
        .contacts-img{
            width: 1343px;
            height: 539px;
            margin-top: 64px;
            margin-left: -86px;
            margin-bottom: 50px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        
    }
    .nav{
        width: 100%;
        height: 527px;
        background: #f6f6f6;
        .four-nav{
            width: 1200px;
            height: 100%;
            margin: 0 auto;
            display: flex;
            align-items: center;
            .service{
                width: 280px;
                height: 225px;
                line-height: 225px;
                text-align: center;
                margin-right: 27px;
                background: #fff;
                font-size: 29px;
                font-family: '微软雅黑';
                color: #444;
                font-weight: 400;
                border-radius: 13px;
                span{
                    display: inline-block;
                    width: 6px;
                    height: 20px;
                    background: #2474bc;
                    // margin-right: 10px;
                }
            }
            .service:nth-child(4){
                margin-right: 0;
            }
            .service:hover{
                cursor: pointer;
            }
        }
    }
}
@media screen and (min-width: 1600px){
    .bg{
        width: 1200px; /* no */
        height: auto;
        margin: 0 auto;
        .contacts-img{
            width: 1343px; /* no */
            height: 539px; /* no */
            margin-top: 64px; /* no */
            margin-left: -86px; /* no */
            margin-bottom: 50px; /* no */
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    .nav{
        width: 100%;
        height: 527px; /* no */
        background: #f6f6f6;
        .four-nav{
            width: 1200px; /* no */
            height: 100%;
            margin: 0 auto;
            display: flex;
            align-items: center;
            .service{
                width: 280px; /* no */
                height: 225px; /* no */
                line-height: 225px; /* no */
                text-align: center;
                margin-right: 27px; /* no */
                background: #fff;
                font-size: 29px; /* no */
                font-family: '微软雅黑';
                color: #444;
                font-weight: 400;
                border-radius: 13px; /* no */
                span{
                    display: inline-block;
                    width: 6px; /* no */
                    height: 20px; /* no */
                    background: #2474bc;
                }
            }
            .service:nth-child(4){
                margin-right: 0;
            }
            .service:hover{
                cursor: pointer;
            }
        }
    }
}

</style>