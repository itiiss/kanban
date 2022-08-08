<template>
  <story-adder />
  <ul class="menu bg-base-100 w-40 rounded">
    <li
      v-for="story in store.stories"
      :key="story.title"
      :class="story.id === store.currentStory ? 'bordered' : ''"
      @click="changeStory(story.id)"
    >
      <a class="gap-10">
        {{ story.title }}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          @click="deleteById(story.id)"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useColumnStore } from "@/store";

const store = useColumnStore();

const deleteById = (id: number) => {
  store.deleteStoryByID(id);
};

const changeStory = (id: number) => {
  store.changeCurrentStory(id);
};
</script>

<style></style>
