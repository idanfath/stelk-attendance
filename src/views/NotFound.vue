<template>
  <q-page class="tw-flex tw-justify-center tw-items-center tw-select-none ">
    <div class="tw-text-center">
      <div class="tw-font-bold tw-text-8xl tw-text-gray-200 max-md:tw-text-6xl">404 :(</div>
      <div class="tw-font-semibold tw-text-6xl tw-text-gray-200 max-md:tw-text-2xl">Halaman tidak ditemukan</div>
      <div class="tw-text-3xl tw-text-gray-200 max-md:tw-text-lg">Halaman "{{ $route.fullPath }}" tidak ditemukan</div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>

<style scoped>
</style>
