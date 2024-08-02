<template>
  <q-layout view="hHr LpR lFf">
    <comp-header :title="title" @id-pressed="scrollTo" :links="links">
      <button @click="sidebar = !sidebar">
        <q-icon name="sym_r_menu" color="dark" size="32px" />
      </button>
    </comp-header>
    <comp-sidebar v-model="sidebar" :title="title" :links="links" @id-pressed="scrollTo"></comp-sidebar>
    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>
<script>
  export default {
    data() {
      return {
        sidebar: false,
        title: 'ATTENDANCE',
        links: [
          { name: 'Home', id: 'home' },
          { name: 'About', id: 'about' },
          { name: 'Services', id: 'services' },
          { name: 'Contact', id: 'contact' }
        ]
      }
    },
    methods: {
      scrollTo(id, header = true) {
        if (!header) this.sidebar = false
        // entah kenapa perlu delay
        setTimeout(() => {
          document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
        }, 1)
      }
    }
  }
</script>
