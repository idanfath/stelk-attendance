<template>
  <q-layout view="hHr LpR lff" class="main-layout">
    <comp-header :title="title" @id-pressed="scrollTo" :links="links">
      <button @click="sidebar = !sidebar">
        <q-icon name="sym_r_menu" color="dark" size="32px" />
      </button>
    </comp-header>
    <comp-sidebar v-model="sidebar" :title="title" :links="links" @id-pressed="scrollTo"></comp-sidebar>
    <q-page-container style="padding: 0;">
      <router-view @id-pressed="scrollTo" :contactinfo="contactinfo"></router-view>
    </q-page-container>
    <comp-footer :contactinfo="contactinfo"/>
  </q-layout>
</template>
<script>
  export default {
    data() {
      return {
        sidebar: false,
        title: 'MEDICARE',
        links: [
          { name: 'Beranda', id: 'home' },
          { name: 'Keunggulan', id: 'keunggulan' },
          { name: 'Tentang', id: 'about' },
          { name: 'Kontak', id: 'kontak' },
          { name: 'FAQ', id: 'faq' },
        ],
        
        contactinfo: [
            { heading: 'Alamat', text: 'Jl. Jend. Sudirman No. 1, Jakarta' },
            { heading: 'Telepon', text: '+62 812-3456-7890' },
            { heading: 'Email', text: 'testmail@gmail.com' },
          ]
      }
    },
    methods: {
      scrollTo(id, header = true) {
        if (!header) this.sidebar = false
        // entah kenapa perlu delay
        setTimeout(() => {
          document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
        }, 200)
      }
    }
  }
</script>
