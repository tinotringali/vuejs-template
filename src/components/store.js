import { reactive } from "vue";

export const store = reactive({
    config:{
        urlMovie:'https://api.themoviedb.org/3/search/movie?',
        apiKey:'1f0147306b743b9ea148b9c89311607d',
        defaultLang:'it-IT'

    },
    movies: [],
    searchKey:''
})