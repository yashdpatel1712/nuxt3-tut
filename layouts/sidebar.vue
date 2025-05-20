<template>
    <main class="user-layout">
        
        <article>
            <p>setting</p>
            <p>logout</p>
            <NuxtLink to="/">Home</NuxtLink>

        </article>

        <section>
            <slot></slot>
        </section>
    </main>
</template>

<style>
.user-layout{
    display: flex;
    flex-direction: row;
    column-gap: 50px;
}
</style>