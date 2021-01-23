<template>

  <div id="mainContent">
    <Row>
      <Col span="24">
        <header-bar></header-bar>
        <index-carousel></index-carousel>
      </Col>
    </Row>

    <Row>
      <Col span="9" offset="3">
        <label style="font-size: 30px; color: red">
          Welcome to Our Pool<br/>
          Website
        </label>
      </Col>
      <Col span="9">
        <label style="font-size: 16px; color: #999;">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem<br/>
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa<br/>
          quae ab illo inventore veritatis et quasi architecto beatae vitae<br/>
          dicta sunt explicabo.
        </label>
      </Col>
    </Row>

    <Row>
      <Col span="6" style="" offset="4">
        <Card style="width:320px">
          <div style="text-align:center">
            <img src="../../assets/logo.png">
            <h3>A high quality UI Toolkit based on Vue.js</h3>
          </div>
        </Card>
      </Col>
      <Col span="6">
        <Card style="width:320px">
          <div style="text-align:center">
            <img src="../../assets/logo.png">
            <h3>A high quality UI Toolkit based on Vue.js</h3>
          </div>
        </Card>
      </Col>
      <Col span="6">
        <Card style="width:320px">
          <div style="text-align:center">
            <img src="../../assets/logo.png">
            <h3>A high quality UI Toolkit based on Vue.js</h3>
          </div>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col span="24">
        <div class="secondBck" :style="secondBckHeight">
          <p style="" class="secondBckLabel">10% OFF FIRST PURCHASE DIVING</p>
          <p class="secondBckLabel">EQUIPMENT</p>
          <Button type="success">Contact Us</Button>
        </div>
      </Col>
    </Row>

    <Row>
      <Col span="24">
        <p style="font-size: 32px;color: red; margin-top: 5%;margin-bottom: 3%;">Our Services</p>
      </Col>
    </Row>
    <Row :gutter="16">
      <Col span="6" style="margin-left: 15%;">
        <Card style="width:320px">
          <div style="text-align:center">
            <img src="../../assets/logo.png">
            <h3 style="font-size: 30px;">Pool Design</h3>
            <p style="color: #999;">
              Ut enim ad minima veniam, quis nostrum ullam corporis suscipit laboriosam.
            </p>
          </div>
        </Card>
      </Col>

      <Col span="6">
        <Card style="width:320px">
          <div style="text-align:center">
            <img src="../../assets/logo.png">
            <h3 style="font-size: 30px;">Pool Design</h3>
            <p style="color: #999;">
              Ut enim ad minima veniam, quis nostrum ullam corporis suscipit laboriosam.
            </p>
          </div>
        </Card>
      </Col>
      <Col span="6">
        <Card style="width:320px">
          <div style="text-align:center">
            <img src="../../assets/logo.png">
            <h3 style="font-size: 30px;">Pool Design</h3>
            <p style="color: #999;">
              Ut enim ad minima veniam, quis nostrum ullam corporis suscipit laboriosam.
            </p>
          </div>
        </Card>
      </Col>
    </Row>

    <Row :gutter="16" style="margin-top: 3%;">
      <Col span="6" style="margin-left: 15%;">
        <Card style="width:320px">
          <div style="text-align:center">
            <img src="../../assets/logo.png">
            <h3 style="font-size: 30px;">Pool Design</h3>
            <p style="color: #999;">
              Ut enim ad minima veniam, quis nostrum ullam corporis suscipit laboriosam.
            </p>
          </div>
        </Card>
      </Col>

      <Col span="6">
        <Card style="width:320px">
          <div style="text-align:center">
            <img src="../../assets/logo.png">
            <h3 style="font-size: 30px;">Pool Design</h3>
            <p style="color: #999;">
              Ut enim ad minima veniam, quis nostrum ullam corporis suscipit laboriosam.
            </p>
          </div>
        </Card>
      </Col>
      <Col span="6">
        <Card style="width:320px">
          <div style="text-align:center">
            <img src="../../assets/logo.png">
            <h3 style="font-size: 30px;">Pool Design</h3>
            <p style="color: #999;">
              Ut enim ad minima veniam, quis nostrum ullam corporis suscipit laboriosam.
            </p>
          </div>
        </Card>
      </Col>
    </Row>

    <Row :gutter="16" class="thirdBgk">
      <Col span="3" style="margin-left: 25%;">
        <div style="text-align: center">
          <p class="para-text-w3ls">Happy Clients</p>
          <p class="thirdBgkLabel">3400</p>
        </div>
      </Col>
      <Col span="3">
        <div style="text-align: center">
          <p class="para-text-w3ls">Experience</p>
          <p class="thirdBgkLabel">28</p>
        </div>
      </Col>
      <Col span="3">
        <div style="text-align: center">
          <p class="para-text-w3ls">Success</p>
          <p class="thirdBgkLabel">92</p>
        </div>
      </Col>
      <Col span="3">
        <div style="text-align: center">
          <p class="para-text-w3ls">Awards</p>
          <p class="thirdBgkLabel">640</p>
        </div>
      </Col>
    </Row>

    <OurPricingPlans></OurPricingPlans>

  </div>
</template>

<script>
import headerBar from "@/components/index/HeaderCarousel";
import indexCarousel from "@/components/index/indexCarousel";
import OurPricingPlans from "@/components/index/OurPricingPlans"

export default {
  name: "index",
  components: {
    headerBar,
    indexCarousel,
    OurPricingPlans
  }, data() {
    return {
      bgImg: "600px"
    }
  }, computed: {
    secondBckHeight() {
      return {
        height: "600px",
      }
    }
  }
}
</script>

<style scoped>
.secondBck {
  width: 100%;
  background-image: url("../../assets/bg2.jpg");
  background-repeat: no-repeat;
  background-size: 100% auto;
  padding-top: 10%;
  margin-top: 3%;
}

.secondBckLabel {
  font-size: 34px;
  color: #f5f7f9;
  margin-top: 10px;
}

.thirdBgk {
  width: 100%;
  height: 800px;
  background-image: url("../../assets/bg3.jpg");
  background-repeat: no-repeat;
  background-size: 100% auto;
  padding-top: 10%;
  margin-top: 3%;
}

.para-text-w3ls {
  color: #fff;
  margin-bottom: 1em;
  font-size: 18px;
  font-weight: 600;
}

.thirdBgkLabel {
  color: #fff;
  font-size: 50px;
  font-weight: 800;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 7px 7px 10px 0 rgba(4, 4, 4, 0.06);
}
</style>