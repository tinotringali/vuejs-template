<script>
import { store } from './components/store';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default{
  name:'app',
  components:{
    AppHeader,
    AppMain,
    
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
