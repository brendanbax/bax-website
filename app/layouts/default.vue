<template>
    <div class="flex flex-col min-h-dvh">
        <NavBar />
        
        <div class="pt-[57px] flex flex-col grow">
            <slot />
        </div>
    
        <footer>
            <!-- TODO: copyright footer -->
        </footer>
    </div>
</template>