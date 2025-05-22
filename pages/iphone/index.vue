<template>
    <div>
        <div>

            <h1 class="text-3xl font-bold flex justify-center my-8">
                All Iphone
            </h1>
        </div>
        <div class="iphones grid grid-cols-4 gap-6 mt-6">
            
            <NuxtLink
                v-for="iphone in iphones"
                :key="iphone.name"
                :to="`/iphone/${iphone.name}`"
                class="shadow-lg text-center">
                <div class="iphoes-img flex justify-center">
                    <img :src="`/images/${ iphone.name.replaceAll('-','_') }.jpg`" alt="">
                </div>
                <p class="font-bold text-lg">{{iphone.name.replaceAll('-',' ')}}</p>
                <p class="font-bold text-lg">{{iphone.price}}</p>
            </NuxtLink>
            <!-- <NuxtLink to="/iphone/iphone-16-pro" class="shadow-lg text-center">
                <p class="font-bold text-lg">iphone16 pro</p>
                <div class="iphoes-img flex justify-center">
                    <img src="/images/iphone16_pro.jpg" alt="">
                </div>
            </NuxtLink>
            <NuxtLink to="/iphone/iphone-16" class="shadow-lg text-center">
                <p class="font-bold text-lg">iphone16</p>
                <div class="iphoes-img flex justify-center">
                    <img src="/images/iphone16.jpg" alt="">
                </div>
            </NuxtLink>
            <NuxtLink to="/iphone/iphone-16e" class="shadow-lg text-center">
                <p class="font-bold text-lg">iphone16e</p>
                <div class="iphoes-img flex justify-center">
                    <img src="/images/iphone16e.jpg" alt="">
                </div>
            </NuxtLink>
            <NuxtLink to="/iphone/iphone-15" class="shadow-lg text-center">
                <p class="font-bold text-lg">iphone15</p>
                <div class="iphoes-img flex justify-center">
                    <img src="/images/iphone15.jpg" alt="">
                </div>
            </NuxtLink>
            <NuxtLink to="/iphone/iphone-15-plus" class="shadow-lg text-center">
                <p class="font-bold text-lg">iphone15 plus</p>
                <div class="iphoes-img flex justify-center">
                    <img src="/images/iphone15_plus.jpg" alt="">
                </div>
            </NuxtLink>
            <NuxtLink to="/iphone/iphone-14" class="shadow-lg text-center">
                <p class="font-bold text-lg">iphone14</p>
                <div class="iphoes-img flex justify-center">
                    <img src="/images/iphone14.jpg" alt="">
                </div>
            </NuxtLink>
            <NuxtLink to="/iphone/iphone-13" class="shadow-lg text-center">
                <p class="font-bold text-lg">iphone13</p>
                <div class="iphoes-img flex justify-center">
                    <img src="/images/iphone13.jpg" alt="">
                </div>
            </NuxtLink> -->
        </div>
    </div>
</template>

<script setup>
useHead({
    title: "Nuxt3 - iphone"
})

const iphones = useIphones();


// for calling server/api/iphones.ts
// const {data} = useFetch("/api/iphones");
// console.log(data.value);
</script>

<style>
.iphones >div{
    /* width: fit-content; */
    padding: 25px;
}
</style>