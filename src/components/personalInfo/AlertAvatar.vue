<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-5  " style="padding: 15px;">
        <form>
          <div class="form-group row">
            <img :src="newAvatar" width="150px" height="150px"
                 class="float-left "/>
            <input type="file" class="form-control-file" @change="tirggerFile($event)"/>
          </div>

          <div class="form-group row">
            <label class="col-form-label">修改性别</label>
            <div class="col-md-7">
              <div class="form-check  form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                       value="男" :checked="updateDataObj.sex==='男'">
                <label class="form-check-label" for="inlineRadio1">男</label>
              </div>
              <div class="form-check  form-check-inline" style="margin-left: 40px;">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                       value="女" :checked="updateDataObj.sex==='女'">
                <label class="form-check-label" for="inlineRadio2">女</label>
              </div>
            </div>
          </div>

          <div class="form-group row">
            <label for="inputEmail3" class="col-form-label">修改昵称</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="inputEmail3" placeholder="输入新的昵称"
                     v-model="updateDataObj.nickName">
            </div>
          </div>
          <div class="form-group row">
            <div class="col-md-12">
              <button type="button" role="button" class="btn btn-info btn-block form-control" v-on:click="submitUpdate">
                保存
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import ObjUtil from "@/js/ObjUtil";
import requestService, {postRequest, postRequestWithToken} from "@/utils/requestService";

export default {
  name: "AlertAvatar",

  data() {
    return {
      updateDataObj: {
        avatar: null,
        nickName: null,
        sex: "男"
      },
      newAvatar: null,
      imgType: ['png', 'jpg', 'jpeg', 'bmp']
    }
  }, created() {
    this.loadInfo()
  }, methods: {
    loadInfo() {
      let info = ObjUtil.methods.getPersonalFromLocal()
      if (info === 0) this.$router.push("/login")
      this.newAvatar = this.updateDataObj.avatar = info['avatar']
      this.updateDataObj.nickName = info['nickName']
      this.updateDataObj.sex = info['sex']
    },
    tirggerFile: function (event) {
      var file = event.target.files[0];
      let fileName = file.name
      let suffixIndex = fileName.lastIndexOf(".")
      let suffix = fileName.substr(suffixIndex + 1).toLowerCase()
      suffix = suffix.trim()
      let type = this.imgType.some(function (item) {
        return item === suffix
      })
      if (type) {
        var URL = window.URL || window.webkitURL;
        // 通过 file 生成目标 url
        this.newAvatar = URL.createObjectURL(file);
        console.log("URL.createObjectURL(file); " + this.updateDataObj.avatar)
        let formData = new FormData()
        formData.append("avatar", file)
        formData.append("oldAvatar", this.updateDataObj.avatar)
        formData.append("token", localStorage.getItem("token"))
        postRequest(requestService.ConsumerHost + "/avatar", formData).then(res => {
          ObjUtil.methods.updateLocalPersonalInfo(res['data'], "", "", "", "")
          this.updateParentPersonalAvatar("refresh")
        }).catch(err => {
          console.log("AlertAvatar tirggerFile error is " + err);
        })
      } else {
        alert("图片格式不对，请确保是jpg，或者是jpeg类型")
        return 0
      }
    },
    updateParentPersonalAvatar(msg) {
      this.$emit("avatarChange", msg)
    },
    submitUpdate() {
      ObjUtil.methods.updateLocalPersonalInfo(this.updateDataObj.avatar, this.updateDataObj.nickName, "", "", this.updateDataObj.sex)
      postRequestWithToken(requestService.ConsumerHost + "/personal", this.updateDataObj, localStorage.getItem("token")).then(res => {
        if (res['code'] === 100) {
          console.log("更新成功")
        } else {
          console.log("更新失败")
        }
      }).catch(err => {
        console.log("AlertAvatar submitUpdate error is " + err)
      })
    }
  }
}
</script>

<style scoped>
form img {
  margin-bottom: 30px;
}

form input {
  margin-bottom: 30px;
}

</style>