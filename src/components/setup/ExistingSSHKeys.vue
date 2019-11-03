<template>
  <v-alert type="info">
    <p>
      It looks like you already have an SSH Key. Would you like to add the key
      located at <span class="knownKey">{{ firstKey }}</span> to PerSer?
    </p>
    <div class="text-center">
      <v-btn @click="doNotAddExistingSSHKey" class="ma-2" outlined>No</v-btn>
      <v-btn @click="addExistingSSHKey" class="ma-2" outlined>Yes</v-btn>
    </div>
  </v-alert>
</template>

<script>
export default {
  computed: {
    firstKey() {
      return this.keys[0];
    }
  },
  methods: {
    addExistingSSHKey() {
      const keyIndex = this.$store.state.SSHKeys.length
        ? this.$store.state.SSHKeys.length + 1
        : 1;
      this.$store.dispatch("addSSHKey", {
        contentType: "SSHKey",
        description: `Key #${keyIndex}`,
        filepath: this.firstKey,
        order: keyIndex
      });
    },
    doNotAddExistingSSHKey() {
      console.log("No");
    }
  },
  props: ["keys"]
};
</script>

<style lang="scss" scoped>
.knownKey {
  font-weight: bold;
}
</style>
