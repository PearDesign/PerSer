import db from "@/utils/datastore";

export default {
  addSSHKey({ commit }, newKey) {
    // Add key to Database
    db.update(
      { contentType: "SSHKey", filepath: newKey["filepath"] },
      { $set: newKey },
      { upsert: true },
      function() {
        db.find({ contentType: "SSHKey" })
          .sort({ order: 1 })
          .exec(function(err, keys) {
            commit("setSSHKeys", keys);
          });
      }
    );
  },
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
