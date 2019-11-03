<template>
  <v-container>
    <h1>SSH Keys</h1>
    <v-list class="sshKeys" v-if="$store.getters.hasSSHKeys">
      <v-list-item v-for="key in $store.state.SSHKeys" :key="key.filepath">
        <p>Key: {{ key }}</p>
      </v-list-item>
    </v-list>
    <template v-else>
      <p>It looks like you don't have any SSH keys set up.</p>
    </template>
    <NewSSHKeyForm />
  </v-container>
</template>

<script>
import NewSSHKeyForm from "@/components/forms/NewSSHKey";

export default {
  components: {
    NewSSHKeyForm
  }
};
</script>
