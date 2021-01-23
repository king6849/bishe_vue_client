<template>
  <div class="container-fluid">
    <HeaderNav></HeaderNav>
    <!-- 轮播图     -->
    <div class="row" style="margin-top: 5%;">
      <div class="col-md-10 centerHorizontally">
        <div id="carouselExampleControls" class="carousel slide " data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="../../assets/vedio/img2.jpg" class="d-block w-100 h-75" alt="...">
            </div>
            <div class="carousel-item">
              <img src="../../assets/vedio/img3.jpg" class="d-block w-100 h-75" alt="...">
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button"
             data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>

    <!--    从零开始-->
    <div class="row">
      <div class="col-md-8 text-left mt-md-4 video_ml">
        <h4>从零开始</h4>
        <ul class="list-group list-group-horizontal-md ">

          <li class="list-group-item border-0" v-for="(item,index) in zoneInfoList" :key="index">
            <div class="card border-0 " style="width: 18rem;">
              <router-link tag="a" :to="{path:'videoPage',query:{'video':item.id}}"
                           class="btn btn-outline-light barBtn">
                <img class="card-img-top video_author_img_titlePage" :src="item.pic"
                     alt="Card image cap">
              </router-link>
              <span class="video_author_avatar_span_duration">{{ item.duration | duration_cover_filter }}</span>
              <div class="card-body text-left">
                <span class="d-inline-block text-truncate card-text" style="max-width: 230px;">
                  {{ item.title }}
                </span><br>
                <img alt="." class="video_author_avatar_img" :src="item.authorAvatar"/>
                <span class="video_author_avatar_span_user video_author_avatar_span_text">{{ item.author }}</span><br>
                <span class="video_author_avatar_span_views video_author_avatar_span_text">{{ item.views }} views</span>
                <span class="ml-md-2 video_author_avatar_span_text">{{ item.publicTime | date_format_filter }}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!--    自由泳-->
    <div class="row">
      <div class="col-md-8 text-left mt-md-4 video_ml">
        <h4>自由泳</h4>
        <ul class="list-group list-group-horizontal-md ">

          <li class="list-group-item border-0" v-for="(item,index) in freeStyleInfoList" :key="index">
            <div class="card border-0 " style="width: 18rem;">
              <router-link tag="a" :to="{path:'videoPage',query:{'video':item.id}}"
                           class="btn btn-outline-light barBtn">
                <img class="card-img-top video_author_img_titlePage" :src="item.pic"
                     alt="Card image cap">
              </router-link>
              <span class="video_author_avatar_span_duration">{{ item.duration | duration_cover_filter }}</span>
              <div class="card-body text-left">
                <span class="d-inline-block text-truncate card-text" style="max-width: 230px;">
                  {{ item.title }}
                </span><br>
                <img alt="." class="video_author_avatar_img" :src="item.authorAvatar"/>
                <span class="video_author_avatar_span_user video_author_avatar_span_text">{{ item.author }}</span><br>
                <span class="video_author_avatar_span_views video_author_avatar_span_text">{{ item.views }} views</span>
                <span class="ml-md-2 video_author_avatar_span_text">{{ item.publicTime | date_format_filter }}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!--    蛙泳-->
    <div class="row">
      <div class="col-md-8 text-left mt-md-4 video_ml">
        <h4>蛙泳</h4>
        <ul class="list-group list-group-horizontal-md ">

          <li class="list-group-item border-0" v-for="(item,index) in breaststrokeInfoList" :key="index">
            <div class="card border-0 " style="width: 18rem;">
              <router-link tag="a" :to="{path:'videoPage',query:{'video':item.id}}"
                           class="btn btn-outline-light barBtn">
                <img class="card-img-top video_author_img_titlePage" :src="item.pic"
                     alt="Card image cap">
              </router-link>
              <span class="video_author_avatar_span_duration">{{ item.duration | duration_cover_filter }}</span>
              <div class="card-body text-left">
                <span class="d-inline-block text-truncate card-text" style="max-width: 230px;">
                  {{ item.title }}
                </span><br>
                <img alt="." class="video_author_avatar_img" :src="item.authorAvatar"/>
                <span class="video_author_avatar_span_user video_author_avatar_span_text">{{ item.author }}</span><br>
                <span class="video_author_avatar_span_views video_author_avatar_span_text">{{ item.views }} views</span>
                <span class="ml-md-2 video_author_avatar_span_text">{{ item.publicTime | date_format_filter }}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!--    蝶泳-->
    <div class="row">
      <div class="col-md-8 text-left mt-md-4 video_ml">
        <h4>蝶泳</h4>
        <ul class="list-group list-group-horizontal-md ">

          <li class="list-group-item border-0" v-for="(item,index) in butterflyInfoList" :key="index">
            <div class="card border-0 " style="width: 18rem;">
              <router-link tag="a" :to="{path:'videoPage',query:{'video':item.id}}"
                           class="btn btn-outline-light barBtn">
                <img class="card-img-top video_author_img_titlePage" :src="item.pic"
                     alt="Card image cap">
              </router-link>
              <span class="video_author_avatar_span_duration">{{ item.duration | duration_cover_filter }}</span>
              <div class="card-body text-left">
                <span class="d-inline-block text-truncate card-text" style="max-width: 230px;">
                  {{ item.title }}
                </span><br>
                <img alt="." class="video_author_avatar_img" :src="item.authorAvatar"/>
                <span class="video_author_avatar_span_user video_author_avatar_span_text">{{ item.author }}</span><br>
                <span class="video_author_avatar_span_views video_author_avatar_span_text">{{ item.views }} views</span>
                <span class="ml-md-2 video_author_avatar_span_text">{{ item.publicTime | date_format_filter }}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderNav from "@/components/Home/HeaderNav";
