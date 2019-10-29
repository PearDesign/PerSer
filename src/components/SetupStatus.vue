<template>
  <v-list>
    <v-list-item v-for="step in steps" :key="step.title">
      <v-list-item-content>
        <v-list-item-title v-text="step.title"></v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  computed: {
    steps() {
      return [
        { complete: false, icon: true, title: "Step 1: Set up SSH keys" },
        {
          complete: false,
          icon: true,
          title: "Step 2: Connect to a cloud provider"
        },
        {
          complete: false,
          icon: true,
          title: "Step 3: Create your first server"
        },
        {
          complete: false,
          icon: true,
          title: "Step 4: Install an app onto your server"
        }
      ];
    }
  }
};
</script>
