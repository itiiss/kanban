<script setup lang="ts">
import { useColumnStore } from "@/store";
import draggable from "vuedraggable";

const store = useColumnStore();

const props = defineProps({
  story: { type: Object, required: true },
});

const isExpand = computed(() => props.story.id === store.currentStory);
</script>

<template>
  <div class="flex flex-col gap-5 w-full">
    <div class="collapse group collapse-arrow rounded-xl">
      <input type="checkbox" class="peer" v-model="isExpand" />
      <div
        class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"
      >
        {{ props.story.title }}
      </div>
      <div
        class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"
      >
        <div class="flex justify-center">
          <div class="min-h-screen flex overflow-x-scroll pb-12">
            <div
              v-for="column in story.columns"
              :key="column.title"
              class="bg-gray-100 rounded-lg px-3 py-3 column-width mr-4"
            >
              <task-adder :columnType="column.title" :storyID="props.story.id" />
              <draggable
                v-model="column.tasks"
                :animation="200"
                ghost-class="ghost-card"
                group="tasks"
                :item-key="column.title"
              >
                <template #item="{ element }">
                  <card
                    :key="element.id"
                    :task="element"
                    :column="column"
                    :story="story"
                    class="mt-3 cursor-move"
                  />
                </template>
              </draggable>
            </div>
          </div>
        </div>
      </div>
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
