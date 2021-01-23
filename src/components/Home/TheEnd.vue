<template>
  <div class="footer_agileinfo_topf py-5">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4 footer_w3layouts_gridf">
          <h2><a href="index.html"><span class="fa fa-spinner mr-2" aria-hidden="true"></span>Pool</a></h2>
          <p class="paragraphf mt-md-4 mt-2">A healthy activity for your kids</p>
        </div>
        <div class="col-md-4 col-sm-6 footer_w3layouts_gridf mt-md-0 mt-4">
          <ul class="footer_w3layouts_gridf_list">
            <li><span class="fa fa-angle-right" aria-hidden="true"></span>
              <a href="#home">Home</a>
            </li>
            <li><span class="fa fa-angle-right" aria-hidden="true"></span>
              <a href="#services">Services</a>
            </li>
            <li><span class="fa fa-angle-right" aria-hidden="true"></span>
              <a href="#price">Pricing Plans</a>
            </li>
            <li><span class="fa fa-angle-right" aria-hidden="true"></span>
              <a href="#features">Features</a>
            </li>
          </ul>
        </div>
        <div class="col-md-4 col-sm-6 footer_w3layouts_gridf mt-md-0 mt-sm-4 mt-3">
          <ul class="footer_w3layouts_gridf_list">
            <li><span class="fa fa-angle-right" aria-hidden="true"></span>
              <a href="#gallery">Gallery</a>
            </li>
            <li><span class="fa fa-angle-right" aria-hidden="true"></span>
              <a href="#stats">Statistics</a>
            </li>
            <li><span class="fa fa-angle-right" aria-hidden="true"></span>
              <a href="#">Terms &amp; Conditions</a>
            </li>
            <li><span class="fa fa-angle-right" aria-hidden="true"></span>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="w3ls-fsocial-grid">
        <h3 class="sub-w3ls-headf">Follow Us</h3>
        <div class="social-ficons">
          <ul>
            <li><a href="#"><span class="fa fa-facebook"></span> Facebook</a></li>
            <li><a href="#"><span class="fa fa-twitter"></span> Twitter</a></li>
            <li><a href="#"><span class="fa fa-google"></span>Google</a></li>
          </ul>
        </div>
      </div>
      <div class="copyright-w3 text-center mt-sm-5 mt-4">
        <p>© 2020 Pool. All rights reserved | Design by <a href="http://www.cssmoban.com/" target="_blank" title="模板之家">TheKing</a>
          - Collect from <a href="http://www.cssmoban.com/" title="网页模板" target="_blank">MyMind</a></p>
      </div>
      <!-- move icon -->
      <div class="text-center">
        <a href="#home" class="move-top text-center mt-3"></a>
      </div>
      <!-- //move icon -->
    </div>
  </div>
</template>

<script>
export default {
  name: "TheEnd"
}
</script>

<style scoped>
@media (max-width: 991px) {
  .footer_w3layouts_gridf h2 a {
    font-size: 36px;
  }
}

.footer_w3layouts_gridf h2 a {
  display: inline-block;
  font-weight: 700;
  font-size: 40px;
  letter-spacing: 1px;
  color: #000;
  text-shadow: 2px 5px 3px rgba(0, 0, 0, 0.06);
  padding: 0;
}
p {
  margin: 0;
  padding: 0;
  font-size: 15px;
  letter-spacing: 1px;
  line-height: 1.9;
  color: #999;
}
.footer_w3layouts_gridf_list li {
  display: block;
  margin-bottom: 1em;
}
.footer_w3layouts_gridf_list li span.fa {
  color: #ee4f4f;
  padding-right: 1em;
}
.footer_w3layouts_gridf_list li a {
  color: #2b2b2b;
  text-decoration: none;
  line-height: 1.5em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.75em;
  font-weight: 800;
}
.w3ls-fsocial-grid {
  padding-top: 2em;
  border-top: 2px solid #eee;
  margin-top: 3em;
  text-align: center;
}
.social-ficons ul {
  padding: 0;
  margin: 0;
}
.social-ficons ul li {
  display: inline-block;
  margin: 0 1em;
}
.social-ficons ul li a {
  color: #333;
  text-align: center;
  font-size: 15px;
}
.social-ficons ul li a:hover{
  text-decoration: none;
}
.social-ficons ul li a span.fa.fa-facebook {
  height: 32px;
  width: 32px;
  line-height: 32px;
  background: transparent;
  margin-right: 4px;
  color: #3b5998;
  transition: 0.5s all;
  -webkit-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -o-transition: 0.5s all;
  -ms-transition: 0.5s all;
}

.copyright-w3 p {
  color: #333;
}
.copyright-w3 p a {
  color: #EA4335;
}
.fa-facebook-f:before, .fa-facebook:before {
  content: "\f09a";
}
*, *::before, *::after {
  box-sizing: border-box;
}
</style>