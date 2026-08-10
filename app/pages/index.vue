<script setup lang="ts">
definePageMeta({
    layout: 'default'
})
</script>

<template>
    <div class="flex flex-col items-center justify-center grow">
        <div class="relative">
            <svg class="absolute -inset-16 fill-brand animate-[spin_18s_linear_infinite]" viewBox="0 0 200 200">
                <path id="circlePath" fill="none" d="M 100,100 m -80,0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" />

                <text font-size="24" letter-spacing="1" text-anchor="middle">
                    <textPath href="#circlePath" startOffset="25%" class="uppercase font-semibold">
                        Brendan Bax
                    </textPath>
                </text>
                <text font-size="24" letter-spacing="1" text-anchor="middle">
                    <textPath href="#circlePath" startOffset="75%" class="uppercase font-semibold">
                        Product Engineer
                    </textPath>
                </text>

                <g transform="translate(185,80) scale(0.02083) rotate(-20) translate(-480,480)">
                    <path d="m320-80 40-280H160l360-520h80l-40 320h240L400-80h-80Z" />
                </g>
                <g transform="translate(15,80) scale(0.02083) rotate(15) translate(-480,480)">
                    <path d="m320-80 40-280H160l360-520h80l-40 320h240L400-80h-80Z" />
                </g>
            </svg>
            <BaxLogo class="size-24 mb-2" />
        </div>
    </div>
</template>