<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-4">
        <div class="left_img">
        </div>
      </div>
      <div class="col-md-6 belfore-section-title">
        <h2 class="section-title">ABOUT US</h2>
        <p class="section-title-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
          electronic typesetting.
        </p>
        <a href="#" class="btn btn-info section-title-btn" role="button">Read more</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUs"
}
</script>

<style scoped>
.left_img {
  width: auto;
  height: 400px;
  background-image: url("../../assets/about-img.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.belfore-section-title {
  margin-left: 10%;
}

.section-title-content{
  margin-top: 5%;
}

.section-title-btn{
 margin-top: 6%;
}

.section-title {
  margin-top: 10%;
  font-size: 38px;
  text-align: center;
  text-transform: uppercase;
}


p {
  font-size: 14px;
  line-height: 24px;
  color: #666;
}

p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
</style>