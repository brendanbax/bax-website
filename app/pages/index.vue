<script setup lang="ts">
definePageMeta({
    layout: 'default'
})

const now = new Date().getFullYear()
const careerStart = 2013 // November @ Controller Chaos
const careerSpan = computed(() => now - careerStart)
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
                    <h2 class="uppercase font-bold tracking-wide text-xl sm:text-3xl lg:text-5xl flex gap-x-6 items-center justify-center lg:justify-start top-in lg:left-in">
                        <span>concept</span>
                        <span>to</span>
                        <span>code</span>
                    </h2>
                    <ProseP class="max-w-prose my-6 text-center lg:text-left">
                        I am a Product Engineer with {{ careerSpan }}+ years of experience bridging user research, UI design, and full-stack
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

    <section>
        <ProseH2>The Product Engineer Difference</ProseH2>

        <article>
            <ProseH3>De-Risking Product Ideas (UX Discovery)</ProseH3>
            <ProseP>
                Bad features cost months of engineering time. I use early user research, journey mapping, and rapid
                usability testing to validate assumptions and refine product direction before writing production
                code.
            </ProseP>
        </article>

        <article>
            <ProseH3>Zero Handoff Friction (Design to Code)</ProseH3>
            <ProseP>
                I move seamlessly from high-fidelity Figma components to modern front-end architectures. Designing
                and engineering simultaneously eliminates communication overhead and speeds up launches.
            </ProseP>
        </article>

        <article>
            <ProseH3>Scalable Full-Stack Execution (Systems Architecture)</ProseH3>
            <ProseP>
                Great UI requires reliable backend infrastructure. I engineer composable, testable frontends paired
                with robust APIs and database architectures built for long-term maintainability.
            </ProseP>
        </article>
    </section>

    <section>
        <ProseH2>Proven Delivery Velocity</ProseH2>
        <ProseP>
            Execution speed and technical adaptability are critical in fast-moving product teams. Over the last
            year, I established a streamlined product delivery engine, taking complex concepts from initial framing
            all the way to production release.
        </ProseP>

        <dl>
            <div>
                <dt>10</dt>
                <dd>Major Capabilities delivered end-to-end in 13 months.</dd>
            </div>
            <div>
                <dt>&lt;4 Week</dt>
                <dd>Concept-to-production lifecycle per feature.</dd>
            </div>
            <div>
                <dt>12 Years</dt>
                <dd>Navigating startup, agency, and enterprise software ecosystems.</dd>
            </div>
        </dl>
    </section>
    </div>
</template>