<script setup lang="ts">
</script>
<template>
    <nav class="flex items-center justify-between px-10 py-1">
        <div class="nav__logo">
            <router-link to="/"><img src="@/assets/images/logo.svg" alt="Logo"></router-link>
        </div>
        <div class="nav__menu ml-10">
            <ul class="flex gap-5">
                <li>New & Featured</li>
                <li>Women</li>
                <li>Men</li>
                <li>Kids</li>
                <li>Sale</li>
                <li>SNKRS</li>
            </ul>
        </div>
        <div class="nav__actions flex items-center gap-2">
            <div class="flex items-center bg-gray-200 p-1 rounded-full">
                <img src="@/assets/images/search.svg" class="pl-2" alt="">
                <input placeholder="Search" class="rounded-full p-1 bg-transparent outline-none" type="search">
            </div>
            <div class="nav__heart p-2 rounded-full hover:bg-gray-200">
                <img src="@/assets/images/heart.svg" alt="">
            </div>
            <div class="nav__shop p-2 rounded-full hover:bg-gray-200">
                <img src="@/assets/images/shop.svg" alt="">
            </div>
        </div>
    </nav>
</template>