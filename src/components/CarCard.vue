<template>
  <router-link :to="{ name: 'CarDetails', params: { carId: carProp.id } }">
    <img :src="carProp.imgUrl" class="img-fluid" :alt="carProp.make + ' ' + carProp.model" role="button">
    <div class="car-title">
      <p class="fs-4 mb-1 ms-1">{{ carProp.make }} {{ carProp.model }}</p>
    </div>
  </router-link>
</template>


<script>
import { computed } from 'vue';
import { AppState } from '../AppState.js';
import { Car } from '../models/Car.js';

export default {
  props: {
    carProp: { type: Car, required: true }
  },
  setup() {
    return {
      // NOTE will only bring in first car
      // car: computed(() => AppState.cars[0])
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


.car-title {
  position: absolute;
  bottom: 0;
  color: white;
  text-shadow: 1px 1px 3px black;
  font-weight: bold;
}
</style>