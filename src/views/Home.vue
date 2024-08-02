<template>
  <main class="page responsive-px tw-py-[20px]" id="home">

    <section class="flex column tw-gap-4 max-md:tw-text-center">
      <img src="../assets/logo.png" class="logo md:tw-hidden" alt="">
      <div class="tw-text-4xl tw-font-bold tw-mb-[-0.5rem]">
        <span class="max-md:tw-hidden">{{home.mdtext}}</span>{{home.text}}
      </div>
      <div class="tw-text-xl">
        {{home.subtext}}
      </div>
      <div>
          <button class="button-primary tw-px-8">Sign In <q-icon name="fa-solid fa-arrow-right-to-bracket" class="tw-ml-2"/></button>
      </div>
    </section>
    
    <section>

    </section>
  </main>

  <div class="page tw-bg-red-200" id="home">
    aa
  </div>
</template>

<script>
  export default {
    data() {
      return {
        home: {
          text: 'Stelk E-Absensi',
          mdtext: 'Welcome to',
          subtext: 'Pantas, Mudah, dan Cepat'
        }
      }
    }
  }
</script>

<style scoped>
  .logo {
    width: 150px;
    height: 150px;
    margin: 0 auto;
  }
</style>
