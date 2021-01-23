<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-2 registerContainer">
        <form class="mb-2">
          <input type="text" v-model="user.phone" class="form-control" placeholder="手机号"/>
          <input type="password" v-model="user.password" class="form-control" id="password" placeholder="密码">
          <input type="password" class="form-control" id="password2" placeholder="确认密码">
          <div class="input-group">
            <input class="form-control" v-model="user.code" placeholder="验证码" style="width: 100px;"/>
            <div class="input-group-append">
              <input type="button" role="button" class="btn btn-info" value="获取验证码"/>
            </div>
          </div>
          <input type="button" role="button" class="btn btn-info btn-block" value="注册" v-on:click="check"/>
        </form>
      </div>
    </div>
  </div>

</template>

<script>
import $ from "jquery"
import requestService, {postRequest} from "@/utils/requestService";

export default {
  name: "register",
  data() {
    return {
      user: {
        phone: "",
        password: "",
        code: ""
      }
    }
  },
  methods: {
    check() {
      let pass1 = $("#password").val()
      let pass2 = $("#password2").val()
      if (this.isNullObj(pass1) || this.isNullObj(pass2)) return 0;
      console.log(JSON.stringify(this.user))
      if (pass1 === pass2) {
        postRequest(requestService.host + ":8081" + "/client/register", this.user).then(res => {
          console.log(res)
        }).catch(err => {
          console.log(err)
        })
      }
    }
    //对象是否为空
    , isNullObj(obj) {
      if (obj === null || obj === undefined || obj === "") {
        return true
      }
      return false
    }
  }
}
</script>

<style scoped>
.registerContainer {
  background-color: white;
  margin-top: 20%;
  margin-left: 40%;
}

input {
  margin-bottom: 15px;
}

.registerContainer form {
  margin-top: 5%;
}

</style>