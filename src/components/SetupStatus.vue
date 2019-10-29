<template>
  <v-stepper v-model="activeSetupStepIndex" vertical>
    <v-stepper-header>
      <template v-for="(step, index) in steps">
        <v-stepper-step
          :key="`${index}-step`"
          :complete="step.complete"
          :step="index + 1"
        >
          {{ step.title }}
        </v-stepper-step>
        <v-divider :key="`${index}-divider`"></v-divider>
      </template>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content
        v-for="(step, index) in steps"
        :key="`${index}-content`"
        :step="index + 1"
      >
        <v-card color="grey lighten-3" class="" height="200px">{{
          step.description
        }}</v-card>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
export default {
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
          description: "(Placeholder) You need to set up SSH keys",
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
