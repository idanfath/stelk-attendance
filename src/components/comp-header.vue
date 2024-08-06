<template>
    <q-header class="header responsive-px text-dark">
        <div class="title tw-font-bold sanimated">
            <router-link to="/" class="tw-flex tw-items-center p">
                <img src="../assets/headericon.png" alt="logo" class="logo">
                MEDI<span>CARE</span>
            </router-link>
        </div>

        <div class="tw-flex tw-justify-between tw-items-center tw-gap-[1rem] ">
            <div class=" linkparent panimated">
                <div @click="() => {this.$emit('id-pressed', link.id)}" v-for="link in links" :key="link.id"
                    class="link max-lg:tw-hidden hover:tw-text-[var(--primary-text)] tw-cursor-pointer hover:tw-underline tw-underline-offset-4">
                    {{ link.name }}
                </div>
            </div>
            <div class="lg:tw-hidden">
                <slot></slot>
            </div>
            <button class="max-sm:tw-hidden button-primary tw-ml-2" @click="() => {this.$emit('id-pressed', 'contact')}">Hubungi Kami</button>
        </div>
    </q-header>
</template>

<script>
    export default {
        name: 'comp-header',

        props: {
            title: String,
            links: Array
        },
        methods: {
        }
    }
</script>


<style scoped>
    
    .linkparent {
        display: flex;
        justify-content: center;
        gap: 10px;
    }

    .title {
        font-size: clamp(1.5rem, 3vw, 2.4rem);
    }
    .title:hover span {
        @apply tw-animate-pulse tw-text-[var(--primary-text)];
    }

    .link {
        font-weight: 500;
        font-size: 1rem;
    }

    .header {
        @apply tw-flex tw-justify-between tw-items-center tw-select-none tw-py-[20px];
        text-align: center;
        font-size: 12px;
        position: sticky;
        top: 0;
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
        z-index: 50;

        /* glass */
        /* backdrop-filter: blur(15px); */
        /* background-color: rgba(255, 255, 255, 0.5); */

        background-color: white;
    }

    .dropdown {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        padding: 10px 20px;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;
        text-align: start;
        color: #303030;
        flex-direction: column;
        gap: 8px;

    }
</style>
