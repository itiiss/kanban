<template>
  <div class="bg-white shadow rounded px-3 pt-3 pb-5 border border-white">
    <div class="flex justify-between">
      <p class="text-gray-700 font-semibold font-sans tracking-wide text-sm">
        {{ task.title }}
      </p>

      <img class="w-6 h-6 rounded-full ml-3" :src="avatarUrl" alt="Avatar" />
    </div>
    <div class="flex mt-4 justify-between items-center">
      <span class="text-sm text-gray-600">{{ task.date }}</span>
      <badge v-if="task.type" :color="badgeColor">{{ task.type }}</badge>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from "vue";
import getAvatar from "@/libs/randomAvatar.js";

const props = defineProps({
  task: { type: Object, required: true, default: () => ({}) },
});

const avatarUrl = getAvatar((Math.random() * Math.random() * 100).toString());

const badgeColor = computed(() => {
  const mappings = {
    Design: "purple",
    "Feature Request": "teal",
    Backend: "blue",
    QA: "green",
    default: "teal",
  } as any;
  return mappings[props.task.type] || mappings.default;
});
</script>
