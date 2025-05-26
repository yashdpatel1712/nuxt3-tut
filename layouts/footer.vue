<template>
    <div class="bg-slate-950 mt-28 text-white p-8">
        <div class="flex flex-row justify-between">

            <div>
                <img src="/public/logo/logo3.png" class="w-50" alt="">
            </div>
            <div class="flex flex-1 flex-col justify-center items-center">
                <span class="text-2xl font-bold">Subscribe to our Newsletter</span>
                <span>Get all the latest information, Sales and Offers.</span>
            </div>

            <div class="flex flex-1 justify-center items-center">
                <div class="flex-1/2">
                    <form class="max-w-md mx-auto">   
                        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div class="relative  ">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg class="w-4 h-4  text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-black border bg-white rounded-lg bg-white-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700  dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter email address..." required />
                            <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                        </div>
                    </form>
    
                </div>
            </div>
        </div>
        <hr class="pb-8">
        <div class="card flex flex-row justify-between">
            <div class="px-8 pt-8">
                <ul class="list-none p-0 footer-section">
                    <li class="font-bold mb-8 text-2xl hover-underline">Get In Touch With Us</li>
                    <li class="pb-2">phone: (+91)12345-67890</li>
                    <li class="pb-2">Monday-Friday:<br>
                        9.00 am - 8.00 pm</li>
                    <li class="pb-2">Saturday<br>
                        10.00 am - 6.00 pm</li>
                    <li class="pb-2 hover:text-blue-500">support@novagadgets.com</li>
                </ul>
            </div>

            <div class="px-8 pt-8">
                <ul class="list-none p-0 flex flex-col footer-section">
                    <li class="font-bold mb-8 text-2xl hover-underline">Information</li>
                    <NuxtLink to="/iphone" class="footer-info pb-3">About us</NuxtLink>
                    <NuxtLink to="/iphone" class="footer-info pb-3">contact us</NuxtLink>
                    <NuxtLink to="/iphone" class="footer-info pb-3">Downloads</NuxtLink>
                    <NuxtLink to="/iphone" class="footer-info pb-3">Sitemap</NuxtLink>
                    <NuxtLink to="/iphone" class="footer-info pb-3 hover:text-blue-500">FAQs page</NuxtLink>
                </ul>
            </div>

            <div class="px-8 pt-8">
                <ul class="list-none p-0 flex footer-section flex-col">
                    <li class="font-bold mb-8 text-2xl hover-underline">Shop Departments</li>
                    <NuxtLink to="/iphone" class="footer-info pb-3">Computers & Accessories</NuxtLink>
                    <NuxtLink to="/iphone" class="footer-info pb-3">Smartphones & Tablets</NuxtLink>
                    <NuxtLink to="/iphone" class="footer-info pb-3">TV, Video & Audio</NuxtLink>
                    <NuxtLink to="/iphone" class="footer-info pb-3">Cameras, Photo & Video</NuxtLink>
                    <NuxtLink to="/iphone" class="footer-info pb-3 hover:text-blue-500">Headphones</NuxtLink>
                </ul>
            </div>
        </div>

        <hr class="my-8">
        <div class="flex flex-row justify-around">
            <div>
                <span>Designed and Developed NovaGadgets</span>
            </div>
            <div class="flex flex-row items-center gap-5">
                <span>Follow Us On:</span>
                <div class="rounded-full hover:bg-blue-500 w-5 items-center text-center">
                    <FontAwesomeIcon :icon="['fab', 'facebook-f']" class=" " />
                </div>
                <div class="rounded-full hover:bg-blue-500 w-5 items-center text-center">
                    <FontAwesomeIcon :icon="['fab', 'github']" class=" " />
                </div>
                <div class="rounded-full hover:bg-blue-500 w-5 items-center text-center">
                <FontAwesomeIcon :icon="['fab', 'x-twitter']" class=" " />
                </div>
                <div class="rounded-full hover:bg-blue-500 w-5 items-center text-center">
                <FontAwesomeIcon :icon="['fab', 'instagram']" class=" " />
                </div>
                <div class="rounded-full hover:bg-blue-500 w-5 items-center text-center">
                <FontAwesomeIcon :icon="['fab', 'google']" class=" " />
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.hover-underline {
  position: relative;
  display: inline-block;
}

.hover-underline::after {
  content: '';
  position: absolute;
  width: 25%;
  height: 3px;
  background: #1447e6;
  bottom: -7px;
  left: 0;
  transition: width 0.4s ease-in-out;
}

.footer-info{
  font-size: 15px;
  /* padding-bottom: 2px; */
  transition: color 0.3s ease, margin-left 0.3s ease;
}
.footer-info:hover{
    color: #1447e6;
    margin-left: 5px;
}

.footer-section:hover .hover-underline::after {
  width: 100%;
}
</style>