<template>
    <header class="relative py-8 sm:py-12 padded bordered border-b pinstripes">
        <slot />
    </header>
</template>

<style scoped>
.pinstripes {
    --angle: 315deg;
  background: repeating-linear-gradient(
    var(--angle),
    theme('colors.base.200'),
    theme('colors.base.200') 1px,
    theme('colors.base.50') 1px,
    theme('colors.base.50') 20px
  );
}
.dark .pinstripes {
  background: repeating-linear-gradient(
    var(--angle),
    theme('colors.base.900'),
    theme('colors.base.900') 1px,
    theme('colors.base.950') 1px,
    theme('colors.base.950') 20px
  );
}
</style>