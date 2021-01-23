<template>
  <div class="container-fluid">

    <div class="row">
      <div class="col-md-7 text-left" style="margin-left: 10%;">
        <video controls class="w-100" :src="video.videoUrl"/>
        <h3>{{ video.title }}</h3>
        <p class="views">{{ video.views }} views</p>
        <div>
          <img alt="." class="video_img_avatar" width="" :src="video.authorAvatar"/>
          <span class="">
            {{ video.author }}
            发布于 {{ video.publicTime | date_format_filter }}
          </span>
          <hr>
        </div>
        <!--        描述-->
        <div>
          <h3>描述：</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore
            magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi
            consequat.</p>
        </div>
      </div>

      <div class="col-md-3 video_list">

        <div class="card mb-3 border-0" style="max-width: 540px;">
          <div class="row no-gutters">
            <div class="col-md-4 ">
              <a><img src="../../assets/vedio/zore/2.png" class="card-img" alt="..."></a>
            </div>
            <div class="col-md-8">
              <div class="card-body text-left">
                <h5 class="card-title views_h3_title">从零开始学游泳基础(2)</h5>
                <div class="mt-md-1">
                  <img alt="." class="video_author_avatar_img noNewLine" src="../../assets/avatar.jpg"/>
                  <div class="noNewLine ml-md-2">
                    <p style="margin-bottom: 0;">作者</p>
                    <p>5212 views</p>
                    <p>发布于 一个月前</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card mb-3 border-0" style="max-width: 540px;">
          <div class="row no-gutters">
            <div class="col-md-4 ">
              <a><img src="../../assets/vedio/zore/2.png" class="card-img" alt="..."></a>
            </div>
            <div class="col-md-8">
              <div class="card-body text-left">
                <h5 class="card-title views_h3_title">从零开始学游泳基础(2)</h5>
                <div class="mt-md-1">
                  <img alt="." class="video_author_avatar_img noNewLine" src="../../assets/avatar.jpg"/>
                  <div class="noNewLine ml-md-2">
                    <p style="margin-bottom: 0;">作者</p>
                    <p>5212 views</p>
                    <p>发布于 一个月前</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card mb-3 border-0" style="max-width: 540px;">
          <div class="row no-gutters">
            <div class="col-md-4 ">
              <a><img src="../../assets/vedio/zore/2.png" class="card-img" alt="..."></a>
            </div>
            <div class="col-md-8">
              <div class="card-body text-left">
                <h5 class="card-title views_h3_title">从零开始学游泳基础(2)</h5>
                <div class="mt-md-1">
                  <img alt="." class="video_author_avatar_img noNewLine" src="../../assets/avatar.jpg"/>
                  <div class="noNewLine ml-md-2">
                    <p style="margin-bottom: 0;">作者</p>
                    <p>5212 views</p>
                    <p>发布于 一个月前</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card mb-3 border-0 " style="max-width: 540px;">
          <div class="row no-gutters">
            <div class="col-md-4 ">
              <a><img src="../../assets/vedio/zore/2.png" class="card-img" alt="..."></a>
            </div>
            <div class="col-md-8">
              <div class="card-body text-left">
                <h5 class="card-title views_h3_title">从零开始学游泳基础(2)</h5>
                <div class="mt-md-1">
                  <img alt="." class="video_author_avatar_img noNewLine" src="../../assets/avatar.jpg"/>
                  <div class="noNewLine ml-md-2">
                    <p style="margin-bottom: 0;">作者</p>
                    <p>5212 views</p>
                    <p>发布于 一个月前</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card mb-3 border-0 " style="max-width: 540px;">
          <div class="row no-gutters">
            <div class="col-md-4 ">
              <a><img src="../../assets/vedio/zore/2.png" class="card-img" alt="..."></a>
            </div>
            <div class="col-md-8">
              <div class="card-body text-left">
                <h5 class="card-title views_h3_title">从零开始学游泳基础(2)</h5>
                <div class="mt-md-1">
                  <img alt="." class="video_author_avatar_img noNewLine" src="../../assets/avatar.jpg"/>
                  <div class="noNewLine ml-md-2">
                    <p style="margin-bottom: 0;">作者</p>
                    <p>5212 views</p>
                    <p>发布于 一个月前</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card mb-3 border-0 " style="max-width: 540px;">
          <div class="row no-gutters">
            <div class="col-md-4 ">
              <a><img src="../../assets/vedio/zore/2.png" class="card-img" alt="..."></a>
            </div>
            <div class="col-md-8">
              <div class="card-body text-left">
                <h5 class="card-title views_h3_title">从零开始学游泳基础(2)</h5>
                <div class="mt-md-1">
                  <img alt="." class="video_author_avatar_img noNewLine" src="../../assets/avatar.jpg"/>
                  <div class="noNewLine ml-md-2">
                    <p style="margin-bottom: 0;">作者</p>
                    <p>5212 views</p>
                    <p>发布于 一个月前</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3 border-0 " style="max-width: 540px;">
          <div class="row no-gutters">
            <div class="col-md-4 ">
              <a><img src="../../assets/vedio/zore/2.png" class="card-img" alt="..."></a>
            </div>
            <div class="col-md-8">
              <div class="card-body text-left">
                <h5 class="card-title views_h3_title">从零开始学游泳基础(2)</h5>
                <div class="mt-md-1">
                  <img alt="." class="video_author_avatar_img noNewLine" src="../../assets/avatar.jpg"/>
                  <div class="noNewLine ml-md-2">
                    <p style="margin-bottom: 0;">作者</p>
                    <p>5212 views</p>
                    <p>发布于 一个月前</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3 border-0 " style="max-width: 540px;">
          <div class="row no-gutters">
            <div class="col-md-4 ">
              <a><img src="../../assets/vedio/zore/2.png" class="card-img" alt="..."></a>
            </div>
            <div class="col-md-8">
              <div class="card-body text-left">
                <h5 class="card-title views_h3_title">从零开始学游泳基础(2)</h5>
                <div class="mt-md-1">
                  <img alt="." class="video_author_avatar_img noNewLine" src="../../assets/avatar.jpg"/>
                  <div class="noNewLine ml-md-2">
                    <p style="margin-bottom: 0;">作者</p>
                    <p>5212 views</p>
                    <p>发布于 一个月前</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>


  </div>
