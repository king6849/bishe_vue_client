<template>
  <div class="container py-xl-5 py-lg-3">
    <div class="row">
      <h3 class="col-lg-6 tittle">Welcome to Our Pool <br>Website</h3>
      <p class="col-lg-6 mt-lg-0 mt-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
        doloremque
        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
        sunt explicabo.</p>
    </div>
    <div class="row mt-5 pt-lg-5 text-center">
      <div class="col-md-4 popular-wthree-grid">
        <img src="../../assets/logo.png" class="img-fluid" alt="">
        <h5 class="popular-wthree-text p-3">Beauty Pool</h5>
      </div>
      <div class="col-md-4 popular-wthree-grid my-md-0 my-sm-5 my-4">
        <img src="../../assets/logo.png" class="img-fluid" alt="">
        <h5 class="popular-wthree-text p-3">Dream Pool</h5>
      </div>
      <div class="col-md-4 popular-wthree-grid">
        <img src="../../assets/logo.png" cla  ss="img-fluid" alt="">
        <h5 class="popular-wthree-text p-3">Kids Pool</h5>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: "Welcome"
}
</script>

<style scoped>
h3.tittle {
  font-size: 40px;
  color: #EA4335;
  line-height: 1.4;
}
h5.popular-wthree-text {
  font-size: 24px;
  color: #3a3939;
  border: 3px double #EA4335;
  letter-spacing: 1px;
}
.p-3 {
  padding: 1rem !important;
}
.text-center {
  text-align: center !important;
}

.middle-w3l p {
  color: #fff;
  text-transform: uppercase;
  font-size: 40px;
  max-width: 800px;
  text-shadow: 1px 1px 1px #000;
  line-height: 1.5;
}
p {
  margin: 0;
  padding: 0;
  font-size: 15px;
  letter-spacing: 1px;
  line-height: 1.9;
  color: #999;
}
</style>