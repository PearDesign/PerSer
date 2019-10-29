<template>
  <v-app>
    <Sidebar v-if="showSidebar" />
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
  computed: {
    showSidebar() {
      const pathsWithoutSidebar = ["/intro/", "/tour/"];
      return pathsWithoutSidebar.indexOf(this.$route.path) == -1;
    }
  },
  data: () => ({
    //
  }),
  methods: {
    loadServers() {
      console.log("TODO: Load servers");
    },
    toggleDrawer() {
      console.log("Toggling");
    }
  },
  mounted() {
    this.loadServers();
    if (this.$route.path == "/") {
      if (this.$store.getters.hasLoadedServers) {
        this.$router.push({ path: "/dashboard/" });
      } else {
        this.$router.push({ path: "/intro/" });
      }
    }
  }
};
</script>
