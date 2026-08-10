<script setup lang="ts">
const { isDarkMode, toggleTheme } = useDarkMode()
</script>

<template>
    <button @click="toggleTheme" class="p-4 hover:bg-brand transition-colors" title="Change theme">
        <div class="overflow-hidden size-6 relative">
            <div class="-left-3 size-12 relative origin-center transition-transform transform will-change-transform" :class="{'rotate-180': isDarkMode}">
                <IconSun :class="{ 'hidden': isDarkMode }" class="text-base-800 size-3 absolute left-1/2 transform -translate-x-1/2 top-1.5" />
                <IconMoon :class="{ 'hidden': !isDarkMode }" class="text-base-200 size-3 absolute left-1/2 transform -translate-x-1/2 bottom-1.5 rotate-180 origin-center" />
            </div>
        </div>
    </button>
</template>