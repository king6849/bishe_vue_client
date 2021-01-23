<template>
  <div class="container-fluid">
    <div class="row col-md-12" style="margin-bottom: 5%;">
      <HeaderNav></HeaderNav>
    </div>

    <div class="row">
      <div class="col-md-8 border headerTitleCol" style="margin-top: 10px;">
        <div>
          <h3 class="headerTitle" style="float: left;">全民健身中心游泳馆</h3>
          <div class="headerTitleRight" style="color: red;">
            ￥<h2 class="headerTitle">35</h2>起
            <a href="#play" class="btn btn-warning headerTitle">立即预定</a>
          </div>
          <br>
          <hr style="margin-top: 2%;"/>
        </div>
        <!--          简介-->
        <div>
          <img src="../../assets/buyTickeyImg/index.jpg" alt="index.jpg" class="headerTitle"
               style="float: left;margin-right: 20px;"/>
          <blockquote class="blockquote text-left" style="margin-left:20px;">
            <p class="headerTitle">游泳馆地址：青岛市市北区周口路88号甲</p><a style="margin-left: 3%;">查看地图</a><br/>
            <p style="margin-top: 15px;">营业时间：1月1日-12月31日 周一,周三至周日 09:00-21:00 周二 12:00-21:00；1月1日-12月31日 周一,周三至周日
              09:00-21:00 周二 12:00-21:00；每周二上午换水、彻清场馆</p>
            <!--            <p>游泳馆容量：{{ this.ticketInfo.total }} 人</p>-->
            <!--            <p>游泳馆剩余容量：{{ this.ticketInfo.remainder }} 人</p>-->
          </blockquote>
        </div>
      </div>
    </div>

    <!--    门票-->
    <div class="row" style="margin-top: 15px;">
      <div class="col-md-8 border headerTitleCol">
        <!--        景点门票-->
        <div>
          <div class="tab-outer mt20">
            <div class="tab-dest tab-fixed">
              <ul class="ul-hor">
                <li class="active">
                  <a>门票</a>
                </li>
              </ul>
            </div>
          </div>

          <table class="table" style="position: relative; top: -5px;">
            <thead>
            <tr class="border">
              <th></th>
              <th>产品名称</th>
              <th>预定时间</th>
              <th>选择泳池</th>
              <th>购买票数</th>
              <th>销售价</th>
            </tr>
            </thead>
            <tbody>
            <!-- 成人票           -->
            <tr class="border">
                            <th class="border " rowspan="4"></th>
              <td><a>{{ ticket['adult']['ticketName'] }} </a></td>
              <td>
                <el-date-picker type="date" format="yyyy-MM-dd" v-model="ticket['adult'].date"
                                style="width: 150px;"></el-date-picker>
              </td>
              <td>
                <el-select v-model="ticket['adult'].pool" placeholder="请选择泳池" style="width: 180px;">
                  <el-option
                      v-for="item in poolInfo"
                      :key="item.id"
                      :label="item.poolName"
                      :value="item.id">
                    <span style="float: left">{{ item.poolName }}</span>
                    <span style="float: right; color: #8492a6; font-size: 8px">剩余{{ item.totalTicket }}</span>
                  </el-option>
                </el-select>
              </td>
              <td class="">
                <el-input-number v-model="ticket['adult']['numbers']" @change="handleChange" :min="0" :max="99"
                                 label="购买张数"></el-input-number>
              </td>
              <td style="color: red;">
                ￥<h4 class="headerTitle">{{ticket['adult']['ticketPrice']}}</h4>起
              </td>

              <td></td>
            </tr>
            <!--    未成人票-->
            <tr class="border">
              <td><a>{{ ticket['minor']['ticketName'] }}</a></td>
              <td>
                <el-date-picker type="date" format="yyyy-MM-dd" v-model="ticket['minor'].date"
                                style="width: 150px;"></el-date-picker>
              </td>
              <td>
                <el-select v-model="ticket['minor'].pool" placeholder="请选择泳池" style="width: 180px;">
                  <el-option
                      v-for="item in poolInfo"
                      :key="item.id"
                      :label="item.poolName"
                      :value="item.id">
                    <span style="float: left">{{ item.poolName }}</span>
                    <span style="float: right; color: #8492a6; font-size: 8px">剩余{{ item.totalTicket }}</span>
                  </el-option>
                </el-select>
              </td>
              <td class="">
                <el-input-number v-model="ticket['minor']['numbers']" @change="handleChange" :min="0" :max="99"
                                 label="购买张数"></el-input-number>
              </td>
              <td style="color: red;">
                ￥<h4 class="headerTitle">{{ticket['minor']['ticketPrice']}}</h4>起
              </td>

              <td></td>
            </tr>

            <!--            消费统计-->
            <tr class="border text-right">
              <td>
                已选成人票<b class="show_tickets">{{ this.ticket.adult.numbers }}</b>张，未成年人票<b
                  class="show_tickets">{{ this.ticket.minor.numbers }}</b>张，
                一共 <b class="show_tickets">{{ this.totalTickets }}</b> 票，消费<b class="show_tickets">￥{{ totalMoney }}</b>
              </td>
              <td colspan="6">
                <a id="play" style="color: #ffa32e;" v-on:click="placeAnOrder">在线支付</a>
              </td>
            </tr>

            <!--            相关说明-->
            <tr class="border">
              <td colspan="6" style="text-align: left">
                <b style="margin-bottom: 15px;">预定说明</b><br/>
                <p class="headerTitle">预定时间：19:30前可订今日票</p>

                <p>有效期限：指定游玩日当天内有效</p>
                <b>费用说明</b><br>
                <p>费用包含：游泳限时2小时、淋浴10分钟、存衣柜、锁，（毛巾、拖鞋、洗浴用品自带、需交水牌和更衣柜押金1人100元，按人头收费）</p>

                <b>票种说明</b><br>
                <p>成人票[1大0小]是指不限人群。</p>

                <b>入馆须知</b><br>
                <p class="headerTitle">入馆方式：凭借会员卡刷卡通过，或者去柜台买票，取票验票通过</p>
                <p class="headerTitle">入馆时间：9:00~22:00</p>
                <p class="headerTitle">入馆地点：售票窗口</p>
                <p class="headerTitle">取票时间：9:00~21:00</p>
                <p>取票地点：售票窗口</p>

                <b>退改规则</b>
                <p class="headerTitle">退票规则：本商品支持随时退。预订付款后未使用，可在“我的订单”中申请退款，且不收取任何手续费。本商品不支持部分退</p>
                <p>改期规则：本商品不可改期</p>

                <b>重要提示</b><br>
                <p>
                  1、游泳限时2小时（自发水牌至交还水牌），超过2小时，按照单次票收费（30分钟之内30元，以此类推）<br>
                  2、入场前需缴纳押金100元/人，用作超时及丢失水牌的扣费<br>
                  3、佩戴水牌入场，并妥善保管，丢失水牌按照50元/进行赔付<br>
                  4、拖鞋、洗浴用品、毛巾请自行携带<br>
                  5、游泳馆内禁止使用游泳圈<br>
                  6、游泳必须佩戴泳帽，淋浴后方可进场游泳，否则，面阻莫怪<br>
                  7、儿童一律按照成人收费<br>
                  8、每周二上午换水、彻清场馆，营业时间为12:00~21:00<br>
                  9、营业时间09:00~22:00,21:00以后停止入场<br>
                </p>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="row" style="margin-top: 15px;">
      <div class="col-md-8 border headerTitleCol" style="text-align: center;">
        <!--        导航部分-->
        <div class="tab-outer mt20">
          <div class="tab-dest tab-fixed">
            <ul class="ul-hor">
              <li class="active">
                <a href="#yuding">预订须知</a>
              </li>
              <li class="">
                <a href="#introduction">景点介绍
                </a>
              </li>
              <li class="">
                <a href="#zhinan">交通指南</a>
              </li>
            </ul>
          </div>
        </div>
        <!--预定须知-->
        <div id="yuding" class="darea">
          <div class="dtitle">
            <h2 class="dtit" style="font-size: 26px;"><i class="icon dicon-introduction"></i>预定须知</h2>
          </div>
          <blockquote class="darea blockquote noline ml-md-5 text-left" style="margin-top: 15px;">
            <b>开具发票</b><br/>
            <p class="text-wrap">
              在线申请发票：如需开具发票可在下单时填写发票信息或提交订单后在订单详情页中申请开具发票，我司在收到完整信息后向您寄送发票，
              为避免因发生不可抗力或意外事项致实际消费额与发票开具的相应数额不符，建议您在游玩归来后2个月内索取发票---在线支付
            </p>
          </blockquote>
          <!--          <blockquote class="blockquote text-left ml-md-5">-->
          <!--            <b>开具发票</b><br/>-->
          <!--            <p class="text-wrap">-->
          <!--              在线申请发票：如需开具发票可在下单时填写发票信息或提交订单后在订单详情页中申请开具发票，我司在收到完整信息后向您寄送发票，-->
          <!--              为避免因发生不可抗力或意外事项致实际消费额与发票开具的相应数额不符，建议您在游玩归来后2个月内索取发票-&#45;&#45;在线支付-->
          <!--            </p>-->
          <!--          </blockquote>-->

        </div>

        <div id="shuoming" class="darea">
          <!--        重要说明-->
          <blockquote class="darea blockquote noline ml-md-5 text-left" style="margin-top: 15px;">
            <b> 重要说明</b><br/>
            <p>
              1、游泳限时2小时（自发水牌至交还水牌），超过2小时，按照单次票收费（30分钟之内30元，以此类推）；</p>
            <p>2、入场前需缴纳押金100元/人，用作超时及丢失水牌的扣费；</p>
            <p>3、佩戴水牌入场，并妥善保管，丢失水牌按照50元/人进行赔付；</p>
            <p>4、拖鞋、洗浴用品、毛巾请自行携带；</p>
            <p>5、游泳馆内禁止使用游泳圈；</p>
            <p>6、游泳必须佩戴泳帽，淋浴后方可进场游泳，否则，面阻莫怪；</p>
            <p>7、儿童一律按照成人收费；该景区可能有存在高风险的游玩项目，驴妈妈建议您购买相关保险。出行前，建议您仔细阅读旅游安全的相关内容。抵达景区后，也请您不要忽略景区内的游玩提示或安全提示类信息。
            </p>
          </blockquote>
          <!--        安全须知-->
          <blockquote class="darea blockquote text-left xuzhi ml-md-5" style="margin-top: 15px;">
            <b>安全须知</b><br>
            <p class="headerTitle">1.为了您人身、财产的安全，请您避免在公开场合暴露贵重物品及大量现金。外出时需时刻看管好首饰、相机等随身物品。</p>
            <p>
              2.游泳、漂流、潜水、浮潜、冲浪、快艇、滑雪、滑冰、热气球、高空跳伞、滑翔伞、动力伞、攀岩、登山、骑马、驾驶、温泉、冲沙、索道、蹦极等活动项目，均存在危险。参与前请根据自身条件，充分参考当地相关部门及其它专业机构的相关公告和建议后量力而行。请您在预订前阅读驴妈妈为您整理各项高风险活动的。<strong><a
                target="_blank" style="color: #666;" href="http://www.lvmama.com/zt/promo/safetytips/high_risk.html">《安全须知》</a></strong>
            </p>
          </blockquote>
        </div>

        <!--      游泳馆简介-->
        <div id="introduction" class="dbox introduction">
          <div class="dtitle">
            <h2 class="dtit" style="font-size: 26px;"><i class="icon dicon-introduction"></i>景点介绍</h2>
          </div>
          <div class="dcontent ml-md-5">
            <h4>全民健身中心游泳馆简介</h4>
            <p>青岛市全民健身中心游泳馆建筑面积1649平方米，8道25米标准泳池（长25米，宽21米，水池最深处1.75米，最浅处1.2米，平均深度1.5米，泳道宽1.5米）。采用逆循环式水处理系统，四季恒温，水质干净卫生。&nbsp;</p>
          </div>
          <div class="darea noline ml-md-5">
            <h5>温馨提示</h5>
            <p>1.在不能满足设备安全运行的恶劣天气，无法抗拒的自然灾害情况下（如雷电、雨雪、冰雹、大雾、暴雨、台风等），景区部分项目将临时关闭或部分关闭，表演会取消或部分取消。</p><br>
            <p>2.严禁倒票，一经发现，相关电子门票作废，入园现场将不予承认，驴妈妈旅游网将不予退费并将相关账号、手机号列入黑名单。请广大用户选择驴妈妈官方网站或官方合作渠道购买，维护自身权益不被侵犯。</p><br>
            <p>3.景区活动内容如有变动，以当日公告为准。景区所有项目均会定期进行日检、周检、月检和年度检修，相关检修工作可能会造成部分项目运行时间的延迟或暂停对游客开放，详情以景区现场公告为准。</p><br>
            <p>4.为保障您的出游安全，驴妈妈建议您订购在线支付产品时选购相关旅游保险。</p>
          </div>
        </div>

        <!--        交通指南-->
        <div class="dbox introduction">
          <div class="dtitle">
            <h2 class="dtit" style="font-size: 26px;"><i class="icon dicon-introduction"></i>交通指南</h2>
          </div>

          <div id="zhinan" class="nchTrafficProgra">
            <!--            地图-->
            <p>
              公共交通：209路、310路、361路、364路、365路、371路、603路到开平路站下车；20路、229路、310路、326路到康居公寓站下车；23路、609路到南昌路、九江路站下车；309路到周口路站下车。</p>
            <br>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import ObjUtil from "@/js/ObjUtil";
