<template>
  <div class="steps">
    <div class="plan-steps" v-for="(item, index) in object" :key="index">
      <!-- 当为奇数时的内容 -->
      <div :class=" index==0 ?'steps-text': index==2 ? 'three-text': index==4? 'four-text': index==6? 'fix-text':'' " v-if="index % 2 ==0">
        <div>{{item.info}}</div>
        <div>{{item.content}}</div>
        <div>{{item.text}}</div>
      </div>

      <div class="steps-line" v-if="index % 2 ==0"></div>
      <!-- 圆圈 -->
      <div class="steps-o">
        <div
          :class="object.length === index + 1? 'steps-lamp steps-activelamp-fail': 'steps-lamp'"
        ></div>
      </div>
      <!-- 偶数时的内容 -->
      <div class="gray">
        <div class="steps-lines" v-if="index % 2"></div>
        <div :class=" index==1 ?'one': index==3 ? 'four': index==5?'five': index==7?'seven':'' " v-if="index % 2">
          <div>{{ item.info }}</div>
          <div>{{item.content}}</div>
          <div>{{item.text}}</div>
          <div>{{item.contents}}</div>
        </div>
      </div>
      <div class="steps-texts" v-if="index==0"></div>
      <div class="three-texts" v-else-if="index==2"></div>
      <div class="four-texts" v-else-if="index==4"></div>
      <div class="fix-texts" v-else-if="index==6"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    object: {
      type: Array,
      default() {
        return [
          {
            info: "2020",
            content: "开设西安、天津培训学校",
            text: "直播业务开始探索",
          },
          {
            info: "2019",
            content: "管理层回购，天使投资成功退出",
            text: "开设杭州、重庆培训学校",
          },
          {
            info: "2018",
            content: "开设成都培训学校",
            text: "",
          },
          {
            info: "2017",
            content: "开设长沙培训学校",
            text: "",
          },
          {
            info: "2016",
            content: "高考业务面市",
            text: "开设高考语文集训课程",
          },
          {
            info: "2015",
            content: "创知路教育帮公众号运营",
            text: "《创知路自主招生数学/物理/面试》系列丛书",
            contents: "荣获“上海交通大学出版社2015年教辅类年度十大好书”",
          },
          {
            info: "2014",
            content: "获得天使投资",
            text: "多家顶尖名校课程合作",
          },
          {
            info: "2013",
            content: "创知路教育成立",
            text: "开设自主招生笔试、面试集训课",
          },
        ];
      },
    },
  },
  methods: {
    // 时间戳
    transformTime(val) {
      if (!val) {
        return "";
      }
      let now = new Date(val * 1000);
      let year = now.getFullYear();
      let month = now.getMonth() + 1;
      let date = now.getDate();
      let hour = now.getHours();
      if (hour.toString().length === 1) {
        hour = "0" + hour;
      }
      let minute = now.getMinutes();
      if (minute.toString().length === 1) {
        minute = "0" + minute;
      }
      return year + "-" + month + "-" + date + " " + hour + ":" + minute;
    },
  },
};
</script>

