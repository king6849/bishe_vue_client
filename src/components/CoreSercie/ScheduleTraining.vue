<template>
  <div class="container-fluid">
    <div class="row">
      <HeaderNav></HeaderNav>
    </div>
    <div class="row " style="margin-top: 5%;">
      <div class="col-md-8 centerHorizontallis border introduction">
        <div class="noNewLine">
          <img src="../../assets/train/train1.jpg" alt="."/>
        </div>

        <div class="noNewLine introductionContext classes">
          <h3>上海体育学院游泳馆游泳培训 </h3>
          <p>本课程由宝贝营天下游泳营 提供(宝贝营天下游泳营的所有课程) 有 659 人关注该课程</p>
          <p>课程分类：游泳</p>
          <p>咨询电话： 400-968-9396</p>
          <p>上课地点： [上海体育学院游泳馆]上海杨浦长海路345号</p>
          <!--          <p>学费：￥{{ showTuition }}</p>-->
          <!--          <p>报名时间：2021-01-25 00:00:00 至2021-01-28 00:00:00</p>-->
          <!--          <p>下次报名时间：2021-02-2 00:00:00 至2021-02-5 00:00:00</p>-->
          <!--          班级：<br>-->
          <!--          <button class="btn btn-light noNewLine select_class_btn" id="class_1" v-on:click="selectClass">一对一7课时</button>-->
          <!--          <button class="btn btn-light noNewLine select_class_btn" id="class_2" v-on:click="selectClass">一对二7课时</button>-->
          <!--          <button class="btn btn-light noNewLine select_class_btn" id="class_3" v-on:click="selectClass">一对三7课时</button>-->
          <!--          <button class="btn btn-light noNewLine select_class_btn" id="class_4" v-on:click="selectClass">一对一10课时-->
          <!--          </button>-->
          <!--          <button class="btn btn-light noNewLine select_class_btn" id="class_5" v-on:click="selectClass">一对二10课时-->
          <!--          </button>-->
          <!--          <button class="btn btn-light noNewLine select_class_btn" id="class_6" v-on:click="selectClass">一对三10课时-->
          <!--          </button>-->
          <!--          <br>-->
          <!--          <button class="btn btn-danger rounded yuyueBtn" v-on:click="orderNow">立即报名</button>-->
        </div>
      </div>
    </div>

    <!--  细节  -->
    <div class="row mt-md-4">
      <div class="col-md-8 centerHorizontallis border text-left">
        <h4 class="detail_title" style="margin-top: 3%;">课程简介：</h4>
        描述：
        <div class="border detail_description">
          指定资深教练贴身服务,根据与学员的充分沟通,量身定制详细的教学计划,学员可指定场馆,与教练预约上课时间,初级学员能在短期内掌握蛙泳或自由泳,并能独立游行15m
        </div>
        <b>关于课程：</b>
        <p>
          1. 每期课程分7次课（10次课）(个别场馆除外),每次课请自备泳衣,泳帽,泳镜,洗浴用品和当年体检卡(若无体检卡可在场馆花6元钱购买).<br>
          2. 为确保教学质量,课课程有效期均为2个月（3个月）(定制班除外,有效期从第 一次课开始计算),2个月（3个月）内无法完成课程的泳趣均不再承诺包会,超过3个月未完成课程者,不再进行补课.<br>
          3. 日常班在课程期内可请3次课的假,须提前一天致电客服或教练,上课当天恕不接受请假,无故缺课视为旷课,本机构不安排补课并不再承诺包会;教练到点准时入场授课,如若迟到请自行购票入场.<br>
          4. 初学者(成人)以蛙泳为起点,均承诺包会,如在规定课时内未能学会者,均可免费参加日常班课程(门票须自理),直到学会为止;请于课程结束后1个月内提出申请,过期不予受理。<br>
          5. 由于12周岁内儿童的身体发育学习能力性格等等情况差别较大,需具体分析,所以对于未满12周岁的儿童在第 一期课程内不承诺包会,希望各位家长予以理解.<br>
        </p>
        <b> 关于保险：</b>
        <p> 1. 由于保险费用是直接付于保险公司,请学员仔细确认是否购买,一旦投保,不予退款.<br>
          2. 保险期限为30天,需要续保可以联系客服,由于开班时间存在不确定因素,出保日期并不完全与开课日期一致,敬请谅解.<br>
          3. 保险条款内容,详情请咨询客服或查阅网站内”关于保险”页面,投保请主动出示姓名及身份证号.<br>
          4. 需要核实自己保单的学员,请联系客服发送电子保单或者给到学员保单号,学员自行到保险公司官方网站或公众号查询.<br>
        </p>
        <b>关于退款：</b>
        <p>
          1. 对于客服服务,课程安排,教学质量,学员均可提出意见与建议,我们将竭尽全力协调解决,若未能达成一致或者学员自身原因无法完成课程的,均可提出退款申请(仅限3次课以内).
          2. 前3次课(含第3次)内提出退款申请,我们将扣除已上课程费用,并加收一次课学费的服务费后,退回余下课款;第4次课(含第4次)后恕不再接受退款.
          3. 对于超过有效期的学员,恕不受理任何理由退款申请.
        </p>

        <b>关于报名时间：</b>
        <p>1.七课时培训班报名时间</p>
        <p>报名时间：2021-01-25 00:00:00 至2021-01-28 00:00:00</p>
        <p>下次报名时间：2021-02-2 00:00:00 至2021-02-5 00:00:00</p>

        <p>2.十课时培训班报名时间</p>
        <p>报名时间：2021-01-25 00:00:00 至2021-01-28 00:00:00</p>
        <p>下次报名时间：2021-02-2 00:00:00 至2021-02-5 00:00:00</p>

        <p>3.成人普通班培训班报名时间</p>
        <p>报名时间：2021-01-25 00:00:00 至2021-01-28 00:00:00</p>
        <p>下次报名时间：2021-02-2 00:00:00 至2021-02-5 00:00:00</p>

        <p>4.未成人普通班培训班报名时间</p>
        <p>报名时间：2021-01-25 00:00:00 至2021-01-28 00:00:00</p>
        <p>下次报名时间：2021-02-2 00:00:00 至2021-02-5 00:00:00</p>
        <h4 class="detail_title">开设班级：</h4>
        <table class="table table-bordered">
          <thead>
          <tr>
            <th scope="col">班级</th>
            <th scope="col">开班时间</th>
            <th scope="col">上课地点</th>
            <th scope="col">学费</th>
            <th scope="col">上课时间</th>
            <th scope="col">剩余容量</th>
            <th scope="col"></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(item,index) in classInfoList " :key="index">
            <td>{{ item.name }}</td>
            <td>{{ item.classStartTime }}至{{ item.classEndTime }}</td>
            <td>{{ item.space }}</td>
            <td>{{ item.price }}</td>
            <td>
              <el-select v-model="classInfoList[index].u_time" placeholder="请选择上课时间">
                <el-option
                    v-for="item in classInfoList[index]['remainder']"
                    :key="item.id"
                    :label="item.classLabel"
                    :value="item.id">
                  <span style="float: left">{{ item.classLabel }}</span>
                  <span class="remainder_span">剩余：{{ item.remainder }}</span>
                  <span class="remainder_span" style="margin-right: 5px;">{{ item.time }}</span>
                </el-option>
              </el-select>
            </td>
            <td>
              {{ item.remainder[0]['remainder'] + item.remainder[1]['remainder'] }}
            </td>
            <td class="text-right">
              <button @click="orderNow" :id="item.id+'_class'" class="btn btn-info noNewLine audition">报名</button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="row mt-md-4">
      <div class="col-md-8 centerHorizontallis border">
        <h3 class="mt-md-2 propaganda_h3">-超过500位专业教练-</h3>
        <p class="propaganda_p">行业内最严苛的筛选标准，每一位教练都有不凡的过去</p>
        <!--        <img src="http://www.pootenswim.com/html/home/coach/coach01.jpg" class="d-block w-25" alt="...">-->
        <div id="carouselExampleControls" class="carousel slide mb-md-4" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="http://www.pootenswim.com/html/home/coach/coach01.jpg" class="d-inline-block mr-2 w-25"
                   alt="...">
              <img src="http://www.pootenswim.com/html/home/coach/coach01.jpg" class="d-inline-block mr-2 w-25"
                   alt="...">
              <img src="http://www.pootenswim.com/html/home/coach/coach01.jpg" class="d-inline-block mr-2 w-25"
                   alt="...">
            </div>
            <div class="carousel-item">
              <img src="http://www.pootenswim.com/html/home/coach/coach01.jpg" class="d-inline-block mr-2 w-25"
                   alt="...">
              <img src="http://www.pootenswim.com/html/home/coach/coach01.jpg" class="d-inline-block mr-2 w-25"
                   alt="...">
              <img src="http://www.pootenswim.com/html/home/coach/coach01.jpg" class="d-inline-block mr-2 w-25"
                   alt="...">
            </div>

          </div>
          <a class="carousel-control-prev " href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only ">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>

        <h3 class="mt-md-2 propaganda_h3">-加入我们，参加每周的定期训练-</h3>
        <p class="propaganda_p">不管是参加专业比赛，还是瘦身减脂，欢迎加入我们的会员俱乐部，认识更多小伙伴</p>
        <div class="join-bd mt-md-4">
          <div class="join-b-left">
            <a href="#"><img src="../../assets/Schedule/img-join1.jpg" alt="."></a>
          </div>
          <div class="join-b-right">
            <ul class="ul-join">
              <li>
                <a href="#"><img src="../../assets/Schedule/img-join2.jpg" alt="."></a>
              </li>
              <li>
                <a href="#"><img src="../../assets/Schedule/img-join3.jpg" alt="."></a>
              </li>
              <li>
                <a href="#"><img src="../../assets/Schedule/img-join4.jpg" alt="."></a>
              </li>
              <li>
                <a href="#"><img src="../../assets/Schedule/img-join5.jpg" alt="."></a>
              </li>
              <li>
                <a href="#"><img src="../../assets/Schedule/img-join6.jpg" alt="."></a>
              </li>
              <li>
                <a href="#"><img src="../../assets/Schedule/img-join7.jpg" alt="."></a>
              </li>
            </ul>
          </div>


        </div>
      </div>
    </div>

  </div>
