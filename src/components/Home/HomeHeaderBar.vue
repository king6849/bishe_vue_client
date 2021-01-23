<template>
  <div class="container-fluid ">
    <div class="row">
      <div class="col-12">
        <HeaderNav ></HeaderNav>
        <div class="bgk" :class="bgkHeight">
          <div class="style-banner text-center">
            <h3 class="mb-2" style="font-size: 64px;font-family: 'Oswald', sans-serif;">Build Your Dream Swimming
              Pool</h3>
            <p>Your Dream Swimming Pool</p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import ObjUtil from "@/js/ObjUtil";
import requestService, {getRequestWithToken} from "@/utils/requestService";
import HeaderNav from "@/components/Home/HeaderNav";

export default {
  name: "HomeHeaderBar",
  components: {HeaderNav},

  data() {
    return {
      loginStatus: false,
      imgHeight: 900,
      personalInfo: {
        nickName: null,
        avatar: null,
        sex: '男',
        phone: null,
        overage: 0
      },
      //订单记录
      orderRecord: []
    }
  }, created() {
    //加载个人信息
    this.loadInfo()
  },
  methods: {
    loadInfo() {
      let personalInfo = localStorage.getItem("loginPersonalInfo")
      if (!ObjUtil.methods.isNullObj(personalInfo)) {
        let data = JSON.parse(personalInfo)
        this.personalInfo.avatar = data["avatar"]
        this.loginStatus = true
        return 0;
      }
      let token = localStorage.getItem("token")
      if (!ObjUtil.methods.isNullObj(token)) {
        getRequestWithToken(requestService.ConsumerHost + "/personal", {}, token).then(res => {
          let data = res['data']
          this.personalInfo.avatar = data["avatar"]
          localStorage.setItem("loginPersonalInfo", JSON.stringify(data))
          this.loginStatus = true
        }).catch(err => {
          console.log("loadInfo error is " + err)
        })
      }
    }
  },
  computed: {
    bgkHeight() {
      return {
        height: this.imgHeight + "px",
      }
    }
  }
}
</script>

<style scoped>

.dropdown-menu a:hover {
  background-color: orange;
}

.bgk {
  position: relative;
  top: -6%;
  width: 100%;
  height: 900px;
  background-image: url("../../assets/backgroup.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}


.style-banner {
  color: #f5f7f9;
  margin-left: 20%;
  margin-top: 20%;
  position: absolute;
}

.style-banner p {
  color: #fff;
  font-weight: 100;
  font-size: 20px;
  letter-spacing: 2px;
}

.text-center {
  text-align: center !important;
}
</style>