<template>
    <q-card v-if="type === 'default'" class="comp-card">
        <q-card-section class="tw-flex tw-flex-col tw-gap-1">
            <div class="tw-text-2xl tw-mb-2 tw-font-bold tw-flex tw-items-center tw-justify-between">
                <div>{{heading}}</div>
                <q-icon :name="icon" class="tw-ml-1"/>
            </div>
            <q-separator spaced color="dark"/>
            <div class="tw-text-lg subtext">{{text}}</div>
        </q-card-section>
    </q-card>
</template>

<script>
    export default {
        name: 'comp-card',
        props: {
            type: {
                type: String,
                default: 'default'
            },
            heading: String,
            text: String,
            icon: {
                type: String,
                default: 'sym_r_check'
            }
        },
    }
</script>

<style scoped>
    .comp-card {
        max-width: 400px;
        padding: 15px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
</style>
