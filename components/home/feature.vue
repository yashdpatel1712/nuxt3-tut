<template>

    <div class="flex flex-col mt-40">
      <div class="flex flex-col items-center">
        <p class="hover-underline text-5xl font-bold">All Features</p>
      </div>

      <div class="feature-data mt-8 items-center text-center text-gray-400">
        <p >There are many variations of passages of Lorem Ipsum available, but the majority <br>
           have suffered alteration in some form.</p>
      </div>

      <div class="mt-20">
        <div class="flex justify-between gap-6 mb-8">
          <div class="card-hover-group border border-gray-300 p-6 w-1/3 text-center flex flex-row justify-between bg-white shadow rounded ">
            <div class="flex flex-col  text-start">
              <p class="font-bold text-xl my-5">HeadPhones</p>
              <NuxtLink to="/iphone" class="feature-product z-10">Gaming Headsets</NuxtLink>
              <NuxtLink to="/iphone" class="feature-product z-10">ANC Headsets</NuxtLink>
              <NuxtLink to="/iphone" class="feature-product z-10">Wireless Headsets</NuxtLink>
              <NuxtLink to="/iphone" class="feature-product z-10">Wire Headsets</NuxtLink>
            </div>
            <div class="flex justify-end group-hover:opacity-0">
              <img src="/public/home/fetured-item-1.png" class="card-hover-image" alt="">
            </div>
          </div>

          <div class="card-hover-group border border-gray-300 p-6 w-1/3 text-center flex flex-row justify-between bg-white shadow rounded ">
            <div class="flex flex-col text-start">
              <p class="font-bold text-xl my-5">PCs</p>
              <NuxtLink to="/iphone" class="feature-product z-10">Gaming PC</NuxtLink>
              <NuxtLink to="/iphone" class="feature-product z-10">Workstations</NuxtLink>
              <NuxtLink to="/iphone" class="feature-product z-10">Micro Desktops</NuxtLink>
              <NuxtLink to="/iphone" class="feature-product z-10">All-in-One PCs</NuxtLink>
            </div>
            <div class="flex justify-end">
              <img src="/public/home/fetured-item-2.png" class="card-hover-image" alt="">
            </div>
          </div>

          <div class="card-hover-group border border-gray-300 p-6 w-1/3 text-center flex flex-row justify-between bg-white shadow rounded ">
            <div class="flex flex-col text-start">
              <p class="font-bold text-xl my-5">CCTV Camera</p>
              <NuxtLink to="/iphone" class="feature-product z-10">Dome CCTV</NuxtLink>
              <NuxtLink to="/iphone" class="feature-product z-10">Bullet CCTV</NuxtLink>
              <NuxtLink to="/iphone" class="feature-product z-10">C-Mount CCTV</NuxtLink>
              <NuxtLink to="/iphone" class="feature-product z-10">Infrared CCTV</NuxtLink>
            </div>
            <div class="flex justify-end">
              <img src="/public/home/fetured-item-3.png" class="card-hover-image" alt="">
            </div>
          </div>
        </div>

        <div class="flex justify-between gap-6">
          <div class="card-hover-group border border-gray-300 p-6 w-1/3 text-center flex flex-row justify-between bg-white shadow rounded ">
            <div class="flex flex-col  text-start">
              <p class="font-bold text-xl my-5">Dslr</p>
              <NuxtLink to="/iphone" class="feature-product z-10">Gaming Headsets</NuxtLink>
              <NuxtLink to="/iphone" class="feature-product z-10">ANC Headsets</NuxtLink>
              <NuxtLink to="/iphone" class="feature-product z-10">Wireless Headsets</NuxtLink>
              <NuxtLink to="/iphone" class="feature-product z-10">Wire Headsets</NuxtLink>
            </div>
            <div class="flex justify-end">
              <img src="/public/home/fetured-item-4.png" class="card-hover-image" alt="">
            </div>
          </div>

          <div class="card-hover-group border border-gray-300 p-6 w-1/3 text-center flex flex-row justify-between bg-white shadow rounded ">
            <div class="flex flex-col text-start">
              <p class="font-bold text-xl my-5">Mobile</p>
              <NuxtLink to="/iphone" class="feature-product z-10">Gaming PC</NuxtLink>
              <NuxtLink to="/iphone" class="feature-product z-10">Workstations</NuxtLink>
              <NuxtLink to="/iphone" class="feature-product z-10">Micro Desktops</NuxtLink>
              <NuxtLink to="/iphone" class="feature-product z-10">All-in-One PCs</NuxtLink>
            </div>
            <div class="flex justify-end">
              <img src="/public/home/fetured-item-5.png" class="card-hover-image" alt="">
            </div>
          </div>

          <div class="card-hover-group border border-gray-300 p-6 w-1/3 text-center flex flex-row justify-between bg-white shadow rounded ">
            <div class="flex flex-col text-start">
              <p class="font-bold text-xl my-5">Play Station</p>
              <NuxtLink to="/iphone" class="feature-product z-10">Dome CCTV</NuxtLink>
              <NuxtLink to="/iphone" class="feature-product z-10">Bullet CCTV</NuxtLink>
              <NuxtLink to="/iphone" class="feature-product z-10">C-Mount CCTV</NuxtLink>
              <NuxtLink to="/iphone" class="feature-product z-10">Infrared CCTV</NuxtLink>
            </div>
            <div class="flex justify-end">
              <img src="/public/home/fetured-item-6.png" class="card-hover-image" alt="">
            </div>
          </div>
        </div>
      </div>

    </div>

</template>

<style>
.feature-product{
  font-size: 15px;
  padding-bottom: 2px;
  transition: color 0.3s ease, margin-left 0.3s ease;
}
.feature-product:hover{
    color: #1447e6;
    margin-left: 5px;
}

.hover-underline {
  position: relative;
  display: inline-block;
}

.hover-underline::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 3px;
  background: #1447e6;
  bottom: -7px;
  left: 0;
}


.card-hover-group {
  position: relative;
  overflow: hidden;
}

.card-hover-group .card-hover-image {
  transition: opacity 0.5s ease-in-out;
}

.card-hover-group:hover .card-hover-image {
  opacity: 0.5;
   transform: scale(1.5);
}

</style>