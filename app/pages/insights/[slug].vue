<script setup lang="ts">
const route = useRoute()
const { data: post } = await useAsyncData(route.path, () =>
  queryCollection('insights').path(route.path).first()
)

const titleWords = computed(() => post.value?.title?.split(' ') ?? [])

function titleWordStyle(index: number) {
    const total = titleWords.value.length
    const positionY = total > 1 ? `${(index / (total - 1)) * 100}%` : '0%'
    return {
        animationDelay: `${index * 80}ms`,
        backgroundSize: `100% ${total * 100}%`,
        backgroundPositionY: positionY
    }
}
</script>

<template>
    <article v-if="post">
        <header class="relative py-8 sm:py-12 padded bordered border-b pinstripes">
            <div class="mb-6 lg:mb-0">
                <div class="flex items-center gap-4 mb-4">
                    <NuxtLink to="/insights" class="group flex items-center gap-2 text-sm leading-4 uppercase">
                        <IconChevronLeft class="size-4 text-brand transform transition-transform duration-300 group-hover:-translate-x-1" />
                        <span class="text-base-600 dark:text-base-400 group-hover:text-brand transition-colors">
                            Insights
                        </span>
                    </NuxtLink>
                    <span class="text-base-600 dark:text-base-400">-</span>
                    <p>{{ post.date }}</p>
                </div>
                <h1 class="flex flex-col text-6xl sm:text-8xl lg:text-[8rem] leading-none font-[875] font-bebas text-brand">
                    <span
                        v-for="(word, index) in titleWords"
                        :key="`${word}-${index}`"
                        class="left-in inline-block bg-gradient-to-b from-brand-500 to-brand-800 dark:from-brand-400 dark:to-brand-700 bg-clip-text bg-no-repeat text-transparent"
                        :style="titleWordStyle(index)"
                    >{{ word }}</span>
                </h1>
            </div>
            <div class="right-in md:absolute right-14 bottom-16 md:w-1/3 rounded-lg bordered border bg-base-50 dark:bg-base-950 p-4 sm:p-6">
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
    theme('colors.base.200'),
    theme('colors.base.200') 1px,
    theme('colors.base.50') 1px,
    theme('colors.base.50') 20px
  );
}
.dark .pinstripes {
  background: repeating-linear-gradient(
    var(--angle),
    theme('colors.base.900'),
    theme('colors.base.900') 1px,
    theme('colors.base.950') 1px,
    theme('colors.base.950') 20px
  );
}
</style>