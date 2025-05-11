<template>
  <div>
    <h2>Latest SpaceX Launch</h2>
    <p v-if="launchData">
      <div>{{ launchData.name }}</div>
      <div>Date: {{ launchData.date_local }}</div>
    </p>
  </div>
</template>

<script>
export default {
  name: 'SpaceXPage',
  data() {
    return {
      launchData: null
    }
  },
  mounted() {
    fetch('https://api.spacexdata.com/v4/launches/latest')
      .then(r => r.json())
      .then(data => this.launchData = data)
  }
}
</script>