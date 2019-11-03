<template>
  <v-navigation-drawer
    app
    dark
    permanent
    class="deep-purple accent-4 sidebar-content"
  >
    <v-list v-if="$store.getters.hasActiveServer">
      <v-list-item
        class="deep-purple accent-4"
        dark
        @click="$store.dispatch('toggleSidebarServerDetails')"
      >
        <v-list-item-content>
          <v-list-item-subtitle>Active Server</v-list-item-subtitle>
          <v-list-item-title class="title">Personal Server 1</v-list-item-title>
          <ActiveServerDetails v-if="$store.state.sidebarShowServerDetails" />
        </v-list-item-content>
      </v-list-item>
      <NavLink title="Applications" icon="mdi-apps" to="/applications/" />
      <NavLink title="Server Health" icon="mdi-medical-bag" to="/status/" />
    </v-list>
    <v-divider v-if="$store.getters.hasActiveServer" dark></v-divider>
    <v-list>
      <NavLink title="Dashboard" icon="mdi-home" to="/dashboard/" />
      <NavLink title="Cloud Providers" icon="mdi-cloud" to="/providers/" />
      <NavLink title="Servers" icon="mdi-server" to="/servers/" />
      <NavLink title="SSH Keys" icon="mdi-lock-question" to="/sshkeys/" />
      <NavLink title="Users" icon="mdi-account-multiple" to="/users/" />
    </v-list>
    <v-divider></v-divider>
    <v-list>
      <NavLink title="About" icon="mdi-information" to="/about/" />
      <NavLink title="Help" icon="mdi-help-circle" to="/intro/" />
      <NavLink title="Settings" icon="mdi-settings" to="/settings/" />
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import ActiveServerDetails from "./ActiveServerDetails";
import NavLink from "./NavLink";

export default {
  components: {
    ActiveServerDetails,
    NavLink
  },
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "dashboard" },
        { title: "Account", icon: "account_box" },
        { title: "Admin", icon: "gavel" },
        { title: "Settings", icon: "settings" }
      ]
    };
  }
};
</script>

<style lang="scss">
.sidebar-content {
  height: 100vh;
}
</style>
