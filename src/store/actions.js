export default {
  toggleSidebarServerDetails({ commit, state }) {
    commit("setSidebarServerDetails", !state.sidebarShowServerDetails);
  },
  updateCloudProviders({ commit }, providers) {
    commit("setCloudProviders", providers);
  },
  updateServers({ commit }, servers) {
    commit("setServers", servers);
  },
  updateSSHKeys({ commit }, sshKeys) {
    commit("setSSHKeys", sshKeys);
  }
};