import requestService, {getRequest, putRequestWithToken} from "@/utils/requestService";
import HeaderNav from "@/components/Home/HeaderNav";
import DateUtil from "@/js/DateUtil";

export default {
  name: "BuyTickets",
  components: {
    HeaderNav
  },

  data() {
    return {
      poolInfo: [
        // {poolName: '一号泳池', id: 1, totalTicket: 100},
      ],

      ticket: {
        adult: {
          pool: 1,
          date: '',
          numbers: 1,

          // id: 1,
          // ticketPrice: 35,
          // ticketName: "成人票",

        },
        minor: {
          pool: 1,
          date: '',
          numbers: 0,

          // id: 2,
          // ticketPrice: 25,
          // ticketName: "未成人票",

        },
      },
      totalTickets: 1,
      totalMoney: 35,
    }
  },
  watch: {},
  computed: {},
  created() {
    this.isLogin()
    this.loadDate()
    this.loadShoppingCarInfo()
    this.loadTicketInfo()

  },

  methods: {
    isLogin() {
      if (ObjUtil.methods.isNullObj(localStorage.getItem("token"))) {
        this.$router.push("/")
      }
    },
    loadDate() {
      //设置今日日期
      this.$set(this.ticket['adult'], 'date', DateUtil.methods.getdate())
      this.$set(this.ticket['minor'], 'date', DateUtil.methods.getdate())
    },
    //加载购物车信息
    loadShoppingCarInfo() {
      getRequest(requestService.ConsumerHost + "/shoppingcar", {}).then(res => {
        if (res['code'] !== 100) {
          alert("服务器异常，请稍后重试")
        } else {
          // console.log(res)
          let adult=res['data'][0]
          let minor=res['data'][1]
          this.$set(this.ticket['adult'], 'id', adult['id'])
          this.$set(this.ticket['adult'], 'ticketName', adult['ticketName'])
          this.$set(this.ticket['adult'], 'ticketPrice',adult['ticketPrice'])

          this.$set(this.ticket['minor'], 'id', minor['id'])
          this.$set(this.ticket['minor'], 'ticketName',minor['ticketName'])
          this.$set(this.ticket['minor'], 'ticketPrice', minor['ticketPrice'])
        }
      }).catch(err => {
        console.log("BuyTickets loadTicketInfo error is " + err)
      })
    },

    //加载票信息
    loadTicketInfo() {
      getRequest(requestService.ConsumerHost + "/ticketInfo", {}).then(res => {
        if (res['code'] !== 100) {
          alert("服务器异常，请稍后重试")
        } else {
          this.poolInfo = res['data']
        }
      }).catch(err => {
        console.log("BuyTickets loadTicketInfo error is " + err)
      })

    }
    //在线支付
    , placeAnOrder() {
      putRequestWithToken(requestService.ConsumerHost + "/ticket", this.ticket, localStorage.getItem("token")).then(res => {
        if (res["code"] !== 100) {
          alert(res['msg'])
        } else {
          // this.loadTicketInfo()
          alert("购买成功")
        }
      }).catch(err => {
        console.log("BuyTickets placerAnOrder error is " + err)
      })
    },
    handleChange() {
      if (this.ticket['minor']['numbers'] < 0) {
        this.$set(this.ticket['minor'], 'numbers', 0)
      }
      if (this.ticket['adult']['numbers'] < 0) {
        this.$set(this.ticket['adult'], 'numbers', 0)
      }
      let minor = this.ticket['minor']['numbers']
      let adult = this.ticket['adult']['numbers']
      this.totalTickets = minor + adult
      this.totalMoney = minor * this.ticket['minor']['ticketPrice'] + adult * this.ticket['adult']['ticketPrice']
    }
  }
}
</script>

