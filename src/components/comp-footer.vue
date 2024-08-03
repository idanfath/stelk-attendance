<template>
    <footer
        class="max-md:tw-hidden tw-bg-blue-100 text-dark tw-flex tw-justify-around tw-gap-5 tw-py-[3rem] tw-px-[5rem] tw-text-sm tw-font-medium">
        <div>
            <img src="../assets/testicon.png" class="logo tw-size-[100px]" alt="logo" />
        </div>
        <div class="tw-flex tw-flex-col tw-gap-2">
            <div class="tw-text-lg tw-font-bold">Kontak</div>
            <p v-for="info in contactinfo" :key="info.heading">{{info.text}}</p>
        </div>
        <div class="tw-flex tw-flex-col tw-gap-2">
            <div class="tw-text-lg tw-font-bold">Tautan</div>
            <p>Beranda</p>
            <p>Tentang Kami</p>
            <p>Hubungi Kami</p>
        </div>
        <div class="tw-flex tw-flex-col tw-gap-2">
            <div class="tw-text-lg tw-font-bold">Sosial Media</div>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
        </div>
    </footer>
    <footer class="md:tw-hidden tw-bg-blue-100 text-dark tw-py-[2rem] tw-px-[2rem] tw-text-sm tw-font-medium">
        <div class="tw-flex tw-mb-[1rem]">
            <router-link to="/" class="tw-flex tw-items-center p tw-text-2xl tw-font-bold">
                <img src="../assets/testicon.png" alt="logo " class="logo tw-size-[50px]">
                MEDI<span>CARE</span>
            </router-link>
        </div>
        <div>
            <div class="tw-font-bold tw-text-lg">
                Kontak
            </div>
            <div class=" tw-rounded-lg tw-my-2">
                <div class="tw-flex tw-flex-col tw-font-semibold tw-gap-2">
                    <p v-for="info in contactinfo" :key="info.heading">{{info.text}}</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'comp-footer',
        props: {
            contactinfo: Array
            // heading, text
        }
    }
</script>

<style scoped>
</style>