</template>

<script>
import HeaderNav from "@/components/Home/HeaderNav";
import requestService, {getRequest, put} from "@/utils/requestService";
import DateUtil from "@/js/DateUtil";
import {computed_reminder} from "@/filters/myFilter";

export default {
  name: "ScheduleTraining",
  filters: {computed_reminder},
  components: {
    HeaderNav
  },

  data() {
    return {
      showTuition: 500,
      className: "class_1",
      //学费
      tuition: [500, 510, 520, 530, 540, 550, 560],
      //订阅人数
      numbers: 1,
      reservation: {
        instructor: ''
      },
      classInfoList: [
        // {
        //   //课程id
        //   id: 1,
        //   name: '一对一7课时/面授',
        //   //开课时间
        //   classTime: '10:30-12:00',
        //   space: '上海浦东新羽山路9号源深体育中心',
        //   price: 500,
        //   // 客户选择上课的时间段
        //   uTime: 1,
        //   trainningTime: '2021-01-25',
        //   remainder: [{label: "上午", time: "10:30-12:00", id: 1, remainder: 1}, {
        //     label: "下午",
        //     time: '14:00-16:00',
        //     id: '2',
        //     remainder:1
        //   }]
        //
        // }
      ],

      trainning: {
        time: ''
      },
      classTime: [{label: "上午", time: "10:30-12:00", value: 1, remainder: 1}, {
        label: "下午",
        time: '14:00-16:00',
        value: '2',
        remainder: 1
      },],
    }
  },
  created() {
    this.initTrainningObj()
    /*加载价格表*/
    this.initClassInfoList()
  },

  methods: {

    /*立即下单*/
    orderNow(event) {
      let id = Number(event.target.id.split('_')[0])
      let param = {cid: id, time: this.classInfoList[id - 1]['u_time']}
      console.log(param)
      put(requestService.BaseHost + "/coreService/train", param, localStorage.getItem("token")).then(res => {
        alert(res['msg'])
        // console.log(res)
      }).catch(err => {
        console.log(err)
      })

    },

    /*初始化价格表*/
    initClassInfoList() {
      getRequest(requestService.BaseHost + "/coreService/classInfo", "").then(res => {
        let data = res['data']
        for (let index of data) {
          index['u_time'] = 1
          this.classInfoList.push(index)
        }
        console.log(data)
      }).catch(err => {
        console.log(err)
      })

    },
    initTrainningObj() {
      this.$set(this.trainning, "time", DateUtil.methods.getdate())
    }
  }
}
</script>

<style scoped>


/*介绍*/
.introduction {
  text-align: left;
}

.introductionContext {
  margin: 25px;
}


/*具体细节*/
/*标题*/
.detail_title {
  color: #3869a7;
}

.detail_description {
  padding: 5px;
  margin-bottom: 3%;
}

/*试听，报名按钮*/
.audition {
  margin: 0 5px;
}

/*宣传*/
.propaganda_h3 {
  color: #f15a24;
}

.propaganda_p {
  font-size: 14px;
  line-height: 40px;
  font-weight: 800;
  color: #999;
  text-align: center;
}

/*轮播*/
.carousel-control-prev {
  left: 10%;
}

.carousel-control-next {
  right: 10%;
}

.join-bd {
}

.join-bd .join-b-left {
  float: left;
  width: 468px;
  height: 468px;
}

.join-bd .join-b-right {
  float: left;
  width: 732px;
}

ul.ul-join li {
  float: left;
  width: 225px;
  margin: 0 0 10px 19px;
}


/*水平居中*/
.centerHorizontallis {
  margin: 0 auto;
}

menu, ol, ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*剩余容量*/
.remainder_span {
  float: right;
  color: #8492a6;
  font-size: 13px
}

</style>