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
      <div v-show="task.type" class="badge badge-accent">
        {{ task.type }}
      </div>
    </div>
    <div
      class="remove-bar mt-2"
      @click="deleteTask(props.task.id, props.column?.title, props.story.id)"
    >
      -
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import getAvatar from "@/libs/randomAvatar.js";
import { ColumnType } from "@/types/global";
import { useColumnStore } from "@/store";

const props = defineProps({
  task: { type: Object, required: true },
  column: { type: Object, required: true },
  story: { type: Object, required: true },
});

const store = useColumnStore();

const deleteTask = (taskID: number, columnTitle: ColumnType, storyID: number) => {
  store.deleteTask(taskID, columnTitle, storyID);
};

const avatarUrl = getAvatar((Math.random() * Math.random() * 100).toString());
</script>

<style scoped>
.remove-bar {
  text-align: end;
  font-size: 3.5em;
  font-weight: 300;
  color: #888;
  line-height: 0.1em;
  transition: 0.5s;
  cursor: pointer;
}

.remove-bar:hover {
  color: red;
  font-size: 9em;
  line-height: 0.05em;
  transition: 0.5s;
}
</style>
