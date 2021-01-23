<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <HeaderNav></HeaderNav>
      </div>
    </div>

    <div class="row" style="margin-top: 5%;margin-left: 10%;">
      <div class="col-md-4">
        <img :src="personalInfo.avatar" class="figure-img img-fluid rounded float-left rounded " width="150px"
             height="150px" :alt="personalInfo.nickName">
        <div class="info">
          <p class="text-left">昵称：{{ personalInfo.nickName }} <span style="margin-left: 30px;"> 性别：{{
              personalInfo.sex
            }}</span></p>
          <p class="text-left">手机号：{{ personalInfo.phone }}</p>
          <p class="text-left">会员卡余额：：{{ personalInfo.overage }}</p>
        </div>
      </div>
    </div>

    <div class="row" style="margin-left: 10%;">
      <div class="col-md-2">
        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab"
             aria-controls="v-pills-settings" aria-selected="false">更改头像</a>
          <a class="nav-link " id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab"
             aria-controls="v-pills-home" aria-selected="false">修改手机号</a>
          <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab"
             aria-controls="v-pills-profile" aria-selected="false">修改密码</a>
          <a class="nav-link active" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab"
             aria-controls="v-pills-messages" aria-selected="true">订单记录</a>
          <a class="nav-link " data-toggle="pill" role="tab" v-on:click="logout">退出登录</a>
        </div>
      </div>
      <div class="col-md-10">
        <div class="tab-content" id="v-pills-tabContent">
          <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
            <AlertAvatar v-on:avatarChange="refreshPersonal"></AlertAvatar>
          </div>
          <div class="tab-pane fade  " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
            <AlertPhone v-on:alertPhone="refreshPersonal"></AlertPhone>
          </div>
          <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
            <AlertPassword></AlertPassword>
          </div>
          <div class="tab-pane fade show active" id="v-pills-messages" role="tabpanel"
               aria-labelledby="v-pills-messages-tab">订单记录
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ObjUtil from "@/js/ObjUtil";
import requestService, {getRequestWithToken} from "@/utils/requestService";
import AlertAvatar from "@/components/personalInfo/AlertAvatar";
import HeaderNav from "@/components/Home/HeaderNav";
import AlertPhone from "@/components/personalInfo/AlertPhone";
import AlertPassword from "@/components/personalInfo/AlertPassword";

export default {
  name: "PersonalInfoIndex",
  components: {
    AlertAvatar,
    HeaderNav,
    AlertPhone,
    AlertPassword
  },
  data() {
    return {
      personalInfo: {
        nickName: null,
        avatar: null,
        sex: '男',
        phone: null,
        overage: 0
      },
    }
  },
  created() {
    this.loadInfo()
  },
  methods: {
    refreshPersonal() {
      this.loadInfo()
    },
    loadInfo() {
      let personalInfo = localStorage.getItem("loginPersonalInfo")
      if (!ObjUtil.methods.isNullObj(personalInfo)) {
        let data = JSON.parse(personalInfo)
        this.personalInfo.avatar = data["avatar"]
        this.personalInfo.nickName = data['nickName']
        this.personalInfo.sex = data['sex']
        this.personalInfo.phone = data["phone"]
        this.personalInfo.overage = data['overage']
        this.loginStatus = true
        return 0;
      }
      let token = localStorage.getItem("token")
      if (!ObjUtil.methods.isNullObj(token)) {
        getRequestWithToken(requestService.ConsumerHost + "/personal", {}, token).then(res => {
          let data = res['data']
          this.personalInfo.avatar = data["avatar"]
          this.personalInfo.sex = data['sex']
          this.personalInfo.phone = data["phone"]
          this.personalInfo.overage = data['overage']
          localStorage.setItem("loginPersonalInfo", JSON.stringify(data))


        }).catch(err => {
          console.log("PersonalInfoIndex error is " + err)
        })
      }
    }, logout() {
      localStorage.removeItem("token")
      localStorage.removeItem("loginPersonalInfo")
      this.$router.push("/")
    }
  }
}
</script>

<style scoped>

/*.headerBar {*/
/*  position: absolute;*/
/*  z-index: 1;*/
/*  left: 10%;*/
/*  right: 20%;*/
/*  margin-bottom: 10%;*/
/*}*/


.info {

  margin-top: 4%;
  margin-left: 40%;
}

.info p {
  margin-left: 15px;
}

#v-pills-tab a {
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>