<style lang="less" scoped>
@media screen and (max-width: 1600px) {
  .steps {
    position: relative;
    width: 1200px;
    margin: 0 auto;
  }
  .plan-steps {
    display: flex;
    position: relative;
    padding-bottom: 187px;
    justify-content: center;
    .steps-o {
      position: absolute;
      .steps-lamp {
        background-color: #cccccc;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        border: 1px #2474bc solid;
        z-index: 2;
        background-color: #2474bc;
      }
      
      .steps-activelamp-fail {
        background-color: #2474bc;
      }
      .steps-activelamp-succeed {
        background-color: #0ca5f1;
      }
    }

    &::after {
      content: "";
      box-sizing: border-box;
      position: absolute;
      height: 100%;
      left: 50%;
      z-index: 1;
      border-left: 2px #2474bc solid;
    }
    &:last-child {
      margin-bottom: 0;
      &::after {
        display: none;
      }
    }
    .steps-text {
      position: relative;
      font-size: 21px;
      color: #444;
      margin-right: 24px;
      text-align: right;
      div:nth-child(1) {
        position: absolute;
        right: 0;
        top: -10px;
        font-size: 25px;
        color: #2474bc;
      }
      div:nth-child(2) {
        margin-top: 25px;
      }
    }
    .steps-active-succeed {
      color: #0ca5f1;
    }
    .steps-active-fail {
      color: #2474bc;
    }
  }
  .plan-steps:nth-child(8){
    .steps-o{
      position: absolute;
      top: -5px;
      .steps-lamp{
        width: 21px;
        height: 21px;
      }
    }
  }
  .steps-line {
    width: 47px;
    height: 2px;
    background-color: #2474bc;
    margin-top: 6px;
  }
  .steps-lines {
    width: 47px;
    height: 2px;
    background-color: #2474bc;
    margin-top: 6px;
    position: absolute;
    left: 50%;
  }
  .steps-texts {
    width: 317px;
  }
  .three-texts {
    width: 254px;
  }
  .four-texts {
    width: 296px;
  }
  .fix-texts {
    width: 296px;
  }
  .one {
    position: relative;
    font-size: 21px;
    color: #444;
    margin-left: 435px;
    text-align: left;
    div:nth-child(1) {
      position: absolute;
      left: 0;
      top: -35px;
      font-size: 25px;
      color: #2474bc;
    }
    div:nth-child(2) {
      margin-top: 25px;
    }
  }
  .four{
    position: relative;
    font-size: 21px;
    color: #444;
    margin-left: 310px;
    text-align: left;
    div:nth-child(1) {
      position: absolute;
      left: 0;
      top: -35px;
      font-size: 25px;
      color: #2474bc;
    }
    div:nth-child(2) {
      margin-top: 25px;
    }
  }
  .five{
    position: relative;
    font-size: 21px;
    color: #444;
    margin-left: 670px;
    text-align: left;
    div:nth-child(1) {
      position: absolute;
      left: 0;
      top: -35px;
      font-size: 25px;
      color: #2474bc;
    }
    div:nth-child(2) {
      margin-top: 25px;
    }
  }
  .seven{
    position: relative;
    font-size: 21px;
    color: #444;
    margin-left: 435px;
    text-align: left;
    div:nth-child(1) {
      position: absolute;
      left: 0;
      top: -35px;
      font-size: 25px;
      color: #2474bc;
    }
    div:nth-child(2) {
      margin-top: 25px;
    }
  }
  .three-text {
    position: relative;
    font-size: 21px;
    color: #444;
    margin-right: 24px;
    text-align: right;
    div:nth-child(1) {
      position: absolute;
      right: 0;
      top: -10px;
      font-size: 25px;
      color: #2474bc;
    }
    div:nth-child(2) {
      margin-top: 25px;
    }
  }
  .four-text{
    position: relative;
    font-size: 21px;
    color: #444;
    margin-right: 24px;
    text-align: right;
    div:nth-child(1) {
      position: absolute;
      right: 0;
      top: -10px;
      font-size: 25px;
      color: #2474bc;
    }
    div:nth-child(2) {
      margin-top: 25px;
    }
  }
  .fix-text{
    position: relative;
    font-size: 21px;
    color: #444;
    margin-right: 24px;
    text-align: right;
    div:nth-child(1) {
      position: absolute;
      right: 0;
      top: -10px;
      font-size: 25px;
      color: #2474bc;
    }
    div:nth-child(2) {
      margin-top: 25px;
    }
  }
}
@media screen and (min-width: 1600px) {
  .steps {
    position: relative;
    width: 1200px; /* no */
    margin: 0 auto;
  }
  .plan-steps {
    display: flex;
    position: relative;
    padding-bottom: 187px; /* no */
    justify-content: center;
    .steps-o {
      position: absolute;
      .steps-lamp {
        background-color: #cccccc;
        width: 14px; /* no */
        height: 14px; /* no */
        border-radius: 50%;
        border: 1px #2474bc solid; /* no */
        z-index: 2;
        background-color: #2474bc;
      }
      
      .steps-activelamp-fail {
        background-color: #2474bc;
      }
      .steps-activelamp-succeed {
        background-color: #0ca5f1;
      }
    }

    &::after {
      content: "";
      box-sizing: border-box;
      position: absolute;
      height: 100%;
      left: 50%;
      z-index: 1;
      border-left: 2px #2474bc solid; /* no */
    }
    &:last-child {
      margin-bottom: 0;
      &::after {
        display: none;
      }
    }
    .steps-text {
      position: relative;
      font-size: 21px; /* no */
      color: #444;
      margin-right: 24px; /* no */
      text-align: right;
      div:nth-child(1) {
        position: absolute;
        right: 0;
        top: -10px; /* no */ 
        font-size: 25px;/* no */
        color: #2474bc;
      }
      div:nth-child(2) {
        margin-top: 25px; /* no */
      }
    }
    .steps-active-succeed {
      color: #0ca5f1;
    }
    .steps-active-fail {
      color: #2474bc;
    }
  }
  .plan-steps:nth-child(8){
    .steps-o{
      position: absolute;
      top: -5px; /* no */
      .steps-lamp{
        width: 21px; /* no */ 
        height: 21px;/* no */
      }
    }
  }
  .steps-line {
    width: 47px; /* no */
    height: 2px; /* no */
    background-color: #2474bc;
    margin-top: 6px; /* no */
  }
  .steps-lines {
    width: 47px; /* no */
    height: 2px; /* no */
    background-color: #2474bc;
    margin-top: 6px; /* no */
    position: absolute;
    left: 50%;
  }
  .steps-texts {
    width: 317px; /* no */
  }
  .three-texts {
    width: 254px; /* no */
  }
  .four-texts {
    width: 296px; /* no */
  }
  .fix-texts {
    width: 296px; /* no */
  }
  .one {
    position: relative;
    font-size: 21px; /* no */
    color: #444;
    margin-left: 435px; /* no */
    text-align: left;
    div:nth-child(1) {
      position: absolute;
      left: 0;
      top: -35px; /* no */
      font-size: 25px; /* no */
      color: #2474bc;
    }
    div:nth-child(2) {
      margin-top: 25px; /* no */
    }
  }
  .four{
    position: relative;
    font-size: 21px; /* no */
    color: #444;
    margin-left: 310px; /* no */
    text-align: left;
    div:nth-child(1) {
      position: absolute;
      left: 0;
      top: -35px; /* no */
      font-size: 25px; /* no */
      color: #2474bc;
    }
    div:nth-child(2) {
      margin-top: 25px; /* no */
    }
  }
  .five{
    position: relative;
    font-size: 21px; /* no */
    color: #444;
    margin-left: 670px; /* no */
    text-align: left;
    div:nth-child(1) {
      position: absolute;
      left: 0;
      top: -35px; /* no */
      font-size: 25px; /* no */
      color: #2474bc;
    }
    div:nth-child(2) {
      margin-top: 25px; /* no */
    }
  }
  .seven{
    position: relative;
    font-size: 21px; /* no */
    color: #444;
    margin-left: 435px; /* no */
    text-align: left;
    div:nth-child(1) {
      position: absolute;
      left: 0;
      top: -35px; /* no */
      font-size: 25px; /* no */
      color: #2474bc;
    }
    div:nth-child(2) {
      margin-top: 25px; /* no */
    }
  }
  .three-text {
    position: relative;
    font-size: 21px; /* no */
    color: #444;
    margin-right: 24px; /* no */
    text-align: right;
    div:nth-child(1) {
      position: absolute;
      right: 0;
      top: -10px; /* no */
      font-size: 25px; /* no */
      color: #2474bc;
    }
    div:nth-child(2) {
      margin-top: 25px; /* no */
    }
  }
  .four-text{
    position: relative;
    font-size: 21px; /* no */
    color: #444;
    margin-right: 24px; /* no */
    text-align: right;
    div:nth-child(1) {
      position: absolute;
      right: 0;
      top: -10px; /* no */
      font-size: 25px; /* no */
      color: #2474bc;
    }
    div:nth-child(2) {
      margin-top: 25px; /* no */
    }
  }
  .fix-text{
    position: relative;
    font-size: 21px; /* no */
    color: #444;
    margin-right: 24px; /* no */
    text-align: right;
    div:nth-child(1) {
      position: absolute;
      right: 0;
      top: -10px; /* no */
      font-size: 25px; /* no */
      color: #2474bc;
    }
    div:nth-child(2) {
      margin-top: 25px; /* no */
    }
  }
}

</style>