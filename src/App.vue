<script>
import { store } from './components/store';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppCards from './components/AppCards.vue';

export default{
  name:'app',
  components:{
    AppHeader,
    AppMain,
    AppCards
    
  },
  data() {
    return {
      store
    }
  }
}
</script>

<template>

  <AppHeader />
  <AppMain />

</template>

<style lang="scss">


</style>
