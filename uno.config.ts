import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
  ],
  theme: {
    colors: {
      on: {
        strawberry: {
          DEFAULT: '#fff',
          dark: '#fff',
        },
        banana: {
          DEFAULT: '#111115',
          dark: '#111115',
        },
      },
      strawberry: {
        DEFAULT: '#E6154F',
      },
      banana: {
        DEFAULT: '#F4CF08',
      },
      primary: {
        background: {
          DEFAULT: '#fff',
          dark: '#111115',
        },
        text: {
          DEFAULT: '#111115',
          dark: '#fff',
        },
      },
      secondary: {
        background: {
          DEFAULT: '#111115',
          dark: '#fff',
        },
        text: {
          DEFAULT: '#fff',
          dark: '#111115',
        },
      },
    },
  },
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
