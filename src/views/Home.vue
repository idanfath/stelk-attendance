<template>
  <q-page class="responsive-px" id="home">
    <section class="flex column tw-gap-7 max-md:tw-text-center tw-justify-center ">
      <div class="tw-text-6xl tw-font-bold clamp-title">
        Optimalkan klinik Anda dengan
        <span class="hover-pulse-text">Medicare</span>
        <span class="max-md:tw-hidden">, fitur lengkap & otomatis!</span>
      </div>
      <div class="subtext max-md:tw-hidden tw-text-xl">
        {{home.subtext}}
      </div>
      <div class="subtext md:tw-hidden tw-text-lg">
        {{home.subtext_mobile}}
      </div>
      <div>
        <button class="button-primary">Hubungi Kami</button>
      </div>
    </section>

    <section>
      <img src="../assets/home/hero-doctor.png" class="hero-image" alt="hero image">
    </section>
  </q-page>

  <page class="responsive-px tw-py-[5rem] tw-bg-blue-100 tw-flex tw-flex-col tw-gap-[2rem]" id="keunggulan">
    <section>
      <div class="tw-text-6xl tw-font-bold">
        Mengapa pilih <span class="hover-pulse-text">Medicare</span>?
      </div>
      <div class="tw-text-xl max-md:tw-text-lg subtext tw-mt-4">
        {{about.subtext}}
      </div>
    </section>
    <section class="tw-select-none">
      <swiper :slides-per-view="spp" :space-between="50" :autoplay="{ delay: 21, disableOnInteraction: false }">
        <swiper-slide v-for="content in swiperContent" :key="content.heading">
          <comp-card :heading="content.heading" :text="content.text" :icon="content.icon" />
        </swiper-slide>
      </swiper>
    </section>
  </page>

  <q-page class="responsive-px tw-py-[5rem] flex max-md:tw-justify-center max-md:tw-flex-col tw-gap-5" id="about">

    <section class="md:tw-p-4">
      <img src="../assets/about/about.jpg" class="tw-w-full" alt="hero image">
    </section>

    <section>
      <div class="clamp-title tw-font-bold">
        Tentang Kami
      </div>
      <div class="tw-text-xl tw-mt-4">
        <div class="tw-text-2xl tw-font-bold">Service Medicare</div>
        <div class="tw-text-lg tw-mt-2 max-md:tw-hidden">
          {{about.subtext}}
        </div>
        <div class="tw-text-lg tw-mt-2 md:tw-hidden">
          {{about.subtext_mobile}}
        </div>
      </div>
    </section>
  </q-page>

</template>

<script>
  export default {
    data() {
      return {
        home: {
          subtext: 'eKlinik adalah solusi inovatif yang dirancang untuk mengoptimalkan klinik Anda dengan fitur-fitur lengkap dan otomatis. Dengan menggunakan eKlinik, Anda dapat mengalami peningkatan efisiensi, penghematan waktu, dan peningkatan kualitas layanan di klinik Anda.',
          subtext_mobile: 'eKlinik adalah solusi inovatif yang dirancang untuk mengoptimalkan klinik Anda dengan fitur-fitur lengkap dan otomatis.'
        },
        about: {
          subtext: "Service Medicare adalah solusi inovatif yang dirancang untuk mengoptimalkan klinik Anda dengan fitur-fitur lengkap dan otomatis. Dengan menggunakan Service Medicare, Anda dapat mengalami peningkatan efisiensi, penghematan waktu, dan peningkatan kualitas layanan di klinik Anda.",
          subtext_mobile: "Service Medicare adalah solusi inovatif yang dirancang untuk mengoptimalkan klinik Anda dengan fitur-fitur lengkap dan otomatis."
        },
        swiperContent: [
          { heading: 'Efisiensi', text: 'Dengan Medicare, Anda dapat mengalami peningkatan efisiensi di klinik Anda', icon: 'sym_r_speed' },
          { heading: 'Fitur Lengkap', text: 'Fitur lengkap yang memudahkan Anda dalam mengelola klinik Anda', icon: 'sym_r_check' },
          { heading: 'Otomatis', text: 'Fitur yang otomatis memudahkan Anda dalam mengelola klinik Anda', icon: 'sym_r_autorenew' },
          { heading: 'Peningkatan Layanan', text: 'Dengan Medicare, Anda dapat meningkatkan kualitas layanan di klinik Anda', icon: 'sym_r_star' },
          { heading: 'Penghematan Waktu', text: 'Dengan Medicare, Anda dapat menghemat waktu dalam mengelola klinik Anda', icon: 'sym_r_schedule' },
          { heading: 'Peningkatan Kualitas', text: 'Dengan Medicare, Anda dapat meningkatkan kualitas layanan di klinik Anda', icon: 'sym_r_star' },
        ]
      }
    },
    computed: {
      spp() {
        return this.$q.screen.width > 1400 ? 4 : this.$q.screen.width > 1024 ? 3 : this.$q.screen.width > 768 ? 2 : 1
      }
    }
  }
</script>

<style scoped>
  #about > section {
    flex: 1;
  }
  
  .clamp-title {
    font-size: clamp(2rem, 5vw, 3rem);
  }

  .logo {
    width: 150px;
    height: 150px;
    margin: 0 auto;
  }

  #home {
    display: flex;
    justify-content: space-between;
    @apply max-md:tw-flex-col-reverse max-md:tw-gap-4 max-xl:tw-py-[2rem];
  }

  #home>section {
    flex: 1;
  }

  .hero-image {
    @apply max-md:!tw-h-[300px];
    height: 100%;
    max-height: 600px;
    object-fit: contain;
  }

  #home>section:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: end;
  }
</style>
