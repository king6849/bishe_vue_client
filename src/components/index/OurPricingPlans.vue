<template>
  <div id="plans">
    <Row style="margin-top: 20px;">
      <Col span="24">
        <h3 class="plansTitleText">Our Pricing Plans</h3>
      </Col>
    </Row>


    <Row :gutter="20">
      <Col span="4" style="margin-left: 20%;">
        <div class="prices-top">
          <h3 class="rounded-circle">$30</h3>
        </div>
        <Card>
          <p slot="title" class="cardTitleText">Standard</p>
          <p>Mini - Toddler</p><br/>
          <p>Coffee Break</p><br/>
          <p>Total Classes - 15</p><br/>
          <p>Group Lesson</p><br/>
          <Button class="cardBtn" type="primary" shape="circle">Sign Up</Button>
        </Card>
      </Col>
      <Col span="4">
        <Card>
          <p slot="title" class="cardTitleText">Standard</p>
          <p>Group Lesson</p><br/>
          <p>Coffee Break</p><br/>
          <p>Mini - Toddler</p><br/>
          <p>Total Classes - 15</p><br/>
          <Button class="cardBtn" type="primary" shape="circle">Sign Up</Button>
        </Card>
      </Col>
      <Col span="4">
        <Card>
          <p slot="title" class="cardTitleText">Premium</p>
          <p>Total Classes - 15</p><br/>
          <p>Coffee Break</p><br/>
          <p>Mini - Toddler</p><br/>
          <p>Group Lesson</p><br/>
          <Button class="cardBtn" type="primary" shape="circle">Sign Up</Button>
        </Card>
      </Col>
      <Col span="4">
        <Card>
          <p slot="title" class="cardTitleText">Golden</p>
          <p>Mini - Toddler</p><br/>
          <p>Group Lesson</p><br/>
          <p>TTotal Classes - 15</p><br/>
          <p>Coffee Break</p><br/>
          <Button class="cardBtn" type="primary" shape="circle">Ultimate</Button>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: "OurPricingPlans"
}
</script>

<style scoped>
.plansTitleText {
  font-size: 38px;
  color: #1dd1a1;
  line-height: 1.4;
  text-align: center !important;
}

.cardTitleText {
  font-size: 24px;
  color: #000;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.29);
  letter-spacing: 1px;
  font-weight: 700;
}
.prices-top {
  position: absolute;
  top: -18%;
}
.prices-top h3{
  font-size: 30px;
  text-shadow: 0 2px 12px rgba(97, 50, 3, 0.6);
  background: #EA4335;
  width: 90px;
  height: 90px;
  line-height: 2.9;
  box-shadow: 1px 1px 8px 0px rgba(0, 0, 0, 0.48);
}
.rounded-circle {
  border-radius: 50% !important;
  background-color: red;
}
.cardBtn {
  color: #fff;
  background-color: #151617;
  border-color: #1b1c1d;
}

.border {
  border: 1px solid #dee2e6 !important;
}

</style>