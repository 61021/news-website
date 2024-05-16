import { appDescription } from './constants/index'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/eslint',
    '@nuxtjs/i18n',
    'nuxt-og-image',
    'nuxt-swiper',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@vueuse/motion/nuxt',
    'nuxt-gtag',
  ],

  site: {
    url: 'https://theideaiq.com',
  },

  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  css: [
    '@unocss/reset/tailwind.css',
    '~/styles/main.css',
  ],

  colorMode: {
    classSuffix: '',
  },

  i18n: {
    vueI18n: './i18n.config.ts',
    locales: ['ar', 'en'],
    defaultLocale: 'ar',
    strategy: 'no_prefix',
  },

  googleFonts: {
    families: {
      Cairo: [400, 700],
    },
  },

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      crawlLinks: false,
      routes: ['/'],
    },
  },

  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'theme-color', media: '(prefers-color-scheme: light)', content: 'white' },
        { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#111115' },
      ],
    },
  },

  gtag: {
    id: 'GTM-M5CXT2Q8',
  },

  devtools: {
    enabled: true,
  },

  devServer: {
    port: 9451,
  },

  features: {
    // For UnoCSS
    inlineStyles: false,
  },

  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || 'https://backend.theideaiq.com/api/',
    },
  },

  eslint: {
    config: {
      standalone: false,
    },
  },
})
