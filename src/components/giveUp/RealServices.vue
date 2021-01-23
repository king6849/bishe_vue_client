<template>
  <div class="index__lession">
    <div class="index__lession__l">
      <img src="../../assets/services/index_lession_baby.jpg" alt="">
      <a href="#" class="index__lession__link">幼儿培训</a>
    </div>
    <div class="index__lession__c">
      <img src="../../assets/services/index_lession_child.jpg" alt="">
      <a href="#" class="index__lession__link">少儿培训</a><!-- 55 -->
    </div>
    <div class="index__lession__r">
      <img src="../../assets/services/index_lession_adult.jpg" alt="">
      <a href="#" class="index__lession__link">成人培训</a>
    </div>
  </div>
</template>

<script>


export default {
  name: "RealServices"

}
</script>

<style scoped>
.index__lession {
  margin-left: 20%;
  margin-right: 20%;
}

.index__lession .index__lession__c, .index__lession .index__lession__cell, .index__lession .index__lession__l, .index__lession .index__lession__r {
  position: relative;
  float: left;
  height: 100%;
  overflow: hidden;
  width: 33.33%;
}

.index__lession .index__lession__l .index__lession__link {
  color: #23c4d1;
}


.index__lession .index__lession__l .index__lession__link {
  color: #23c4d1;
}


.index__lession .index__lession__link {
  position: absolute;
  bottom: 40px;
  border-radius: 100px;
  background: #fff;
  width: 178px;
  height: 58px;
  left: 50%;
  margin-left: -89px;
  line-height: 58px;
  text-align: center;
  font-size: 22px;
}

.index__lession {
  overflow: hidden;
  text-align: center;
}








</style>