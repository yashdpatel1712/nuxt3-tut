<template>
  <div class="min-h-screen flex items-center justify-center text-4xl font-bold">
    <!-- <button @click="welcomedata">toggle</button> -->
    <!-- <counter :is="counter" /> -->
    <!-- <HomeWelcome /> -->
    <!-- <NuxtRouteAnnouncer /> -->
    <!-- <NuxtWelcome /> -->
     <p>welcome to home page</p>
  </div>
</template>

<script setup>
  const counter = shallowRef(resolveComponent("counter"));

  function welcomedata() {
    counter.value = resolveComponent("HomeWelcome");
  }

</script>