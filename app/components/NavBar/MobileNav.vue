<script setup lang="ts">
interface MobileNavProps {
    links: {
        name: string
        route: string
    }[]
}

const { links } = defineProps<MobileNavProps>()
    
const showMenu = ref(false)
const windowScrollPosition = ref(0)
const { isDarkMode } = useDarkMode()

let matchMediaQuery: MediaQueryList | undefined

function handleChange(e: MediaQueryListEvent) {
    if (e.matches) {
        showMenu.value = false
    }
}

function lockScroll() {
    windowScrollPosition.value = window.scrollY
    document.body.style.position = 'fixed'
    document.body.style.top = `-${windowScrollPosition.value}px`
    document.body.style.width = '100%'
    document.body.style.overflow = 'hidden'
}

function unlockScroll() {
    document.body.style.position = ''
    document.body.style.top = ''
    document.body.style.width = ''
    window.scrollTo(0, windowScrollPosition.value)
    document.body.style.overflow = ''
}

const targetThemeMode = computed(() => isDarkMode.value ? 'light' : 'dark')

onMounted(() => {
    matchMediaQuery = window.matchMedia('(min-width: 640px)')
    matchMediaQuery.addEventListener('change', handleChange)
})

onBeforeUnmount(() => matchMediaQuery?.removeEventListener('change', handleChange))

watch(showMenu, (newVal) => {
    if (newVal) {
        lockScroll()
    } else {
        unlockScroll()
    }
})

</script>

<template>
    <button @click="showMenu = true" class="p-4 hover:bg-brand transition-colors">
        <IconMenu class="size-6" />
    </button>
    <ClientOnly>
        <Teleport to="body">
            <Transition name="overlay-fade">
                <div
                    v-if="showMenu"
                    class="fixed inset-0 z-50 bg-base-950/50 backdrop-blur-lg sm:hidden"
                    @click="showMenu = false"
                />
            </Transition>
            <Transition name="menu-slide">
                <div v-if="showMenu" class="fixed top-0 right-0 bottom-0 z-[100] overflow-auto flex flex-col bg-white dark:bg-black w-80 sm:hidden">
                     <div class="flex items-center justify-between bordered border-b">
                        <div class="uppercase  dark:text-white py-5 pl-6">
                            <span>Brendan Bax</span>
                            <span class="text-brand mx-2">Dot</span>
                            <span>Com</span>
                        </div>
                         <button @click="showMenu = false" class="p-4 hover:bg-brand transition-colors bordered border-l">
                            <IconCircleClose class="size-6" />
                         </button>
                     </div>

                     <ul class="py-12 space-y-5 grow">
                        <li v-for="link in links" :key="link.route" class="text-brand">
                            <NuxtLink
                                :to="link.route"
                                class="font-bebas text-3xl pl-6"
                                active-class="border-l-4 border-brand text-base-950 dark:text-white"
                                @click="showMenu = false"
                            >{{ link.name }}</NuxtLink>
                        </li>
                     </ul>

                      <div class="bordered border-t flex items-center justify-between pl-6">
                        <div class="flex items-center gap-2">
                            <span>Switch to {{ targetThemeMode }} mode</span>
                            <IconArrowRight class="size-4" />
                        </div>
                        <div class="bordered border-l">
                            <ThemeToggle />
                        </div>
                      </div>
                </div>
            </Transition>
        </Teleport>
    </ClientOnly>
</template>