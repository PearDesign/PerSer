<template>
  <v-app>
    <Sidebar v-if="showSidebar" />
    <v-content>
      <router-view :key="$route.fullPath" />
    </v-content>
  </v-app>
</template>

<script>
import db from "@/utils/datastore.js";
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
    loadDataFromPersistentFilestore() {
      const dispatch = this.$store.dispatch;

      // Cloud Providers
      db.find({ contentType: "CloudProvider" })
        .sort({ order: 1 })
        .exec(function(err, persistedProviders) {
          dispatch("updateCloudProviders", persistedProviders);
        });

      //Servers
      db.find({ contentType: "Server" })
        .sort({ order: 1 })
        .exec(function(err, persistedServers) {
          dispatch("updateServers", persistedServers);
        });

      // SSH Keys
      db.find({ contentType: "SSHKey" })
        .sort({ order: 1 })
        .exec(function(err, persistedKeys) {
          dispatch("updateSSHKeys", persistedKeys);
        });
    }
  },
  mounted() {
    this.loadDataFromPersistentFilestore();
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
