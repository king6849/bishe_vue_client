<template>
  <div class="price-sec py-5" id="price">
    <div class="container py-xl-5 py-lg-3">
      <h3 class="tittle mb-5 pb-lg-4 text-center sec-hedadc">Our Pricing Plans</h3>
      <div class="inner_sec_info_agile_w3_info">
        <div class="row price-grid-main">
          <div class="col-lg-3 col-sm-6 price-info">
            <div class="prices border p-4">
              <div class="prices-top">
                <div class="dodecagon s1">
                  <div class="dodecagon-in s1">
                    <div class="dodecagon-bg s1">
                      <h3 class="text-center text-white rounded-circle">$30</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div class="prices-bottom text-center">
                <div class="prices-h border-bottom p-4">
                  <h4>Standard</h4>
                </div>
                <ul class="mt-4">
                  <li>Mini - Toddler</li>
                  <li class="my-3">Coffee Break</li>
                  <li>Total Classes - 15</li>
                  <li class="my-3">Group Lesson</li>
                </ul>
                <a href="#" class="button mt-4" role="button">Sign Up</a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6  price-info price-mkres-2">
            <div class="prices border p-4 active">
              <div class="prices-top">
                <div class="dodecagon s1">
                  <div class="dodecagon-in s1">
                    <div class="dodecagon-bg s1">
                      <h3 class="text-center text-white rounded-circle">$80</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div class="prices-bottom text-center">
                <div class="prices-h border-bottom p-4">
                  <h4>Premium</h4>
                </div>
                <ul class="mt-4">
                  <li>Group Lesson</li>
                  <li class="my-3">Coffee Break</li>
                  <li>Mini - Toddler</li>
                  <li class="my-3">Total Classes - 15</li>
                </ul>
                <a href="#" class="button mt-4">Sign Up</a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6  price-info price-mkres">
            <div class="prices border p-4">
              <div class="prices-top">
                <div class="dodecagon s1">
                  <div class="dodecagon-in s1">
                    <div class="dodecagon-bg s1">
                      <h3 class="text-center text-white rounded-circle">$60</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div class="prices-bottom text-center">
                <div class="prices-h border-bottom p-4">
                  <h4>Golden</h4>
                </div>
                <ul class="mt-4">
                  <li>Total Classes - 15</li>
                  <li class="my-3">Coffee Break</li>
                  <li>Mini - Toddler</li>
                  <li class="my-3">Group Lesson</li>
                </ul>
                <a href="#" class="button mt-4">Sign Up</a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6  price-info price-mkres">
            <div class="prices border p-4 active">
              <div class="prices-top">
                <div class="dodecagon s1">
                  <div class="dodecagon-in s1">
                    <div class="dodecagon-bg s1">
                      <h3 class="text-center text-white rounded-circle">$30</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div class="prices-bottom text-center">
                <div class="prices-h border-bottom p-4">
                  <h4>Ultimate</h4>
                </div>
                <ul class="mt-4">
                  <li>Mini - Toddler</li>
                  <li class="my-3">Group Lesson</li>
                  <li>Total Classes - 15</li>
                  <li class="my-3">Coffee Break</li>
                </ul>
                <a href="#" class="button mt-4">Sign Up</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OurPricingPlans"
}
</script>

<style scoped>
@media (max-width: 1080px) {
  h3.tittle {
    font-size: 38px;
  }

}

h3.sec-hedadc {
  color: #1dd1a1;
  font-weight: 500;
}

@media (max-width: 1080px) {
  .prices-top {
    left: 29%;
  }
}

.prices-top {
  position: absolute;
  top: -18%;
  left: 34%;
}

.prices-top h3 {
  font-size: 30px;
  text-shadow: 0 2px 12px rgba(97, 50, 3, 0.6);
  background: #EA4335;
  width: 90px;
  height: 90px;
  line-height: 2.9;
  box-shadow: 1px 1px 8px 0px rgba(0, 0, 0, 0.48);
  transition: 0.5s all;
  -webkit-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -o-transition: 0.5s all;
  -ms-transition: 0.5s all;
}

ul li {
  list-style: none;
}

@media (max-width: 1080px) {
  a.button, .book-form input[type=submit] {
    font-size: 13px;
  }
}

a.button:hover{
  background-color: #1dd1a1;
  text-decoration:none;
}
a.button, .book-form input[type=submit] {
  font-size: 14px;
  padding: 10px 0;
  background: #292929;
  color: #fff;
  letter-spacing: 1px;
  display: inline-block;
  border-radius: 25px;
  width: 60%;
  border: none;
  transition: 0.5s all;
  -webkit-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -o-transition: 0.5s all;
  -ms-transition: 0.5s all;
}
.inner_sec_info_agile_w3_info {
  margin-top: 7em;
}
h1, h2, h3, h4, h5, h6 {
  margin: 0;
  padding: 0;
  font-family: 'Oswald', sans-serif;
}
</style>