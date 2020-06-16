<template>
    <div class="card">
        <p class="temperature">
            {{ temp }}<sup class="deg"><sup class="higher">o</sup>c</sup>
        </p>
        <p class="loc">{{ location }}</p>
        <div class="other-info">
            <div class="flex items-center justify-between mt-5">
                <p class="key">Pressure</p>
                <p class="val">{{ data.pressure }} <span>pa</span></p>
            </div>
            <div class="flex items-center justify-between mt-5">
                <p class="key">Humidity</p>
                <p class="val">
                    {{ data.humidity }} <span>g/m<sup>3</sup></span>
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
interface ObjectData {
    temp: number;
}

const WeatherCard = Vue.extend({
    props: {
        data: Object as PropType<ObjectData>,
        location: String,
    },

    computed: {
        // need annotation
        temp(): number {
            return parseFloat((this.data.temp - 273).toFixed(2))
        },
    },
})

export default WeatherCard
</script>

<style>
.card {
    border-radius: 15px;
    padding: 25px 20px;
    background: white;
    box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.1);
    min-width: 170px;
    margin-top: 20px;
}

.temperature {
    font-size: 32px;
    font-weight: 600;
    color: #64490f;
    text-align: center;
    margin-left: 15px;
    letter-spacing: 0.06em;
}

.deg {
    font-size: 18px;
    font-weight: 200;
}

.loc {
    font-size: 18px;
    text-align: center;
    color: #e5b449;
    margin-top: 5px;
    letter-spacing: 0.03em;
    font-weight: 500;
}

.higher {
    font-size: 12px;
}
.other-info {
    margin-top: 20px;
}

.key {
    font-size: 14px;
    color: #e5b449;
    opacity: 0.5;
}

.val {
    color: #64490f;
    font-weight: 600;
    font-size: 16px;
}

.val span {
    font-size: 12px;
    color: #e5b449;
}

.mt-5 {
    margin-top: 16px;
}
</style>
