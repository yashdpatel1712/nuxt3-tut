<template>
  <div class="flex justify-between gap-10 mt-4 rounded-full bg-gray-400 text-white px-6 py-2 hover:bg-gray-600">
    <button @click="increment">+</button>
    {{ count }}
    <button @click="decrement">-</button>
  </div>
</template>

<script setup>
const props = defineProps({
  count: {
    type: Number,
    default: 1
  }
});

const emit = defineEmits(['update:count']);
const internalCount = ref(props.count);

function increment() {
    if (internalCount.value < 99) {
        internalCount.value++;
        emit('update:count', internalCount.value);
    }
}

function decrement() {
    if (internalCount.value > 1) {
        internalCount.value--;
        emit('update:count', internalCount.value);
  }
}
</script>
