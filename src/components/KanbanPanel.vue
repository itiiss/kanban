<script setup lang="ts">
import { useColumnStore } from "@/store";
import draggable from "vuedraggable";

const store = useColumnStore();
</script>

<template>
  <div class="flex flex-col gap-5 w-full">
    <div
      v-for="story in store.stories"
      :key="story.title"
      class="collapse group collapse-arrow rounded-xl"
    >
      <story-panel :story="story" />
    </div>
  </div>
</template>

<style scoped>
.column-width {
  min-width: 280px;
  width: 280px;
}

.ghost-card {
  @apply border opacity-50 border-blue-500 bg-gray-200;
  opacity: 0.5;
  background: #f7fafc;
  border: 1px solid #4299e1;
}
</style>
