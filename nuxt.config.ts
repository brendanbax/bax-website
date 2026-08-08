// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/fonts', '@nuxt/content'],
  fonts: {
    families: [
      { name: 'Rokkitt', provider: 'google', global: true, weights: ['100 900'] },
      { name: 'Chivo', provider: 'google', global: true, weights: ['100 900'] },
      { name: 'Bebas Neue', provider: 'google', global: true, weights: ['400'] },
    ]
  },
  app: {
    head: {
      script: [
        {
          innerHTML: `(function(){try{var t=localStorage.theme;if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})()`,
          type: 'text/javascript'
        }
      ]
    }
  }
})