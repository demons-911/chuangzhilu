<template>
    <div>
        <div class="training">
            <!-- 精诚合作 -->
            <div class="cooperation">
                
                <div class="fb-content">
                    <div class="training-content">
                        <div class="fb-left">
                            <div class="blue-bar left-blue-bar"></div>
                            <div class="fb-training">精诚合作</div>
                        </div>
                        <div>创知路联手各地优质教育机构，打造一系列线下培训学校。</div>
                        <div class="space"></div>
                        <div>创知路线下培训学校，将优质的教学资源输入各大城市，提供小学、初中、高中课外培训服务。</div>
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
            <div class="fb-bg">
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
                                        <div class="one-code">
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
                                        <div class="one-code">
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
                                        <div class="one-code">
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
                                        <div class="one-code">
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
            
        </div>
    </div>    
</template>
<script>
export default {
    data(){
        return{
            scroll:'',
            tabPosition: 'left',
            pop:1,
            pupop:'',
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
    created(){
        
    },
    methods:{
        handleClick(tab){
            this.active=Number(tab.index)+1
        },
        getScrollTop() {            
            var scrollTop = window.pageYOffset  //用于FF
                || document.documentElement.scrollTop 
                || document.body.scrollTop
                || 0;
            return scrollTop        
        },
        handleScroll () {                   
            let screenH = document.body.clientHeight
            // let windowScrollY = window.scrollY;
            // console.log(screenH)
            let windowScrollY = this.getScrollTop()
            // 灰色区域高度
            let box=document.getElementsByClassName('fb-bg')[0];
            let highs=window.getComputedStyle(box).height
            // 头部高度
            let headerHigh=document.getElementsByClassName('header-top')[0];
            let highly=window.getComputedStyle(headerHigh).height
            let num=highly.replace('px','')
            let nums=parseFloat(num)
            // 白色区域高度
            let box1=document.getElementsByClassName('cooperation')[0];
            let highlys=window.getComputedStyle(box1).height
            let number=highlys.replace('px','')
            let numbers=parseFloat(number)
            var total=nums+numbers
            // 获取margin值
            let mar=document.getElementsByClassName('list-content')[0]
            let style=window.getComputedStyle(mar,null).marginTop
            let styles=style.replace('px','')
            let margin=parseFloat(styles)
            console.log(margin,523146)
            // 获取箭头的top值
            // if(this.pop <= 1){
            //     let arrows=document.getElementsByClassName('triangles')[0]
            //     let top1=window.getComputedStyle(arrows,null).top
            //     let tops=top1.replace('px','')
            //     let top3=parseFloat(tops)
            //     this.pupop=top3
            //     console.log(top3,1111111)
            //     this.pop=this.pop+1
            // }
            
            if (windowScrollY > total) {
                // 当滚动大于一屏高度时的操作
                if(windowScrollY > highs+total){
                    
                }else{
                    let tab=document.getElementsByClassName('el-tabs__nav')[0] 
                    var high=Number(windowScrollY-total+margin)
                    var triangle=Number(windowScrollY-total+this.pupop)
                    tab.setAttribute('style','margin-top:'+high+'px')
                }   
            } else {
                // 当滚动小于于一屏高度时的操作
                let tab=document.getElementsByClassName('el-tabs__nav')[0]
                tab.setAttribute('style','margin-top:'+margin+'px')
            }
        },
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll, true);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll, true);
    }
}
</script>
<style scoped lang="less">

