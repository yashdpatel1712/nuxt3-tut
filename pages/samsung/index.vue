<template>
    <div>
        <div>

            <h1 class="text-3xl font-bold flex justify-center my-8">
                All samsung
            </h1>
        </div>
        <div class="samsungs grid grid-cols-4 gap-6 mt-6">
            
            <NuxtLink
                v-for="samsung in samsungs"
                :key="samsung.name"
                :to="`/samsung/${samsung.name}`"
                class="shadow-lg text-center">
                <div class="iphoes-img flex justify-center">
                    <img :src="`/images/${ samsung.name.replaceAll('-','_') }.jpg`" alt="">
                </div>
                <p class="font-bold text-lg">{{samsung.name.replaceAll('-',' ')}}</p>
                <p class="font-bold text-lg">{{samsung.price}}</p>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
useHead({
    title: "Nuxt3 - samsung"
})

const samsungs = useSamsungs();


// for calling server/api/samsungs.ts
// const {data} = useFetch("/api/samsungs");
// console.log(data.value);
</script>

<style>
.samsungs >div{
    /* width: fit-content; */
    padding: 25px;
}
</style>