<style scoped>
/*导航栏*/
.headerBar {
  position: static;
  margin: 0 auto;
}

.headerTitleCol {
  margin: 0 auto;
}

.headerTitleCol > div {
  margin-top: 15px;
}

.headerTitle {
  display: inline;
}

.headerTitleRight {
  float: right;
}

/*景点门票*/
.ticketTitle {
  background-color: #ff62bb;
}

/*预定须知*/
.tab-dest {
  position: relative;
  margin: 0 auto;
  background: #F5F5F5;
  width: 100%;
}

.tab-outer {
  height: 45px;
  width: 100%;
  position: relative;
  z-index: 9;
}

.mt20 {
  margin-top: 20px !important;
}

.tab-dest .ul-hor {
  height: 42px;
  border: #ddd solid 1px;
  border-bottom: #EA1786 solid 2px;
  position: relative;
  background: #F8F8F8;
  z-index: 3;
}

.ul-hor, .ul-ver, .dl-hor, .dl-ver {
  zoom: 1;
}

ol, ul {
  list-style-type: none;
}

.tab-dest .ul-hor li.active {
  background: #EA1786;
  color: #fff;
  border: 1px solid #EA1786;
  line-height: 40px;
  margin: -1px 0 0 -1px;
}

.tab-dest .ul-hor li {
  *zoom: 1;
  padding: 0 20px;
  float: left;
  height: 42px;
  line-height: 42px;
  color: #666;
  border-right: 1px solid #ddd;
  cursor: pointer;
  font-size: 16px;
  position: relative;
}

