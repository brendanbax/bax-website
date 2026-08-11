<script setup lang="ts">
const route = useRoute()
const { data: post } = await useAsyncData(route.path, () =>
  queryCollection('insights').path(route.path).first()
)
</script>

<template>
    <article v-if="post">
        <PageHero>
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
                <HeroTitle v-if="post.title" :title="post.title" />
            </div>
            <ThemeCard class="right-in md:absolute right-14 bottom-16 md:w-1/3">
                <p class="text-lg sm:text-xl lg:text-2xl">{{ post.description }}</p>
            </ThemeCard>
            <IconArrowDown class="bounce-in hidden md:block size-8 text-brand absolute bottom-5 right-14" />
        </PageHero>
        <div class="max-w-prose mx-auto padded py-16">
            <ContentRenderer :value="post" />
        </div>
    </article>
</template>