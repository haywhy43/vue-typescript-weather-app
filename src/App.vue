<template>
    <div id="app">
        <img src="@/assets/sun.png" alt="sun" class="sun" />
        <h1>Weather App</h1>
        <template v-if="!loading && response">
            <div>
                <weather-card :data="data" :location="country" />
            </div>
        </template>
        <template v-if="loading && !response">
            <img src="@/assets/loader.svg" class="mt-5" />
        </template>
        <template v-if="error">
            <p class="error">{{ error }}</p>
        </template>
        <form @submit="submit">
            <div class="input_group">
                <label>Enter the Country you want to search for</label>
                <text-input placeholder="Country Name / Code" class="input" v-model="country" />
            </div>
            <div class="button_wrapper">
                <base-button primary size="small" color="yellow">Search</base-button>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import WeatherCard from './components/WeatherCard.vue'
import { getData } from './api'
@Component({
    components: {
        WeatherCard,
    },
})
export default class App extends Vue {
    public country = ''
    public data = {}
    loading = true
    error = ''
    response = true

    submit(e: MouseEvent): void {
        e.preventDefault()
        this.loading = true
        this.response = false
        getData(this.country)
            .then((data) => {
                if (data.cod >= 400) {
                    this.error = data.message
                    this.response = false
                    this.loading = false
                } else {
                    this.response = true
                    this.loading = false
                    this.data = data.main
                    this.error = ''
                }
            })
            .catch((err) => {
                this.response = false
                this.loading = false
                this.error = err.message
            })
    }
}
</script>

<style>
#app {
    width: 40%;
    margin: auto;
    text-align: center;
    height: 100vh;
    display: flex;
    align-items: center;
    /* justify-content: center; */
    flex-direction: column;
    padding-top: 40px !important;
}

* {
    transition: 500ms;
}

.sun {
    width: 150px;
}

.input_group {
    margin-top: 100px;
}

.input_group .input {
    margin-top: 10px;
}
.input_group label {
    margin-bottom: 20px;
}
.button_wrapper {
    margin-top: 10px;
}

h1 {
    color: #032041;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
    padding: 0;
    margin: 0;
}

.flex {
    display: flex;
}

.items-center {
    align-items: center;
}

.justify-between {
    justify-content: space-between;
}
.error {
    margin-top: 20px;
    font-size: 20px;
    font-weight: 600;
    color: #a10000;
}
</style>
