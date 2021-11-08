export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-front-ex',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  /* 이 옵션을 사용하면 모든 페이지에서 전역으로 사용할 CSS파일 / 모듈 / 라이브러리 파일을 설정할 수 있습니다. */
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  /* 이 옵션을 사용하면 루트 vue.js 어플리케이션을 인스턴스화 하기 전에 실행할 Javascript 플러그인을 정의 할 수 있습니다. */
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  /* 이 옵션을 사용하면 생성 된 vendor.bundle.js 파일에 모듈을 추가하여 앱 번들의 크기를 줄일 수 있습니다. 외부 모듈을 사용할 때 정말 유용합니다 */
  build: {
  },

  /* 이 옵션을 사용하면 nuxt.js의 개발 또는 프로덕션 모드를 정의 할 수 있습니다. */
  dev: {
  },

  /* 이 옵션을 사용하면 클라이언트 및 서버에서 사용 가능한 환경 변수를 정의 할 수 있습니다. */
  env: {
  },

  /* 이 옵션을 사용하면 어플리케이션에서 Nuxt.js가 HTML 파일로 변환할 모든 동적인 경로에 대한 각각의 params 값을 정의 할 수 있습니다. */
  generate:{
  }
}
