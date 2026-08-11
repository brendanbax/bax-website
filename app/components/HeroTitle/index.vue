<script setup lang="ts">
type TitleWord = string | { text: string; class?: string }
type TitleLine = string | TitleWord[]

interface ResolvedWord {
    text: string
    class?: string
}

const props = defineProps<{
    title: string
    lines?: TitleLine[]
}>()

const resolvedLines = computed<ResolvedWord[][]>(() => {
    if (props.lines) {
        return props.lines.map(line => {
            const words = Array.isArray(line) ? line : [line]
            return words.map(word => (typeof word === 'string' ? { text: word } : word))
        })
    }
    return props.title.split(' ').map(word => [{ text: word }])
})

function lineStyle(index: number) {
    const total = resolvedLines.value.length
    const positionY = total > 1 ? `${(index / (total - 1)) * 100}%` : '0%'
    return {
        animationDelay: `${index * 80}ms`,
        backgroundSize: `100% ${total * 100}%`,
        backgroundPositionY: positionY
    }
}
</script>

<template>
    <h1 class="flex flex-col text-6xl sm:text-8xl lg:text-[8rem] leading-none font-[875] font-bebas text-brand">
        <div
            v-for="(line, lineIndex) in resolvedLines"
            :key="lineIndex"
            :class="line.length > 1 ? 'flex items-baseline gap-x-8' : undefined"
        >
            <span
                v-for="(word, wordIndex) in line"
                :key="`${word.text}-${wordIndex}`"
                class="left-in inline-block gradient-hero-item"
                :class="word.class"
                :style="lineStyle(lineIndex)"
            >{{ word.text }}</span>
        </div>
    </h1>
</template>
