<script>
import axios from 'axios';
import { store } from './store';

export default {
    name: 'AppHeader',
    data() {
        return {
            store
        }
    },
    methods: {
        search() {

            //Movie
            axios.get(this.store.config.apiUrl + this.store.config.endpointMovie, {
                params: {
                    api_key: this.store.config.apiKey,
                    language: this.store.config.defaultLang,
                    query: this.store.searchKey
                }
            }).then((response) => {
                console.log(response)
                this.store.movies = response.data.results;
            });

            //serieTv
            axios.get(this.store.config.apiUrl + this.store.config.endpointSerieTv, {
                params: {
                    api_key: this.store.config.apiKey,
                    language: this.store.config.defaultLang,
                    query: this.store.searchKey
                }
            }).then((response) => {
                console.log(response)
                this.store.serieTv = response.data.results;
            })
        }
    }
}

</script>

<template>
    <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
            <a href="http://localhost:5173/?"><img src="../img/logo.jpg" alt=""></a>
            <div class="d-flex" role="search">
                <input v-model="store.searchKey" class="form-control me-2" type="text" placeholder="cerca film">
                <button @click="search" class="btn btn-dark">cerca</button>
            </div>
        </div>
    </nav>
    <header>


    </header>
</template>

<style lang="scss" scoped>
nav{
    background-color: #e50914;
}
img{
    width: 130px;
}
</style>