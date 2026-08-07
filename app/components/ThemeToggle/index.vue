<script setup lang="ts">
const isDarkMode = ref(false)

function setDarkMode(dark: boolean) {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.theme = dark ? 'dark' : 'light';
    isDarkMode.value = dark;
}

function toggleTheme() {
    setDarkMode(!isDarkMode.value);
}

onMounted(() => {
    isDarkMode.value = document.documentElement.classList.contains('dark');
})
</script>

<template>
    <button @click="toggleTheme" class="overflow-hidden w-10 h-6" title="Change theme">
        <div class="rounded-full size-10 relative origin-center transition-transform transform will-change-transform" :class="{'rotate-180': isDarkMode}">
            <IconSun :class="{ 'hidden': isDarkMode }" class="text-neutral-700 size-4 absolute left-1/2 transform -translate-x-1/2 top-1.5" />
            <IconMoon :class="{ 'hidden': !isDarkMode }" class="text-neutral-300 size-4 absolute left-1/2 transform -translate-x-1/2 bottom-1.5 rotate-180 origin-center" />
        </div>
    </button>
</template>