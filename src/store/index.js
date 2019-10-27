import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navDrawerOpen: false
  },
  mutations: {
    navDrawerOpen(state, navDrawerOpen) {
      state.navDrawerOpen = navDrawerOpen;
    }
  },
  actions: {
    toggleDrawer({ commit, state }) {
      commit("navDrawerOpen", !state.navDrawerOpen);
    }
  },
  modules: {}
});
