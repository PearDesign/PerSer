import Vue from "vue";
import Vuex from "vuex";

import actions from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeServerIndex: null,
    cloudProviders: [],
    servers: [],
    SSHKeys: [],
    sidebarShowServerDetails: false
  },
  mutations: {
    setSidebarServerDetails(state, isOpen) {
      state.sidebarShowServerDetails = isOpen;
    },
    setCloudProviders(state, providers) {
      state.cloudProviders = providers;
    },
    setServers(state, servers) {
      state.servers = servers;
    },
    setSSHKeys(state, SSHKeys) {
      state.SSHKeys = SSHKeys;
    }
  },
  actions,
  getters: {
    hasActiveServer(state) {
      return state.activeServerIndex ? true : false;
    },
    hasCloudProviders(state) {
      return state.cloudProviders.length > 0;
    },
    hasLoadedServers(state) {
      return state.servers.length > 0;
    },
    hasSSHKeys(state) {
      return state.SSHKeys.length > 0;
    },
    requiresSetup(state) {
      return (
        !state.hasSSHKeys || !state.hasLoadedServers || !state.hasCloudProviders
      );
    }
  },
  modules: {}
});