.tab-dest .ul-hor li a {
  color: #333;
}

.ul-hor li {
  float: left;
  display: inline;
  *zoom: 1;
}

.tab-dest .ul-hor li.active span, .tab-dest .ul-hor li.active a {
  color: #fff;
}

.error_404 a:link, a:visited {
  text-decoration: none;
}

.show_tickets {
  color: red;
}

/*预定须知*/
.darea {
  border-bottom: 1px dashed #ddd;
}

/*重要通知*/
.darea.noline {
  border: none;
}


.dmain h5 {
  margin: 20px 0 10px;
  font-size: 16px;
  color: #333;
}

.policy p {
  font-size: 14px;
  color: #666;
  line-height: 30px;
}

/*安全须知*/
.xuzhi {
}

.xuzhi h5 {
  margin: 20px 0 10px;
  font-size: 16px;
  color: #333;
}

.xuzhi p {

  font-size: 14px;
  color: #666;
  line-height: 30px;
}

/*游泳馆简介*/
.introduction {
  font-size: 14px;
}

.darea.noline > p {
  display: inline;
}

.dbox {
  text-align: left;
}

.dtitle {
  position: relative;
  border-bottom: 2px solid #ddd;
  height: 38px;
  line-height: 38px;
}

.dtit {
  float: left;
  padding-left: 30px;
  font-weight: 400;
  font-size: 22px;
  color: #333;
}

.dtit .icon {
  position: absolute;
  left: 0;
  bottom: -2px;
  border-bottom: 2px solid #f80;
  width: 24px;
  height: 29px;
}

.activity h5, .activity h4, .introduction h5, .introduction h4 {
  padding-left: 15px;
  margin-top: 40px;
  height: 30px;
  background: #f5f5f5;
  line-height: 30px;
  border-radius: 15px;
}

.introduction p {
  line-height: 30px;
}

/*交通指南*/
.nchTrafficDerc {
  width: 700px;
  margin-top: 20px;
}

.nchTrafficTab {
  display: none;
  margin-left: 31px;
  width: 574px;
  float: left;
  font-size: 14px;
  color: #666;
  line-height: 30px;
  margin-bottom: 10px;
}

.nchTrafficTab .nchTrafficProgra {
  font-size: 14px;
  color: #666;
  line-height: 30px;
}

.traffic p {
  color: #666;
  line-height: 30px;
  font-size: 14px;
}


/*公共样式*/
.contentCenter {
  margin: 0 auto;
}

a:link, a:visited {
  text-decoration: none; /*超链接无下划线*/
}

a:hover {
  text-decoration: none; /*鼠标放上去有下划线*/
}

/*细节左边距6%*/
</style>