import requestService, {getRequest} from "@/utils/requestService";
import {date_format_filter, duration_cover_filter} from "@/filters/myFilter";

export default {
  name: "videoLearning",
  components: {
    HeaderNav
  },
  filters: {duration_cover_filter, date_format_filter},
  data() {
    return {
      //video对象
      // video: {
      //   title: '初学游泳第一节课零基础学员，蹬池边漂浮练习要点_ 憋气、漂浮、滑行 标清(270P).mp4',
      //   img: 'http://localhost:9091/video/zeroVideo/img/初学游泳第一节课零基础学员，蹬池边漂浮练习要点_ 憋气、漂浮、滑行 标清(270P).jpg',
      //   duration: '11:20',
      //   authorAvatar: 'http://localhost:9091/avatar/defaultAvatar.jpg',
      //   author: 'Jonathan Madano',
      //   views: '512k',
      //   publicTime: '一个月前'
      // },
      //从零开始
      zoneInfoList: [
        // {
        //   id: '8',
        //   img: 'http://localhost:9091/video/zeroVideo/img/1TDwN4F7CLXve8FEMGlqtOLYN.jpg',
        //   duration: 15,
        //   title: '初学游泳第一节课零基础学员，蹬池边漂浮练习要点_ 憋气、漂浮、滑行 标清(270P).mp4',
        //   authorAvatar: 'http://localhost:9091/avatar/defaultAvatar.jpg',
        //   author: 'Jonathan Madano',
        //   views: '512k',
        //   publicTime: '一个月前',
        //   type: 'zeroVideo'
        // },
      ],
      //自由泳
      freeStyleInfoList: [],
      //蛙泳
      breaststrokeInfoList: [],
      //蝶泳
      butterflyInfoList: [],
    }
  }, created() {
    this.initVideoInfoList()
  },
  methods: {
    initVideoInfoList() {
      this.loadZero()
      this.loadBreaststroke()
      this.loadButterfly()
      this.loadFree()
    },
    //加载零基础
    loadZero() {
      getRequest(requestService.BackSystemHost + "/back/videoList/1", {startIndex: 1, size: 4}).then(res => {
        this.zoneInfoList = res['data']
      }).catch(err => {
        console.log(err)
      })
    },
    //加载自由泳
    loadFree() {
      getRequest(requestService.BackSystemHost + "/back/videoList/2", {startIndex: 1, size: 4}).then(res => {
        this.freeStyleInfoList = res['data']
      }).catch(err => {
        console.log(err)
      })
    },
    //加载蛙泳
    loadBreaststroke() {
      getRequest(requestService.BackSystemHost + "/back/videoList/3", {startIndex: 1, size: 4}).then(res => {
        this.breaststrokeInfoList = res['data']
      }).catch(err => {
        console.log(err)
      })
    },
    //加载蝶泳
    loadButterfly() {
      getRequest(requestService.BackSystemHost + "/back/videoList/4", {startIndex: 1, size: 4}).then(res => {
        this.butterflyInfoList = res['data']
      }).catch(err => {
        console.log(err)
      })
    },
  }
}
</script>

<style scoped>
/*视屏发布者*/
.video_ml {
  margin-left: 8%;
}

.video_author_img_titlePage {
  border-radius: 13px;
}

.video_author_avatar_img {
  width: 30px;
  border-radius: 100%;
}

.video_author_avatar_span_text {
  color: #737373;
  font-size: 12px;
}

.video_author_avatar_span_user {
  margin-left: 3%;
}

.video_author_avatar_span_views {
  /*margin-left: 15%;*/
}

.video_author_avatar_span_duration {
  border-radius: 5px;
  background: rgba(3, 3, 3, 0.45);
  color: #ffffff;
  position: absolute;
  z-index: 1;
  right: 20px;
  bottom: 48%;
}

</style>