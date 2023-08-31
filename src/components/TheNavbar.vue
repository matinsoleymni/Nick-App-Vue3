<script setup lang="ts">
import { ref } from "vue"
import TheButtonVue from "./TheButton.vue";

const favorite = ref(false)
const cart = ref(false)

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
            <div :class="{'bg-gray-200': favorite}" class="nav__heart p-2 rounded-full hover:bg-gray-200">
                <img @click="favorite = !favorite , cart = !favorite" src="@/assets/images/heart.svg" alt="">
            </div>
            <div :class="{'bg-gray-200': cart}" class="nav__shop p-2 rounded-full hover:bg-gray-200">
                <img @click="cart = !cart , favorite = !cart" src="@/assets/images/shop.svg" alt="">
            </div>
        </div>
    </nav>
    <div class="absolute text-center py-5 w-3/12 right-20 px-3 rounded-lg top-24 bg-gray-300" v-show="favorite">
        <h2 class="text-xl mt-1 mb-3">Favorite</h2>
        <p class="bg-red-200 p-1 rounded-full px-2">You Don't Have Favorite :(</p>
        <TheButtonVue @click="favorite = false" class="mt-5" Text="Close" />
    </div>

    <div class="absolute text-center py-5 w-3/12 right-20 px-3 rounded-lg top-24 bg-gray-300" v-show="cart">
        <h2 class="text-xl mt-1 mb-3">Orders</h2>
        <p class="bg-red-200 p-1 rounded-full px-2">You Don't Have Order :(</p>
        <TheButtonVue @click="cart = false" class="mt-5" Text="Close" />
    </div>

    
</template>