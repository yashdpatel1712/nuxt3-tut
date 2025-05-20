<template>
  <div>
    <button @click="welcomedata">toggle</button>
    <counter :is="counter" />
    <!-- <HomeWelcome /> -->
    <!-- <NuxtRouteAnnouncer /> -->
    <!-- <NuxtWelcome /> -->
  </div>
</template>

<script setup>
  const counter = shallowRef(resolveComponent("counter"));

  function welcomedata() {
    counter.value = resolveComponent("HomeWelcome");
  }

</script>