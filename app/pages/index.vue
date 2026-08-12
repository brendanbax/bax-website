<script setup lang="ts">
import { IconAloha, IconNetwork, IconSkull } from '#components'

definePageMeta({
    layout: 'default'
})

const now = new Date().getFullYear()
const careerStart = 2013 // November @ Controller Chaos
const careerSpan = computed(() => now - careerStart)

const homeCards = [
    {
        id: 'de-risking-ideas',
        title: 'De-Risking Ideas',
        overline: 'UX Discovery',
        description: 'Poorly planned features cost engineering time. I conduct early user research, journey mapping, and rapid prototype testing to validate assumptions and refine product direction before writing production code.',
        icon: IconSkull,
    },
    {
        id: 'zero-handoff-friction',
        title: 'Zero Handoff Friction',
        overline: 'Design to Code',
        description: 'I design with code in mind, creating user experiences grounded in atomic engineering principles. Wireframes and high-fidelity mock-ups become living applications with reduced communication overhead and accelerated launches.',
        icon: IconAloha,
    },
    {
        id: 'atomic-execution',
        title: 'Atomic Execution',
        overline: 'System Architecture',
        description: 'Excellent experiences require excellent code. I build composable, tested frontends and services with the latest web technology for flexible, maintainable products that delight users.',
        icon: IconNetwork,
    }
]

</script>

<template>
    <div>
        <PageHero>
            <div class="flex flex-col-reverse lg:flex-row items-center justify-between grow py-16 mx-auto max-w-screen-xl">
                <div>
                    <HeroTitle
                        title="Shipping products"
                        class="hidden lg:block"
                    />
                    <h1 class="block lg:hidden gradient-hero-item text-center text-6xl md:text-7xl leading-none font-[875] font-bebas top-in">Shipping products</h1>
                    <h2 class="uppercase font-bold tracking-wide text-xl sm:text-3xl lg:text-5xl flex gap-x-3 md:gap-x-6 items-center justify-center lg:justify-start top-in lg:left-in">
                        <span>concept</span>
                        <span>to</span>
                        <span>code</span>
                    </h2>
                    <ProseP class="max-w-prose my-6 text-center lg:text-left">
                        I am a Product Engineer with {{ careerSpan }}+ years of experience blending user research, UI design, and full-stack
                        development. I validate user needs early, eliminate handoff friction, and ship scalable systems built to
                        last.
                    </ProseP>
                    <div class="flex items-center justify-center lg:justify-start gap-6">
                        <ThemeButton to="/career">Experience</ThemeButton>
                        <ThemeLink to="/insights">Insights</ThemeLink>
                    </div>
                </div>
                <div class="flex items-center justify-center grow py-0 md:py-16 mb-24 lg:mb-0 lg:max-w-1/3">
                    <div class="relative">
                        <svg class="absolute -inset-12 md:-inset-24 fill-brand animate-[spin_18s_linear_infinite]" viewBox="0 0 200 200">
                            <path id="circlePath" fill="none" d="M 100,100 m -80,0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" />
        
                            <text font-size="20" letter-spacing="1" text-anchor="middle">
                                <textPath href="#circlePath" startOffset="25%" class="uppercase font-semibold">
                                    Brendan Bax
                                </textPath>
                            </text>
                            <text font-size="20" letter-spacing="1" text-anchor="middle">
                                <textPath href="#circlePath" startOffset="75%" class="uppercase font-semibold">
                                    Product Engineer
                                </textPath>
                            </text>
        
                            <g transform="translate(180,83) scale(0.02) rotate(0) scale(-1,1) translate(-480,480)">
                                <path d="m320-80 40-280H160l360-520h80l-40 320h240L400-80h-80Z" />
                            </g>
                            <g transform="translate(20,83) scale(0.02) rotate(0) translate(-480,480)">
                                <path d="m320-80 40-280H160l360-520h80l-40 320h240L400-80h-80Z" />
                            </g>
                        </svg>
                        <BaxLogo class="size-24 md:size-40" />
                    </div>
                </div>
            </div>
        </PageHero>

        <section class="py-12">
            <ProseH2 class="text-center">The Product Engineer Difference</ProseH2>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 sm:gap-12 padded mt-8 max-w-screen-xl mx-auto">
                <HomeCard v-for="card in homeCards" :key="card.id" v-bind="card" />
            </div>
        </section>

        <HomeCarousel />

        <!-- Don't forget a blog post filler for the latest insights -->

        <HomeSocial />
    </div>
</template>