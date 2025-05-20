<template>

    <button @click="increment">increment</button>
    count: {{ count }}
    <button @click="decrement">decrement</button>
</template>

<script setup>
const count = ref(0);
function increment(){
    count.value ++;
}
function decrement(){
    count.value --;
}
</script>