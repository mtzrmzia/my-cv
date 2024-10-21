// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      bodyAttrs: {
        class: 'antialiased dark:bg-gray-900',
      },
    },
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  modules: [
    // https://nuxt.com/modules/ui
    '@nuxt/ui',
    // https://nuxt.com/modules/google-fonts
    '@nuxtjs/google-fonts',
    // https://nuxt.com/modules/image
    '@nuxt/image',
    // https://nuxt.com/modules/i18n
    '@nuxtjs/i18n',
    // https://nuxt.com/modules/og-image
    'nuxt-og-image',
  ],
  googleFonts: {
    display: 'swap',
    download: true,
    families: {
      Inter: {
        wght: '100..900',
      },
    },
  },
  image: {
    provider: 'imagekit',
    imagekit: {
      baseURL: 'https://ik.imagekit.io/alfredom',
    },
  },
  i18n: {
    lazy: true,
    langDir: 'locales',
    strategy: 'no_prefix',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en.json',
      },
      {
        code: 'es',
        iso: 'es-MX',
        name: 'Español',
        file: 'es.json',
      },
    ],
    defaultLocale: 'en',
    vueI18n: './i18n.config.ts',
    baseUrl: 'https://cv.alfredom.dev',
  },
  site: {
    url: 'https://cv.alfredom.dev',
  },
  compatibilityDate: '2024-10-21',
});
