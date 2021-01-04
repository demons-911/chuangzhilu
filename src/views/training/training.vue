<template>
    <div>
        <headers></headers>
        <div class="training">
            <!-- 精诚合作 -->
            <div class="cooperation">
                <div class="fb-left">
                    <div class="blue-bar left-blue-bar"></div>
                    <div class="fb-training">精诚合作</div>
                </div>
                <div class="fb-content">
                    <div class="training-content">
                        <div>创知路联手各地优质教育机构，打造一系列线下培训学校。</div>
                        <div class="space"></div>
                        <div>创知路线下培训学校，将优质的教学资源输入各大城市，提供小学、初中、高中课外培训服务</div>
                        <div class="space"></div>
                        <div>创知路路教学团队基于体系化教学研发，组建由清北、复浙交科人南、985毕业生组成的高质量师资团队，严控教学质量，组织更有效率的课外培优。</div>
                    </div>
                    <div class="right-square">
                        <div class="square1"></div>
                        <div class="square2"></div>
                        <div class="square3"></div>
                        <div class="square4"></div>
                        <div class="square5"></div>
                        <div class="square6"></div>
                        <div class="square7"></div>
                        <div class="square8"></div>
                        <div class="square9"></div>
                        <div class="square10"></div>
                        <div class="square11"></div>
                    </div>
                </div>
                
            </div>
            <!-- 列表切换 -->
            <div class="list">
                <div :class="[active==1?'triangles':active==2?'triangles1':active==3?'triangles2':active==4?'triangles3':active==5?'triangles4':'triangles5']">
                    <img src="./image/triangle.png" alt="">
                </div>
                <el-tabs :tab-position="tabPosition" @tab-click="handleClick">
                    <el-tab-pane label="长 沙 Chang Sha">
                        <div class="list-content">
                            <!-- 头部内容 -->
                            <div class="list-top">
                                <div class="left-title">
                                    <div class="title">长沙子叶创知路培训学校</div>
                                    <div class="left-content">创立于2017年1月，由长沙子叶教育和北京创知路教育共同发起。子叶创知路培训学校围绕第三批新高考、长沙中考、长沙小初衔接开展相应的课外培训业务。</div>
                                </div>
                                <div class="right-code">
                                    <div class="service">
                                        <div class="high-school">高中客服</div>
                                        <div class="service-picture">
                                            <img src="./image/highSchool.jpg" alt="">
                                        </div>
                                    </div>
                                    <div class="service">
                                        <div class="high-school">小初客服</div>
                                        <div class="service-picture">
                                            <img src="./image/primarySchool.jpg" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- 校区环境展示 -->
                            <div class="environments">
                                <div class="environment">
                                    校区环境展示
                                    <span></span>
                                </div>
                            </div>
                            <!-- 图片展示 -->
                            <div class="four-img">
                                <div class="top-img">
                                    <div class="picture shadow">
                                        <img src="./image/trainingSchool.png" alt="">
                                    </div>
                                    <div class="picture shadow">
                                        <img src="./image/corridor.png" alt="">
                                    </div>
                                </div>
                                <div class="bottom-img">
                                    <div class="imgs shadow">
                                        <img src="./image/door.png" alt="">
                                    </div>
                                    <div class="imgs shadow">
                                        <img src="./image/classroom.png" alt="">
                                    </div>
                                </div>
                            </div>
                            <!-- 南门口校区 -->
                            <div class="campus" v-for="(items,index) in lists" :key="index">
                                <div class="fb-campus">
                                    <!-- 南门口校区 -->
                                    {{items.title}}
                                    <span></span>
                                </div>
                                <div class="address">
                                    <div class="address-img">
                                        <img src="./image/address.png" alt="">
                                    </div>
                                    <div class="address-content">
                                        <div class="col">{{items.address}}</div>
                                        <div class="col">{{items.address1}}</div>
                                    </div>
                                </div>
                                <div class="address">
                                    <div class="address-img images">
                                        <img src="./image/phone.png" alt="">
                                    </div>
                                    <div class="address-content">
                                        <div class="col">{{items.phone}}</div>
                                        <div class="col">{{items.num}}</div>
                                    </div>
                                </div>
                                <div class="address-picture shadow">
                                    <img :src="items.url" alt="">
                                </div>
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="成 都 Cheng Du">
                        <div class="list-content">
                            <!-- 头部内容 -->
                            <div class="list-top">
                                <div class="left-title">
                                    <div class="title">成都金苹果创知路培训学校</div>
                                    <div class="left-content">创立于2018年9月，由成都金苹果教育投资集团和北京创知路教育共同发起。金苹果创知路培训学校围绕全国高考新课标三卷、成都中考、成都小学培优开展相应的课外培训业务。</div>
                                </div>
                                <div class="right-code">
                                    <div class="service">
                                        <div class="high-school">高中客服</div>
                                        <div class="service-picture">
                                            <img src="./image/cdHighschool.jpg" alt="">
                                        </div>
                                    </div>
                                    <div class="service">
                                        <div class="high-school">小初客服</div>
                                        <div class="service-picture">
                                            <img src="./image/cdschool.jpg" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- 校区环境展示 -->
                            <div class="environments">
                                <div class="environment">
                                    校区环境展示
                                    <span></span>
                                </div>
                            </div>
                            <!-- 图片展示 -->
                            <div class="four-img">
                                <div class="top-img">
                                    <div class="picture shadow">
                                        <img src="./image/trainingSchool1.png" alt="">
                                    </div>
                                    <div class="picture shadow">
                                        <img src="./image/corridor1.png" alt="">
                                    </div>
                                </div>
                                <div class="bottom-img">
                                    <div class="imgs shadow">
                                        <img src="./image/door1.png" alt="">
                                    </div>
                                    <div class="imgs shadow">
                                        <img src="./image/classroom1.png" alt="">
                                    </div>
                                </div>
                            </div>
                            <!-- 陕西街校区 -->
                            <div class="campus" v-for="(items,index) in school" :key="index">
                                <div class="fb-campus">
                                    <!-- 南门口校区 -->
                                    {{items.title}}
                                    <span></span>
                                </div>
                                <div class="address">
                                    <div class="address-img">
                                        <img src="./image/address.png" alt="">
                                    </div>
                                    <div class="address-content">
                                        <div class="col">{{items.address}}</div>
                                        <div class="col">{{items.address1}}</div>
                                    </div>
                                </div>
                                <div class="address"  v-if="items.num">
                                    <div class="address-img images">
                                        <img src="./image/phone.png" alt="">
                                    </div>
                                    <div class="address-content">
                                        <div class="col">{{items.phone}}</div>
                                        <div class="col">{{items.num}}</div>
                                    </div>
                                </div>
                                <div class="address-picture shadow">
                                    <img :src="items.url" alt="">
                                </div>
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="杭 州 Hang Zhou">
                        <div class="list-content">
                            <!-- 头部内容 -->
                            <div class="list-top">
                                <div class="left-title">
                                    <div class="title">杭州云骥创知路培训学校</div>
                                    <div class="left-content">创立于2019年8月。云骥创知路培训学校围绕浙江新高考、浙江三位一体、杭州中考、杭州小初衔接开展相应的课外培训业务。</div>
                                </div>
                                <div class="right-code">
                                    <div>
                                        <div class="cloud">杭州云骥创知路客服</div>
                                        <div class="cloud-img">
                                            <img src="./image/cloud.jpg" alt="">
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <!-- 校区环境展示 -->
                            <div class="environments">
                                <div class="environment">
                                    校区环境展示
                                    <span></span>
                                </div>
                            </div>
                            <!-- 图片展示 -->
                            <div class="four-img">
                                <div class="top-img">
                                    <div class="picture shadow">
                                        <img src="./image/trainingSchool2.png" alt="">
                                    </div>
                                    <div class="picture shadow">
                                        <img src="./image/corridor2.png" alt="">
                                    </div>
                                </div>
                                <div class="bottom-img">
                                    <div class="imgs shadow">
                                        <img src="./image/door2.png" alt="">
                                    </div>
                                    <div class="imgs shadow">
                                        <img src="./image/classroom2.png" alt="">
                                    </div>
                                </div>
                            </div>
                            <!-- 陕西街校区 -->
                            <div class="campus" v-for="(items,index) in two" :key="index">
                                <div class="fb-campus">
                                    <!-- 南门口校区 -->
                                    {{items.title}}
                                    <span></span>
                                </div>
                                <div class="address">
                                    <div class="address-img">
                                        <img src="./image/address.png" alt="">
                                    </div>
                                    <div class="address-content">
                                        <div class="col">{{items.address}}</div>
                                        <div class="col">{{items.address1}}</div>
                                    </div>
                                </div>
                                <div class="address"  v-if="items.num">
                                    <div class="address-img images">
                                        <img src="./image/phone.png" alt="">
                                    </div>
                                    <div class="address-content">
                                        <div class="col">{{items.phone}}</div>
                                        <div class="col">{{items.num}}</div>
                                    </div>
                                </div>
                                <div class="address-picture shadow">
                                    <img :src="items.url" alt="">
                                </div>
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="西 安 Xi An">
                        <div class="list-content">
                            <!-- 头部内容 -->
                            <div class="list-top">
                                <div class="left-title">
                                    <div class="title">西安伯乐创知路教育培训中心</div>
                                    <div class="left-content">创立于2020年1月，由陕西伯乐教育和北京创知路教育共同发起。伯乐创知路教育培训中心围绕全国新课标二卷、西安中考、西安小学培优开展相应的课外培训业务。</div>
                                </div>
                                <div class="right-code">
                                    <div>
                                        <div class="cloud">西安伯乐创知路客服</div>
                                        <div class="cloud-img">
                                            <img src="./image/bole.jpg" alt="">
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <!-- 校区环境展示 -->
                            <div class="environments">
                                <div class="environment">
                                    校区环境展示
                                    <span></span>
                                </div>
                            </div>
                            <!-- 图片展示 -->
                            <div class="four-img">
                                <div class="top-img">
                                    <div class="picture shadow">
                                        <img src="./image/trainingSchool3.png" alt="">
                                    </div>
                                    <div class="picture shadow">
                                        <img src="./image/corridor3.png" alt="">
                                    </div>
                                </div>
                                <div class="bottom-img">
                                    <div class="imgs shadow">
                                        <img src="./image/door3.png" alt="">
                                    </div>
                                    <div class="imgs shadow">
                                        <img src="./image/classroom3.png" alt="">
                                    </div>
                                </div>
                            </div>
                            <!-- 友谊东路校区 -->
                            <div class="campus" v-for="(items,index) in three" :key="index">
                                <div class="fb-campus">
                                    <!-- 南门口校区 -->
                                    {{items.title}}
                                    <span></span>
                                </div>
                                <div class="address">
                                    <div class="address-img">
                                        <img src="./image/address.png" alt="">
                                    </div>
                                    <div class="address-content">
                                        <div class="col">{{items.address}}</div>
                                        <div class="col">{{items.address1}}</div>
                                    </div>
                                </div>
                                <div class="address"  v-if="items.num">
                                    <div class="address-img images">
                                        <img src="./image/phone.png" alt="">
                                    </div>
                                    <div class="address-content">
                                        <div class="col">{{items.phone}}</div>
                                        <div class="col">{{items.num}}</div>
                                    </div>
                                </div>
                                <div class="address-picture shadow">
                                    <img :src="items.url" alt="">
                                </div>
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="天 津 Tian Jin">
                        <div class="list-content">
                            <!-- 头部内容 -->
                            <div class="list-top">
                                <div class="left-title">
                                    <div class="title">天津弘毅创知路培训学校</div>
                                    <div class="left-content">创立于2020年7月，由天津新弘毅教育和北京创知路教育共同发起。弘毅创知路培训学校围绕天津高考开展相应的课外培训业务。</div>
                                </div>
                                <div class="right-code">
                                    <div>
                                        <div class="cloud">天津弘毅创知路客服</div>
                                        <div class="cloud-img">
                                            <img src="./image/hony.jpg" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- 友谊东路校区 -->
                            <div class="campus">
                                <div class="fb-campus">
                                    <!-- 南门口校区 -->
                                    南开校区
                                    <span></span>
                                </div>
                                <div class="address">
                                    <div class="address-img">
                                        <img src="./image/address.png" alt="">
                                    </div>
                                    <div class="address-content">
                                        <div class="col">校区地址</div>
                                        <div class="col">南开区南开三马路37号中关村e谷（南开）创想世界5层512</div>
                                    </div>
                                </div>
                                <div class="address-picture shadow">
                                    <img src="./image/nankai.png" alt="">
                                </div>
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="重 庆 Chong Qing">
                        <div class="list-content">
                            <!-- 头部内容 -->
                            <div class="list-top">
                                <div class="left-title">
                                    <div class="title">重庆渝峰创知路教育培训学校</div>
                                    <div class="left-content">创立于2019年6月。渝峰创知路教育培训学校围绕第三批新高考、重庆中考、重庆小初衔接开展相应课外培训业务。</div>
                                </div>
                                <div class="right-code">
                                    <div>
                                        <div class="cloud">重庆渝峰创知路客服</div>
                                        <div class="cloud-img">
                                            <img src="./image/chongqingPeak.jpg" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- 校区环境展示 -->
                            <div class="environments">
                                <div class="environment">
                                    校区环境展示
                                    <span></span>
                                </div>
                            </div>
                            <!-- 图片展示 -->
                            <div class="four-img">
                                <div class="top-img">
                                    <div class="picture shadow">
                                        <img src="./image/trainingSchool4.png" alt="">
                                    </div>
                                    <div class="picture shadow">
                                        <img src="./image/corridor4.png" alt="">
                                    </div>
                                </div>
                                <div class="bottom-img">
                                    <div class="imgs shadow">
                                        <img src="./image/door4.png" alt="">
                                    </div>
                                    <div class="imgs shadow">
                                        <img src="./image/classroom4.png" alt="">
                                    </div>
                                </div>
                            </div>
                            <!-- 陕西街校区 -->
                            <div class="campus">
                                <div class="fb-campus">
                                    <!-- 南门口校区 -->
                                    沙坪坝校区
                                    <span></span>
                                </div>
                                <div class="address">
                                    <div class="address-img">
                                        <img src="./image/address.png" alt="">
                                    </div>
                                    <div class="address-content">
                                        <div class="col">校区地址</div>
                                        <div class="col">沙坪坝三峡广场 庆泰大厦5楼</div>
                                    </div>
                                </div>
                                <div class="address">
                                    <div class="address-img images">
                                        <img src="./image/phone.png" alt="">
                                    </div>
                                    <div class="address-content">
                                        <div class="col">电话请拨</div>
                                        <div class="col">023-6508 6680</div>
                                    </div>
                                </div>
                                <div class="address-picture shadow">
                                    <img src="./image/pearls.png" alt="">
                                </div>
                            </div>
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </div>
        <foot></foot>
    </div>    
