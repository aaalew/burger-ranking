<template>
  <div class="home">
    <h1>Rankings</h1>
    <Rankings/>
  </div>
</template>

<script>
// @ is an alias to /src
import Rankings from '@/components/Rankings.vue'

export default {
  name: 'Home',
  components: {
    Rankings
  }
}
</script>
