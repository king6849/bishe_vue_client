<template>
  <Carousel autoplay v-model="carouselValue" loop dots="outside">
    <CarouselItem>
      <div class="demo-carousel">

        <h1 class="carouselFirstFont">Build Your Dream Swimming Pool</h1>
        <h2 class="carouselSecondFont">Your Dream Swimming Pool</h2>
      </div>
    </CarouselItem>
    <CarouselItem>
      <div class="demo-carousel">
        <h1 class="carouselFirstFont">Build Your Dream Swimming Pool</h1>
        <h2 class="carouselSecondFont">Your Dream Swimming Pool</h2>
      </div>
    </CarouselItem>
    <CarouselItem>
      <div class="demo-carousel">
        <h1 class="carouselFirstFont">Build Your Dream Swimming Pool</h1>
        <h2 class="carouselSecondFont">Your Dream Swimming Pool</h2>
      </div>
    </CarouselItem>
    <CarouselItem>
      <div class="demo-carousel">
        <h1 class="carouselFirstFont">Build Your Dream Swimming Pool</h1>
        <h2 class="carouselSecondFont">Your Dream Swimming Pool</h2>
      </div>
    </CarouselItem>
  </Carousel>
</template>
<script>
export default {
  name: "indexCarousel",

  data() {
    return {
      carouselValue: 1,
      imgWidth: "auto",
      imgHeight: "50%",
      imgs: {
        one: require('../../assets/carsousel/1.jpg'),
        two: require('../../assets/carsousel/2.jpg'),
        three: require('../../assets/carsousel/3.jpg'),
        four: require('../../assets/carsousel/4.jpg'),
      }
    }
  }, computed: {
    ivucarousel() {
      return {
        height: '900px',
        backgroundImage: 'url("../../assets/backgroup.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: "center center",
        backgroundSize: "100% auto",
      }
    }
  }
}
</script>
<style scoped>

.ivu-carousel {
  height: 900px;
  background: url("../../assets/backgroup.jpg") no-repeat center center;
  background-size: 100% auto;
}

.carouselFirstFont {
  font-size: 48px;
  color: aliceblue;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}

.carouselSecondFont {
  font-size: 28px;
  color: aliceblue;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}

/deep/ .ivu-carousel-track {
  margin-top: 400px;
}
</style>