</template>
<script>
import headers from '../../components/header/header.vue'
import foot from '../../components/foot'
export default {
  components: { headers,foot },
    data(){
        return{
            tabPosition: 'left',
            active: 1,
            // 长沙
            lists:[
                {
                    title:'南门口校区',
                    address:'校区地址',
                    address1:'天心区黄兴南路步行街南3楼（长郡中学西南门向东50米）',
                    phone:'电话请拨',
                    num:'0731-8967 9888',
                    url:require('./image/southGate.png')
                },
                {
                    title:'东塘校区',
                    address:'校区地址',
                    address1:'雨花区劳动西路 中设广场3楼',
                    phone:'电话请拨',
                    num:'0731-8967 9888',
                    url:require('./image/dongTang.png')
                },
                {
                    title:'溁湾镇校区',
                    address:'校区地址',
                    address1:'岳麓区银盆南路155号 绿地缤纷荟2楼',
                    phone:'电话请拨',
                    num:'0731-8223 8887',
                    url:require('./image/bayTown.png')
                },
                {
                    title:'清水塘校区',
                    address:'校区地址',
                    address1:'开福区芙蓉中路1段馨里新闻国际酒店2楼',
                    phone:'电话请拨',
                    num:'0731-8883 8881',
                    url:require('./image/WaterPool.png')
                },
                {
                    title:'八方里校区',
                    address:'校区地址',
                    address1:'岳麓区茶子山中路长房八方里写字楼5楼516',
                    phone:'电话请拨',
                    num:'0731-8693 5888',
                    url:require('./image/eightParty.png')
                }
            ],
            // 成都
            school:[
                {
                    title:'陕西街校区',
                    address:'校区地址',
                    address1:'青羊区陕西街239号华西证券大厦2楼',
                    phone:'电话请拨',
                    num:'028-6199 9313',
                    url:require('./image/schoolBlock.png')
                },
                {
                    title:'磨子桥校区',
                    address:'校区地址',
                    address1:'武侯区一环路南二段6号 龙信大厦3楼',
                    url:require('./image/bridgeCampus.png')
                },
                {
                    title:'孵化园校区',
                    address:'校区地址',
                    address1:'高新区德商国际A座裙楼2楼（地铁1号线孵化园站）',
                    phone:'电话请拨',
                    num:'028-6391 5895',
                    url:require('./image/gardenCampus.png')
                },
            ],
            // 杭州
            two:[
                {
                    title:'滨江校区',
                    address:'校区地址',
                    address1:'杭州市滨江区东信大道688号 志成大厦3楼',
                    url:require('./image/hzgate.png')
                },
                {
                    title:'贡院校区',
                    address:'校区地址',
                    address1:'杭州市下城区体育场路238号1幢3楼',
                    url:require('./image/hzhospital.png')
                },
            ],
            three:[
                {
                    title:'友谊东路校区',
                    address:'校区地址',
                    address1:'碑林区友谊东路 新红锋大厦后楼党校二楼 （铁一中斜对面）',
                    phone:'电话请拨',
                    num:'029-8256 8183',
                    url:require('./image/eastRoad.png')
                },
                {
                    title:'高新校区',
                    address:'校区地址',
                    address1:'雁塔区科技二路41号高新水晶城 C 座',
                    phone:'电话请拨',
                    num:'029-8985 1138',
                    url:require('./image/highNew.png')
                },
                {
                    title:'孵化园校区',
                    address:'校区地址',
                    address1:'高新区德商国际A座裙楼2楼（地铁1号线孵化园站）',
                    phone:'电话请拨',
                    num:'028-6391 5895',
                    url:require('./image/Eggs.png')
                },
            ]
        }
    },
    methods:{
        handleClick(tab){
            console.log(tab.index)
            if(tab.index==0){
                this.active=1
            }else if(tab.index==1){
                this.active=2
            }else if(tab.index==2){
                this.active=3
            }else if(tab.index==3){
                this.active=4
            }else if(tab.index==4){
                this.active=5
            }else if(tab.index==5){
                this.active=6
            }
        } 
    }
}
</script>
<style scoped lang="less">

