<template>
  <div class="wthree-subscribef-w3ls py-5">
    <div class="container-fluid py-xl-5 py-lg-3">
      <blockquote class="blockquote text-left">
        <h3 class="tittlef-agileits-w3layouts">Sign up for our Newsletter</h3>
        <p class="mt-3 mb-5">Recieve our latest news straight to your inbox</p>
        <form action="#" method="post">
          <input type="email" name="Email" placeholder="Email address..." required=""/>
          <button type="submit" class="btn">Submit</button>
          <div class="clearfix"></div>
        </form>
      </blockquote>

    </div>
  </div>
</template>

<script>
export default {
  name: "subscription"
}
</script>

<style scoped>
.wthree-subscribef-w3ls {
  background: url("../../assets/bg4.jpg") no-repeat center;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  -moz-background-size: cover;
}

@media screen and (max-width: 1280px) {
  .wthree-subscribef-w3ls h3 {
    font-size: 36px;
  }
}

.blockquote {
  margin-left: 20%;
}

.wthree-subscribef-w3ls h3 {
  color: #fff;
  font-size: 40px;
}

.wthree-subscribef-w3ls p {
  color: #eee;
}

.wthree-subscribef-w3ls form {
  max-width: 800px;
  /*margin-left: 35%;*/
}

.wthree-subscribef-w3ls input[type="email"] {
  outline: none;
  padding: 15px;
  background: #fff;
  font-size: 15px;
  color: #000;
  width: 65%;
  border: none;
  letter-spacing: 1px;
  float: left;
}

button, input {
  overflow: visible;
}

.btn {
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.wthree-subscribef-w3ls button {
  outline: none;
  padding: 15px;
  background: #1dd1a1;
  font-size: 15px;
  color: #fff;
  border: none;
  letter-spacing: 2px;
  width: 30%;
  float: left;
  border-radius: 0px;
}

.wthree-subscribef-w3ls button:hover {
  background-color: red;
}

*, *::before, *::after {
  box-sizing: border-box;
}
</style>