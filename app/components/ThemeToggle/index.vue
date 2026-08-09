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
    <button @click="toggleTheme" class="p-4 hover:bg-brand transition-colors" title="Change theme">
        <div class="overflow-hidden size-6 relative">
            <div class="-left-3 size-12 relative origin-center transition-transform transform will-change-transform" :class="{'rotate-180': isDarkMode}">
                <IconSun :class="{ 'hidden': isDarkMode }" class="text-neutral-800 size-3 absolute left-1/2 transform -translate-x-1/2 top-1.5" />
                <IconMoon :class="{ 'hidden': !isDarkMode }" class="text-neutral-200 size-3 absolute left-1/2 transform -translate-x-1/2 bottom-1.5 rotate-180 origin-center" />
            </div>
        </div>
    </button>
</template>