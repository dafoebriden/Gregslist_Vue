<template>
  <div class="container">
    <section class="row">
      <div class="col-12">
        <h1 class="my-3">Car Details</h1>
      </div>
    </section>

    <section v-if="car" class="row">
      <div class="col-12">
        <h2> {{ car.year }} {{ car.make }} {{ car.model }}</h2>
        <img :src="car.imgUrl" :alt="car.make + ' ' + car.model">
        <p>{{ car.description }}</p>
        <p>Listed by {{ car.creator.name }}</p>
        <div>
          <button v-if="car.creatorId == account.id" @click="destroyCar()" class="btn btn-danger">Delete Car</button>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { carsService } from '../services/CarsService.js';
import { useRoute, useRouter } from 'vue-router';
import { logger } from '../utils/Logger.js';
import { AppState } from '../AppState.js'
export default {
  setup() {

    const route = useRoute()

    const router = useRouter()

    async function getCarById() {
      try {
        const carId = route.params.carId
        await carsService.getCarById(carId)
      } catch (error) {
        Pop.error(error)
      }
    }

    onMounted(() => {
      // logger.log('Mounted car details page!');
      // logger.log('Route information', route)
      // logger.log('Id from route', route.params.carId)
      carsService.clearAppState()
      getCarById()
    })

    return {
      car: computed(() => AppState.activeCar),
      account: computed(() => AppState.account),

      async destroyCar() {
        try {
          const wantsToDelete = await Pop.confirm('Are you sure you want to delete this car?')

          if (!wantsToDelete) {
            return
          }

          const carId = route.params.carId

          logger.log('deleting car', carId)

          await carsService.destroyCar(carId)

          Pop.success('Car was deleted!')
          router.push({ name: 'Cars' })
        } catch (error) {
          Pop.error(error)
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
img {
  max-height: 40vh;
}
</style>