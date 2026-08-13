<script setup lang="ts">
import { IconCodePen, IconDribbble, IconLinkedIn } from '#components';

const socialLinks = [
    {
        href: 'https://www.linkedin.com/in/brendanbax',
        icon: IconLinkedIn,
        label: 'LinkedIn'
    },
    {
        href: 'https://dribbble.com/brendanbax',
        icon: IconDribbble,
        label: 'Dribbble'
    },
    {
        href: 'https://codepen.io/brendanbax',
        icon: IconCodePen,
        label: 'Codepen'
    },

]
</script>

<template>
    <section class="grid grid-cols-1 md:grid-cols-2">
            <!-- Maybe an interactive canvas game on the left + the 3 social icons on the right -->
            <!-- ... endless runner game? snake? memory match? something to do with connections? -->
            <div class="pinstripes border-r border-t border-brand-500 dark:border-brand-800" />
            <div class="flex flex-col lg:flex-row mt-12 lg:mt-0 items-center">
                <div class="font-bebas text-6xl sm:text-8xl leading-none text-brand flex flex-row lg:flex-col">
                    <span class="block mr-8 sm:mr-10 lg:mr-0">GET</span>
                    <span class="block">SOC</span>
                    <span class="block">IAL</span>
                </div>
                <div class="flex items-center justify-center p-16 w-full">
                    <ul class="flex flex-col space-y-8">
                        <li v-for="link in socialLinks" :key="link.href">
                            <a :href="link.href" target="_blank" class="flex items-center gap-6">
                                <component :is="link.icon" class="size-8" />
                                <span class="text-xl">{{ link.label }}</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
</template>

<style scoped>
.pinstripes {
    --angle: 315deg;
  background: repeating-linear-gradient(
    var(--angle),
    theme('colors.brand.500'),
    theme('colors.brand.500') 1px,
    theme('colors.base.50') 1px,
    theme('colors.base.50') 20px
  );
  opacity: 0.3;
}
.dark .pinstripes {
  background: repeating-linear-gradient(
    var(--angle),
    theme('colors.brand.800'),
    theme('colors.brand.800') 1px,
    theme('colors.base.950') 1px,
    theme('colors.base.950') 20px
  );
  opacity: 0.5;
}
</style>