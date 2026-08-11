<script setup lang="ts">
interface ThemeLinkProps {
    to: string
}

defineProps<ThemeLinkProps>()
</script>

<template>
    <NuxtLink :to="to" class="group flex items-center gap-2 leading-4 uppercase p-2 rounded-sm focus:outline outline-brand outline-offset-4">
        <span class="text-brand group-hover:text-brand transition-colors">
            <slot />
        </span>
        <IconChevronRight class="size-4 text-brand transform transition-transform duration-300 group-hover:translate-x-1" />
    </NuxtLink>
</template>