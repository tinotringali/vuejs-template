<script>
import CountryFlag from 'vue-country-flag-next'
export default {
    name: 'AppCards',
    components: {
        CountryFlag
    },
    props: {
        info: Object
    },
    methods: {
        getLanguage() {
            switch (this.info.original_language) {
                case "en":
                    return "gb";
                default:
                    return this.info.original_language;
            }
        },

    },
}
</script>

<template>
    <article>
        <h3>{{ info.title }}</h3>
        <h4>{{ info.original_title }}</h4>
        <div><country-flag :country=getLanguage() size='small'/></div>
        <div>{{ info.vote_average }}</div>
    </article>
</template>