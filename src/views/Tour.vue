<template>
  <v-content dark class="deep-purple page pa-4">
    <v-carousel class="tour-carousel">
      <v-carousel-item
        v-for="(slide, index) in slides"
        :key="index"
        reverse-transition="scale-transition"
        transition="scale-transition"
      >
        <v-sheet
          color="deep-purple"
          height="100%"
          tile
          v-if="slide.type == 'img'"
        >
          <v-row class="fill-height" align="center" justify="center">
            <img class="logo" :alt="slide.alt" :src="slide.src" />
          </v-row>
        </v-sheet>
        <v-btn
          class="ma-2"
          :loading="loading2"
          :disabled="loading2"
          color="warning"
          @click="$router.push('/about/')"
        >
          I got this!
        </v-btn>
      </v-carousel-item>
    </v-carousel>
  </v-content>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          alt: "PerSer Intro Slide #1",
          src: require("../assets/images/StoneHenge.png"),
          type: "img"
        },
        {
          alt: "PerSer Intro Slide #2",
          src: require("../assets/images/StoneHenge.png"),
          type: "img"
        },
        {
          alt: "PerSer Intro Slide #3",
          src: require("../assets/images/StoneHenge.png"),
          type: "img"
        },
        {
          alt: "PerSer Intro Slide #4",
          src: require("../assets/images/StoneHenge.png"),
          type: "img"
        },
        {
          type: "ending"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.page {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  text-align: center;
}
.tour-carousel {
  max-width: 1000px;
  margin: 0 auto;
}
img.logo {
  margin: auto;
  width: 300px;
}
</style>
