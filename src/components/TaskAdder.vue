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
      <div class="form-control w-full my-4">
        <label class="label">
          <span class="label-text">Please Select task type</span>
        </label>
        <select class="select select-info w-full max-w-xs" v-model="taskType">
          <option>{{ TaskType.Backend }}</option>
          <option>{{ TaskType.Frontend }}</option>
          <option>{{ TaskType.FeatureRequest }}</option>
          <option>{{ TaskType.QA }}</option>
          <option>{{ TaskType.Design }}</option>
        </select>
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

const props = defineProps({
  columnType: { type: String, required: true },
  storyID: { type: Number, required: true },
});

const taskTitle = ref("");

const taskType = ref<TaskType>(TaskType.FeatureRequest);

const store = useColumnStore();

const onConfirm = () => {
  store.addNewTask(
    taskTitle.value,
    taskType.value,
    props.storyID,
    props.columnType as ColumnType
  );
  taskTitle.value = "";
};
</script>

<style></style>
