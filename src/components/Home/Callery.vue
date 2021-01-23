<template>
  <select id="gallery">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 pad80">
          <h2 class="section-title">Gallery</h2>
        </div>
        <ul class="gallery-sorting text-center">
          <li><a href="#" class="btn-border" data-group="all">All</a></li>
          <li><a href="#" class="btn-border active" data-group="indoor">Indoor</a></li>
          <li><a href="#" class="btn-border" data-group="outdoor">Outdoor</a></li>
          <li><a href="#" class="btn-border" data-group="spa">Spa</a></li>
          <li><a href="#" class="btn-border" data-group="yoga">Yoga</a></li>
        </ul>
        <ul class="gallery-items list-unstyled shuffle callery-item-rl" id="grid">
          <li class="col-md-2 col-sm-4 col-xs-6 shuffle-item filtered" data-groups="['indoor']" style="">
            <figure class="gallery-item">
              <a href="../../assets/about-img.jpg">
                <img src="../../assets/about-img.jpg" alt="" class="img-responsive">
              </a>
            </figure>
          </li>

          <li class="col-md-2 col-sm-4 col-xs-6 shuffle-item filtered" data-groups="['outdoor']" style="">
            <figure class="gallery-item">
              <a href="#">
                <img src="../../assets/about-img.jpg" alt="" class="img-responsive">
              </a>
            </figure>
          </li>

          <li class="col-md-2 col-sm-4 col-xs-6 shuffle-item filtered" data-groups="[spa]" style="">
            <figure class="gallery-item">
              <a href="#">
                <img src="../../assets/about-img.jpg" alt="" class="img-responsive">
              </a>
            </figure>
          </li>

          <li class="col-md-2 col-sm-4 col-xs-6 shuffle-item filtered" data-groups="[yoga]" style="">
            <figure class="gallery-item">
              <a href="#">
                <img src="../../assets/about-img.jpg" alt="" class="img-responsive">
              </a>
            </figure>
          </li>

        </ul>
      </div>
    </div>
  </select>

</template>

<script>
export default {
  name: "Callery"
}
</script>

<style scoped>
.callery-item-rl {
  position: relative;
  overflow: hidden;
  height: 250px;
  transition: height 300ms ease-out 0s;
}

.shuffle-item {
  position: absolute;
  top: 0px;
  left: 0px;
  visibility: visible;
  transition: transform 300ms ease-out 0s, opacity 300ms ease-out 0s;
  opacity: 1;
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1);
}

ul.gallery-sorting {
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  text-align: center;
}

ul.gallery-sorting li {
  display: inline-block;
  padding: 15px 10px;
}

.btn-border.active {
  background: #3cbeee;
  color: #f6f8f8;
}

a:hover, a:focus, a:visited {
  text-decoration: none !important;
  outline: none !important;
}

.btn-border {
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 10px 25px;
  position: relative;
  border: 2px solid #3cbeee;
  -webkit-border-radius: 25px;
  -moz-border-radius: 25px;
  -ms-border-radius: 25px;
  -o-border-radius: 25px;
  border-radius: 25px;
  color: #999;
}
</style>