<template>
  <v-container>
    <v-content class="image-wrapper pa-4">
      <h1 class="display-2 mb-3">PerSer</h1>
      <p>
        The Personal Server Management Tool
      </p>
    </v-content>
    <v-divider />
    <SetupStatus v-if="$store.getters.requiresSetup" />
  </v-container>
</template>

<script>
import SetupStatus from "../components/SetupStatus";

export default {
  name: "home",
  components: {
    SetupStatus
  }
};
</script>

<style lang="scss" scoped></style>
