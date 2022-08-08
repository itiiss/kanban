<template>
  <div
    class="px-3 h-6 rounded-full text-xs font-semibold flex items-center"
    :class="`bg-${props.color}-100 text-${props.color}-700`"
  >
    <span class="w-2 h-2 rounded-full mr-1" :class="`bg-${props.color}-400`"></span>
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps({
  color: { type: String, required: true },
});
</script>
