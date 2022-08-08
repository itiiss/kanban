<script setup lang="ts">
useHead({
  title: "Other Pages",
});
</script>

<template>
  <div class="flex flex-row">
    <div class="min-h-screen flex flex-col mr-4">
      <story-tab />
    </div>
    <kanban-panel />
  </div>
</template>

<route lang="yaml">
name: home
</route>
