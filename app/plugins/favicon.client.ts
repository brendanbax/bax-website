export default defineNuxtPlugin(() => {
    function update() {
        let link = document.querySelector<HTMLLinkElement>('link[rel="icon"][data-dynamic]')
        if (!link) {
            link = document.createElement('link')
            link.rel = 'icon'
            link.type = 'image/svg+xml'
            link.dataset.dynamic = 'true'
            document.head.appendChild(link)
        }
        link.href = buildFaviconHref()
    }

    update()

    const observer = new MutationObserver(update)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-brand'] })

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', update)
})
