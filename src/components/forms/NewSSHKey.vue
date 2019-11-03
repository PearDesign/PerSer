<template>
  <v-dialog v-model="dialog" persistent fullscreen>
    <template v-slot:activator="{ on }">
      <v-btn color="primary" dark v-on="on">Create a New SSH Key</v-btn>
    </template>
    <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>Create a New SSH Key</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn dark text @click="dialog = false">Save</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-divider></v-divider>
      <v-container>
        <ExistingSSHKeys
          v-if="unregisteredSSHKeys.length"
          :keys="unregisteredSSHKeys"
        />
        <v-text-field label="Description*" required></v-text-field>
        <small>*indicates required field</small>
      </v-container>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">Cancel</v-btn>
        <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import ExistingSSHKeys from "@/components/setup/ExistingSSHKeys";
import { unregisteredSSHKeys } from "@/utils/auth";

export default {
  components: {
    ExistingSSHKeys
  },
  computed: {
    unregisteredSSHKeys() {
      const knownKeys = this.$store.state.SSHKeys;
      return unregisteredSSHKeys(knownKeys);
    }
  },
  data: () => ({
    dialog: false
  })
};
</script>
