<template>
    <nav class="bg-white text-black flex justify-between text-lg shadow-lg p-3 ">
        <div>
            <img src="/logo/logo.svg" class="w-40" alt="">
        </div>
        <div class="border-r-2"></div>
        <div class="flex items-center gap-8 relative">
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/about">About</NuxtLink>
            <div class="relative group">
                <span class="cursor-pointer">Mobile ⌄</span>
                <div
                class="absolute left-0 mt-2 w-40 bg-white border border-gray-200 shadow-md rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50"
                >
                <NuxtLink to="/iphone" class="block px-4 py-2 hover:bg-gray-100">iPhone</NuxtLink>
                <NuxtLink to="/samsung" class="block px-4 py-2 hover:bg-gray-100">samsung</NuxtLink>
                </div>
            </div>
            <NuxtLink class="gap-8 " to="/cart">🛒 Cart({{ cart.length }})</NuxtLink>
        </div>
        <div class="border-l-2"></div>
        
        <div v-if="auth.isAuth" >
            <NuxtLink to="/profile" class="mr-8">Profile</NuxtLink>
            <button @click="logout" class="ml-4">Logout</button>
        </div>
        <NuxtLink v-else to="/login">Login</NuxtLink>
        
    </nav>

</template>

<script setup>
const cart = useCart();
const auth = useAuth();

function logout(){
    auth.value.isAuth = false;
    navigateTo('/login');
}
</script>