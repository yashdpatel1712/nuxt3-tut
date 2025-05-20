<template>
    <div>
        <h3 class="text-3xl font-bold underline">This is iphone {{ name }}</h3>
    </div>
</template>

<script setup>
const route = useRoute();

const name = computed(() => {
    return route.params.name.replaceAll('-',' ')

})
</script>