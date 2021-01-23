<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-4">
        <form>
          <label id="op" style="color: red;"></label>
          <input type="password" v-model="oldPassword" class="form-control" placeholder="Enter OldPassword"
                 v-on:focusout="verificationPassword">
          <input type="password" v-model="password" class="form-control" placeholder="Enter newPassword">
          <input type="password" v-model="sureNewPassword" class="form-control" v-on:focusout="check"
                 placeholder="Enter sureNewPassword">
          <button type="button" role="button" class="btn btn-info btn-block" :disabled="isVerification">保存</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery"
import requestService, {getRequestWithToken, postRequestWithToken} from "@/utils/requestService";
import ObjUtil from "@/js/ObjUtil";

export default {
  name: "AlertPassword",
  data() {
    return {
      oldPassword: "",
      password: "",
      sureNewPassword: "",
      isVerification: true
    }
  }, methods: {
    verificationPassword() {
      if(ObjUtil.methods.isNullObj(this.oldPassword)) return 0
      getRequestWithToken(requestService.ConsumerHost + "/password", {"password": this.oldPassword}, localStorage.getItem("token")).then(res => {
        if (res['code'] === 100) {
          $("#op").html("")
          this.isVerification = false
        } else {
          $("#op").html("密码错误，请重新输入")
          this.isVerification = true
        }
      }).catch(err => {
        console.log("AlertPassword verificationPassword error " + err)
      })
    },
    check() {
      if (!this.isVerification) {
        if (this.password !== this.sureNewPassword) {
          $("#op").html("两次密码不一致")
          return 0
        }
        postRequestWithToken(requestService.ConsumerHost + "/personal",
            {
              'password': this.password,
            }, localStorage.getItem("token")).then(res => {
          if (res['code'] !== 100) {
            $("#op").html(res['msg'])
          }
          alert("修改成功")
        }).catch(err => {
          console.log("AlertPassword check error is " + err)
        })
      } else {
        $("#op").html("请输入旧密码")
      }

    }
  }
}
</script>

<style scoped>

input {
  margin-top: 15px;
  margin-bottom: 15px;
}

</style>