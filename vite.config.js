import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        transformAssetUrls,
      }
    }),
    Components({
      include: [/\.vue$/, /\.vue\?vue/],
      dirs: ['./src/components'],
    }),
    quasar(),
  ],
})
