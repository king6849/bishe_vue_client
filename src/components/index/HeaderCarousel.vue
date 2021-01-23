<template>
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
<!--        <source src="../../assets/vedio/video.mp4" type="video/mp4">-->
                <img src="../../assets/lunbo/slider-bg.jpg" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
<!--        <source src="../../assets/vedio/video.webm" type="video/mp4">-->
        <img src="../../assets/lunbo/slider-bg2.jpg" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="../../assets/lunbo/slider-bg3.jpg" class="d-block w-100" alt="...">
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>
<script>
export default {

  name: "HeaderCarousel",

  data() {
    return {
      theme1: 'dark'
    }
  }
}
</script>

<style scoped>
.slider-content {
  position: absolute;
  top: 35%;
  left: 18%;
  z-index: 15;
  text-align: center;
}

.slider-content h3 {
  color: #fefefe;
  font-weight: 400;
}

.slider-content h3 span {
  font-size: 72px;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
}

.slider-content h4 {
  color: #fefefe;
  font-weight: 400;
}

h4 {
  font-size: 24px;
}

.slider-content .cta {
  margin-top: 40px;
}

a:hover, a:focus, a:visited {
  text-decoration: none !important;
  outline: none !important;
}

.btn {
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  padding: 10px 25px;
  position: relative;
  background: #3cbeee;
  -webkit-border-radius: 25px;
  -moz-border-radius: 25px;
  -ms-border-radius: 25px;
  -o-border-radius: 25px;
  border-radius: 25px;
  color: #fefefe;
  box-shadow: 5.5px 9px 15px 0px rgba(0, 0, 0, 0.2);
  -webkit-transition: all .8s ease;
  -moz-transition: all .8s ease;
  -ms-transition: all .8s ease;
  -o-transition: all .8s ease;
  transition: all .8s ease;
}
</style>