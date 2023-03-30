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
    <ul>
        <li v-for="movie in store.movies">
            <AppCards :info="movie" />
        </li>
    </ul>
 </main>
</template>

<style lang="scss" scoped>

</style>