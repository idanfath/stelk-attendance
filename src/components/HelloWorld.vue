<template>
  <div>
    <button @click="increase(1)">From Components</button>
    <h1>{{ count }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        count: 0
      }
    },
    methods: {
      increase(x){
        this.count += x
      }
    },
  }
</script>

<style scoped>
</style>