@media screen and (max-width: 1600px) {
    .training{
        // width: 1424px;
        width: 1397px;
        margin: 0 auto;
        // border: 1px solid #f6f6f6;
        .cooperation{
            width: 1320px;
            height: 505px;
            .fb-left{
                width: 750px;
                margin: 89px 0 0 79px;
                .left-blue-bar{
                    margin-bottom: 23px;
                }
                .fb-training{
                    text-align: left;
                    font-size: 33px;
                    font-family: '微软雅黑';
                    font-weight: 500;
                    color: #444444;
                }
            }
            .fb-content{
                display: flex;
                .training-content{
                    width: 750px;
                    height: 248px;
                    text-align: left;
                    margin: 60px 0 0 79px;
                    font-size: 25px;
                    font-family: '微软雅黑';
                    font-weight: 400;
                    color: #444444;
                    // letter-spacing: 25;
                    line-height: 32px;
                }
                .right-square{
                    position: relative;
                    margin-left: auto;
                    width: 533px;
                    .square1{
                        position: absolute;
                        top: 0;
                        left: 62px;
                        width: 401px;
                        height: 200px;
                        border: 5px solid #0C7FCF;
                        opacity: 0.4;
                    }
                    .square2{
                        position: absolute;
                        top: 41px;
                        width: 385px;
                        height: 122px;
                        background: #166EB8;
                        opacity: 0.3;
                    }
                    .square3{
                        position: absolute;
                        // width: 322px;
                        width: 402px;
                        height: 200px;
                        top: 109px;
                        right: -80px;
                        border: 5px solid #0C7FCF;
                        opacity: 0.5;
                        // border-right: none;
                    }
                    .square4{
                        position: absolute;
                        top: 77px;
                        right: 0;
                        width: 119px;
                        height: 174px;
                        background: #166EB8;
                        opacity: 0.2;
                    }
                    .square5{
                        position: absolute;
                        top: 41px;
                        width: 25px;
                        height: 122px;
                        background: #166EB8;
                        opacity: 0.3;
                    }
                    .square6{
                        position: absolute;
                        top: 13px;
                        right: 0;
                        width: 48px;
                        height: 52px;
                        background: #166EB8;
                        opacity: 0.1;
                    }
                    .square7{
                        position: absolute;
                        top: 13px;
                        right: 22px;
                        width: 26px;
                        height: 52px;
                        background: #166EB8;
                        opacity: 0.1;
                    }
                    .square8{
                        position: absolute;
                        top: 232px;
                        right: 150px;
                        width: 120px;
                        height: 40px;
                        background: #166EB8;
                        opacity: 0.4;
                    }
                    .square9{
                        position: absolute;
                        top: 232px;
                        right: 149px;
                        width: 14px;
                        height: 40px;
                        background: #166EB8;
                        opacity: 0.3;
                    }
                    .square10{
                        position: absolute;
                        top: 221px;
                        right: 349px;
                        width: 159px;
                        height: 32px;
                        border: 5px solid #0C7FCF;
                        opacity: 0.1;
                    }
                    .square11{
                        position: absolute;
                        top: 272px;
                        right: 389px;
                        width: 90px;
                        height: 32px;
                        background: #166EB8;
                        opacity: 0.1;
                    }
                }
            }
        }
    }
    .list{
        position: relative;
        width: 1285px;
        // height: 4261px;
        padding: 15px 78px 74px 77px;
        background: #F6F6F6;
        .list-content{
            position: relative;
            margin-top: 24px;
            border: 1px solid  #2474BC;
            background: #fff;
            .list-top{
                display: flex;
                .left-title{
                    width: 800px;
                    margin-top: 26px;
                    margin-left: 27px;
                    border-bottom: 1px solid #d4d4d4;
                    .title{
                        height: 24px;
                        font-size: 25px;
                        font-family: '微软雅黑';
                        font-weight: 800;
                        color: #2474BC;
                        line-height: 24px;
                        margin-bottom: 25px;
                    }
                    .left-content{
                        width: 780px;
                        font-size: 19px;
                        font-family: '微软雅黑'; 
                        font-weight: 400;
                        color: #444444;
                        line-height: 32px;
                        display:-webkit-box;  // 使其变为伸缩盒
                        -webkit-line-clamp:2; // 设置其要显示的行数
                        -webkit-box-orient:vertical; // 规定子元素的排列方式
                        width:100%;
                        overflow:hidden;
                        text-overflow:ellipsis;
                    }
                }
                .right-code{
                    display: flex;
                    margin-left: auto;
                    width: 198px;
                    height: 126px;
                    border: 1px solid #2474bc;
                    border-top: none;
                    border-right: none;
                    padding: 23px 17px 16px 16px;
                    .service{
                        width: 97px;
                        height: auto;
                        .high-school{
                            width: 97px;
                            height: 20px;
                            font-size: 21px;
                            text-align: center;
                            font-family: '微软雅黑';
                            font-weight: 500;
                            color: #2474BC;
                            line-height: 32px;
                            margin-bottom: 9px;
                        }
                        .service-picture{
                            width: 97px;
                            height: 97px;
                            img{
                                width: 100%;
                                height: 100%;
                            }
                        }
                    }
                }
            }
            .environments{
                .environment{
                    font-size: 25px;
                    font-family: '微软雅黑';
                    font-weight: bold;
                    color: #444444;
                    line-height: 43px;
                    margin-top: 36px;
                    margin-left: 24px;
                }
            }
            .four-img{
                margin: 0 auto;
                width: 1002px;
                padding-bottom: 51px;
                border-bottom: 2px solid #d4d4d4;
                .top-img{
                    display: flex;
                    margin-top: 34px;
                    .picture{
                        width: 532px;
                        height: 210px;
                        img{
                            display: inline-block;
                            width: 100%;
                            height: 100%;
                            border-radius: 15px;
                        }
                    }
                    .picture:nth-child(2){
                        width: 441px;
                        height: 210px;
                        margin-left: 28px;
                    }
                }
                .bottom-img{
                    display: flex;
                    margin-top: 26px;
                    .imgs{ 
                        width: 441px;
                        height: 210px;
                        img{
                            display: inline-block;
                            width: 100%;
                            height: 100%;
                            border-radius: 15px;
                        }
                    }
                    .imgs:nth-child(2){
                        width: 532px;
                        height: 210px;
                        margin-left: 28px;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
            }
            .campus{
                width: 995px;
                margin: 0 auto;
                padding-bottom: 56px;
                border-bottom: 2px solid #d4d4d4;
                .fb-campus{
                    margin-top: 48px;
                    font-size: 25px;
                    font-family: '微软雅黑';
                    font-weight: bold;
                    color: #444444;
                    line-height: 43px;
                }
                .address{
                    display: flex;
                    margin-top: 26px;
                    .address-img{
                        width: 13px;
                        height: 19px;
                        margin-right: 9px;
                        margin-top: 2px;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .address-content{
                        display: flex;
                        font-size: 22px;
                        line-height: 22px;
                        .col:nth-child(1){
                            color: #444;
                            font-family: '微软雅黑';
                            font-weight: bold;
                            margin-right: 15px;
                        }
                        .col:nth-child(2){
                            color: #454545;
                        }
                    }
                    .images{
                        width: 14px;
                        height: 16px;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
                .address-picture{
                    width: 995px;
                    height: 282px;
                    margin-top: 38px;
                    img{
                        display: inline-block;
                        width: 100%;
                        height: 100%;
                        border-radius: 15px;
                    }
                }
            }
            .campus:nth-child(8){
                border-bottom: none;
            }
        }
        .triangles{
            position: absolute;
            top: 62px;
            left: 287px;
            width: 21px;
            height: 25px;
            z-index: 99;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .triangles1{
            position: absolute;
            top: 157px;
            left: 287px;
            width: 21px;
            height: 25px;
            z-index: 99;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .triangles2{
            position: absolute;
            top: 252px;
            left: 287px;
            width: 21px;
            height: 25px;
            z-index: 99;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .triangles3{
            position: absolute;
            top: 347px;
            left: 287px;
            width: 21px;
            height: 25px;
            z-index: 99;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .triangles4{
            position: absolute;
            top: 442px;
            left: 287px;
            width: 21px;
            height: 25px;
            z-index: 99;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .triangles5{
            position: absolute;
            top: 537px;
            left: 287px;
            width: 21px;
            height: 25px;
            z-index: 99;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    .shadow{
        box-shadow: 8px 10px 0 0 rgba(85,85,85,0.09);
        border-radius: 15px;
    }
    .blue-bar{
        width: 47px;
        height: 7px;
        background: #2474BC;
    }
    span{
        display: inline-block;
        width: 5px;
        height: 20px;
        background: #2474BC;
    }
    .space{
        width: 750px;
        height: 30px;
    } 
    /deep/ .el-tabs--left .el-tabs__nav-wrap.is-left::after{
        height: 0 !important;
        width: 0 !important;
    }
    /deep/ .el-tabs--left .el-tabs__active-bar.is-left{
        width: 0;
    }
    /deep/ .el-tabs__item{
        border: 1px solid #2474BC; 
        margin-top: 24px;
        font-size: 21px;
        font-family: '微软雅黑';
        font-weight: 500; 
        color: #2474BC;
        line-height: 71px;
        width: 208px;
        height: 71px;
        text-align: left !important;

    }
    /deep/ .is-active{
        background: #2474BC;
        font-size: 21px;
        font-family: '微软雅黑';
        font-weight: 500;
        color: #FFFFFF !important;
        line-height: 71px;
    }
    /deep/ .el-tabs--left .el-tabs__header.is-left{
        margin-right: 23px;
    }
    .cloud{
        width: 194px;
        height: 20px;
        font-size: 21px;
        font-family: '微软雅黑';
        font-weight: 500;
        
        color: #2474BC;
        line-height: 32px;
    }
    .cloud-img{
        width: 93px;
        height: 93px; 
        margin: 11px auto 0;
        img{
            width: 100%;
            height: 100%;
        }
    }
}
@media screen and(min-width: 1600px) {
    .training{
        width: 1440px; /* no */
        margin: 0 auto; /* no */
        border: 1px solid #f6f6f6; /* no */
        .cooperation{
            width: 1320px; /* no */
            height: 505px; /* no */
            .fb-left{
                width: 750px; /* no */
                margin: 89px 0 0 79px; /* no */
                .left-blue-bar{
                    margin-bottom: 23px; /* no */
                }
                .fb-training{
                    text-align: left;
                    font-size: 33px; /* no */
                    font-family: '微软雅黑';
                    font-weight: 500; /* no */
                    color: #444444;
                }
            }
            .fb-content{
                display: flex;
                .training-content{
                    width: 750px; /* no */
                    height: 248px; /* no */
                    text-align: left;
                    margin: 60px 0 0 79px; /* no *//* no */
                    font-size: 25px; /* no */
                    font-family: '微软雅黑';
                    font-weight: 400; /* no */
                    color: #444444;
                    // letter-spacing: 25;
                    line-height: 32px; /* no */
                }
                .right-square{
                    position: relative;
                    margin-left: auto;
                    width: 533px; /* no */
                    .square1{
                        position: absolute;
                        top: 0;
                        left: 62px; /* no */
                        width: 401px; /* no */
                        height: 200px; /* no */
                        border: 5px solid #0C7FCF; /* no */
                        opacity: 0.4;
                    }
                    .square2{
                        position: absolute;
                        top: 41px; /* no */
                        width: 385px; /* no */
                        height: 122px; /* no */
                        background: #166EB8;
                        opacity: 0.3;
                    }
                    .square3{
                        position: absolute;
                        width: 322px; /* no */
                        height: 200px; /* no */
                        top: 109px; /* no */
                        right: 0;
                        border: 5px solid #0C7FCF; /* no */
                        opacity: 0.5; /* no */
                        border-right: none;
                    }
                    .square4{
                        position: absolute;
                        top: 77px; /* no */
                        right: 0;
                        width: 119px; /* no */
                        height: 174px; /* no */
                        background: #166EB8;
                        opacity: 0.2;
                    }
                    .square5{
                        position: absolute;
                        top: 41px; /* no */
                        width: 25px; /* no */
                        height: 122px; /* no */
                        background: #166EB8;
                        opacity: 0.3;
                    }
                    .square6{
                        position: absolute;
                        top: 13px; /* no */
                        right: 0;
                        width: 48px; /* no */
                        height: 52px; /* no */
                        background: #166EB8;
                        opacity: 0.1;
                    }
                    .square7{
                        position: absolute;
                        top: 13px; /* no */
                        right: 22px; /* no */
                        width: 26px; /* no */
                        height: 52px; /* no */
                        background: #166EB8;
                        opacity: 0.1;
                    }
                    .square8{
                        position: absolute;
                        top: 232px; /* no */
                        right: 150px; /* no */
                        width: 120px; /* no */
                        height: 40px; /* no */
                        background: #166EB8;
                        opacity: 0.4;
                    }
                    .square9{
                        position: absolute;
                        top: 232px; /* no */
                        right: 149px; /* no */
                        width: 14px; /* no */
                        height: 40px; /* no */
                        background: #166EB8;
                        opacity: 0.3;
                    }
                    .square10{
                        position: absolute;
                        top: 221px; /* no */
                        right: 349px; /* no */
                        width: 159px; /* no */
                        height: 32px; /* no */
                        border: 5px solid #0C7FCF; /* no */
                        opacity: 0.1;
                    }
                    .square11{
                        position: absolute;
                        top: 272px; /* no */
                        right: 389px; /* no */
                        width: 90px; /* no */
                        height: 32px; /* no */
                        background: #166EB8;
                        opacity: 0.1;
                    }
                }
            }
        }
    }
    .list{
        position: relative;
        width: 1285px; /* no */
        // height: 4261px;
        padding: 15px 78px 74px 77px; /* no */
        background: #F6F6F6;
        .list-content{
            position: relative;
            margin-top: 24px; /* no */
            border: 1px solid  #2474BC; /* no */
            background: #fff;
            .list-top{
                display: flex;
                .left-title{
                    width: 800px; /* no */
                    margin-top: 26px; /* no */
                    margin-left: 27px; /* no */
                    border-bottom: 1px solid #d4d4d4; /* no */
                    .title{
                        height: 24px; /* no */
                        font-size: 25px; /* no */
                        font-family: '微软雅黑';
                        font-weight: 800; /* no */
                        color: #2474BC;
                        line-height: 24px; /* no */
                        margin-bottom: 25px; /* no */
                    }
                    .left-content{
                        width: 780px; /* no */
                        font-size: 19px; /* no */
                        font-family: '微软雅黑'; 
                        font-weight: 400;
                        color: #444444;
                        line-height: 32px; /* no */
                        display:-webkit-box;  // 使其变为伸缩盒
                        -webkit-line-clamp:2; // 设置其要显示的行数
                        -webkit-box-orient:vertical; // 规定子元素的排列方式
                        width:100%;
                        overflow:hidden;
                        text-overflow:ellipsis;
                    }
                }
                .right-code{
                    display: flex;
                    margin-left: auto;
                    width: 198px; /* no */
                    height: 126px; /* no */
                    border: 1px solid #2474bc; /* no */
                    border-top: none;
                    border-right: none;
                    padding: 23px 17px 16px 16px; /* no */
                    .service{
                        width: 97px; /* no */
                        height: auto;
                        .high-school{
                            width: 97px; /* no */
                            height: 20px; /* no */
                            font-size: 21px; /* no */
                            text-align: center;
                            font-family: '微软雅黑';
                            font-weight: 500;
                            color: #2474BC;
                            line-height: 32px; /* no */
                            margin-bottom: 9px; /* no */
                        }
                        .service-picture{
                            width: 97px; /* no */
                            height: 97px; /* no */
                            img{
                                width: 100%;
                                height: 100%;
                            }
                        }
                    }
                }
            }
            .environments{
                .environment{
                    font-size: 25px; /* no */
                    font-family: '微软雅黑';
                    font-weight: bold;
                    color: #444444;
                    line-height: 43px; /* no */
                    margin-top: 36px; /* no */
                    margin-left: 24px; /* no */
                }
            }
            .four-img{
                margin: 0 auto;
                width: 1002px; /* no */
                padding-bottom: 51px; /* no */
                border-bottom: 2px solid #d4d4d4; /* no */
                .top-img{
                    display: flex;
                    margin-top: 34px; /* no */
                    .picture{
                        width: 532px;/* no */
                        height: 210px; /* no */
                        img{
                            display: inline-block;
                            width: 100%;
                            height: 100%;
                            border-radius: 15px; /* no */
                        }
                    }
                    .picture:nth-child(2){
                        width: 441px; /* no */
                        height: 210px; /* no */
                        margin-left: 28px; /* no */
                    }
                }
                .bottom-img{
                    display: flex;
                    margin-top: 26px; /* no */
                    .imgs{ 
                        width: 441px; /* no */
                        height: 210px; /* no */
                        img{
                            display: inline-block;
                            width: 100%;
                            height: 100%;
                            border-radius: 15px; /* no */
                        }
                    }
                    .imgs:nth-child(2){
                        width: 532px; /* no */
                        height: 210px; /* no */
                        margin-left: 28px; /* no */
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
            }
            .campus{
                width: 995px; /* no */
                margin: 0 auto;
                padding-bottom: 56px; /* no */
                border-bottom: 2px solid #d4d4d4; /* no */
                .fb-campus{
                    margin-top: 48px; /* no */
                    font-size: 25px; /* no */
                    font-family: '微软雅黑';
                    font-weight: bold;
                    color: #444444;
                    line-height: 43px; /* no */
                }
                .address{
                    display: flex;
                    margin-top: 26px; /* no */
                    .address-img{
                        width: 13px; /* no */
                        height: 19px; /* no */
                        margin-right: 9px; /* no */
                        margin-top: 2px; /* no */
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .address-content{
                        display: flex;
                        font-size: 22px; /* no */
                        line-height: 22px; /* no */
                        .col:nth-child(1){
                            color: #444;
                            font-family: '微软雅黑';
                            font-weight: bold;
                            margin-right: 15px; /* no */
                        }
                        .col:nth-child(2){
                            color: #454545;
                        }
                    }
                    .images{
                        width: 14px; /* no */
                        height: 16px; /* no */
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
                .address-picture{
                    width: 995px; /* no */
                    height: 282px; /* no */
                    margin-top: 38px; /* no */
                    img{
                        display: inline-block;
                        width: 100%;
                        height: 100%;
                        border-radius: 15px; /* no */
                    }
                }
            }
            .campus:nth-child(8){
                border-bottom: none;
            }
        }
        .triangles{
            position: absolute;
            top: 62px; /* no */
            left: 287px; /* no */
            width: 21px; /* no */
            height: 25px; /* no */
            z-index: 99;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .triangles1{
            position: absolute;
            top: 157px; /* no */
            left: 287px; /* no */
            width: 21px; /* no */
            height: 25px; /* no */
            z-index: 99;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .triangles2{
            position: absolute;
            top: 252px; /* no */
            left: 287px; /* no */
            width: 21px; /* no */
            height: 25px; /* no */
            z-index: 99;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .triangles3{
            position: absolute;
            top: 347px; /* no */
            left: 287px; /* no */
            width: 21px; /* no */
            height: 25px; /* no */
            z-index: 99;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .triangles4{
            position: absolute;
            top: 442px; /* no */
            left: 287px; /* no */
            width: 21px; /* no */
            height: 25px; /* no */
            z-index: 99;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .triangles5{
            position: absolute;
            top: 537px; /* no */
            left: 287px; /* no */
            width: 21px; /* no */
            height: 25px; /* no */
            z-index: 99;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    .shadow{
        box-shadow: 8px 10px 0 0 rgba(85,85,85,0.09); /* no */
        border-radius: 15px; /* no */
    }
    .blue-bar{
        width: 47px; /* no */
        height: 7px; /* no */
        background: #2474BC;
    }
    span{
        display: inline-block;
        width: 5px; /* no */
        height: 20px; /* no */
        background: #2474BC;
    }
    .space{
        width: 750px; /* no */
        height: 30px; /* no */
    } 
    /deep/ .el-tabs--left .el-tabs__nav-wrap.is-left::after{
        height: 0 !important;
        width: 0 !important;
    }
    /deep/ .el-tabs--left .el-tabs__active-bar.is-left{
        width: 0;
    }
    /deep/ .el-tabs__item{
        border: 1px solid #2474BC; /* no */ 
        margin-top: 24px;/* no */
        font-size: 21px; /* no */
        font-family: '微软雅黑';
        font-weight: 500; 
        color: #2474BC;
        line-height: 71px; /* no */
        width: 208px; /* no *//* no */
        height: 71px; /* no */
        text-align: left !important;

    }
    /deep/ .is-active{
        background: #2474BC;
        font-size: 21px; /* no */
        font-family: '微软雅黑';
        font-weight: 500;
        color: #FFFFFF !important;
        line-height: 71px; /* no */
    }
    /deep/ .el-tabs--left .el-tabs__header.is-left{
        margin-right: 23px; /* no */
    }
    .cloud{
        width: 194px; /* no */
        height: 20px; /* no */
        font-size: 21px; /* no */
        font-family: '微软雅黑';
        font-weight: 500;
        
        color: #2474BC;
        line-height: 32px; /* no */
    }
    .cloud-img{
        width: 93px; /* no */
        height: 93px;  /* no */
        margin: 11px auto 0; /* no */
        img{
            width: 100%;
            height: 100%;
        }
    }
}
</style>