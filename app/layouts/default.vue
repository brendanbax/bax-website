<template>
    <div class="flex flex-col min-h-dvh bg-neutral-50 text-neutral-950 dark:bg-neutral-950 dark:text-white">
        <header>
            <NavBar />
        </header>
        
        <slot />
    
        <footer>
            <!-- TODO: copyright footer -->
        </footer>
    </div>
</template>