</template>

<script>
import requestService, {getRequest, postRequest} from "@/utils/requestService";
import {date_format_filter} from "@/filters/myFilter";

export default {
  name: "VideoPage",
  filters: {date_format_filter},
  data() {
    return {
      videoName: '',
      videoID: 0,
      //video对象
      video: {
        // id: 1,
        // title: '初学游泳第一节课零基础学员，蹬池边漂浮练习要点_ 憋气、漂浮、滑行 标清(270P)',
        // videoUrl: "http://localhost:9091/video/zeroVideo/初学游泳第一节课零基础学员，蹬池边漂浮练习要点_ 憋气、漂浮、滑行 标清(270P).mp4",
        // img: 'http://localhost:9091/video/zeroVideo/img/初学游泳第一节课零基础学员，蹬池边漂浮练习要点_ 憋气、漂浮、滑行 标清(270P).jpg',
        // duration: '11:20',
        // authorAvatar: 'http://localhost:9091/avatar/defaultAvatar.jpg',
        // author: 'Jonathan Madano',
        // views: '512k',
        // publicTime: '一个月前'
      },
    }
  },
  created() {
    this.getVideo()
  }, methods: {
    /*获取视屏信息*/
    getVideo() {
      this.videoID = this.$route.query.video
      getRequest(requestService.BackSystemHost + "/back/video/" + this.videoID, "").then(res => {
        this.video = res['data']
        this.updateVideoViews()
      }).catch(err => {
        console.log("VideoPage getVideo error is " + err)
      })
    },
    //更新视屏观看次数
    updateVideoViews() {
      postRequest(requestService.BackSystemHost + "/back/video/" + this.videoID, {})
    }
  }
}
</script>

<style scoped>
.views {
  color: #848484;
}

.views_h3_title {
  position: absolute;
  top: 2%;
}

.video_img_avatar {
  border-radius: 100%;
  width: 70px;
}

.video_author_avatar_img {
  vertical-align: top;
  width: 40px;
  border-radius: 100%;
}

/*视屏列表*/
.video_list {
  height: 900px;
  overflow: scroll;
}

p {
  margin-top: 0;
  margin-bottom: 0;
}

</style>