<script setup lang="ts">
const route = useRoute()
const { data: post } = await useAsyncData(route.path, () =>
  queryCollection('insights').path(route.path).first()
)

const titleWords = computed(() => post.value?.title?.split(' ') ?? [])
</script>

<template>
    <article v-if="post">
        <header class="relative py-8 sm:py-12 padded bordered border-b pinstripes">
            <div class="mb-6 lg:mb-0">
                <div class="flex items-center gap-4 mb-4">
                    <NuxtLink to="/insights" class="flex items-center gap-2 text-sm leading-4 uppercase">
                        <IconChevronLeft class="size-4 text-brand" />
                        <span class="text-neutral-600 dark:text-neutral-400">
                            Insights
                        </span>
                    </NuxtLink>
                    <span class="text-neutral-600 dark:text-neutral-400">-</span>
                    <p>{{ post.date }}</p>
                </div>
                <h1 class="flex flex-col text-6xl sm:text-8xl lg:text-[10rem] leading-none font-[875] font-bebas text-brand">
                    <span
                        v-for="(word, index) in titleWords"
                        :key="`${word}-${index}`"
                        class="left-in inline-block"
                        :style="{ animationDelay: `${index * 80}ms` }"
                    >{{ word }}</span>
                </h1>
            </div>
            <div class="right-in md:absolute right-14 bottom-16 md:w-1/3 rounded-lg bordered border bg-neutral-50 dark:bg-neutral-950 p-4 sm:p-6">
                <p class="text-lg sm:text-xl lg:text-2xl">{{ post.description }}</p>
            </div>
            <IconArrowDown class="bounce-in hidden md:block size-8 text-brand absolute bottom-5 right-14" />
        </header>
        <div class="max-w-prose mx-auto padded py-16">
            <ContentRenderer :value="post" />
        </div>
    </article>
</template>

<style scoped>
.pinstripes {
    --angle: 315deg;
  background: repeating-linear-gradient(
    var(--angle),
    theme('colors.neutral.200'),
    theme('colors.neutral.200') 1px,
    theme('colors.neutral.50') 1px,
    theme('colors.neutral.50') 20px
  );
}
.dark .pinstripes {
  background: repeating-linear-gradient(
    var(--angle),
    theme('colors.neutral.900'),
    theme('colors.neutral.900') 1px,
    theme('colors.neutral.950') 1px,
    theme('colors.neutral.950') 20px
  );
}
</style>