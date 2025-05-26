<script setup lang="ts">
import Navbar from './navbar.vue';
import Footer from './footer.vue';
import Sidebar from './sidebar.vue';

</script>

<template>
    <div >
        <Navbar />
        <slot></slot>
        <Footer />
    </div>
</template>