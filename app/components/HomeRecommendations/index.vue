<script setup lang="ts">
import { IconLinkedIn } from '#components'

interface Recommendation {
    content: string
    author: string
    role: string
    social?: string
    span?: boolean
}

const recommendations: Recommendation[] = [
    {
        content: 'Brendan is extremely passionate about his work, creating/delivering great products, and has great insights. His experience in design thinking and elements, coding, and understanding business value delivery makes him a huge asset to any team.',
        author: 'Alex Courtney',
        role: 'Director of Innovation R&D, Mercy',
        social: 'https://www.linkedin.com/in/alexander-courtney-stl/'
    },
    {
        content: 'Working with Brendan in Mercy Virtual\'s R&D group was a pleasure. His programming skills were top notch and his personality, drive, and ability to understand the mission was unparalleled. Brendan\'s eye for design and desire to build usable, yet beautiful interfaces really stood out while we worked together. He was always eager to teach and learn and his leadership kept us on track in our agile environment. Great guy, great developer, great designer, and a pleasure to work with.',
        author: 'Jordan Woerndle',
        role: 'Developer, Mercy Virtual',
        social: 'https://www.linkedin.com/in/jordan-woerndle/',
        span: true
    },
    {
        content: 'Brendan brought strong design skills to our projects together while at Asynchrony. He was able to manage the client relationship and user feedback to build a complete application. Brendan was also quick to jump into technical discussions and gain knowledge and understanding of every aspect of the user experience.',
        author: 'Calvin Cox',
        role: 'Developer, Asynchrony Labs',
        social: 'https://www.linkedin.com/in/calvinkcox/',
        span: true
    },
    {
        content: 'Brendan is a talented, thoughtful UX and interaction designer. I am convinced he can learn and master any skill or practice to make himself a UX thought and practice lead.',
        author: 'Kate Chadha',
        role: 'Research Practice Lead, WWT',
        social: 'https://www.linkedin.com/in/katechadha/'
    },
    {
        content: 'Brendan is a rare combination - a software engineer plus user-experience designer. And he is not just adequate at both, he excels.',
        author: 'Peter Granderson',
        role: 'Developer, Mercy Virtual'
    },
    {
        content: 'Brendan has an infectious attitude that leaves you feeling excited to execute on the designs and concepts that he creates. He has also been a great mentor to the design team and has helped to bring them up to speed quickly.',
        author: 'Nicholas Kajok',
        role: 'Staff Engineer, Coolfire Solutions',
        social: 'https://www.linkedin.com/in/nkajok/'
    },
    {
        content: 'His designs clearly articulate the value a user will get out of each interaction with the page. Working with Brendan was a treat. In three days of pairing, we were able to redesign the entire application and put forward a working prototype.',
        author: 'Johnny Steenbergen',
        role: 'Developer, Asynchrony Labs',
        social: 'https://www.linkedin.com/in/jwsteenbergen/'
    }
]
</script>

<template>
    <section class="py-12 padded max-w-screen-xl mx-auto">
        <ProseH2 class="text-center">Words From Peers</ProseH2>
        <ProseP class="max-w-prose mx-auto text-center">
            I thrive on collaborative, cross-functional teams where people can learn from and serve each other. Here's some praise from past colleagues.
        </ProseP>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 auto-rows-fr">
            <ThemeCard
                v-for="rec in recommendations"
                :key="rec.author"
                class="flex flex-col sm:[&:last-child:nth-child(odd)]:col-span-2"
                :class="rec.span ? 'lg:col-span-2' : 'lg:[&:last-child:nth-child(odd)]:col-span-1'"
            >
                <blockquote class="grow">
                    <ProseP class="mb-0">"{{ rec.content }}"</ProseP>
                </blockquote>
                <footer class="flex items-center gap-3 mt-4">
                    <div class="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand text-white font-semibold">
                        {{ rec.author.charAt(0) }}
                    </div>
                    <div>
                        <a
                            v-if="rec.social"
                            :href="rec.social"
                            target="_blank"
                            rel="noopener"
                            class="flex items-center gap-1.5 font-semibold hover:text-brand transition-colors"
                        >
                            {{ rec.author }}
                            <IconLinkedIn class="size-4" />
                        </a>
                        <p v-else class="font-semibold mb-0">{{ rec.author }}</p>
                        <ProseOverline class="mb-0">{{ rec.role }}</ProseOverline>
                    </div>
                </footer>
            </ThemeCard>
        </div>
    </section>
</template>
