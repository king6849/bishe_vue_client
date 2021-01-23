<template>

  <div class="container-fluid ">

    <div class="row">
      <div class="col-md-2 loginCont">
        <h3 style="margin-top: 5%;" id="loginTypeTitle">账号登录</h3>
        <div class="tab-content" id="pills-tabContent">
          <!--        微信登录-->
          <div class="tab-pane fade show " id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
            <div id="weChat">
              <wxlogin
                  :appid="wxAppId"
                  :scope="'snsapi_login'"
                  :theme="'black'"
                  :redirect_uri="redirect_uri"
                  :href='bast64css'
                  rel="external nofollow"
              >
              </wxlogin>
              <!--              <img src="../../assets/login/wechatLogin.png" height="286" width="auto"/>-->
            </div>
          </div>
          <!--        手机登录-->
          <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
            <form>
              <div class="form-group mb-3">
                <input class="form-control" v-model="phoneLoginInfo.phone" placeholder="手机号"/>
              </div>

              <div class="input-group mb-3">
                <input type="text" class="form-control" v-model="phoneLoginInfo.code" placeholder="验证码"/>
                <div class="input-group-append">
                  <input type="button" id="countBtn" role="button" class="btn btn-info btn-sm" v-on:click="getCode"
                         :disabled="isAble" value="获取验证码"/>
                </div>
              </div>

              <button type="button" class="btn btn-block btn-primary" v-on:click="phoneLoginMethod"
                      style="margin-bottom: 5%;margin-top: 3%;">登录
              </button>
            </form>
          </div>
          <!--        账号登录-->
          <div class="tab-pane active" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
            <form>
              <div class="form-group">
                <input v-model="accountLoginInfo.phone" class="form-control" aria-describedby="emailHelp"
                       placeholder="账号">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone
                  else.</small>
              </div>
              <div class="form-group">
                <input v-model="accountLoginInfo.password" type="password" class="form-control" placeholder="密码">
              </div>
              <div class="form-check" style="float: left">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">记住我</label>
              </div>
              <label id="loginMsg" style="color: red;"></label>
              <button type="button" class="btn btn-block btn-primary" v-on:click="accountLoginMethod"
                      style="margin-bottom: 5%;">登录
              </button>
            </form>
          </div>
        </div>


        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li class="nav-item">
            <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab"
               aria-controls="pills-profile" aria-selected="false" v-on:click="loginType">
              <!--              <i class="fa fa-1x fa-phone" aria-hidden="true"></i>-->
              手机号
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab"
               aria-controls="pills-contact" aria-selected="true" v-on:click="loginType">
              账号
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!--    <div class="loginContContainer">-->
    <!--      <img src="../../assets/bgk/loginBgk.jpg" width="100%" height="100%"/>-->
    <!--    </div>-->
  </div>
</template>
<script>
import $ from "jquery"
import requestService, {getRequest, postRequest} from "@/utils/requestService";

