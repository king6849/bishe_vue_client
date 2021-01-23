<template>
  <div class="container-fluid">
    <div id="quickin" class="quickin__wrap">
      <ul>
        <li class="quickin__wrap_1" id="quickin__wrap_1" v-on:mouseover="wrap_1_in" v-on:mouseleave="wrap_1_out"
            v-on:click="wrap_1_in">
          <i class="icon iconfont fa fa-calendar-minus-o"></i>
          <strong class="quickin__title">预约上课</strong>
          <div class="quickin__cont">
            <b id="alertLangue">用培训卡可以进行预约</b>
            <p id="yuyuetype"></p>
            <div class="quickin__btn">
              <a href="#" class="btn">立即预约</a>
            </div>
          </div>
        </li>
        <li class="quickin__wrap_2" id="quickin__wrap_2" v-on:mouseover="wrap_1_in" v-on:mouseleave="wrap_1_out">
          <i class="icon iconfont fa fa-4x fa-drivers-license"></i>
          <strong class="quickin__title">单次游泳票购买</strong>
          <div class="quickin__cont">
            <div class="quickin__info">
              <b>价格：￥50</b>
              <div class="input__number">
                <br>
                <input type="text" class="form-control form-control-sm" placeholder="">
                <span class="input__number_top" id="increase">
                  <i class="fa fa-2x fa-plus-square-o"></i>
                </span>
                <span class="input__number_bot" id="decrease">
                  <i class="fa fa-2x fa-minus-square-o input__number_bot"></i>
                </span>
              </div>
            </div>
            <div class="quickin__btn">
              <a href="#" class="btn" id="yyTicket">立即购买</a>
            </div>
          </div>
        </li>
        <li class="quickin__wrap_3" id="quickin__wrap_3" v-on:mouseover="wrap_1_in" v-on:mouseleave="wrap_1_out">
          <i class="icon iconfont fa fa-4x fa-users"></i>
          <strong class="quickin__title">教练评分</strong>
          <div class="quickin__cont">
            <div class="quickin__info">
              <b>共10位资深教练</b>
            </div>
            <div class="quickin__btn">
              <a href="#" class="btn">立即查看</a>
            </div>
          </div>
        </li>
        <li class="quickin__wrap_4" id="quickin__wrap_4" v-on:mouseover="wrap_1_in" v-on:mouseleave="wrap_1_out">
          <i class="icon iconfont fa fa-4x fa-bullhorn"></i>
          <strong class="quickin__title">会员活动</strong>
          <div class="quickin__cont">
            <div class="quickin__info">
              <b>2018北京游泳俱乐部对抗赛</b>
            </div>
            <div class="quickin__btn">
              <a href="#" class="btn" target="_blank">立即查看</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>


</template>

<script>
import $ from "jquery";

export default {
  name: "buy",
  methods: {
    wrap_1_in(event) {
      let id = event.target.id
      if (this.isNullObj(id)) return 0;
      let selector = "." + id + "> .quickin__cont"
      let selector2 = "." + event.target.id + "> .quickin__title"
      $(selector).attr('style', 'display:block;');
      $(selector2).attr("style", "display:none")
    },
    wrap_1_out(event) {
      let id = event.target.id
      if (this.isNullObj(id)) return 0;
      let selector = "." + id + "> .quickin__cont"
      let selector2 = "." + event.target.id + "> .quickin__title"
      $(selector).attr('style', 'display:none;');
      $(selector2).attr("style", "display:block")
    },
    //对象是否为空
    isNullObj(obj) {
      if (obj === null || obj === undefined || obj === "") {
        return true
      }
      return false
    }
  }
}
</script>

<style scoped>
.quickin__wrap {
  width: 100%;
  overflow: hidden;
  border-bottom: 1px solid #ccc;
}

.quickin__wrap li {
  box-sizing: border-box;
  float: left;
  width: 50%;
  height: 180px;
  padding: 20px;
  padding-left: 138px;
  border: 1px solid #ccc;

}

.quickin__wrap li .icon {
  float: left;
  border-radius: 100%;
  border: 1px solid #159cff;
  font-size: 60px;
  margin-top: 24px;
  margin-right: 20px;
  color: #159cff;
  line-height: 96px;
  text-align: center;
  margin-left: -98px;
  width: 98px;
  height: 98px;
}

.iconfont {
  speak: none;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.quickin__wrap .quickin__title {
  display: block;
  font-size: 22px;
  color: #333;
  margin-top: 50px;
}

.quickin__wrap .quickin__cont {
  display: none;
  font-size: 18px;
  position: relative;
  top: 45px;
}

.quickin__wrap .quickin__cont b {
  font-size: 18px;
  font-weight: 400;
  color: #fff;
}

.quickin__wrap .quickin__cont p {
  font-size: 14px;
  color: hsla(0, 0%, 100%, .5);
}

.quickin__wrap .quickin__btn {
  position: absolute;
  right: 0;
  top: 0;
}

.quickin__wrap .quickin__btn .btn {
  border: 2px solid #fff;
  width: 140px;
  height: 45px;
  line-height: 45px;
  font-size: 18px;
  display: inline-block;
  text-align: center;
  border-radius: 3px;
  color: #fff;
  padding: 0;
}

.input__number input {
  width: 100px;
  height: auto;
  text-align: center;
  font-size: 24px;
  text-indent: 5px;
  background-color: white;
  border: 0;
}

.input__number_bot {
  margin-left: 5%;
}

.quickin__wrap .quickin__btn .btn:hover {
  color: mediumpurple;
  background-color: white;
}

/*------------------------*/
i {

  float: left;
}

ul {
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}

li {
  list-style: none;
}

strong, b {
  float: left;
}

li:hover {
  background-color: mediumpurple;
}

strong {
  font-weight: bold;
}
</style>