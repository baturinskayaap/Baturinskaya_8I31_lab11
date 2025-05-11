<template>
  <div class = "navb">
    <router-link to="/">Main</router-link>
    <router-link to="/nasa">NASA</router-link>
    <router-link to="/spacex">SpaceX</router-link>
  </div>
  <router-view/>
</template>

<style scoped>
.navb {
  position:fixed;
  top:0%;
}
</style>