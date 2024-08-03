<template>
  <main class="responsive-px" id="home">
    <section>
      <div class="clamp-title">
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
        <button class="button-primary" @click="() => {this.$emit('id-pressed', 'contact')}">Hubungi Kami</button>
      </div>
    </section>

    <section>
      <img src="../assets/home/hero-doctor.png" class="hero-image" alt="hero image">
    </section>
  </main>

  <main class="responsive-px" id="keunggulan">
    <section>
      <div class="tw-text-6xl tw-font-bold">
        Mengapa pilih <span class="hover-pulse-text">Medicare</span>?
      </div>
      <div class="tw-text-xl max-md:tw-text-lg subtext tw-mt-4">
        <div class="max-md:tw-hidden">
          {{about.subtext}}
        </div>
        <div class="md:tw-hidden">
          {{about.subtext_mobile}}
        </div>
      </div>
    </section>
    <section class="tw-select-none">
      <swiper :slides-per-view="spp" :space-between="50" :loop="true">
        <swiper-slide v-for="content in swiperContent" :key="content.heading">
          <comp-card :heading="content.heading" :text="content.text" :icon="content.icon" />
        </swiper-slide>
      </swiper>
    </section>
  </main>

  <main class="responsive-px tw-py-[5rem] flex max-lg:tw-flex-col tw-gap-5 lg:tw-gap-y-5" id="about">
    <section class="lg:tw-pr-[1rem] lg:tw-flex-1">
      <img src="../assets/about/about.jpg" class="tw-w-full image" alt="About image">
    </section>

    <section class="lg:tw-flex-1 flex tw-flex-col tw-gap-5">
      <div class="clamp-title tw-font-bold max-lg:tw-text-center max-lg:tw-my-1">
        Tentang Kami
      </div>
      <div class="tw-text-xl">
        <div class="tw-text-2xl tw-font-semibold">Service Medicare</div>
        <div class="tw-text-lg tw-mt-2 ">
          <div class="max-md:tw-hidden">{{about.subtext}}</div>
          <div class="md:tw-hidden">{{about.subtext_mobile}}</div>
        </div>
      </div>
      <div>
        <div class="tw-text-2xl tw-font-semibold">Keunggulan</div>
        <div class="tw-flex max-lg:tw-flex-wrap tw-gap-2 lg:tw-flex-col tw-mt-2">
          <div v-for="keunggulan in about.keunggulan" :key="keunggulan.heading"
            class="tw-flex tw-items-center tw-gap-2">
            <q-icon :name="keunggulan.icon" size="24px" />
            <div>{{keunggulan.heading}}</div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <main class="responsive-px tw-py-[5rem] tw-flex tw-flex-row-reverse max-md:tw-flex-col tw-bg-blue-50" id="contact">
    <section class="md:tw-pl-[2rem]">
        <div class="tw-overflow-hidden tw-resize-none tw-max-w-full tw-w-full tw-h-full ">
          <div id="my-map-canvas" class="tw-h-full tw-w-full tw-max-w-full" ><iframe class="tw-h-full tw-w-full tw-border-0 tw-min-h-[400px]" frameborder="0"
              src="https://www.google.com/maps/embed/v1/place?q=celebes+digital+solusi&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
          </div>
        </div>
    </section>

    <section class="max-md:tw-mt-[2rem]">
            <div class="clamp-title tw-font-bold ">
              Hubungi Kami
            </div>
            <div class="tw-text-xl tw-mt-8">
              <div class="tw-text-lg">
                {{contact.subtext}}
              </div>
              <div class="tw-mt-4">
                <div v-for="info in contactinfo" :key="info.heading" class="tw-flex tw-gap-4">
                  <div class="tw-text-lg tw-font-semibold">{{info.heading}}</div>
                  <div class="tw-text-lg tw-underline">{{info.text}}</div>
                </div>
              </div>
            </div>
    </section>
  </main>

  <!-- using div instead of page, for some reason page broke the code -->
  <main class="responsive-px tw-py-[5rem]" id="faq">
    <div class="clamp-title tw-font-bold">
      Pertanyaan yang sering diajukan
    </div>
    <div class="tw-text-xl tw-mt-8">
      <comp-accordion :items="faq" />
    </div>
  </main>

</template>

<style>
</style>

