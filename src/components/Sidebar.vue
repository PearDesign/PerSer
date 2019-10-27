<template>
  <v-navigation-drawer app dark class="deep-purple accent-4 sidebar-content">
    <v-list-item class="deep-purple accent-4" link dark>
      <v-list-item-content>
        <v-list-item-subtitle>Active Server</v-list-item-subtitle>
        <v-list-item-title class="title">Personal Server 1</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-divider dark></v-divider>
    <v-list>
      <SidebarLink title="Applications" icon="mdi-apps" />
      <SidebarLink title="Cloud Providers" icon="mdi-cloud" />
      <SidebarLink title="Server Health" icon="mdi-medical-bag" />
      <SidebarLink title="SSH Keys" icon="mdi-lock-question" />
      <SidebarLink title="Users" icon="mdi-account-multiple" />
    </v-list>
    <v-divider dark></v-divider>
    <v-list>
      <SidebarLink title="About" icon="mdi-information" />
      <SidebarLink title="Help" icon="mdi-help-circle" />
      <SidebarLink title="Settings" icon="mdi-settings" />
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import SidebarLink from "./SidebarLink";

export default {
  components: {
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
