<template>
  <div class="home">
    <div class="image-wrapper">
      <img
        class="logo"
        alt="PerSer logo"
        src="../assets/images/StoneHenge.png"
      />
      <div>
        <h1 class="display-2 mb-3">PerSer</h1>
        <p class="mb-3">
          The Personal Server Management Utility
        </p>
      </div>
    </div>
    <v-divider />
    <p>Stuff</p>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>

<style lang="scss">
img.logo {
  width: 200px;
}
.image-wrapper {
  align-items: center;
  justify-content: flex-start;
  display: flex;
}
</style>
