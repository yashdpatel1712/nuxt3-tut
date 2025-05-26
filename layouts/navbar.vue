<template>
    <nav class="bg-white text-black flex justify-between text-lg shadow-lg px-8 py-6">
        <div class="flex justify-between">
            <img src="/logo/logo.png" class="w-[200px] h-[50px] object-cover" alt="">
        </div>

        <div class="flex-1/2">
            <form class="max-w-md mx-auto">   
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-black border border-gray-300 rounded-lg bg-white-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search mobile, laptops..." required />
                    <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>

        </div>
                
        <div class="flex gap-5 items-center">
            <NuxtLink to="/cart" class="relative inline-block w-10 h-10">
                <div class="w-10 h-10 rounded-full bg-white text-Black hover:bg-blue-700 flex hover:text-white items-center justify-center border border-black">
                    <FontAwesomeIcon icon="fa-solid fa-heart" class=" " />
                </div>
                <div
                    class="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3 
                        bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex
                         items-center justify-center"
                >
                    4
                </div>
            </NuxtLink>
                <NuxtLink to="/cart" class="relative inline-block w-10 h-10">
                    <div class="w-10 h-10 rounded-full bg-white text-Black hover:bg-blue-700 flex hover:text-white items-center justify-center border border-black">
                        <FontAwesomeIcon icon="fa-solid fa-shopping-cart" class=" " />
                    </div>
                    <div
                        v-if="cart.length > 0"
                        class="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3 
                            bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex
                             items-center justify-center"
                    >
                        {{ itemsOfCart() }}
                    </div>
                    
                </NuxtLink>

        </div>
        <!-- <NuxtLink v-else to="/login">Login</NuxtLink> -->
        
    </nav>

    <hr>

    <nav class="bg-white text-black flex justify-between text-lg shadow-lg">
        <div class="p-4">
            <div class="relative group">
                <span class="cursor-pointer">all categories
                    <FontAwesomeIcon icon="fa-solid fa-bars" class="pl-2" />
                </span>
                <div
                class="absolute left-0 mt-2 w-40 bg-white border border-gray-200 shadow-md rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50"
                >
                <NuxtLink to="/iphone" class="block px-4 py-2 hover:bg-gray-100">Televisons</NuxtLink>
                <NuxtLink to="/samsung" class="block px-4 py-2 hover:bg-gray-100">Watches</NuxtLink>
                <NuxtLink to="/samsung" class="block px-4 py-2 hover:bg-gray-100">Mobiles</NuxtLink>
                <NuxtLink to="/samsung" class="block px-4 py-2 hover:bg-gray-100">Video Games</NuxtLink>
                <NuxtLink to="/samsung" class="block px-4 py-2 hover:bg-gray-100">CCTV</NuxtLink>
                </div>
            </div>
        </div>
        <div class="border-r-2"></div>

        <div class="flex items-center gap-8 relative p-4">
            <NuxtLink to="/" class="hover:text-blue-700">Home</NuxtLink>
            <NuxtLink to="/about" class="hover:text-blue-700">About</NuxtLink>
            <div class="relative group">
                <span class="cursor-pointer hover:text-blue-700">Mobile
                    <FontAwesomeIcon icon="fa-solid fa-angle-down"  />
                </span>
                <div
                class="absolute left-0 mt-2 w-40 bg-white border border-gray-200 shadow-md rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50"
                >
                    <NuxtLink to="/iphone" class="block px-4 py-2 hover:bg-gray-100">iPhone</NuxtLink>
                    <NuxtLink to="/samsung" class="block px-4 py-2 hover:bg-gray-100">samsung</NuxtLink>
                </div>
            </div>
            <NuxtLink to="/about" class="hover:text-blue-700">Contact us</NuxtLink>
        </div>
        <div class="border-l-2"></div>
        
        <div class="p-4">
            <div v-if="auth.isAuth" >
                <NuxtLink to="/profile" class="mr-8">Profile</NuxtLink>
                <button @click="logout" class="ml-4">Logout</button>
            </div>
            <NuxtLink v-else to="/login">Login</NuxtLink>
        </div>
        
    </nav>

</template>

<script setup>
const cart = useCart();
const auth = useAuth();

function logout(){
    auth.value.isAuth = false;
    navigateTo('/login');
}
function itemsOfCart() {
      let total = 0;
  cart.value.forEach(item => {
    total+= item.qty;
  });
    return total;
  

}
</script>