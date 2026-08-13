<script setup lang="ts">
definePageMeta({
    layout: 'default'
})

interface ExperienceEntry {
    id: string
    role: string
    company: string
    dates: string
    bullets: string[]
}

const experience: ExperienceEntry[] = [
    {
        id: 'fenix24',
        role: 'Senior UX Engineer / Full-Stack Developer',
        company: 'Fenix 24',
        dates: 'March 2025 – Present',
        bullets: [
            'Design and build scalable, reliable applications, from Figma prototype through production deployment.',
            'Shipped LLM-powered search, custom reporting, and assessment dashboards used by hundreds of users across a global workforce.',
            'Design system author, test-driven development champion, raising code quality and aligning product vision to pixels.',
            'Serve as the team\'s voice for user-centered design, mentoring peers on research and usability best practices.',
        ],
    },
    {
        id: 'freight-science',
        role: 'Senior UX Designer / Full-Stack Engineer',
        company: 'Freight Science',
        dates: '2022 – 2025',
        bullets: [
            'Designed and built the core logistics planning and automation platform, end to end, for dozens of customers.',
            'Built and maintained a shared UI component library, improving consistency and reuse across the product line.',
            'Instrumented analytics, giving the product team visibility into feature usage and adoption.',
        ],
    },
    {
        id: 'intrusion',
        role: 'UX Architect / Front-End Engineer',
        company: 'Intrusion, Inc.',
        dates: '2021 – 2022',
        bullets: [
            'Led front-end architecture for a networking cybersecurity product.',
            'Shipped new security dashboards with real-time threat visibility, driving product adoption.',
            'Migrated the app from Vue 2 to Vue 3 and added end-to-end Cypress coverage, modernizing the codebase without disrupting active development.',
        ],
    },
    {
        id: 'wwt',
        role: 'Full-Stack Developer',
        company: 'World Wide Technology',
        dates: '2020 – 2021',
        bullets: [
            'Shipped features for the corporate website, serving 30k+ monthly visitors.',
            'Built the WWT Communities feature from the ground up, extending the site\'s engagement capabilities.',
            'Created live content editing tools, letting non-technical teams update the site without engineering support.',
        ],
    },
    {
        id: 'mercy',
        role: 'Senior Software Design Engineer',
        company: 'Mercy',
        dates: '2019 – 2020',
        bullets: [
            'Designed and engineered healthcare R&D initiatives, working directly with clinicians.',
            'Built a video chat platform for virtual patient visits, expanding access to care.',
            'Designed and shipped pediatric support, patient portals, and health-monitoring applications, improving patient quality of life.',
        ],
    },
    {
        id: 'coolfire',
        role: 'Senior UX Designer / Design Lead',
        company: 'Coolfire',
        dates: '2018 – 2019',
        bullets: [
            'Led design practice and process at a software consultancy, adapting to enterprise, security, and logistics client needs.',
            'Established the visual identity for the Ronin product ahead of its release.',
        ],
    },
    {
        id: 'wwt-asynchrony',
        role: 'UX Designer / Front-End Engineer',
        company: 'WWT Asynchrony Labs',
        dates: '2017 – 2018',
        bullets: [
            'Increased loan application completion rates for a national bank by overhauling their online mortgage application experience.',
            'Invested beyond my own team, critiquing peer projects across the agency to raise design quality for other clients.'
        ],
    },
    {
        id: 'bax-art-design',
        role: 'Owner / Chief Designer',
        company: 'Bax Art & Design Co. LLC',
        dates: '2015 – 2017',
        bullets: [
            'Ran all business operations for an independent design studio, spanning graphic design, web design, and 3D art, owning client relationships from scope through delivery.',
        ],
    },
    {
        id: 'controller-chaos',
        role: 'Senior Designer',
        company: 'Controller Chaos',
        dates: '2013 – 2015',
        bullets: [
            'Redesigned the product customization interface for a custom controller e-commerce business.',
            'Replaced product photography with 3D renders, cutting production time and cost.',
        ],
    },
    {
        id: 'itt-tech',
        role: 'Adjunct Instructor',
        company: 'ITT Technical Institute',
        dates: '2011 – 2013',
        bullets: [
            'Taught graphic design, 3D modeling, and computer animation courses.',
        ],
    },
]

const itemRefs = ref<(HTMLElement | null)[]>([])
const visibleItems = ref<boolean[]>(experience.map(() => false))
const activeConnectors = ref<boolean[]>(experience.map(() => false))

function setItemRef(el: Element | null, index: number) {
    itemRefs.value[index] = el as HTMLElement | null
}

onMounted(() => {
    itemRefs.value.forEach((el, index) => {
        if (!el) return

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return

                visibleItems.value[index] = true

                // Reveal the connecting line from the previous pip as this one comes into view
                if (index > 0) {
                    visibleItems.value[index - 1] = true
                    activeConnectors.value[index - 1] = true
                }

                observer.disconnect()
            })
        }, { threshold: 0.2 })

        observer.observe(el)
    })
})
</script>

<template>
    <div>
        <section class="py-12">
            <h1 class="font-bebas text-brand text-5xl sm:text-6xl lg:text-7xl text-center">Experience</h1>
            <ul class="flex flex-col max-w-screen-xl mx-auto padded mt-8">
                <li
                    v-for="(job, index) in experience"
                    :key="job.id"
                    :ref="(el) => setItemRef(el as Element | null, index)"
                    class="flex gap-x-4"
                    :class="visibleItems[index] ? 'top-in' : 'opacity-0'"
                >
                    <div class="flex flex-col items-center">
                        <svg v-if="index === 0" class="relative size-6 shrink-0 text-brand" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20" r="8" fill="none" stroke="currentColor" />
                            <circle cx="20" cy="20" r="2" fill="currentColor" />
                            <circle cx="20" cy="20" r="8" fill="none" stroke="currentColor" class="origin-center animate-ping" />
                        </svg>
                        <svg v-else class="size-6 shrink-0 text-base-600 dark:text-base-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="4" />
                        </svg>
                        <span
                            v-if="index !== experience.length - 1"
                            class="w-px flex-1 origin-top bg-base-300 transition-transform duration-[1500ms] ease-out dark:bg-base-700"
                            :class="activeConnectors[index] ? 'scale-y-100' : 'scale-y-0'"
                        />
                    </div>
                    <ThemeCard class="mb-8 flex-1">
                        <ProseOverline>{{ job.company }} · {{ job.dates }}</ProseOverline>
                        <ProseH3>{{ job.role }}</ProseH3>
                        <ProseUl>
                            <ProseLi v-for="bullet in job.bullets" :key="bullet">{{ bullet }}</ProseLi>
                        </ProseUl>
                    </ThemeCard>
                </li>
            </ul>
        </section>
        <section class="border-t border-base-200 dark:border-base-800">
            <PageHero>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center justify-between grow py-16 mx-auto max-w-screen-xl">
                    <HeroTitle title="Education" />
                    <div>
                        <ProseH3>Full Sail University, 2010</ProseH3>
                        <ProseH4>Bachelor of Science in Game Art</ProseH4>
                        <ProseP class="max-w-sm">Valedictorian. Recognized for perfect attendance and recipient of multiple course directors awards for academic excellence.</ProseP>
                    </div>
                </div>
            </PageHero>
        </section>
    </div>
</template>
