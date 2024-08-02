<template>
  <div class="container">
      <div>
        money: {{money}}
      </div>
      <div>
          <div v-for="item in items" :key="item.id">
            {{ item.name }}: {{ item.price }}
            <button @click="addToCart(item.id)" :disabled="money < item.price">add</button>
          </div>
      </div>
      <div>
        cart:
        <span v-if="cart.length < 1">empty</span>
        <div v-else v-for="item in cart" :key="item.id">
          {{ item.name }}: {{ item.price }}
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'About',
    data() {
      return {
        money: 1000,
        cart: [],
        items: [
          { id: 1, name: 'apple', price: 100 },
          { id: 2, name: 'banana', price: 200 },
          { id: 3, name: 'cherry', price: 300 },
        ]
      }
    },
    methods: {
      addToCart(id){
        const item = this.items.find(item => item.id === id)
        this.cart.push(item)
        this.money -= item.price
      }
    },
  }
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: row;
  }
  .container > * {
    min-width: 200px
  }
  .container > :nth-child(1) {
    text-align: start;
  }
  .container > :nth-child(3) {
    text-align: end;
  }
</style>
