<template>
    <q-drawer>
        <q-img src="../assets/sidebar/main.webp" alt="logo" class="tw-h-[8rem]"/>
        <div class="tw-my-4">
            <div>
                <div class="title">
                    {{title}}
                </div>
            </div>
        </div>
        <q-separator horizontal inset></q-separator>
        <q-list class="sanimated">
            <q-item v-for="link in links" clickable class="sidebar-item"
                @click="() => {this.$emit('id-pressed', link.id, false)}">
                <q-item-section>
                    <div class=" tw-flex tw-justify-between tw-items-center">
                        <q-item-label>{{link.name}}</q-item-label>
                        <q-icon class="icon" name="sym_r_chevron_right" size="24px" color="dark" />
                    </div>
                </q-item-section>
            </q-item>
        </q-list>
    </q-drawer>
</template>

<script>
    export default {
        name: 'comp-sidebar',
        props: {
            title: String,
            links: Array
        },
    }
</script>


<style scoped>
    .sidebar-item:hover .icon {
        transform: translateX(2px);
    }

    .sidebar-item {
        padding: 0 30px;
    }

    .title {
        font-size: 1.5rem;
        padding: 10px;
        text-align: center;
        font-weight: 700;
    }
</style>
