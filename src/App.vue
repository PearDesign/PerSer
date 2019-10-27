<template>
  <v-app>
    <Sidebar />
    <v-content>
      <router-view :key="$route.fullPath" />
    </v-content>
  </v-app>
</template>

<script>
import Sidebar from "./components/Sidebar";

export default {
  name: "App",
  components: {
    Sidebar
  },
  data: () => ({
    //
  }),
  methods: {
    toggleDrawer() {
      console.log("Toggling");
    }
  }
};
</script>
