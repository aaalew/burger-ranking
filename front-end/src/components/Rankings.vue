<template>
  <div class="rankings">
    <div id="rankings-grid" v-for="burger in burgers" :key="burger._id" :class="tierClass(burger)">
        <div class="top-row">
          <div class="res-title">{{burger.restaurant}}</div>
          <a class="trash" @click="deleteBurger(burger)"><i class="far fa-trash-alt fa-1x"></i></a>
        </div>
        <div class="prop">{{burger.restaurantType}}</div>
        <div class="prop">{{burger.drivethru}}</div>
        <div class="prop">${{burger.avgCost}}.00</div>
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
  computed: {
    
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
    async deleteBurger(burger) {
      try {
        await axios.delete('/api/burgers/' + burger._id);
        this.getBurgers();
      } catch (error) {
        console.log(error);
      }
    },
    tierClass(burger) {
      if (burger.tier === "High") {
        return 'high-tier';
      } 
      else if (burger.tier === "Mid") {
        return 'mid-tier';
      }
      else {
        return 'low-tier';
      }
    }
  }
}
</script>

<style scoped>
.rankings {
  display: grid;
  justify-content: center;
  grid-template-columns: 25% 25% 25%;
  grid-template-areas: "high mid low";
  grid-gap: 7%;
  width: 100%;
}

#rankings-grid {
  width: 100%;
}

.high-tier,
.mid-tier,
.low-tier {
  text-align: left;
  padding: 5%;
}

.high-tier {
  background-color: #FF6F69;
  grid-column: high;
}

.mid-tier {
  background-color: #9AFF75;
  grid-column: mid;
}

.low-tier {
  background-color: #37B3A8;
  grid-column: low;
}

.top-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.res-title {
  font-weight: bold;
  font-size: 2em;
}

.prop {
  font-size: 1em;
  margin-left: 5%;
}

.trash {
  margin-right: 5%;
}
</style>