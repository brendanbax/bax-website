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
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'Brendan Bax | Product Engineer',
      meta: [
        { name: 'description', content: 'Bridging the gap between UX design and full-stack implementation, Brendan is a specialist in translating ideas into delightful products. His focus is scaling SaaS product suites through robust design systems, modern web technology, and user-validated agile development.'}
      ],
      script: [
        {
          innerHTML: `(function(){try{var t=localStorage.theme;if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})()`,
          type: 'text/javascript'
        },
        {
          innerHTML: `(function(){try{var b=localStorage.brand;if(b==='lime'||b==='midnight'){document.documentElement.dataset.brand=b}}catch(e){}})()`,
          type: 'text/javascript'
        }
      ]
    }
  }
})