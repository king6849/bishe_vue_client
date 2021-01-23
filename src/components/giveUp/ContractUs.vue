<template>
  <div class="contact-w3l py-5" id="contact">
    <div class="container-fluid py-xl-5 py-lg-3">
      <h3 class="tittle text-center mb-5 pb-lg-4">Contact Us</h3>
      <div class="row">
        <div class="col-md-4 contact-agileits-w3layouts">
          <blockquote class="blockquote text-left">
            <h4 class="contact-title text-uppercase text-dark mb-sm-4 mb-3">Our Address</h4>
            <h5 class="font-weight-light text-dark">If you have any questions about the services we provide simply use the
              form below. We try and respond to all queries
              and comments within 24 hours.</h5>
            <div class="midd-contact my-sm-5 my-4 pl-4 border-left">
              <h6 class="text-dark mb-2">Address &amp; Direction:</h6>
              <p>sed quia consequuntur magni dolores eos qui</p>
            </div>
            <p class="para-agileits-w3layouts">
              <i class="fa fa-map-marker pr-3"></i>25095 Blue Ravine Rd,New Jersey</p>
            <p class="para-agileits-w3layouts my-sm-3 my-2">
              <i class="fa fa-phone pr-3"></i>032 625 4592</p>
            <p class="para-agileits-w3layouts">
              <i class="fa fa-envelope-open pr-2"></i>
              <a href="mailto:mail@example.com">info 1@example.com</a>
            </p>
            <p class="para-agileits-w3layouts mt-sm-3 my-2">
              <i class="fa fa-envelope-open pr-2"></i>
              <a href="mailto:mail@example.com">info 2@example.com</a>
            </p>
          </blockquote>

        </div>

        <div class="col-md-4 regstr-r-w3-agileits mt-lg-0 mt-5">
          <h4 class="contact-title text-uppercase text-dark mb-sm-4 mb-3">Get in Touch</h4>
          <div class="form-bg-w3ls">
            <form action="#" method="post">
              <div class="form-group">
                <input type="text" name="Name" class="form-control" placeholder="Name" required="">
              </div>
              <div class="form-group">
                <input type="email" name="Email" class="form-control" placeholder="Email" required="">
              </div>
              <div class="form-group">
                <input type="text" name="Subject" class="form-control" placeholder="Subject" required="">
              </div>
              <div class="form-group">
                <input type="text" name="number" class="form-control" placeholder="Phone Number" required="">
              </div>
              <div class="form-group">
                <textarea name="Message" class="form-control" placeholder="Message" required=""></textarea>
              </div>
              <button type="button" class="btn btn-primary btn-lg btn-block">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContractUs"
}
</script>

<style scoped>
h3.tittle {
  font-size: 40px;
  color: #EA4335;
  line-height: 1.4;
}

.midd-contact {
  border-left: 2px solid #F44336 !important;
}

.contact-agileits-w3layouts{
  margin-left: 20%;
}

p.para-agileits-w3layouts i {
  color: #1dd1a1;
}

.para-agileits-w3layouts a {
  color: #999;
}

.para-agileits-w3layouts a:hover {
  text-decoration: none;
}

.contact-agileits-w3layouts * {

}
</style>