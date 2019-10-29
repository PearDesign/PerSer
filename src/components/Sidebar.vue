<template>
  <v-navigation-drawer app dark class="deep-purple accent-4 sidebar-content">
    <v-list-item
      class="deep-purple accent-4"
      dark
      v-if="$store.getters.hasActiveServer"
      @click="$store.dispatch('toggleSidebarServerDetails')"
    >
      <v-list-item-content>
        <v-list-item-subtitle>Active Server</v-list-item-subtitle>
        <v-list-item-title class="title">Personal Server 1</v-list-item-title>
        <ActiveServerDetails v-if="$store.state.sidebarShowServerDetails" />
      </v-list-item-content>
    </v-list-item>
    <v-divider v-if="$store.getters.hasActiveServer" dark></v-divider>
    <v-list>
      <SidebarLink title="Dashboard" icon="mdi-home" to="/dashboard/" />
      <SidebarLink title="Applications" icon="mdi-apps" to="/applications/" />
      <SidebarLink title="Cloud Providers" icon="mdi-cloud" to="/providers/" />
      <SidebarLink title="Server Health" icon="mdi-medical-bag" to="/status/" />
      <SidebarLink title="Security" icon="mdi-lock-question" to="/security/" />
      <SidebarLink title="Users" icon="mdi-account-multiple" to="/users/" />
    </v-list>
    <v-divider dark></v-divider>
    <v-list>
      <SidebarLink title="About" icon="mdi-information" to="/about/" />
      <SidebarLink title="Help" icon="mdi-help-circle" to="/intro/" />
      <SidebarLink title="Settings" icon="mdi-settings" to="/settings/" />
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import ActiveServerDetails from "./ActiveServerDetails";
import SidebarLink from "./SidebarLink";

export default {
  components: {
    ActiveServerDetails,
    SidebarLink
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
