<script setup lang="ts">
import type { NuxtError } from '#app'
import { IconSkull } from '#components'

const props = defineProps<{
    error: NuxtError
}>()

const isNotFound = computed(() => props.error?.statusCode === 404)

function handleError() {
    clearError({ redirect: '/' })
}
</script>

<template>
    <div class="flex flex-col min-h-dvh">
        <NavBar />

        <div class="pt-[57px] flex flex-col grow">
            <PageHero>
                <div class="flex flex-col-reverse lg:flex-row items-center justify-between grow py-16 mx-auto max-w-screen-xl gap-y-12">
                    <div class="text-center lg:text-left">
                        <h1 class="gradient-hero-item text-8xl sm:text-9xl lg:text-[9rem] leading-none font-[875] font-bebas top-in">
                            {{ isNotFound ? '404' : error.statusCode }}
                        </h1>
                        <h2 class="uppercase font-bold tracking-wide text-xl sm:text-3xl lg:text-4xl top-in lg:left-in">
                            {{ isNotFound ? 'Page not found' : 'Something went wrong' }}
                        </h2>
                        <ProseP class="max-w-prose mx-auto lg:mx-0 my-6">
                            <template v-if="isNotFound">
                                This page took a wrong turn somewhere between concept and code. Let's get you back on track.
                            </template>
                            <template v-else>
                                {{ error.statusMessage || 'An unexpected error occurred. Let\'s get you back on track.' }}
                            </template>
                        </ProseP>
                        <div class="flex items-center justify-center lg:justify-start gap-6">
                            <ThemeButton @click="handleError">Back Home</ThemeButton>
                        </div>
                    </div>
                    <div class="flex items-center justify-center grow py-0 md:py-8 right-in">
                        <IconSkull class="size-32 md:size-48 text-brand" />
                    </div>
                </div>
            </PageHero>
        </div>

        <WebFooter />
    </div>
</template>
