<template>
  <v-app>
    <Sidebar />
    <v-content>
      <HelloWorld />
    </v-content>
  </v-app>
</template>

<script>
import Sidebar from "./components/Sidebar";
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld,
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