export default {
  name: "login",
  components: {
  },
  data() {
    return {
      wxAppId: "wxe98b8264fdd0e52a",
      redirect_uri: "http://localhost:8081/client/login/weChatLogin",
      bast64css: 'data:text/css;base64,LmltcG93ZXJCb3ggLnFyY29kZSB7d2lkdGg6IDIwMHB4O2hlaWdodDoyMDBweH0NCi5pbXBvd2VyQm94IC5pbmZvIHt3aWR0aDogMjAwcHh9DQouc3RhdHVzX2ljb24ge2Rpc3BsYXk6IG5vbmV9DQouaW1wb3dlckJveCAuc3RhdHVzIHt0ZXh0LWFsaWduOiBjZW50ZXI7fQ0KLmltcG93ZXJCb3ggLnRpdGxlIHtkaXNwbGF5OiBub25lfQ0KaWZyYW1lIHtoZWlnaHQ6IDMyMnB4O30NCg==',
      //账号密码登录
      accountLoginInfo: {
        phone: '',
        password: ''
      },
      code: "",
      phoneLoginInfo: {
        phone: "",
        code: ""
      },
      token: "",
      timer: null,
      isAble: false,
      countDown: 60
    }
  },
  created() {
    this.continuteCountDown()
  }
  ,
  methods: {
    continuteCountDown() {
      let countDown = localStorage.getItem("countDown")
      if (this.isNullObj(countDown)) return 0
      let phone = sessionStorage.getItem("code_phone")
      if (!this.isNullObj(phone)) {
        console.log("phone is not null")
        this.phoneLoginInfo.phone = phone
      }
      this.countDown = countDown
      this.isAble = false
      this.settime()
    },

    loginType(event) {
      let typeId = event.target.id
      if (typeId === "pills-home-tab") {
        $("#loginTypeTitle").html("微信扫码")
      } else if (typeId === "pills-profile-tab") {
        $("#loginTypeTitle").html("手机号登录")
      } else {
        $("#loginTypeTitle").html("账号登录")
      }
    },
    accountLoginMethod() {
      //  账号登录
      if (this.isNullObj(this.accountLoginInfo.password)) {
        alert("密码不能为空")
        return 0;
      }
      if (this.isNullObj(this.accountLoginInfo.phone)) {
        alert("账号不能为空")
        return 0;
      }
      postRequest(requestService.host + ":8081/client/login/accountLogin", this.accountLoginInfo)
          .then(res => {
            // console.log("accountLogin res.code " + res['code'])
            // console.log("accountLogin res.msg " + res['msg'])
            // console.log("accountLogin res.data " + res['data'])
            if (res['code'] !== 100) {
              $("#loginMsg").html(res['msg'])
              return 0
            }
            $("#loginMsg").html("")
            this.token = res['data']
            localStorage.setItem("token", this.token)
            this.$router.push("/")
          }).catch(err => {
        console.log("accountLoginError " + err)
      })
    },
    //获取验证码
    getCode() {
      if (this.isNullObj(this.phoneLoginInfo.phone)) {
        alert("请输入手机号")
        return 0;
      }
      getRequest(requestService.ConsumerHost + "/code/" + this.phoneLoginInfo.phone, {}).then(res => {
        console.log("验证码 :" + JSON.stringify(res))
        this.code = res["data"];
      }).catch(err => {
        console.log("code request error " + err)
      })
      sessionStorage.setItem("code_phone", this.phoneLoginInfo.phone)
      this.settime()
    }
    //手机验证码登录
    , phoneLoginMethod() {
      if (this.isNullObj(this.phoneLoginInfo.phone)) {
        alert("手机号不能为空")
        return 0
      }
      if (this.isNullObj(this.phoneLoginInfo.code)) {
        alert("验证码不能为空")
        return 0
      }
      if (this.code !== this.phoneLoginInfo.code) {
        alert("验证码错误")
        return 0
      }
      console.log("this.phoneLoginInfo " + JSON.stringify(this.phoneLoginInfo))
      postRequest(requestService.ConsumerHost + "/login/phoneLogin", this.phoneLoginInfo)
          .then(res => {
            console.log("response res.data " + JSON.stringify(res))
          }).catch(err => {
        console.log("phoneLoginError " + err)
      })
    },
    //倒计时
    settime() {
      if (this.isNullObj(this.timer)) {
        this.isAble = true
        this.$forceUpdate();
        this.timer = setInterval(() => {
          if (this.countDown > 0 && this.countDown <= 60) {
            this.countDown--;
            localStorage.setItem("countDown", this.countDown)
            $("#countBtn").val("重新获取(" + this.countDown + ")s")
          } else {
            this.isAble = false
            localStorage.removeItem("countDown")
            $("#countBtn").val("获取验证码")
            clearInterval(this.timer);
            this.timer = null;
            sessionStorage.removeItem("code_phone")
          }
        }, 1000)
      }
    }

    //微信扫码登录
    , getLogin() {
      //hostName是后台服务器域名
      //url 是当前页面的地址。
      //appId 是公众号appid（注意：确定后台提供的appid和相关的token是同一个公众号的）
      let url = requestService.ConsumerHost + '/client/login/weChatLogin' // 重定向返回地址
      let str = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + this.wxAppId + '&redirect_uri=' + url + '/index.html&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect'
      console.log("微信授权连接：", str)
      window.location.href = str
    }
    ,//对象是否为空
    isNullObj(obj) {
      if (obj === null || obj === undefined || obj === "") {
        return true
      }
      return false
    }
  }
}
</script>
<style>

</style>
<style scoped>

.loginContContainer {
  margin-top: -45%;
  width: 100%;
  height: 100%;
  background-image: url("../../assets/bgk/loginBgk.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.loginCont {
  height: 600px;
  width: 600px;
  /*background-color: #e8d98b;*/
  margin-top: 15%;
  margin-left: 40%;
}

i {
  margin-top: 8%;
  margin-left: 15px;
  margin-right: 15px;
}

.loginCont i {
  float: left;
}

</style>