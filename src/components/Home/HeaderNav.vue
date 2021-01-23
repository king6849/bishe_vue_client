<template>
  <div class="container-fluid" style="">
    <div class="row">
      <div class="col-md-12 ">
        <nav class="navbar navbar-dark bg-dark headerBar text-right ">
          <!--          logo-->
          <div class="">

            <router-link tag="a" style="font-size: 36px;color: white;margin-left: 10px;text-decoration: none;" class=""
                         to="/">
              <img alt="logo" src="../../assets/logo/logo.jpg" class="img-thumbnail" width="50px;"/>
              月湾湾游泳馆
            </router-link>
          </div>

          <!--            登录-->
          <div class="personInfoContainer" style="margin-left: 4%;">
            <div v-if="!loginStatus">
              <div class="dropdown">
                <button class="btn btn-outline-light dropdown-toggle" type="button" id="dropdownMenuButton"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  登录/注册
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <router-link class="dropdown-item" to="/login">
                    去登录
                  </router-link>
                  <div class="dropdown-divider"></div>
                  <router-link class="dropdown-item" to="/register">
                    去注册
                  </router-link>
                </div>
              </div>
            </div>
            <!--   已登录-->
            <div v-else class="personInfo">
              <router-link :to="{path:'/personal'}" title="我的主页">
                <img v-bind:src="personalInfo.avatar" class="rounded" width="50px;" alt="...">
              </router-link>
            </div>
          </div>

          <router-link tag="a" type="button" class="btn btn-outline-light barBtn" style="" to="/">首页</router-link>

          <router-link tag="a" type="button" class="btn btn-outline-light barBtn" to="/ticket">购票</router-link>

          <router-link tag="a" type="button" class="btn btn-outline-light barBtn" to="/train">预约培训</router-link>


          <router-link tag="a" type="button" to="/video" class="btn btn-outline-light barBtn">视屏学习</router-link>

          <a type="button" class="btn btn-outline-light barBtn" v-on:click="contactUs">联系我们</a>

          <div id="search" class="text-right barBtn">
            <form class="form-inline my-2 my-lg-0 ">
              <input class="form-control mr-sm-2" type="search" placeholder="搜索..." aria-label="Search">
              <button class="btn btn-outline-light my-2 my-sm-0" type="submit">
                <i class="fa fa-search" aria-hidden="true"></i>...
              </button>
            </form>
          </div>
        </nav>
      </div>
    </div>

    <Client :hidden="this.client.status" class="contractUs " style=""></Client>
  </div>

</template>

<script>
import ObjUtil from "@/js/ObjUtil";
import requestService, {getRequestWithToken} from "@/utils/requestService";
import Client from "@/components/client/Client";

export default {
  name: "HeaderNav",
  components: {
    Client
  },
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
      orderRecord: [],
      client: {
        status: true
      }
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
    }, contactUs() {
      if (this.client.status) {
        this.client.status = false;
      } else {
        this.client.status = true;
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


.headerBarContainer {
  background-color: rgba(19, 18, 18, 0.5) !important;
}

.headerBar {
  position: fixed;
  top: 5px;
  z-index: 1;
  left: 5%;
  width: 90%;
}


.bg-dark {
  background-color: rgba(19, 18, 18, 0.5) !important;
}

.personInfoContainer {
  width: auto;
  height: auto;
}


.dropdown-menu a:hover {
  background-color: orange;
}


.barBtn {
  position: relative;
  left: -3%;
  display: inline-block;
  font-size: 18px;
  float: right;
}

/*客服*/
.contractUs {

  position: fixed;
  z-index: 1;
  right: 1%;
  top: 25%;
  width: 20%;
  height: 20%;
}

</style>