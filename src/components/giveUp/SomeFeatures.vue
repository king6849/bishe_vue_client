<template>
  <section class="features py-5" id="features">
    <div class="container py-xl-5 py-lg-3">
      <div class="row">
        <div class="col-md-6 about-text-grid">
          <blockquote class="blockquote text-left">
            <h3 class="tittle">Some Features</h3>
            <p class="mt-1">Donec mi nulla, aucto nulla auctr nec sem a.</p>
            <div class="list-unstyled">
              <ul class="my-4  list-head">
                <li>
                  <span class="fa fa-hand-o-right mr-3" aria-hidden="true"></span>Swim in 6 weeks!
                </li>
                <li>
                  <span class="fa fa-hand-o-right mr-3"></span>Quality Pools
                </li>
                <li>
                  <span class="fa fa-hand-o-right mr-3"></span>Pool Maintenance
                </li>
              </ul>
            </div>
            <a href="#contact" style="max-width: 150px; margin: 0 auto;"
               class="btn button-style button-style-2 mt-sm-4 mt-3">
              Contact Us
            </a>
          </blockquote>
        </div>
        <div class="offset-lg-1 col-md-5 abbot-right mt-lg-0 mt-sm-5 mt-4">
          <img src="../../assets/a2.jpg" class="img-fluid" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SomeFeatures"
}
</script>

<style scoped>
.features {
  background: #f3f3f3;
}

h3.tittle {
  font-size: 40px;
  color: #EA4335;
  line-height: 1.4;
}

.about-text-grid ul, li {
  margin-top: 15px;
  margin-bottom: 15px;
  list-style: none;
}

.button-style {
  background: #1dd1a1;
  padding: 12px 25px;
  border: none;
  color: #fff;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.fa-hand-o-right:before {
  content: "\f0a4";
}

</style>