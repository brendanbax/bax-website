<script setup lang="ts">
import type { Component } from 'vue';

interface HomeCardProps {
    title: string
    overline: string
    description: string
    icon: Component
}

defineProps<HomeCardProps>()

const cardRef = ref<{ $el: HTMLElement } | null>(null)
const isVisible = ref(false)

onMounted(() => {
    const el = cardRef.value?.$el
    if (!el) return

    const observer = new IntersectionObserver(([entry]) => {
        if (entry?.isIntersecting) {
            isVisible.value = true
            observer.disconnect()
        }
    }, { threshold: 0.2 })

    observer.observe(el)
})
</script>

<template>
    <ThemeCard
        ref="cardRef"
        class="@container group !p-0 overflow-hidden"
        :class="isVisible ? 'top-in' : 'opacity-0'"
    >
        <div class="flex flex-col lg:group-even:flex-col-reverse @2xl:flex-row @2xl:group-even:flex-row-reverse">
            <div class="relative bg-gradient-to-br from-brand-400 to-brand-600 grow flex items-center justify-center p-12">
                <IconHalftone
                    class="absolute inset-0 w-full aspect-square dark:text-black/50 text-white/50 mix-blend-overlay pointer-events-none"
                    aria-hidden="true"
                />
                <component :is="icon" class="relative z-10 size-32 drop-shadow-[0_4px_6px_rgba(0,0,0,0.35)]" />
            </div>
            <article class="px-6 pt-6 pb-2 @2xl:w-2/3">
                <ProseOverline>{{ overline }}</ProseOverline>
                <ProseH3>{{ title }}</ProseH3>
                <ProseP>{{ description }}</ProseP>
            </article>
        </div>
    </ThemeCard>
</template>