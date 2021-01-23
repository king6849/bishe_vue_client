<template>

  <div class="container-fluid">
    <HomeHeaderBar class=""></HomeHeaderBar>
    <AboutUs></AboutUs>
<!--    <Callery></Callery>-->
    <welcome></welcome>
    <Top></Top>
    <BeforePricePlans></BeforePricePlans>
    <Services></Services>
    <OurPricingPlans></OurPricingPlans>
    <OurGallery></OurGallery>
    <TheEnd></TheEnd>
  </div>
</template>

<script>
import HomeHeaderBar from "@/components/Home/HomeHeaderBar";
import AboutUs from "@/components/Home/AboutUs";
// import Callery from "@/components/Home/Callery";
import Welcome from "@/components/Home/Welcome";
import Top from "@/components/Home/Top"
import Services from "@/components/Home/Services";
import BeforePricePlans from "@/components/giveUp/BeforePricePlans";
import OurPricingPlans from "@/components/Home/OurPricingPlans";
import OurGallery from "@/components/Home/OurGallery";
import TheEnd from "@/components/Home/TheEnd";


export default {
  name: "Home",
  components: {
    // Callery,
    HomeHeaderBar,
    AboutUs,
    Welcome,
    Top,
    BeforePricePlans,
    Services,
    OurPricingPlans,
    OurGallery,
    TheEnd,
  },
  created() {

  },
  methods: {}
}
</script>

<style scoped>

.container-fluid {
  margin: 0;
  padding-left: 0;
  padding-right: 0;
}



</style>