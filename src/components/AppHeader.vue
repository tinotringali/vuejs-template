<script>
    import axios from 'axios';
    import {store} from './store';

    export default {
        name:'AppHeader',
        data(){
            return{
                store
            }
        },
        methods:{
            search(){
                axios.get(this.store.config.urlMovie, {
                    params:{
                        api_key: this.store.config.apiKey,
                        language: this.store.config.defaultLang,
                        query: this.store.searchKey
                    }
                }).then((response) => {
                    console.log(response)
                    this.store.movies = response.data.results;
                })
            }
        }
    }

</script>

<template>
    <header>
        <input v-model="store.searchKey" type="text" placeholder="cerca film">
        <button @click="search">cerca</button>
    </header>
</template>

<style lang="scss" scoped>

</style>