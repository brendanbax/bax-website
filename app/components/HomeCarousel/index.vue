<script setup lang="ts">
import { IconCSS, IconFigma, IconHTML, IconJavaScript, IconNode, IconNuxt, IconPython, IconReact, IconTailwind, IconTypeScript, IconVue } from '#components'

const technologies = [
    {
        id: 'Vue',
        icon: IconVue,
    },
    {
        id: 'HTML',
        icon: IconHTML,
    },
    {
        id: 'TypeScript',
        icon: IconTypeScript,
    },
    {
        id: 'Nuxt',
        icon: IconNuxt,
    },
    {
        id: 'CSS',
        icon: IconCSS,
    },
    {
        id: 'React',
        icon: IconReact,
    },
    {
        id: 'JavaScript',
        icon: IconJavaScript,
    },
    {
        id: 'Node',
        icon: IconNode,
    },
    {
        id: 'Tailwind',
        icon: IconTailwind,
    },
    {
        id: 'Python',
        icon: IconPython,
    },
    {
        id: 'Figma',
        icon: IconFigma
    }
]

const techArray = [...technologies, ...technologies, ...technologies, ...technologies]

</script>

<template>
    <section class="py-12 border-t border-brand">
        <ProseH4 class="text-center">Proudly Building With These Technologies</ProseH4>
        <div class="overflow-hidden">
            <ul class="marquee flex w-max mt-8">
                <li v-for="tech, i in techArray" :key="`${tech.id}-${i}`" class="ml-20 2xl:ml-24">
                    <component :is="tech.icon ?? 'div'" class="text-brand size-12" />
                </li>
            </ul>
        </div>
    </section>
</template>

<style scoped>
.marquee {
    animation: marquee 50s linear infinite;
}
@keyframes marquee {
    to { transform: translateX(-50%); }
}
</style>