<template>
  <div id="app" data-app>
   
     <Header/>
     <v-container>
        <v-row class="text-center">
          <v-col class="mb-4">
            <h2 class="display-2 font-weight-bold mb-3">
              <!-- 此段標題利用 i18n.js來翻譯 ，基本用法為 $t('string',parameters: object)-->
              {{ $t('welcomeUser', {name: 'tim'}) }}
            </h2>
              <!-- 此段標題利用 i18n.js來翻譯 -->
            <h2>{{ $t('Calender')}}</h2>

            <!-- 此 components 利用 vuetify 本身的語言 package 翻譯，在 vuetify.js 中可以查看 -->
            <v-calendar />
            <h2>{{ $t('DataTable')}}</h2>
            <!-- 此 components 利用 vuetify 本身的語言 package 翻譯，在 vuetify.js 中可以查看 -->
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
