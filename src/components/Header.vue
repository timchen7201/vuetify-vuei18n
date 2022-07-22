<template>
  <v-app-bar class="AppBar elevation-2" app>
    
    
      <v-spacer></v-spacer>

    <v-btn text class="right"><LocaleSelector /></v-btn>
   
  </v-app-bar>
</template>

<script>

import LocaleSelector from '../components/LocaleSelector'

export default {
  name: 'Header',
  components: {
    LocaleSelector
  },
  
 
}
</script>

<style lang="scss">
.AppBar {
  h2 {
    cursor: pointer;
    text-transform: uppercase;
  }
}
.right {
    float: right;
}
</style>
