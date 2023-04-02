<script>
    import { store } from './store';
    import AppCards from './AppCards.vue';
    export default {
        name:'AppMain',
        components:{
            AppCards
        },
        data(){
            return{
                store
            }
        },
    }

</script>

<template>
 <main>
    <!-- movie -->
    <h2 class="text-center text-light my-5">Movie</h2>
    <ul class="d-flex flex-wrap justify-content-center gap-3">
        <li class="d-flex" v-for="movie in store.movies">
            <AppCards :info="movie" />
        </li>
    </ul>
    <!-- serieTv -->
    <h2 class="text-center text-light my-5">Serie Tv</h2>
    <ul class="d-flex flex-wrap justify-content-center gap-3">
        <li v-for="serieTv in store.serieTv">
            <AppCards :info="serieTv" />
        </li>
    </ul>
 </main>
</template>

<style lang="scss" scoped>
ul{
    list-style: none;
}
</style>