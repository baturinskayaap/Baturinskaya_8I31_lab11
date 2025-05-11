<template>
  <div>
    <h2>NASA Photo of the Day</h2>
    <img v-if="nasaData?.url" :src="nasaData.url">
    <p v-if="nasaData">{{ nasaData.title }}</p>
  </div>
</template>

<script>
export default {
  name: 'NasaPage',
  data() {
    return {
      nasaData: null
    }
  },
  mounted() {
    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(r => r.json())
      .then(data => this.nasaData = data)
  }
}
</script>