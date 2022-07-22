<template>
  <div id="app" data-app>
   
     <Header/>
     <v-container>
        <v-row class="text-center">
          <v-col class="mb-4">
            <h2 class="display-2 font-weight-bold mb-3">
              {{ $t('welcomeUser', {name: 'tim'}) }}
            </h2>
            <h2>{{ $t('Calender')}}</h2>
            <v-calendar />
            <h2>{{ $t('DataTable')}}</h2>
            <v-data-table  />
          </v-col>
        </v-row>
      </v-container>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld
    Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
