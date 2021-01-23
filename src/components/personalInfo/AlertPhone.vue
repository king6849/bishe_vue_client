<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-4">
        <form>
          <div class="form-group mb-3">
            <input class="form-control" v-model="phoneLoginInfo.phone" placeholder="手机号"/>
          </div>
          <div class="input-group mb-3">
            <input type="text" class="form-control" v-model="phoneLoginInfo.code" placeholder="验证码"/>
            <div class="input-group-append">
              <input type="button" id="alert_countBtn" role="button" class="btn btn-info btn-sm" v-on:click="getCode"
                     :disabled="isAble" value="获取验证码"/>
            </div>
          </div>
          <button type="button" class="btn btn-block btn-primary" v-on:click="saveChange"
                  style="margin-bottom: 5%;margin-top: 3%;">保存
          </button>
          <label id="alert_phone_error_msg" style="color: red;"></label>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import requestService, {getRequest, postRequestWithToken} from "@/utils/requestService";
import $ from "jquery";
import ObjUtil from "@/js/ObjUtil";

export default {
  name: "AlertPhone",
  data() {
    return {
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
  },
  methods: {
    //获取验证码
    getCode() {
      if (ObjUtil.methods.isNullObj(this.phoneLoginInfo.phone)) {
        alert("请输入手机号")
        return 0;
      }
      getRequest(requestService.ConsumerHost + "/code/" + this.phoneLoginInfo.phone, {}).then(res => {
        this.code = res["data"];
      }).catch(err => {
        console.log("code request error " + err)
      })
      sessionStorage.setItem("alert_code_phone", this.phoneLoginInfo.phone)
      this.settime()
    },
    //倒计时
    settime() {
      if (ObjUtil.methods.isNullObj(this.timer)) {
        this.isAble = true
        this.$forceUpdate();
        this.timer = setInterval(() => {
          if (this.countDown > 0 && this.countDown <= 60) {
            this.countDown--;
            localStorage.setItem("alert_countDown", this.countDown)
            $("#alert_countBtn").val("重新获取(" + this.countDown + ")s")
          } else {
            this.isAble = false
            localStorage.removeItem("alert_countDown")
            $("#alert_countBtn").val("获取验证码")
            clearInterval(this.timer);
            this.timer = null;
            sessionStorage.removeItem("alert_code_phone")
          }
        }, 1000)
      }
    },
    continuteCountDown() {
      let countDown = localStorage.getItem("alert_countDown")
      if (ObjUtil.methods.isNullObj(countDown)) return 0
      let phone = sessionStorage.getItem("alert_code_phone")
      if (!ObjUtil.methods.isNullObj(phone)) {
        this.phoneLoginInfo.phone = phone
      }
      this.countDown = countDown
      this.isAble = false
      this.settime()
    },
    saveChange() {
      if (this.phoneLoginInfo.code !== this.code) {
        $("#alert_phone_error_msg").html("验证码错误，请重新输入")
        return 0
      }
      postRequestWithToken(requestService.ConsumerHost + "/personal", this.phoneLoginInfo, localStorage.getItem("token")).then(res => {
        if (res['code'] !== 100) {
          $("#alert_phone_error_msg").html(res["msg"])
        }
        ObjUtil.methods.updateLocalPersonalInfo("", "", "", this.phoneLoginInfo.phone, "")
        this.$emit("alertPhone", "refresh")
        this.phoneLoginInfo = {}
        alert("修改成功")
      }).catch(err => {
        console.log("AlertPhone saveChange error is " + err)
      })
    },
  }
}
</script>

<style scoped>

</style>