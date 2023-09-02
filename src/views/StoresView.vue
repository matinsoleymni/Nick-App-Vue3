<script setup lang="ts">
import { ref } from 'vue';

const Stores = [
    {
        id: 1 ,
        name: "Nike URC - House of Innovation 011",
        desc: "650 5th Ave.",
        location: "Urmia, AZG, 1124, Freedom IR",
        status: true,
        clock: "Opens at 11:00 am",
        opens: "Open"
    },
    {
        id: 2 ,
        name: "Nike MRC - House of Innovation 024",
        desc: "650 5th Ave.",
        location: "Mashhad, KHR, 2411, Freedom IR",
        status: true,
        clock: "Opens at 12:00 am",
        opens: "Open"
    },
    {
        id: 3 ,
        name: "Nike NYC - House of Innovation 000",
        desc: "650 5th Ave.",
        location: "Urmia, AZG, 1124, Freedom IR",
        status: true,
        clock: "Opens at 11:00 am",
        opens: "open"
    },
    {
        id: 4 ,
        name: "Nike MRC - House of Innovation 024",
        desc: "650 5th Ave.",
        location: "Mashhad, KHR, 2411, Freedom IR",
        status: false,
        clock: "Opens at 12:00 am",
        opens: "Close"
    },
    {
        id: 5 ,
        name: "Nike MRC - House of Innovation",
        desc: "650 5th Ave.",
        location: "Tehran, THR, 2411, Freedom IR",
        status: false,
        clock: "Opens at 12:00 am",
        opens: "Close"
    },
    {
        id: 6 ,
        name: "Nike Store - Shoes 11",
        desc: "650 5th Ave.",
        location: "Mashhad, KHR, 2411, Freedom IR",
        status: false,
        clock: "Opens at 12:00 am",
        opens: "Close"
    },
    {
        id: 7 ,
        name: "Nike MRC - House of Innovation 111",
        desc: "650 5th Ave.",
        location: "Urmia, AZG, 001, Freedom IR",
        status: true,
        clock: "Opens at 12:00 am",
        opens: "Open"
    },
    {
        id: 8 ,
        name: "Nike MRC - House of Innovation 024",
        desc: "650 5th Ave.",
        location: "Mashhad, KHR, 2411, Freedom IR",
        status: false,
        clock: "Opens at 12:00 am",
        opens: "Close"
    },
    {
        id: 9 ,
        name: "Nike MRC - House of Innovation 024",
        desc: "650 5th Ave.",
        location: "Mashhad, KHR, 2411, Freedom IR",
        status: false,
        clock: "Opens at 12:00 am",
        opens: "Close"
    },
    {
        id: 10 ,
        name: "Nike MRC - House of Innovation 024",
        desc: "650 5th Ave.",
        location: "Mashhad, KHR, 2411, Freedom IR",
        status: true,
        clock: "Opens at 12:00 am",
        opens: "Open"
    },
]

let Count = 5
let search = ref("")

function showAll(){
    Count = 11
    search.value = " "
    search.value = ""
}

function Search(){
    return Stores.filter(job => job.name.toLowerCase().includes(search.value.toLowerCase()))
}
</script>

<template>
    <div class="flex mt-5 items-center">
        <div class="basis-1/2 px-5">
            <div>
                <h1 class="text-3xl font-bold">Find a Nike Store</h1>
            </div>
            <div class="mt-10 mx-10 border-2 border-solid border-gray-900 flex px-2 py-1 rounded-lg">
                <img src="@/assets/images/search.svg" alt="">
                <input v-model="search" class="p-1 w-full outline-none bg-transparent" type="search">
            </div>
            <div class="mx-10 mt-5 flex items-center justify-between">
                <div class="text-sm text-gray-400"><p>{{Search().length}} Stores Near You</p></div>
                <div class="inline-block px-4 py-1 rounded-full text-lg border-2 border-solid border-gray-900">
                    <button>Filters</button>
                </div>
            </div>

            <div class="mt-5">
                <hr><hr>
                <div v-for="store in Search()" v-show="store.id < Count"  class="my-4 px-2 border-b-2 border-solid border-gray-400">
                    <h2 class="text-xl ">{{store.name}}</h2>
                    <p class="text-sm text-gray-400">{{store.desc}}</p>
                    <p>{{store.location}}</p>
                    <p class="mb-2"><span :class="{'text-green-600': store.status , 'text-red-600': !store.status}">{{store.opens}} </span> . {{store.clock}}</p>
                </div>

                <p @click="showAll()" class="underline text-lg mt-5 ml-5 cursor-pointer">View All Stores</p>
            </div>
        </div>
        <div class="basis-1/2">
            <iframe class="rounded-lg" width="800" height="800" frameborder="0" src="https://www.bing.com/maps/embed?h=800&w=800&cp=34.45889153452512~53.110872366366266&lvl=5.388728741023712&typ=d&sty=r&src=SHELL&FORM=MBEDV8" scrolling="no"></iframe>
        </div>
    </div>
</template>