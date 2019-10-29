<template>
  <v-content dark class="deep-purple intro-page pa-4">
    <div class="image-wrapper">
      <img
        class="logo"
        alt="PerSer logo"
        src="../assets/images/StoneHenge.png"
      />
    </div>
    <h1 class="display-2">Welcome to PerSer!</h1>
    <div class="subtitle mb-4">The Personal Server Management Tool</div>
    <div class="button-container">
      <v-btn
        class="ma-2"
        :loading="loading2"
        :disabled="loading2"
        color="success"
        @click="$router.push('/tour/')"
      >
        I'm new! I'd like a tour!
      </v-btn>
      <v-btn
        class="ma-2"
        :loading="loading2"
        :disabled="loading2"
        color="warning"
        @click="$router.push('/about/')"
      >
        I got this!
      </v-btn>
    </div>
  </v-content>
</template>

<style lang="scss" scoped>
.intro-page {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  text-align: center;
}
h1 {
  color: white;
  text-align: center;
}
div.subtitle {
  color: white;
  font-size: 16px;
  text-align: center;
}
.image-wrapper {
  align-items: center;
  justify-content: flex-start;
  display: flex;

  img.logo {
    margin: auto;
    width: 300px;
  }
}
</style>
