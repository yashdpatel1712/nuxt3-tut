<template>
  <div class="text-3xl font-bold flex items-center justify-center">
    <p>in profile page</p>
  </div>
</template>

<script setup>
definePageMeta({
    // layout: 'sidebar',
    middleware: ["auth"],
});
</script>