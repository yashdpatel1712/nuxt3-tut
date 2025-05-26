<template>
     <!-- <div class="min-h-screen flex items-center justify-center text-4xl font-bold"> -->
    <div class="grid grid-rows-2 grid-flow-col gap-4 mt-20">

      <!-- <div class="row-span-2 col-span-3  border flex items-center justify-end"><img src="/home/apple_watch.jpg" alt=""></div> -->
      <div class="row-span-2 col-span-3 flex items-center justify-end bg-gray-300">

        <div class="relative w-full max-w-4xl h-96 mx-auto overflow-hidden rounded-lg slider-button"
          @mouseenter="pauseAutoSlide"
          @mouseleave="resumeAutoSlide"
        >
          <!-- Slides -->
          <div class="relative w-full h-full">
            <div
              v-for="(image, index) in images"
              :key="index"
              class="absolute inset-0 transition-opacity duration-500 ease-in-out flex flex-col items-center justify-end p-6"
              :class="{ 'opacity-100': current === index, 'opacity-0': current !== index }"
            >
            <NuxtLink to="/iphone">
              <img :src="image.src" class="max-h-60 object-contain mb-4" alt="" />
              <p class="text-lg font-semibold text-center text-black px-4 py-2 rounded">{{ image.caption }}</p>
            </NuxtLink>
            </div>
          </div>

          <!-- Navigation Buttons -->
          <div class="">
             <!-- LEFT BUTTON -->
            <button
              @click="prev"
              class="absolute top-1/2 left-1 -translate-y-1/2 bg-blue-700 h-20 w-8 text-white text-4xl transition-all duration-500 ease-in-out"
              :class="showIcons
                ? 'opacity-100 scale-100 pointer-events-auto'
                : 'opacity-0 scale-75 pointer-events-none'"
            >
              <FontAwesomeIcon :icon="['fas', 'angle-left']" />
            </button>

            <!-- RIGHT BUTTON -->
            <button
              @click="next"
              class="absolute top-1/2 right-1 -translate-y-1/2 bg-blue-700 h-20 w-8 text-white text-4xl transition-all duration-500 ease-in-out"
              :class="showIcons
                ? 'opacity-100 scale-100 pointer-events-auto'
                : 'opacity-0 scale-75 pointer-events-none'"
            >
              <FontAwesomeIcon :icon="['fas', 'angle-right']" />
            </button>

          </div>
        </div>



      </div>

      

      <div class="col-span-1  flex flex-row justify-between bg-gray-300">
        <div class="ml-8 flex-col  flex justify-center items-center">
          <p class="text-xl font-bold">iphone 16 pro max</p>
          <p class="text-xl text-red-500 line-through">₹ 1,50,499</p>
          <p class="text-xl">₹ 1,30,900</p>
        </div>
        <img src="/public/home/iphone_16_pro_max.png" alt="">
      </div>
      <div class="col-span-1  flex flex-row justify-between bg-gray-900 text-white">
        <div class="ml-8 flex-col  flex justify-center items-start">
          <p class="text-xl font-bold">Weekly Sale!</p>
          <p class="mt-3 mb-6">Saving up to 50% off all online store<br> items this week.</p>
          <button class="rounded-full bg-white text-black px-8 py-2 hover:bg-blue-600 hover:text-white">Shop now!</button>
        </div>
      </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue' // ✅ ADD THIS

const images = [
  { src: '/home/apple_watch.png', caption: 'Apple Watch Series 9' },
  { src: '/home/cctv.png', caption: 'HD CCTV Camera' },
  { src: '/home/samsung-galaxy-s25-ultra.png', caption: 'samsung galaxy s25 ultra' }
]

const current = ref(0)
let intervalId = null 
const showIcons = ref(false)

function next() {
  current.value = (current.value + 1) % images.length
}

function prev() {
  current.value = (current.value - 1 + images.length) % images.length
}

function startAutoSlide() {
  intervalId = setInterval(next, 5000)
}

function pauseAutoSlide() {
  clearInterval(intervalId)
  showIcons.value = true
}

function resumeAutoSlide() {
  setTimeout(() => {
    showIcons.value = false
    startAutoSlide()
  }, 2000) // Delay hiding by 2 seconds
}
onMounted(() => {
  startAutoSlide()
})

onUnmounted(() => {
  clearInterval(intervalId)
})  
</script>