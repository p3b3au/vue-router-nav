<template>
 
  <div id="app">
  <HeaderView/>
  <NavView/>
    
          
<router-view/> 
   
    <SideView/>
    
   <FooterView/>
  </div>
    
 
</template>


<script>
import HeaderView from "@/components/HeaderView.vue"
import NavView from "@/components/NavView.vue"
import FooterView from "@/components/FooterView.vue"
import SideView from "@/components/SideView.vue"


export default{
  name: 'App',
  components:{
    HeaderView,
    NavView,
    FooterView,
    SideView,
  
}
  }
</script>



<style>
@import url('https://fonts.googleapis.com/css?family=Allura|Josefin+Sans');
@import './assets/css/grid-base.css';
@import './assets/css/home.css';
@import './assets/css/huge-table.css';
@import './assets/css/team.css';
@import './assets/css/testimonials.css';



</style>
