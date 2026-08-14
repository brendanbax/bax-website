<script setup lang="ts">
const siteUrl = 'https://www.brendanbax.com'
const title = 'Brendan Bax | Product Engineer'
const description = 'Bridging the gap between UX design and full-stack implementation, Brendan is a specialist in translating ideas into delightful products. His focus is scaling SaaS product suites through robust design systems, modern web technology, and user-validated agile development.'

useSeoMeta({
    ogType: 'website',
    ogSiteName: 'Brendan Bax',
    ogTitle: title,
    ogDescription: description,
    ogUrl: siteUrl,
    ogImage: `${siteUrl}/og-image.png`,
    ogImageWidth: 1200,
    ogImageHeight: 630,
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: `${siteUrl}/og-image.png`
})
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
