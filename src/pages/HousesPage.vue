
<template>
    <div class="container">
        <section class="row">
            <div class="col-12 my-2">
                <h1>Houses</h1>
            </div>

            <div class="col-12">
                <HouseForm />
            </div>
        </section>

        <section class="row">
            <div v-for="house in houses" :key="house.id" class="col-md-4 mb-3 house-card">

                <HouseCard :houseProp="house" />
            </div>
        </section>
    </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
import HouseCard from '../components/HouseCard.vue';
import Pop from '../utils/Pop';
import { housesService } from '../services/HousesService';
export default {
    setup() {
        async function getHouses() {
            try {
                await housesService.getHouses()
            } catch (error) {
                Pop.error(error)
            }
        }
        onMounted(() => {
            getHouses();
        });
        return {
            houses: computed(() => AppState.houses),
        };
    },
    components: { HouseCard }
};
</script>


<style lang="scss" scoped>
.house-card {
    position: relative;
}
</style>