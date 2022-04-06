<template>
  <nav>
    <ul class="mymenu">
      <li v-for="(menu, idx) in menuLinks" :key="idx">
        <router-link :to='menu.routeName'>{{menu.label}}</router-link>
      </li>
     
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavView',

  data: () => ({
    menuLinks: [

      {
        routeName: 'home',
        label: 'Accueil'
      },
      {
        routeName: 'testimonials',
        label: 'Témoignages'
      },
      {
        routeName: 'rates',
        label: 'Rates'
      },
      {
        routeName: 'team',
        label: 'Team'
      }
    ]
  })
}
</script>
<style scoped>
.router-link-exact-active{
  background-color :"darken-2"; 
}

.router-link-exact-active::before{
 content: '🤍 '
}


</style>