<script>
  export default {
    props: {
      contactinfo: Array
    },
    data() {
      return {
        home: {
          subtext: 'eKlinik adalah solusi inovatif yang dirancang untuk mengoptimalkan klinik Anda dengan fitur-fitur lengkap dan otomatis. Dengan menggunakan eKlinik, Anda dapat mengalami peningkatan efisiensi, penghematan waktu, dan peningkatan kualitas layanan di klinik Anda.',
          subtext_mobile: 'eKlinik adalah solusi inovatif yang dirancang untuk mengoptimalkan klinik Anda dengan fitur-fitur lengkap dan otomatis.'
        },
        about: {
          subtext: "Service Medicare adalah solusi inovatif yang dirancang untuk mengoptimalkan klinik Anda dengan fitur-fitur lengkap dan otomatis. Dengan menggunakan Service Medicare, Anda dapat mengalami peningkatan efisiensi, penghematan waktu, dan peningkatan kualitas layanan di klinik Anda.",
          subtext_mobile: "Service Medicare adalah solusi inovatif yang dirancang untuk mengoptimalkan klinik Anda dengan fitur-fitur lengkap dan otomatis.",
          keunggulan: [
            { heading: 'Fitur Lengkap', icon: 'sym_r_check' },
            { heading: 'Pengerjaan Tepat Waktu', icon: 'sym_r_speed' },
            { heading: 'Maintenance Berkala', icon: 'sym_r_autorenew' },
            { heading: 'Peningkatan Kualitas', icon: 'sym_r_star' },
          ]
        },
        swiperContent: [
          { heading: 'Efisiensi', text: 'Dengan Medicare, Anda dapat mengalami peningkatan efisiensi di klinik Anda', icon: 'sym_r_speed' },
          { heading: 'Fitur Lengkap', text: 'Fitur lengkap yang memudahkan Anda dalam mengelola klinik Anda', icon: 'sym_r_check' },
          { heading: 'Otomatis', text: 'Fitur yang otomatis memudahkan Anda dalam mengelola klinik Anda', icon: 'sym_r_autorenew' },
          { heading: 'Peningkatan Layanan', text: 'Dengan Medicare, Anda dapat meningkatkan kualitas layanan di klinik Anda', icon: 'sym_r_star' },
          { heading: 'Penghematan Waktu', text: 'Dengan Medicare, Anda dapat menghemat waktu dalam mengelola klinik Anda', icon: 'sym_r_schedule' },
          { heading: 'Peningkatan Kualitas', text: 'Dengan Medicare, Anda dapat meningkatkan kualitas layanan di klinik Anda', icon: 'sym_r_star' },
        ],
        contact: {
          subtext: 'Untuk informasi lebih lanjut, Anda dapat menghubungi kami melalui informasi berikut.',
        },
        faq: [
          { heading: 'Apa itu Medicare?', text: 'Medicare adalah solusi inovatif yang dirancang untuk mengoptimalkan klinik Anda dengan fitur-fitur lengkap dan otomatis. Dengan menggunakan Medicare, Anda dapat mengalami peningkatan efisiensi, penghematan waktu, dan peningkatan kualitas layanan di klinik Anda.' },
          { heading: 'Apa keunggulan Medicare?', text: 'Keunggulan Medicare adalah fitur lengkap, pengerjaan tepat waktu, maintenance berkala, dan peningkatan kualitas layanan.' },
          { heading: 'Bagaimana cara menggunakan Medicare?', text: 'Untuk menggunakan Medicare, Anda dapat menghubungi kami melalui tombol Hubungi Kami di halaman utama.' },
          { heading: 'Apakah Medicare gratis?', text: 'Medicare tidak gratis, namun kami memberikan penawaran menarik untuk Anda. Untuk informasi lebih lanjut, Anda dapat menghubungi kami melalui tombol Hubungi Kami di halaman utama.' },
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
  #contact > section {
    @apply tw-flex-1;
  }
  
  #my-map-canvas img.text-marker {
    max-width: none !important;
    background: none !important;
  }

  #keunggulan {
    @apply tw-py-[5rem] tw-bg-blue-100 tw-flex tw-flex-col tw-gap-[2rem]
  }
  
  .clamp-title {
    @apply tw-text-6xl tw-font-bold;
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
    @apply max-md:tw-flex-col-reverse max-md:tw-gap-4 max-lg:tw-pt-[2rem] max-lg:tw-pb-[5rem];
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

  #home>section:nth-child(1) {
    @apply tw-flex tw-flex-col tw-gap-7 max-md:tw-text-center tw-justify-center;
  }
</style>