@media screen and (max-width: 1600px) {
    .training{
        .cooperation{
            width: 1200px;
            height: 432px;
            margin: 0 auto;
            .fb-content{
                display: flex;
                .training-content{
                    width:650px;
                    text-align: left;
                    font-size: 16px;
                    font-family: '微软雅黑';
                    font-weight: 400;
                    color: #444444;
                    line-height: 32px;
                    .fb-left{
                        width: 650px;
                        margin: 89px 0 25px;
                        .left-blue-bar{
                            margin-bottom: 23px;
                        }
                        .fb-training{
                            text-align: left;
                            font-size: 32px;
                            font-family: '微软雅黑';
                            font-weight: 500;
                            color: #444444;
                        }
                    }
                }
                .right-square{
                    position: relative;
                    margin-top: 89px;
                    margin-left: 109px;
                    width: 533px;
                    .square1{
                        position: absolute;
                        top: 0;
                        left: 40px;
                        width: 258px;
                        height: 172px;
                        border: 4px solid #0C7FCF;
                        opacity: 0.4;
                    }
                    .square2{
                        position: absolute;
                        top: 35px;
                        width: 247px;
                        height: 105px;
                        background: #166EB8;
                        opacity: 0.3;
                    }
                    .square3{
                        position: absolute;
                        width: 344px;
                        height: 172px;
                        top: 93px;
                        left: 135px;
                        border: 4px solid #0C7FCF;
                        opacity: 0.5;
                    }
                    .square4{
                        position: absolute;
                        top: 65px;
                        left: 265px;
                        width: 251px;
                        height: 149px;
                        background: #166EB8;
                        opacity: 0.2;
                    }
                    .square5{
                        position: absolute;
                        top: 35px;
                        width: 16px;
                        height: 105px;
                        background: #166EB8;
                        opacity: 0.3;
                    }
                    .square6{
                        position: absolute;
                        top: 11px;
                        left: 311px;
                        width: 89px;
                        height: 44px;
                        background: #166EB8;
                        opacity: 0.1;
                    }
                    .square7{
                        position: absolute;
                        top: 11px;
                        left: 311px;
                        width: 17px;
                        height: 44px;
                        background: #166EB8;
                        opacity: 0.1;
                    }
                    .square8{
                        position: absolute;
                        top: 198px;
                        left: 169px;
                        width: 77px;
                        height: 34px;
                        background: #166EB8;
                        opacity: 0.4;
                    }
                    .square9{
                        position: absolute;
                        top: 198px;
                        left: 237px;
                        width: 9px;
                        height: 34px;
                        background: #166EB8;
                        opacity: 0.3;
                    }
                    .square10{
                        position: absolute;
                        top: 189px;
                        left: 16px;
                        width: 102px;
                        height: 27px;
                        border:4px solid #0C7FCF;
                        opacity: 0.1;
                    }
                    .square11{
                        position: absolute;
                        top: 232px;
                        left: 35px;
                        width: 58px;
                        height: 27px;
                        background: #166EB8;
                        opacity: 0.1;
                    }
                }
            }
        }
    }
    .fb-bg{
        width: 100%;
        background: #F6F6F6;
        .list{
            position: relative;
            width: 1200px;
            margin: 0 auto;
            .list-content{
                width: 973px;
                position: relative;
                margin-top: 33px;
                border: 1px solid  #2474BC;
                background: #fff;
                .list-top{
                    display: flex;
                    .left-title{
                        width: 681px;
                        margin-top: 24px;
                        margin-left: 43px;
                        border-bottom: 1px solid #d4d4d4;
                        .title{
                            height: 16px;
                            font-size: 22px;
                            font-family: '微软雅黑';
                            font-weight: 800;
                            color: #2474BC;
                            line-height: 24px;
                            margin-bottom: 16px;
                        }
                        .left-content{
                            width: 645px;
                            font-size: 16px;
                            font-family: '微软雅黑'; 
                            font-weight: 400;
                            color: #444444;
                            line-height: 32px;
                            display:-webkit-box;  // 使其变为伸缩盒
                            -webkit-line-clamp:2; // 设置其要显示的行数
                            -webkit-box-orient:vertical; // 规定子元素的排列方式
                            overflow:hidden;
                            text-overflow:ellipsis;
                        }
                    }
                    .right-code{
                        display: flex;
                        margin-left: auto;
                        width: 215px;
                        height: 108px;
                        border: 1px solid #2474bc;
                        border-top: none;
                        border-right: none;
                        padding: 24px 17px 16px 16px;
                        .service{
                            width: 97px;
                            height: auto;
                            margin-left: 10px;
                            .high-school{
                                width: 97px;
                                font-size: 18px;
                                text-align: center;
                                font-family: '微软雅黑';
                                font-weight: 500;
                                color: #2474BC;
                                line-height: 27px;
                                margin-bottom: 5px;
                            }
                            .service-picture{
                                width: 79px;
                                height: 79px;
                                margin: 0 auto;
                                img{
                                    width: 100%;
                                    height: 100%;
                                }
                            }
                        }
                        .service:nth-child(2){
                            margin-left: 0;
                        }
                    }
                }
                .environments{
                    .environment{
                        font-size: 22px;
                        font-family: '微软雅黑';
                        font-weight: bold;
                        color: #444444;
                        margin-top: 33px;
                        margin-left: 43px;
                        line-height: 22px;
                        span{
                            display: inline-block;
                            width: 5px;
                            height: 20px;
                            background: #2474BC;
                            vertical-align: bottom;
                        }
                    }
                }
                .four-img{
                    margin: 0 auto;
                    width: 973px;
                    padding-bottom: 51px;
                    border-bottom: 2px solid #d4d4d4;
                    .top-img{
                        display: flex;
                        width: 893px;
                        margin: 34px auto 0;
                        .picture{
                            width: 473px;
                            height: 187px;
                            img{
                                display: inline-block;
                                width: 100%;
                                height: 100%;
                                border-radius: 15px;
                            }
                        }
                        .picture:nth-child(2){
                            width: 392px;
                            height: 187px;
                            margin-left: 28px;
                        }
                    }
                    .bottom-img{
                        display: flex;
                        width: 893px;
                        margin: 26px auto 0;
                        .imgs{ 
                            width: 392px;
                            height:187px;
                            img{
                                display: inline-block;
                                width: 100%;
                                height: 100%;
                                border-radius: 15px;
                            }
                        }
                        .imgs:nth-child(2){
                            width: 473px;
                            height: 187px;
                            margin-left: 28px;
                            img{
                                width: 100%;
                                height: 100%;
                            }
                        }
                    }
                }
                .campus{
                    width: 973px;
                    margin: 0 auto;
                    padding-bottom: 56px;
                    border-bottom: 2px solid #d4d4d4;
                    .fb-campus{
                        margin-top: 33px;
                        margin-left: 43px;
                        font-size: 22px;
                        font-family: '微软雅黑';
                        font-weight: bold;
                        color: #444444;
                        line-height: 22px;
                    }
                    .address{
                        display: flex;
                        margin-top: 14px;
                        margin-left: 43px;
                        .address-img{
                            width: 11px;
                            height: 16px;
                            margin-right: 8px;
                            margin-top: 4px;
                            img{
                                width: 100%;
                                height: 100%;
                            }
                        }
                        .address-content{
                            display: flex;
                            font-size: 16px;
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
                        width: 888px;
                        height: 241px;
                        margin: 24px auto 0;
                        img{
                            display: inline-block;
                            width: 100%;
                            height: 100%;
                            border-radius: 28px;
                        }
                    }
                }
                .campus:nth-child(8){
                    border-bottom: none;
                }
            }
            .triangles{
                position: absolute;
                top: 49px;
                left: 205px;
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
                top: 130px;
                left: 205px;
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
                top: 211px;
                left: 205px;
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
                top: 292px;
                left: 205px;
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
                top: 373px;
                left: 205px;
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
                top: 454px;
                left: 205px;
                width: 21px;
                height: 25px;
                z-index: 99;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
    .one-code{
        margin: 0 auto;
    }
    .shadow{
        box-shadow: 5px 7px 0 0 rgba(85,85,85,0.05);
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
        vertical-align: bottom;
    }
    .space{
        width: 650px;
        height: 19px;
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
        margin-top: 20px;
        font-size: 19px;
        font-family: '微软雅黑';
        font-weight: 500; 
        color: #2474BC;
        line-height: 61px;
        width: 178px;
        height: 61px;
        padding-left: 10px;
        text-align: left !important;
    }
    /deep/ .el-tabs__nav{
        margin-top: 33px;
    }
    /deep/ .is-active{
        background: #2474BC;
        font-size: 19px;
        font-family: '微软雅黑';
        font-weight: 500;
        color: #FFFFFF !important;
        line-height: 61px;
    }
    /deep/ .el-tabs--left .el-tabs__header.is-left{
        margin-right: 48px;
    }
    .cloud{
        width: 167px;
        height: 17px;
        font-size: 18px;
        font-family: '微软雅黑';
        font-weight: 500;
        
        color: #2474BC;
        line-height: 27px;
    }
    .cloud-img{
        width: 79px;
        height: 79px; 
        margin: 5px auto 0;
        img{
            width: 100%;
            height: 100%;
        }
    }
   
}

@media screen and(min-width: 1600px) {
    .training{
        .cooperation{
            width: 1200px; /* no */
            height: 432px; /* no */
            margin: 0 auto;
            .fb-content{
                display: flex;
                .training-content{
                    width:650px; /* no */
                    text-align: left;
                    font-size: 16px; /* no */
                    font-family: '微软雅黑';
                    font-weight: 400; /* no */
                    color: #444444;
                    line-height: 32px; /* no */
                    .fb-left{
                        width: 650px; /* no */
                        margin: 89px 0 25px; /* no */
                        .left-blue-bar{
                            margin-bottom: 23px; /* no */
                        }
                        .fb-training{
                            text-align: left;
                            font-size: 32px; /* no */
                            font-family: '微软雅黑';
                            font-weight: 500; /* no */
                            color: #444444;
                        }
                    }
                }
                .right-square{
                    position: relative;
                    margin-left: 109px; /* no */
                    margin-top: 89px; /* no */
                    width: 533px; /* no */
                    .square1{
                        position: absolute;
                        top: 0;
                        left: 40px; /* no */
                        width: 258px; /* no */
                        height: 172px; /* no */
                        border: 4px solid #0C7FCF; /* no */
                        opacity: 0.4;
                    }
                    .square2{
                        position: absolute;
                        top: 35px; /* no */
                        width: 247px; /* no */
                        height: 105px; /* no */
                        background: #166EB8;
                        opacity: 0.3;
                    }
                    .square3{
                        position: absolute;
                        width: 344px; /* no */
                        height: 172px; /* no */
                        top: 93px; /* no */
                        left: 135px; /* no */
                        border: 4px solid #0C7FCF; /* no */
                        opacity: 0.5; /* no */
                    }
                    .square4{
                        position: absolute;
                        top: 65px; /* no */
                        left: 265px; /* no */
                        width: 251px; /* no */
                        height: 149px; /* no */
                        background: #166EB8;
                        opacity: 0.2;
                    }
                    .square5{
                        position: absolute;
                        top: 35px; /* no */
                        width: 16px; /* no */
                        height: 105px; /* no */
                        background: #166EB8;
                        opacity: 0.3;
                    }
                    .square6{
                        position: absolute;
                        top: 11px; /* no */
                        left: 311px; /* no */
                        width: 89px; /* no */
                        height: 44px; /* no */
                        background: #166EB8;
                        opacity: 0.1;
                    }
                    .square7{
                        position: absolute;
                        top: 11px; /* no */
                        left: 311px; /* no */
                        width: 17px; /* no */
                        height: 44px; /* no */
                        background: #166EB8;
                        opacity: 0.1;
                    }
                    .square8{
                        position: absolute;
                        top: 198px; /* no */
                        left: 169px; /* no */
                        width: 77px; /* no */
                        height: 34px; /* no */
                        background: #166EB8;
                        opacity: 0.4;
                    }
                    .square9{
                        position: absolute;
                        top: 198px; /* no */
                        left: 237px; /* no */
                        width: 9px; /* no */
                        height: 34px; /* no */
                        background: #166EB8;
                        opacity: 0.3;
                    }
                    .square10{
                        position: absolute;
                        top: 189px; /* no */
                        left: 16px; /* no */
                        width: 102px; /* no */
                        height: 27px; /* no */
                        border: 4px solid #0C7FCF; /* no */
                        opacity: 0.1;
                    }
                    .square11{
                        position: absolute;
                        top: 232px; /* no */
                        left: 35px; /* no */
                        width: 58px; /* no */
                        height: 27px; /* no */
                        background: #166EB8;
                        opacity: 0.1;
                    }
                }
            }
        }
    }
    .fb-bg{
        width: 100%;
        background: #F6F6F6;
        .list{
            position: relative;
            width: 1200px; /* no */
            margin: 0 auto;
            .list-content{
                width: 973px; /* no */
                position: relative;
                margin-top: 33px; /* no */
                border: 1px solid  #2474BC; /* no */
                background: #fff;
                .list-top{
                    display: flex;
                    .left-title{
                        width: 681px; /* no */
                        margin-top: 24px; /* no */
                        margin-left: 43px; /* no */
                        border-bottom: 1px solid #d4d4d4; /* no */
                        .title{
                            height: 16px; /* no */
                            font-size: 22px; /* no */
                            font-family: '微软雅黑';
                            font-weight: 800; /* no */
                            color: #2474BC;
                            line-height: 24px; /* no */
                            margin-bottom: 16px; /* no */
                        }
                        .left-content{
                            width: 645px; /* no */
                            font-size: 16px; /* no */
                            font-family: '微软雅黑'; 
                            font-weight: 400;
                            color: #444444;
                            line-height: 32px; /* no */
                            display:-webkit-box;  // 使其变为伸缩盒
                            -webkit-line-clamp:2; // 设置其要显示的行数
                            -webkit-box-orient:vertical; // 规定子元素的排列方式
                            overflow:hidden;
                            text-overflow:ellipsis;
                        }
                    }
                    .right-code{
                        display: flex;
                        margin-left: auto;
                        width: 215px; /* no */
                        height: 108px; /* no */
                        border: 1px solid #2474bc; /* no */
                        border-top: none;
                        border-right: none;
                        padding: 24px 17px 16px 16px; /* no */
                        .service{
                            width: 97px; /* no */
                            height: auto;
                            margin-left: 10px; /* no */
                            .high-school{
                                width: 97px; /* no */
                                font-size: 18px; /* no */
                                text-align: center;
                                font-family: '微软雅黑';
                                font-weight: 500;
                                color: #2474BC;
                                line-height: 27px; /* no */
                                margin-bottom: 5px; /* no */
                            }
                            .service-picture{
                                width: 79px; /* no */
                                height: 79px; /* no */
                                margin: 0 auto;
                                img{
                                    width: 100%;
                                    height: 100%;
                                }
                            }
                        }
                        .service:nth-child(2){
                            margin-left: 0;
                        }
                    }
                }
                .environments{
                    .environment{
                        font-size: 22px; /* no */
                        font-family: '微软雅黑';
                        font-weight: bold;
                        color: #444444;
                        line-height: 20px; /* no */
                        margin-top: 33px; /* no */
                        margin-left: 43px; /* no */
                    }
                }
                .four-img{
                    margin: 0 auto;
                    width: 973px; /* no */
                    padding-bottom: 51px; /* no */
                    border-bottom: 2px solid #d4d4d4; /* no */
                    .top-img{
                        display: flex;
                        width: 893px; /* no */
                        margin: 34px auto 0; /* no */
                        .picture{
                            width: 473px;/* no */
                            height: 187px; /* no */
                            img{
                                display: inline-block;
                                width: 100%;
                                height: 100%;
                                border-radius: 15px; /* no */
                            }
                        }
                        .picture:nth-child(2){
                            width: 392px; /* no */
                            height: 187px; /* no */
                            margin-left: 28px; /* no */
                        }
                    }
                    .bottom-img{
                        display: flex;
                        width: 893px; /* no */
                        margin: 26px auto 0; /* no */
                        .imgs{ 
                            width: 392px; /* no */
                            height: 187px; /* no */
                            img{
                                display: inline-block;
                                width: 100%;
                                height: 100%;
                                border-radius: 15px; /* no */
                            }
                        }
                        .imgs:nth-child(2){
                            width: 473px; /* no */
                            height: 187px; /* no */
                            margin-left: 28px; /* no */
                            img{ 
                                width: 100%;
                                height: 100%;
                            }
                        }
                    }
                }
                .campus{
                    width: 973px; /* no */
                    margin: 0 auto;
                    padding-bottom: 56px; /* no */
                    border-bottom: 2px solid #d4d4d4; /* no */
                    .fb-campus{
                        margin-top: 33px; /* no */
                        margin-left: 43px; /* no */
                        font-size: 22px; /* no */
                        font-family: '微软雅黑';
                        font-weight: bold;
                        color: #444444;
                        line-height: 20px; /* no */
                    }
                    .address{
                        display: flex;
                        margin-top: 14px; /* no */
                        margin-left: 43px; /* no */
                        .address-img{
                            width: 11px; /* no */
                            height: 16px; /* no */
                            margin-right: 8px; /* no */
                            margin-top: 4px; /* no */
                            img{
                                width: 100%;
                                height: 100%;
                            }
                        }
                        .address-content{
                            display: flex;
                            font-size: 16px; /* no */
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
                        width: 888px; /* no */
                        height: 241px; /* no */
                        margin: 24px auto 0; /* no */
                        img{
                            display: inline-block;
                            width: 100%;
                            height: 100%;
                            border-radius: 28px; /* no */
                        }
                    }
                }
                .campus:nth-child(8){
                    border-bottom: none;
                }
            }
            .triangles{
                position: absolute;
                top: 49px; /* no */
                left: 205px; /* no */
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
                top: 130px; /* no */
                left: 205px; /* no */
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
                top: 211px; /* no */
                left: 205px; /* no */
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
                top: 292px; /* no */
                left: 205px; /* no */
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
                top: 373px; /* no */
                left: 205px; /* no */
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
                top: 454px; /* no */
                left: 205px; /* no */
                width: 21px; /* no */
                height: 25px; /* no */
                z-index: 99;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
    .one-code{
        margin: 0 auto;
    }
    .shadow{
        box-shadow: 5px 7px 0 0 rgba(85,85,85,0.05); /* no */
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
        width: 650px; /* no */
        height: 10px; /* no */
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
        margin-top: 20px;/* no */
        font-size: 19px; /* no */
        font-family: '微软雅黑';
        font-weight: 500; 
        color: #2474BC;
        line-height: 61px; /* no */
        width: 178px; /* no *//* no */
        height: 61px; /* no */
        padding-left: 10px; /* no */
        text-align: left !important;

    }
    /deep/ .el-tabs__nav{
        margin-top: 33px; /* no */
    }
    /deep/ .is-active{
        background: #2474BC;
        font-size: 19px; /* no */
        font-family: '微软雅黑';
        font-weight: 500;
        color: #FFFFFF !important;
        line-height: 61px; /* no */
    }
    /deep/ .el-tabs--left .el-tabs__header.is-left{
        margin-right: 48px; /* no */
    }
    .cloud{
        width: 167px; /* no */
        height: 17px; /* no */
        font-size: 18px; /* no */
        font-family: '微软雅黑';
        font-weight: 500;
        
        color: #2474BC;
        line-height: 27px; /* no */
    }
    .cloud-img{
        width: 79px; /* no */
        height: 79px;  /* no */
        margin: 5px auto 0; /* no */
        img{
            width: 100%;
            height: 100%;
        }
    }
}
</style>