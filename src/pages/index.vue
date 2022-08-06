<script setup lang="ts">
import { useStore } from "@/store";
import ViteLogo from "@/assets/vite.svg";
useHead({
  title: "Vitailwind | Opinionated vite starter template",
});

const store = useStore();
const { t } = useI18n();
</script>

<template>
  <div class="grid place-items-center min-h-[80vh]">
    <div>
      <img :src="ViteLogo" width="300" class="mx-auto" />
      <p class="lg:text-left text-center">
        {{ t("intro.desc") }}
        <a href="https://tailwindcss.com/" class="text-blue-500 hover:underline"
          >TailwindCSS</a
        >
      </p>
      <div class="mt-5 text-center">
        <button
          @click="store.$state.count++"
          class="px-4 py-2 dark:bg-blue-800 bg-blue-500 text-white rounded"
        >
          Count : {{ store.$state.count }}
        </button>
      </div>
    </div>
    <router-link
      :to="{ name: 'other-page' }"
      class="mt-5 text-center hover:text-gray-200 dark:hover:text-gray-500 hover:underline"
      >{{ t("pages.other.menu") }}</router-link
    >
  </div>
</template>

<route lang="yaml">
name: home
</route>
