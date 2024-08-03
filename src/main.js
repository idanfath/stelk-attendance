import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/base.css'

import { Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'
import '@quasar/extras/material-icons-round/material-icons-round.css'
import '@quasar/extras/material-symbols-rounded/material-symbols-rounded.css'
import '@quasar/extras/mdi-v7/mdi-v7.css'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'
import '@quasar/extras/bootstrap-icons/bootstrap-icons.css'
import 'quasar/dist/quasar.css'

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css/bundle';

createApp(App)
    .use(router)
    .component('Swiper', Swiper)
    .component('SwiperSlide', SwiperSlide)
    .use(Quasar, {
        config: {
            brand: {
                primary: '#027be3',
                // secondary: '#26A69A',
                // accent: '#9C27B0',
                // dark: '#3c3c4c',
                // positive: '#21BA45',
                // negative: '#C10015',
                // info: '#31CCEC',
                // warning: '#F2C037'
            }
        }
    })
    .mount('#app')
