<template>
  <v-stepper v-model="activeSetupStepIndex" vertical>
    <template v-for="(step, index) in steps">
      <v-stepper-step
        :key="`${index}-step`"
        :complete="step.complete"
        :step="index + 1"
      >
        {{ step.title }}
      </v-stepper-step>

      <v-stepper-content :key="`${index}-content`" :step="index + 1">
        <v-card>
          <SSHKeySetupInstructions v-if="step.description == 'SSH Keys'" />
        </v-card>
      </v-stepper-content>
    </template>
  </v-stepper>
</template>

<script>
import SSHKeySetupInstructions from "@/components/setup/SSHKeys";

export default {
  components: {
    SSHKeySetupInstructions
  },
  computed: {
    activeSetupStepIndex() {
      if (!this.$store.getters.hasSSHKeys) {
        return 1;
      } else if (!this.$store.getters.hasCloudProviders) {
        return 2;
      } else if (!this.$store.getters.hasLoadedServers) {
        return 3;
      }
      return 1;
    },
    steps() {
      return [
        {
          complete: this.$store.getters.hasSSHKeys,
          description: "SSH Keys",
          icon: "mdi-folder",
          iconClass: "grey lighten-1 white--text",
          title: "Set up SSH keys"
        },
        {
          complete: this.$store.getters.hasCloudProviders,
          description:
            "(Placeholder) You need to register with a cloud provider",
          icon: "mdi-folder",
          iconClass: "grey lighten-1 white--text",
          title: "Connect to a cloud provider"
        },
        {
          complete: this.$store.getters.hasLoadedServers,
          description: "(Placeholder) You need to create a server",
          icon: "mdi-folder",
          iconClass: "grey lighten-1 white--text",
          title: "Create your first server"
        },
        {
          complete: false,
          description:
            "(Placeholder) You need to install an app to your server",
          icon: "mdi-folder",
          iconClass: "grey lighten-1 white--text",
          title: "Install an app onto your server"
        }
      ];
    }
  }
};
</script>
