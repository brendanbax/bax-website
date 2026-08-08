<script setup lang="ts">
const { data: posts } = await useAsyncData('insights-list', () =>
  queryCollection('insights').all()
)
</script>

<template>
    <h1>Insights</h1>
    <ul>
        <li v-for="post in posts" :key="post.path">
            <div class="flex items-center justify-between">
                <h2>{{ post.title }}</h2>
                <span>{{ post.date }}</span>
            </div>
            <p>{{ post.description }}</p>
            <NuxtLink :to="post.path">Learn more</NuxtLink>
        </li>
    </ul>
</template>
