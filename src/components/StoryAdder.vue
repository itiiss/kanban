<template>
  <label
    for="story-adder"
    class="btn modal-button btn-xs rounded btn-secondary mb-4 w-40 gap-2"
    ><span class="text-xs">➕</span> add story</label
  >
  <input type="checkbox" id="story-adder" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box flex flex-col px-24">
      <label
        for="story-adder"
        class="btn btn-sm btn-secondary btn-circle absolute right-2 top-2"
        >✕</label
      >
      <h3 class="font-bold text-lg">Add new story</h3>
      <div class="form-control w-full">
        <label class="label">
          <span class="label-text">Please input story title</span>
        </label>
        <input
          v-model="storyTitle"
          type="text"
          placeholder="Type here"
          class="input input-bordered w-full max-w-xs"
        />
      </div>
      <div class="modal-action">
        <label for="story-adder" class="btn btn-primary" @click="onConfirm">Yay!</label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useColumnStore } from "@/store";

const storyTitle = ref("");

const store = useColumnStore();

const onConfirm = () => {
  store.addNewStory(storyTitle.value);
  storyTitle.value = "";
};
</script>

<style></style>
