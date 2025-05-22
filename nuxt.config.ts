// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
    css: ['~/assets/css/tailwind.css'],
  app: {
    head: {
      title: 'Nuxt3 tut',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {name: 'description', content: 'Nuxt3 tutorial app' }
      ],
    }
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
