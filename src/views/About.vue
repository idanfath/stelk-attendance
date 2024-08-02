<template>
    <div>
        <h1>about</h1>
        <button @click="() => {this.inputs.push({ id: this.inputs.length + 1, name: '', satuan: null, value: null})}">addNewInput</button>
        <div>
            <div v-for="input in inputs" :key="input.id">
                {{ input.id }}
                <select v-model="input.name">
                    <option v-for="(value, key) in item" :value="key">{{ key }}</option>
                </select>
                <input :value="item[input.name]" readonly placeholder="satuan">
                <input v-model="input.value" placeholder="value">
                <button @click="addToCart(input.name, input.value)">add</button>
            </div>
        </div>
        <div>
            cart:
            <span v-if="cart.length < 1">empty</span>
            <div v-else v-for="item in cart" :key="item.id">
                {{ item.name }}: {{ item.value }} {{ item.satuan }}
                
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'About',
        data() {
            return {
                inputs: [
                ],
                item: {
                    beras: 'gram',
                    gula: 'gram',
                    minyak: 'ml',
                    telur: 'buah',
                },
                cart: [],
            }
        },
        methods: {
            addToCart(name, value){
                const item = { name, value, satuan: this.item[name] }
                this.cart.push(item)
            }
        },
    }
</script>

<style scoped>
</style>
