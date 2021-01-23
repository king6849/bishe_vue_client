<template>
  <div id="testimonials" class="container-fluid main-content">
    <div class="row" style="margin-top: 3%;">
      <div class="col-md-12">
        <h2 class="section-title">
          <span>happy clients</span><br>
          testimonial
        </h2>
      </div>
    </div>

    <div class="row">
      <!-- Start of Sync 1 -->
      <div id="sync1" class="owl-carousel col-md-12 owl-theme" style="opacity: 1; display: block;">
        <!-- Testimonial of Client 1 -->
        <div class="owl-wrapper-outer">
          <div class="owl-wrapper"
               style="width: 5640px; left: 0px; display: block; transition: all 0ms ease 0s; transform: translate3d(0px, 0px, 0px);">
            <div class="owl-item" style="width: 940px;">
              <div class="item">
                <div class="testimonial">
                  <blockquote class="blockquote text-left">Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has
                    been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                    of
                    type and scrambled it to make a type specibook. It has survived not only five centuries, but also
                    the
                    leap into electronic typesetting, remaining essentially.
                  </blockquote>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    <div class="row" style="margin-top: 3%;">
      <div id="sync2" class="owl-carousel col-md-12 owl-theme" style="opacity: 1; display: block;"><!-- Client 1 -->
        <div class="owl-wrapper-outer">
          <div class="owl-wrapper"
               style="width: 1938px; left: 0px; display: block; transition: all 200ms ease 0s; transform: translate3d(0px, 0px, 0px);
              ">
            <div class="owl-item synced" style="width: 323px;">
              <div class="item"><!-- Client Image -->
                <div class="client-img">
                  <img src="../../assets/avatar/avatar1.jpg" class="img-responsive" alt="">
                </div>
                <!-- Client Detail -->
                <div class="details"><h4>janie doe</h4><h6>professional swimmer</h6></div>
              </div>
            </div>
            <div class="owl-item" style="width: 323px;">
              <div class="item"><!-- Client Image -->
                <div class="client-img">
                  <img src="../../assets/avatar/avatar2.jpg" class="img-responsive" alt="">
                </div>
                <!-- Client Detail -->
                <div class="details"><h4>janie doe</h4><h6>professional swimmer</h6></div>
              </div>
            </div>
            <div class="owl-item" style="width: 323px;">
              <div class="item"><!-- Client Image -->
                <div class="client-img">
                  <img src="../../assets/avatar/avatar3.jpg" class="img-responsive" alt="">
                </div>
                <!-- Client Detail -->
                <div class="details"><h4>janie doe</h4><h6>professional swimmer</h6></div>
              </div>
            </div>
          </div>
        </div>
        <!-- Client 2 --><!-- Client 3 -->
        <div class="owl-controls clickable" style="display: none;">
          <div class="owl-pagination">
            <div class="owl-page active"><span class=""></span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BeforePricePlans"
}
</script>

<style scoped>

.main-content {
  background: url("../../assets/bgk/testimonial-bg.png") no-repeat #3cbeee;
  background-position: top left;
  background-size: contain;
  color: #f6f8f8;
}

.col-md-12 {
  margin-left: 25%;
}

.section-title {
  margin-top: 3%;
  text-align: left;
  color: #f6f8f8;
}

.section-title span {
  margin-top: 5%;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 24px;
  color: #a6ecff;
}

.owl-carousel {
  width: 100%;
  -ms-touch-action: pan-y;
}

.owl-carousel, .owl-carousel .owl-wrapper {
  position: relative;
  display: none;
}

.owl-carousel .owl-wrapper-outer {
  overflow: hidden;
  position: relative;
  width: 100%;
}

.owl-carousel, .owl-carousel .owl-wrapper {
  position: relative;
  margin-bottom: 5%;
}

.owl-carousel .owl-item {
  float: left;
}

#sync1 .item .testimonial {
  padding-left: 80px;
}

#sync2 .item img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
}

#sync1 .item blockquote:before {
  content: '\f10d';
  font-family: 'fontawesome';
  display: inline-block;
  float: left;
  color: #f6f8f8;
  font-size: 72px;
  position: absolute;
  left: 1px;
  top: 30px;
}

.carousel-inner > .item > a > img, .carousel-inner > .item > img, .img-responsive, .thumbnail a > img, .thumbnail > img {
  display: block;
  max-width: 100%;
  height: auto;
}

#sync2 .item .client-img {
  display: inline-block;
  float: left;
}

#sync2 .item .details {
  display: inline-block;
  float: left;
  margin-top: 20px;
  padding-left: 30px;
}

#sync2 .item .details h4 {
  color: #f6f8f8;
  text-align: left;
  text-transform: uppercase;
}

#sync2 .item .details h6 {
  color: #a6ecff;
  text-align: left;
  text-transform: uppercase;
}
</style>