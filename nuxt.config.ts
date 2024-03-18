// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Alfredo Martínez | FrontEnd Engineer',
      bodyAttrs: {
        class: 'antialiased font-inter',
      },
    },
  },
  modules: [
    // https://nuxt.com/modules/ui
    '@nuxt/ui',
    // https://nuxt.com/modules/google-fonts
    '@nuxtjs/google-fonts',
    // https://nuxt.com/modules/image
    '@nuxt/image',
  ],
  ui: {
    icons: ['heroicons', 'ph', 'solar', 'fa6-brands'],
  },
  googleFonts: {
    display: 'swap',
    download: true,
    families: {
      Inter: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
    },
  },
  image: {
    provider: 'imagekit',
    imagekit: {
      baseURL: 'https://ik.imagekit.io/alfredom',
    },
  },
});
