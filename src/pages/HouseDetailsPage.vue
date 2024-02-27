<template>
    <div class="container">
        <section class="row">
            <div class="col-12">
                <h1 class="my-3">House Details</h1>
            </div>
        </section>

        <section v-if="house" class="row m-0 p-0">
            <div class="col-12 card m-0 p-0 rounded">
                <img class="rounded-top" :src="house.imgUrl" alt="house image">
                <div class="card-body ">
                    <h3> ${{ house.price }}</h3>
                    <p class="fw-bold m-0">Built in {{ house.year }}</p>
                    <p>{{ house.bedrooms }} beds | {{ house.bathrooms }} baths</p>
                    <div class="card description mb-3 p-2">
                        <h5>Description:</h5>
                        <p class="m-0 p-0">{{ house.description }}</p>
                    </div>
                    <div class="d-flex align-items-center">
                        <h3 class="me-2">Listed by:</h3>
                        <div class="d-flex align-items-center creatorBox rounded p-2">
                            <h4 class="me-1">{{ house.creatorName }}</h4>
                            <img class="rounded-circle creator" :src="house.creatorPicture" :alt="house.creatorName">
                        </div>
                    </div>
                </div>
                <div>
                    <button v-if="house.creatorId == account.id" @click="destroyHouse()" class="btn btn-danger">Delete
                        house</button>
                </div>
            </div>
        </section>
    </div>
</template>
  
  
<script>
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { housesService } from '../services/HousesService.js';
import { useRoute, useRouter } from 'vue-router';
import { logger } from '../utils/Logger.js';
import { AppState } from '../AppState.js'
export default {
    setup() {

        const route = useRoute()

        const router = useRouter()

        async function getHouseById() {
            try {
                const houseId = route.params.houseId
                await housesService.getHouseById(houseId)
            } catch (error) {
                Pop.error(error)
            }
        }

        onMounted(() => {
            // logger.log('Mounted house details page!');
            // logger.log('Route information', route)
            // logger.log('Id from route', route.params.houseId)
            housesService.clearAppState()
            getHouseById()
        })

        return {
            house: computed(() => AppState.activeHouse),
            account: computed(() => AppState.account),

            async destroyHouse() {
                try {
                    const wantsToDelete = await Pop.confirm('Are you sure you want to delete this house?')

                    if (!wantsToDelete) {
                        return
                    }

                    const houseId = route.params.houseId

                    logger.log('deleting house', houseId)

                    await housesService.destroyHouse(houseId)

                    Pop.success('house was deleted!')
                    router.push({ name: 'houses' })
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

.creator {
    height: 5vh;
    width: 5vh;
    object-fit: cover;
    object-position: center;
    box-shadow: 2px 3px 10px black;
}

.creatorBox {
    box-shadow: 2px 3px 10px black;
    width: fit-content;
}

.description {
    box-shadow: 2px 3px 10px black;
    width: fit-content;
    height: fit-content;
}
</style>