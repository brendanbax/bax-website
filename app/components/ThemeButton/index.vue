<script setup lang="ts">
import { NuxtLink } from '#components'

interface ThemeButtonProps {
    to?: string
}
const { to } = defineProps<ThemeButtonProps>()

const derivedComponent = computed(() => to ? NuxtLink : 'button')

const buttonClass = "bg-gradient-to-b from-brand-500 via-brand-600 to-brand-700 bg-[length:100%_200%] bg-top hover:bg-bottom transition-[background-position] duration-300 ease-out"
</script>

<template>
    <component :is="derivedComponent" v-bind="$attrs" class="px-4 py-2 rounded-sm uppercase focus:outline outline-brand outline-offset-4" :class="buttonClass" :to="to">
        <slot />
    </component>
</template>