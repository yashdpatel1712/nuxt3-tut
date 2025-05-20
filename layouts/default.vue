<template>
    <div >
        <nav class="bg-purple-700 text-white flex justify-between text-lg shadow-lg p-3 ">

            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/about">About</NuxtLink>
            <NuxtLink to="/iphone">Iphones</NuxtLink>
            <NuxtLink to="/profile">Profile</NuxtLink>
        </nav>
    
        <slot></slot>
    </div>
</template>