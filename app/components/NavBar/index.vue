<script setup lang="ts">
import MobileNav from './MobileNav.vue'

const navLinks = [
    {
        name: 'Home',
        route: '/',
    },
    {
        name: 'Career',
        route: '/career',
    },
    {
        name: 'Insights',
        route: '/insights',
    },
]

</script>

<template>
    <header class="backdrop-blur-lg fixed top-0 inset-x-0 z-50 bg-neutral-50/80 dark:bg-neutral-950/80">
        <nav class="flex items-stretch justify-between bordered border-b">
            <!-- TODO: If on home, don't show until scrolled a bit, then animate in from the top -->
             <div class="border-r bordered p-4">
                 <BaxLogo class="size-6" />
             </div>
             <!-- TODO: If on home, don't show until scrolled a bit, then animate in from the left -->
             <div class="hidden sm:flex items-center ml-5">
                 <span class="text-xl leading-none font-medium uppercase tracking-wide">Brendan Bax</span>
             </div>
            <ul class="hidden sm:flex ml-auto items-stretch bordered">
                <li v-for="link in navLinks" :key="link.route" class="flex items-stretch justify-stretch border-l bordered">
                    <NuxtLink :to="link.route" class="px-8 flex items-center justify-center">
                        <span class="text-lg font-light text-center">{{ link.name }}</span>
                    </NuxtLink>
                </li>
                <li class="bordered border-l">
                    <ThemeToggle />
                </li>
            </ul>
            <div class="block sm:hidden bordered border-l">
                <MobileNav :links="navLinks" />
            </div>
        </nav>
    </header>
</template>
