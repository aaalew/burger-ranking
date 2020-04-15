<template>
  <div class="add">
    <h2>Add a new burger below</h2>
    <form id="add-burger" @submit.prevent="addBurger">
      <p>Restaurant:</p>
      <input type="text" placeholder="In-n-Out" v-model="restaurant">
      <p>Restaurant Type:</p>
      <input type="radio" name="restaurant-type" id="sit-down" value="Sit Down" v-model="restaurantType">
      <label for="sit-down">Sit down</label>
      <input type="radio" name="restaurant-type" id="counter" value="Order at Counter" v-model="restaurantType">
      <label for="counter">Order at Counter</label>
      <p>Drive-thru:</p>
      <input type="radio" name="drive-thru" id="drive-thru-yes" value="Yes" v-model="drivethru">
      <label for="drive-thru-yes">Yes</label>
      <input type="radio" name="drive-thru" id="drive-thru-no" value="No" v-model="drivethru">
      <label for="drive-thru-no">No</label>
      <p>Average Cost:</p>
      $<input type="text" placeholder="5" v-model="avgCost">
      <p>Tier:</p>
      <input type="radio" name="tier" id="high-tier" value="High" v-model="tier">
      <label for="high-tier">High</label>
      <input type="radio" name="tier" id="mid-tier" value="Mid" v-model="tier">
      <label for="mid-tier">Mid</label>
      <input type="radio" name="tier" id="low-tier" value="Low" v-model="tier">
      <label for="low-tier">Low</label>
      <br>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "Add",
  data() {
    return {
      restaurant: "",
      restaurantType: "",
      drivethru: "",
      avgCost: "",
      tier: "",
    }
  },
  methods: {
    async addBurger() {
      try {
        await axios.post('/api/burgers', {
          restaurant: this.restaurant,
          restaurantType: this.restaurantType,
          drivethru: this.drivethru,
          avgCost: this.avgCost,
          tier: this.tier,
        });
        this.restaurant = "";
        this.restaurantType = "";
        this.drivethru = "";
        this.avgCost = "";
        this.tier = "";
        return true;
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>