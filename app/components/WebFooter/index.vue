<script setup lang="ts">
import type { Brand } from '~/composables/useBrand'

const currentYear = new Date().getFullYear()
const { brand, setBrand } = useBrand()

const brandOptions: { label: string, value: Brand }[] = [
    { label: 'Energy', value: 'pink' },
    { label: 'Monster', value: 'lime' },
    { label: 'Midnight', value: 'midnight' }
]

function getFill(option: string) {
    switch (option) {
        case 'pink':
            return 'bg-rose-500';
        case 'lime':
            return 'bg-lime-500';
        default:
            return 'bg-indigo-500';
    }
}
</script>

<template>
    <footer class="px-4 sm:px-6 py-4 bordered border-t flex items-center justify-between text-sm">
        <div class="flex items-center text-base-600 dark:text-base-400">
            <span class="mr-2">&copy; {{ currentYear }}</span>
            <span>Made in Missouri, USA</span>
        </div>
        <ul class="flex items-center gap-x-2">
            <li v-for="option in brandOptions" :key="option.value">
                <button
                    type="button"
                    @click="setBrand(option.value)"
                    class="transition-all p-1 rounded-full hover:outline outline-2 outline-base-500"
                    :class="{'outline outline-2 outline-base-400 dark:outline-base-600': brand === option.value}"
                    :title="option.label"
                >
                    <div class="rounded-full size-3" :class="getFill(option.value)"  />
                </button>
            </li>
        </ul>
    </footer>
</template>