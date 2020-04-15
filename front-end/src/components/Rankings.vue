<template>
  <div class="rankings">
    <div v-for="burger in burgers" :key="burger._id">
      <div class="tier-1" v-if="burger.tier === '1'">
        <p>{{burger.restaurant}}</p>
        <p>{{burger.restaurantType}}</p>
        <p>{{burger.drivethru}}</p>
        <p>{{burger.avgCost}}</p>
      </div>
      <div class="tier-2" v-if="burger.tier === '2'">
        <p>{{burger.restaurant}}</p>
        <p>{{burger.restaurantType}}</p>
        <p>{{burger.drivethru}}</p>
        <p>{{burger.avgCost}}</p>
      </div>
      <div class="tier-3" v-if="burger.tier === '3'">
        <p>{{burger.restaurant}}</p>
        <p>{{burger.restaurantType}}</p>
        <p>{{burger.drivethru}}</p>
        <p>{{burger.avgCost}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Rankings',
  data() {
    return {
     burgers: [],
    }
  },
  created() {
    this.getBurgers();
  },
  methods: {
    async getBurgers() {
      try {
        let response = await axios.get("/api/burgers");
        this.burgers = response.data.burgers;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>
