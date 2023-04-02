<script>
import { store } from './store';
import CountryFlag from 'vue-country-flag-next'
export default {
    name: 'AppCards',
    components: {
        CountryFlag
    },
    data(){
        return{
            store
        }
    },
    props: {
        info: Object
    },
    computed: {
        getLanguage() {
            switch (this.info.original_language) {
                case "en":
                    return "gb";
                default:
                    return this.info.original_language;
            }
        },
        getVote(){
            return Math.ceil(this.info.vote_average / 2);
        }
    }
}
</script>

<template>  
    <article>
        <img :src="store.config.urlImg + info.poster_path" alt="">
        <h3>{{ info.title || info.name }}</h3>
        <h4>{{ info.original_title || info.original_name }}</h4>
        <div>{{ getLanguage }}<country-flag :country=getLanguage size='small'/></div> 
        <div>{{ getVote }}</div>
        <font-awesome-icon icon="fa-solid fa-star" v-for="n in getVote" />
        <font-awesome-icon icon="fa-regular fa-star" v-for="n in 5-getVote"/>
    </article>
</template>