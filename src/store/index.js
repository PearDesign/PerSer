import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeServerIndex: null,
    servers: [],
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
    hasLoadedServers(state) {
      return state.servers.length > 0;
    }
  },
  modules: {}
});
