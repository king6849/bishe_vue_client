<template>
  <div class="container-fluid"><!-- Start of Blog Post 1 -->
    <div class="row">
      <div class="col-md-3 blog-thumbnail blog-post">
        <a href="#">
          <img src="../../assets/top/blog-post1.jpg" class="img-responsive" alt="">
        </a>
        <div class="date">
          <span class="day">12</span>
          <span class="publish-month">Nov</span>
        </div>
      </div>
      <div class="col-md-6 blog-desc blog-post">
        <blockquote class="blockquote text-left">
          <h4>
            <a href="#">top 10 meditation tipps</a>
          </h4>
          <div class="post-detail">
          <span>
            <i class="fa fa-user"></i>
            Author
          </span>
            <span>
            <i class="fa fa-clock-o"></i>
            4:30
          </span>
            <span>
            <i class="fa fa-comments-o"></i>
            12 Comments
          </span>
          </div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged....</p><a href="#" class="btn">read
          more</a>
        </blockquote>

      </div>
    </div>


    <div class="col-md-12 text-center"><a href="#" class="btn-border">visit blog</a></div>
  </div>
</template>

<script>
export default {
  name: "Top"
}
</script>

<style scoped>
.blog-thumbnail {
  margin-left: 13%;
}

.blog-post {
  background: #f6f8f8;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 5.5px 9px 15px 0px rgba(0, 0, 0, 0.2);
  margin-bottom: 80px;
}


.blog-post .date span.day {
  display: block;
  font-size: 24px;
  font-weight: 700;
}

.blog-post .date span.day, .blog-post .date span.publish-month {
  font-family: 'Montserrat', sans-serif;
}

.blog-post .date span.publish-month {
  font-size: 14px;
  text-transform: uppercase;
}

article.blog-post .blog-thumbnail {
  padding: 0;
  background: #3cbeee;
  overflow: hidden;
}

a:hover, a:focus, a:visited {
  text-decoration: none !important;
  outline: none !important;
}

a {
  color: #3cbeee;
  -webkit-transition: all .3s ease;
  -moz-transition: all .3s ease;
  -ms-transition: all .3s ease;
  -o-transition: all .3s ease;
  transition: all .3s ease;
}

.blog-thumbnail img {
  max-height: 300px;
  object-fit: cover;
  height: 360px;
  width: 100%;
  -webkit-transition: all .5s ease;
  -moz-transition: all .5s ease;
  -ms-transition: all .5s ease;
  -o-transition: all .5s ease;
  transition: all .5s ease;
}

.date {
  background: #3cbeee;
  display: block;
  position: absolute;
  top: 0px;
  right: 0px;
  color: #f6f8f8;
  text-align: center;
  padding: 10px 15px;
  line-height: 1;
  border-radius: 0 0 0 20px;
  -webkit-transition: all .5s ease;
  -moz-transition: all .5s ease;
  -ms-transition: all .5s ease;
  -o-transition: all .5s ease;
  transition: all .5s ease;
}

.blog-post .date span.day {
  display: block;
  font-size: 24px;
  font-weight: 700;
}

.blog-post .date span.day, .blog-post .date span.publish-month {
  font-family: 'Montserrat', sans-serif;
}

.blog-post .date span.publish-month {
  font-size: 14px;
  text-transform: uppercase;
}

.blog-post .blog-desc {
  padding: 0 0 0 50px;
  color: #999;
}

blog-post .blog-desc h4 a {
  color: #323232;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  cursor: pointer;
}

.post-detail {
  padding: 10px 0 30px 0;
  color: #999;
}

p {
  font-size: 14px;
  line-height: 24px;
  color: #666;
  margin: 0 0 10px;
}

.blog-post .blog-desc a.btn {
  margin-top: 30px;
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

a:hover, a:focus, a:visited {
  text-decoration: none !important;
  outline: none !important;
}
</style>