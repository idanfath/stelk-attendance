<template>
    <!-- accordion -->
    <q-expansion-item
        v-for="item in items"
        :key="item.heading"
        :label="item.heading"
        :caption="item.caption"
        header-class="tw-font-semibold"
        >
        <q-card class="tw-my-2">
            <q-card-section class="tw-bg-blue-50">
                <div class="tw-text-lg ">{{item.text}}</div>
            </q-card-section>
        </q-card>
    </q-expansion-item>
</template>

<script>
    export default {
        name: 'comp-accordion',
        props: {
            items: Array
        },
    }
</script>

<style scoped>
</style>
