<template>
  <form v-if="account.id" @submit.prevent="createCar()">

    <div class="mb-3">
      <label for="carMake">Make</label>

      <input v-model="editableCarData.make" id="carMake" name="make" type="text" required maxlength="500">
    </div>

    <div class="mb-3">
      <label for="carModel">Model</label>
      <input v-model="editableCarData.model" id="carModel" name="model" type="text" required minlength="1"
        maxlength="500">
    </div>

    <div class="mb-3">
      <label for="carYear">Year</label>
      <input v-model="editableCarData.year" id="carYear" name="year" type="number" required>
    </div>

    <div class="mb-3">
      <label for="carPrice">Price</label>
      <input v-model="editableCarData.price" id="carPrice" name="price" type="number" required>
    </div>

    <div class="mb-3">
      <label for="carImgUrl">ImgUrl</label>
      <input v-model="editableCarData.imgUrl" id="carImgUrl" name="imgUrl" type="url" required maxlength="500">
    </div>

    <div class="mb-3">
      <label for="carColor">Car Color</label>
      <input v-model="editableCarData.color" type="color" name="color" id="carColor" value="#e66465" />
    </div>

    <div class="mb-3">
      <label for="carDescription">Description of Car</label>
      <textarea v-model="editableCarData.description" id="carDescription" name="description" class="w-100" rows="10"
        maxlength="500"></textarea>
    </div>

    <div class="mb-3">
      <label for="engineType">Choose an Engine Type:</label>

      <select v-model="editableCarData.engineType" id="engineType" name="engineType">
        <option value="unknown" selected>Unknown</option>
        <option value="2 Stroke">2 Stroke</option>
        <option value="4 cylinder">4 cylinder</option>
        <option value="v6">v6</option>
        <option value="v8">v8</option>
        <option value="v10">v10</option>
        <option value="v12">v12</option>
        <option value="small">small</option>
        <option value="medium">medium</option>
        <option value="large">large</option>
        <option value="chuncko">chuncko</option>
      </select>
    </div>


    <div class="text-end mb-3">
      <button type="submit">Submit</button>
    </div>
  </form>
</template>


<script>
import { computed, ref } from 'vue';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { carsService } from '../services/CarsService.js';
import { AppState } from '../AppState.js';

export default {
  setup() {
    const editableCarData = ref({})


    return {
      editableCarData,
      account: computed(() => AppState.account),
      async createCar() {
        try {
          logger.log('creating car', editableCarData.value)
          await carsService.createCar(editableCarData.value)
          editableCarData.value = {}
        } catch (error) {
          Pop.error(error)
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
label {
  display: block;
}
</style>