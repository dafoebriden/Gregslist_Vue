<template>
    <router-link :to="{ name: 'HouseDetails', params: { houseId: houseProp.id } }">
        <img :src="houseProp.imgUrl" class="img-fluid" :alt="houseProp.make + ' ' + houseProp.model" role="button">
        <div class="house-title">
            <p class="fs-4 mb-1 ms-1">{{ houseProp.bedrooms }} beds | {{ houseProp.bathrooms }} baths</p>
        </div>
    </router-link>
</template>


<script>
import { computed } from 'vue';
import { AppState } from '../AppState.js';
import { House } from '../models/House.js';

export default {
    props: {
        houseProp: { type: House, required: true }
    },
    setup() {
        return {
            // NOTE will only bring in first house
            // house: computed(() => AppState.houses[0])
        };
    }
}
</script>


<style lang="scss" scoped>
img {
    height: 40vh;
    width: 40vh;
    border-radius: 16px;
    object-fit: cover;
    object-position: center;
    box-shadow: 2px 3px 10px black;
}


.house-title {
    position: absolute;
    bottom: 0;
    color: white;
    text-shadow: 1px 1px 3px black;
    font-weight: bold;
}
</style>