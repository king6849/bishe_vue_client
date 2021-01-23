<template>
  <div class="stats text-center py-5" id="stats">
    <div class="container py-xl-5 py-lg-3">
      <div class="row py-lg-4 py-sm-3">
        <div class="col-md-3 col-6 w3layouts_stats">
          <p class="para-text-w3ls">Happy Clients</p>
          <p class="counter">3400</p>
        </div>
        <div class="col-md-3 col-6 w3layouts_stats">
          <p class="para-text-w3ls">Experience</p>
          <p class="counter">28</p>
        </div>
        <div class="col-md-3 col-6 w3layouts_stats mt-md-0 mt-4 ">
          <p class="para-text-w3ls">Success</p>
          <p class="counter ">92</p>
        </div>
        <div class="col-md-3 col-6 w3layouts_stats mt-md-0 mt-4">
          <p class="para-text-w3ls">Awards</p>
          <p class="counter ">640</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BeforePricingPlans"
}
</script>

<style scoped>
.para-text-w3ls {
  color: #fff;
  margin-bottom: 1em;
  font-size: 18px;
  font-weight: 600;
}

#stats {
  background: url("../../assets/bg3.jpg") no-repeat center;
  background-size: cover;
}
p.counter {
  color: #fff;
  font-size: 50px;
  font-weight: 800;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 7px 7px 10px 0 rgba(4, 4, 4, 0.06);
}
</style>