<template>
  <q-layout view="hHr LpR lFf" class="main-layout">
    <comp-header :title="title" @id-pressed="scrollTo" :links="links">
      <button @click="sidebar = !sidebar">
        <q-icon name="sym_r_menu" color="dark" size="32px" />
      </button>
    </comp-header>
    <comp-sidebar v-model="sidebar" :title="title" :links="links" @id-pressed="scrollTo"></comp-sidebar>
    <q-page-container style="padding: 0;">
      <router-view></router-view>
    </q-page-container>
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
          { name: 'Kontak', id: 'kontak' }
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
