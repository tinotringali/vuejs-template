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
    <h2>Film</h2>
    <ul>
        <li v-for="movie in store.movies">
            <AppCards :info="movie" />
        </li>
    </ul>
    <!-- serieTv -->
    <h2>Seire Tv</h2>
    <ul>
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