<template>
  <div class="slider-content container">
    <div class="col-md-12"><h3>Welcome to<br><span>Swimmerland</span></h3><h4>The place where you always be
      <span>young</span>!
    </h4>
      <div class="cta"><a href="#" class="btn">discover now</a></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "describe"
}
</script>

<style scoped>
.slider-content {
  position: absolute;
  top: 35%;
  left: 18%;
  z-index: 15;
  text-align: center;
}

.slider-content h3 {
  color: #fefefe;
  font-weight: 400;
}

.slider-content h3 span {
  font-size: 72px;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
}

.slider-content h4 {
  color: #fefefe;
  font-weight: 400;
}

h4 {
  font-size: 24px;
}

.slider-content .cta {
  margin-top: 40px;
}

a:hover, a:focus, a:visited {
  text-decoration: none !important;
  outline: none !important;
}

.btn {
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  padding: 10px 25px;
  position: relative;
  background: #3cbeee;
  -webkit-border-radius: 25px;
  -moz-border-radius: 25px;
  -ms-border-radius: 25px;
  -o-border-radius: 25px;
  border-radius: 25px;
  color: #fefefe;
  box-shadow: 5.5px 9px 15px 0px rgba(0, 0, 0, 0.2);
  -webkit-transition: all .8s ease;
  -moz-transition: all .8s ease;
  -ms-transition: all .8s ease;
  -o-transition: all .8s ease;
  transition: all .8s ease;
}
</style>