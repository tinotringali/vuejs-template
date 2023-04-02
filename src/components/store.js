import { reactive } from "vue";

export const store = reactive({
    config:{
        apiUrl:'https://api.themoviedb.org/3',
        endpointMovie:'/search/movie?',
        endpointSerieTv:'/search/tv?',
        urlImg: "https://image.tmdb.org/t/p/w342",
        apiKey:'1f0147306b743b9ea148b9c89311607d',
        defaultLang:'it-IT',

    },
    movies: [],
    serieTv:[],
    searchKey:''
})