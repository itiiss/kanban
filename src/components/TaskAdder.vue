<template>
  <!-- The button to open modal -->
  <label
    :for="columnType + storyID"
    class="btn modal-button btn-xs gap-2 btn-primary my-4 w-full"
  >
    <span class="text-lg">➕</span>
    {{ props.columnType }}</label
  >
  <input type="checkbox" :id="columnType + storyID" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box flex flex-col px-24">
      <label
        :for="columnType + storyID"
        class="btn btn-sm btn-secondary btn-circle absolute right-2 top-2"
        >✕</label
      >
      <h3 class="font-bold text-lg">Add new Task</h3>
      <div class="form-control w-full">
        <label class="label">
          <span class="label-text">Please input task title</span>
        </label>
        <input
          v-model="taskTitle"
          type="text"
          placeholder="Type here"
          class="input input-bordered w-full max-w-xs"
        />
      </div>
      <div class="form-control w-full m-auto">
        <label class="label">
          <span class="label-text">Please input task description</span>
        </label>
        <input
          v-model="taskDescription"
          type="text"
          placeholder="Type here"
          class="input input-bordered w-full max-w-xs"
        />
      </div>
      <div class="modal-action">
        <label :for="columnType + storyID" class="btn btn-primary" @click="onConfirm"
          >Yay!</label
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useColumnStore } from "@/store";
import { ColumnType, TaskType } from "@/types/global";

// const props = defineProps(["columnType", "storyID"]);

const props = defineProps({
  columnType: { type: String, required: true },
  storyID: { type: Number, required: true },
});

const taskTitle = ref("");
const taskDescription = ref("");
const taskType = ref<TaskType>(TaskType.FeatureRequest);

const store = useColumnStore();

const onConfirm = () => {
  store.addNewTask(
    taskTitle.value,
    taskDescription.value,
    taskType.value,
    props.storyID,
    props.columnType as ColumnType
  );
  taskTitle.value = "";
  taskDescription.value = "";
};
</script>

<style></style>
