import Vue from "vue";
import Vuex from "vuex";

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
    }
  },
  actions: {
    toggleSidebarServerDetails({ commit, state }) {
      commit("setSidebarServerDetails", !state.sidebarShowServerDetails);
    }
  },
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
