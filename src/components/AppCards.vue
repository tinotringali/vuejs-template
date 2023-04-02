<script>
import { store } from './store';
import CountryFlag from 'vue-country-flag-next'
export default {
    name: 'AppCards',
    components: {
        CountryFlag
    },
    data() {
        return {
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
        getVote() {
            return Math.ceil(this.info.vote_average / 2);
        }
    }
}
</script>

<template>
    <article>
        <div class="flip-card p-1">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img :src="store.config.urlImg + info.poster_path">
                </div>
                <div class="flip-card-back">
                    <h3 class="text-center fs-5 p-1">{{ info.title || info.name }}</h3>
                    <h4 class="text-center fs-6 p-1">{{ info.original_title || info.original_name }}</h4>
                    <country-flag :country=getLanguage size='small' />
                    <div class="d-flex justify-content-center my-3">
                        <font-awesome-icon class="text-warning" icon="fa-solid fa-star" v-for="n in getVote" />
                        <font-awesome-icon class="text-warning" icon="fa-regular fa-star" v-for="n in 5 - getVote" />
                    </div>
                    <p class="p-1 text-center">{{ info.overview }}</p>
                </div>
            </div>
        </div>
    </article>
</template>

<style scoped>
img {
    width: 330px;
    height: 520px;
}

p{
    font-size: 12px;
}
.flip-card {
    background-color: transparent;
    width: 330px;
    height: 520px;
    perspective: 1000px;
}

.flip-card-inner {
    position: relative;
    width: 330px;
    height: 520px;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card-front,.flip-card-back {
    position: absolute;
    width: 330px;
    height: 520px;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}
.flip-card-back {
    background-color: #e50914;
    color: white;
    transform: rotateY(180deg);
}
</style>