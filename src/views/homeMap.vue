<template>
  <div class="home-map">
    <baidu-map class="map" center="重庆">
    </baidu-map>
  </div>
</template>

<script>
export default {
  name: 'homeMap'
}
</script>

<style lang="scss" scoped>
.map {
  width: 100%;
  height: 690px;
}
</style>