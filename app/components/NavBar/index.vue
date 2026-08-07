<script setup lang="ts">
const isLocalDev = import.meta.dev
const coreNav = [
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
const navLinks = isLocalDev ?
    [...coreNav, {
        name: 'Design',
        route: '/design',
    }] : coreNav

</script>

<template>
    <nav class="flex items-stretch justify-between bordered border-b">
        <!-- TODO: If on home, don't show until scrolled a bit, then animate in from the top -->
         <div class="border-r bordered p-4">
             <BaxLogo class="size-6" />
         </div>
         <!-- TODO: If on home, don't show until scrolled a bit, then animate in from the left -->
         <div class="flex items-center ml-5">
             <span class="font-rokkitt text-xl leading-none font-medium uppercase tracking-wide">Brendan Bax</span>
         </div>
        <ul class="ml-auto flex items-stretch bordered">
            <li v-for="link in navLinks" :key="link.route" class="flex items-stretch justify-stretch border-l bordered">
                <NuxtLink :to="link.route" class="px-8 flex items-center justify-center">
                    <span class="font-rokkitt text-lg font-light text-center">{{ link.name }}</span>
                </NuxtLink>
            </li>
            <li class="py-4 px-2 bordered border-l">
                <ThemeToggle class="ml-auto" />
            </li>
        </ul>
    </nav>
</template>
