<template>
  <div class="serives-agile text-center py-5" id="services">
    <div class="container py-xl-5 py-lg-3">
      <h3 class="tittle mb-5 pb-lg-4">Our Services</h3>
      <div class="row welcome-bottom">
        <div class="col-md-4 welcome-grid">
          <span class="fa fa-picture-o"></span>
          <h4 class="my-3">Pool Design</h4>
          <p>Ut enim ad minima veniam, quis nostrum ullam corporis suscipit laboriosam.</p>
        </div>
        <div class="col-md-4 welcome-grid my-md-0 my-4">
          <span class="fa fa-database"></span>
          <h4 class="my-3">Pool Construction</h4>
          <p>Ut enim ad minima veniam, quis nostrum ullam corporis suscipit laboriosam.</p>
        </div>
        <div class="col-md-4 welcome-grid">
          <span class="fa fa-thumbs-up"></span>
          <h4 class="my-3">Maintenance</h4>
          <p>Ut enim ad minima veniam, quis nostrum ullam corporis suscipit laboriosam.</p>
        </div>
      </div>
      <div class="row welcome-bottom mb-xl-4 mt-md-5 my-md-0 my-4">
        <div class="col-md-4 welcome-grid">
          <span class="fa fa-tint"></span>
          <h4 class="my-3">Spa Restoration</h4>
          <p>Ut enim ad minima veniam, quis nostrum ullam corporis suscipit laboriosam.</p>
        </div>
        <div class="col-md-4 welcome-grid my-md-0 my-4">
          <span class="fa fa-male"></span>
          <h4 class="my-3">Pool Renovations</h4>
          <p>Ut enim ad minima veniam, quis nostrum ullam corporis suscipit laboriosam.</p>
        </div>
        <div class="col-md-4 welcome-grid">
          <span class="fa fa-question-circle"></span>
          <h4 class="my-3">Repair</h4>
          <p>Ut enim ad minima veniam, quis nostrum ullam corporis suscipit laboriosam.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Services"
}
</script>

<style scoped>
h3.tittle {
  font-size: 40px;
  color: #EA4335;
  line-height: 1.4;
}

@media (max-width: 1080px) {
  .welcome-grid span {
    font-size: 38px;
  }
}
  .welcome-grid span {
    color: #1dd1a1;
    font-size: 42px;
  }
p {
  margin: 0;
  padding: 0;
  font-size: 15px;
  letter-spacing: 1px;
  line-height: 1.9;
  color: #999;
}
</style>