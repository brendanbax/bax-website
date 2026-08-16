<script setup lang="ts">
defineProps<{
    size: number
    inset: number
}>()
</script>

<template>
    <svg
        class="absolute fill-brand animate-[spin_18s_linear_infinite] [--transform-rotate:-360deg]"
        :style="{ inset: `${-inset}px` }"
        :width="size"
        :height="size"
        viewBox="0 0 200 200"
    >
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
</template>
