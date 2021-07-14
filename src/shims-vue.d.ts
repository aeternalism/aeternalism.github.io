declare module '*.md' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '@intlify/vite-plugin-vue-i18n/messages'
declare module 'virtual:pwa-register'
