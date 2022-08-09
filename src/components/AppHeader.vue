<script setup lang="ts">
import { themes } from "@/libs/themes";

const { availableLocales } = useI18n();

const preferedDark = usePreferredDark();
const isDark = useStorage("isDark", preferedDark.value);
const body = ref<HTMLBodyElement | null>(null);

const toggleDarkMode = () => {
  if (body.value) {
    if (isDark.value) {
      body.value.classList.remove("dark");
    } else {
      body.value.classList.add("dark");
    }
  }
  isDark.value = !isDark.value;
};

const theme = useStorage("theme", usePreferredColorScheme().value);
const html = ref<HTMLElement | null>(null);

const changeTheme = (paramTheme: string) => {
  if (html.value) {
    html.value.dataset.theme = paramTheme;
    theme.value = paramTheme;
  }
};

onMounted(async () => {
  await nextTick();
  html.value = document.querySelector("html") as HTMLElement;
  if (html.value) {
    if (theme.value) {
      html.value.dataset.theme = theme.value;
    }
  }
});
</script>

<template>
  <header>
    <nav
      class="w-full bg-white text-gray-800 dark:bg-gray-800 dark:text-white py-4 px-8 shadow-md dark:shadow-md flex items-center border-b border-gray-400/50"
    >
      <router-link :to="{ name: 'home' }">
        <div class="font-bold lg:text-xl md:text-lg text-md">.KANBAN</div>
      </router-link>
      <div class="ml-auto flex items-center h-full">
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-primary">Theme</label>
          <ul
            tabindex="0"
            class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li
              v-for="theme in themes"
              @click="changeTheme(theme.value)"
              :key="theme.label"
            >
              <a tabIndex="0" data-set-theme="dark" data-act-class="active" className="">
                {{ theme.label }}
              </a>
            </li>
          </ul>
        </div>
        <!-- <button class="ml-5 cursor-pointer focus:outline-none" @click="toggleDarkMode">
          <icon:bx:bx-moon class="w-6 h-6" v-if="!isDark" />
          <icon:bx:bxs-moon class="w-6 h-6" v-else />
        </button> -->
      </div>
    </nav>
  </header>
</template>

<style scoped></style>
