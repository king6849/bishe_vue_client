<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 introduction contentText">
        <img src="../../assets/CoreServicesImg/jieshao.jpg"/>
      </div>
      <div class="col-md-5  introduction">
        <table class="table table-bordered">
          <tbody>
          <tr>
            <th scope="row">联系电话</th>
            <td>183xxxxxxxxx</td>
            <th>容纳规模</th>
            <td>500</td>
          </tr>
          <tr>
            <th scope="row">营业时间</th>
            <td>8:00---22:00</td>
            <th>基本设施</th>
            <td>暂无</td>
          </tr>
          <tr>
            <th scope="row">场馆地址</th>
            <td colspan="3">上海市徐汇区中山南二路1300号</td>
          </tr>
          </tbody>
        </table>

        <form>
          <div class="form-group row">
            <label class="col-sm-1 col-form-label">数量</label>
            <div class="btn-group" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-secondary" v-on:click="decrease">-</button>
              <input class="form-control" v-model="number"/>
              <button type="button" class="btn btn-secondary" v-on:click="increase">+</button>
            </div>
          </div>
          <div class="form-group row">
            <button class="btn btn-danger">立即预定</button>
<!--            <button class="btn btn-warning" style="margin-left: 30px;">加入购物车</button>-->
          </div>
        </form>

      </div>
    </div>

    <div class="row">
      <div class="col-md-8  contentText">

        <blockquote class="blockquote text-left">
          <h3 class="">产品介绍</h3>
          <h5>
            博思特游泳管理系统软件是一套建立在用户实际应用需求上的软件系统平台，功能简洁、强大、实用，操作简单，可以极大的帮助游泳馆提升工作效率，实现信息化管理，整个系统平台主要功能模块有：收费管理、帐务管理、商品管理、查询统计、系统设置。
          </h5>
          <h5>
            <p>1、计费管理</p>
            该模块主要完成管理游泳馆收费业务（会员游泳、散客购票以及商品销售），系统自动处理，减少管理工作人员的日常管理工作量。
            ü检票入场，该功能可以管理会员刷卡购买游泳票进入游泳馆游泳，并进行身份有效性识别，系统识别各种消费类型的卡（次卡、月卡、季卡、年卡、儿童卡、青少年卡、充值次卡，充值时卡）并对应其身份和场次进行扣费。
            ü散客销票，该功能可以满足非会员用户的进馆游泳需求，客人可以用现金购买游泳票，然后进馆游泳。
            ü商品销售，客人可用会员卡或者现金在游泳馆商品销售处购买所需要物品（游泳衣、零食、饮料等等）。
            ü清场管理，该功能处理按时计算费用的客户。
          </h5>
          <h5>
            <p> 2、帐务管理</p>
            该模块功能主要完成会员用户基本信息的建立，以及对应会员卡的发放、挂失、充值、继卡、退款等相关事项。
            ü会员管理，可以快捷的建立来馆游泳的客人基本信息，可设置各种对应的人员身份类别（学生、军人、儿童、老年人等，以便区别对待优惠收费），同时还可以录入体检信息，建立来游泳馆游泳人员身体健康电子信息档案。可现场通过简易摄像头进行用户照片拍摄，也可以日后随时添加或删除用户的照片，并可随时使用证卡打印功能将用户照片打印在卡片上面，从而在用户自动刷卡购票时进行身份有效识别。
            ü卡片管理，在建立会员信息的基础上，可以进行发卡、卡挂失、续卡、卡片照片打印。
            ü帐务管理，可以随时充值，如果存款或消费过程中出现帐务错误，得到授权后也可以使用金额修改功能进行修正。
          </h5>
          <h5>
            <p> 3、商品管理</p>
            该功能主要管理游泳馆相关商品销售，可以自定义各种货物品种，比如：饮料类、游泳衣、游泳帽等等。可以管理进货以及商品销售情况，可以随意查询商品销售情况。
          </h5>
          <h5>
            <p> 4、查询统计</p>
            该功能模块可以随意查询用户的基本信息、查询各种详细的流水记录信息（发卡、卡挂失、充值、换卡、零售、按次扣费、按时扣费、商品进货、商品销售等等），随意查询统计游泳馆的费用情况（总消费：零售、刷卡扣费、购物；总收入：零售、充值、卡成本、商品销售等等帐务情况）。
          </h5>
          <h5>
            <p> 5、系统设置 </p>
            该功能模块可以根据游泳馆实际情况自定义各种会员卡类型：次卡、季卡、年卡、青少年卡、充值次卡，充值时卡等，根据春、夏、秋、冬等季节不同自定义各种游泳场次时间。可以设置各种身份类型，设置串口、打印等系统各种运行参数，可以建立操作游泳馆管理系统的用户并授权，进行分权管理。
          </h5>
        </blockquote>

      </div>
    </div>
  </div>
</template>

<script>
import ObjUtil from "@/js/ObjUtil";

export default {
  name: "BuyAticket",
  data() {
    return {
      number: 1
    }
  }, created() {
    this.isLogin()
  },

  methods: {
    decrease() {
      if (this.number === 1) return 0
      --this.number
    },
    increase() {
      ++this.number
    },
    isLogin() {
      if (ObjUtil.methods.isNullObj(localStorage.getItem("token"))) {
        this.$router.push("/")
      }
    }
  }
}
</script>

<style scoped>
.introduction {
  margin-top: 15px;
}


.contentText {
  margin-left: 15%;
}

</style>