<script setup lang="ts">
import { ref , onMounted } from 'vue';

interface Stores {
    id:number,
    name:string,
    description:string,
    location:string,
    status:boolean,
    clock:string,
    opens:string,
}

const stores = ref<Stores[]>([]);

const getJobs = async() => {
    return fetch("http://127.0.0.1:8000/api/stores")
    .then(res => res.json())
    .then(data => stores.value = data)
}

onMounted(()=> {
    getJobs()
})

let Count = 5
let search = ref("")

function showAll(){
    Count = 11
    search.value = " "
    search.value = ""
}

function Search(){
    return stores.value.filter(job => job.name.toLowerCase().includes(search.value.toLowerCase()))
}
</script>

<template>
    <div class="flex items-center mt-5">
        <div class="px-5 basis-1/2">
            <div>
                <h1 class="text-3xl font-bold">Find a Nike Store</h1>
            </div>
            <div class="flex px-2 py-1 mx-10 mt-10 border-2 border-gray-900 border-solid rounded-lg">
                <img src="@/assets/images/search.svg" alt="">
                <input v-model="search" class="w-full p-1 bg-transparent outline-none" type="search">
            </div>
            <div class="flex items-center justify-between mx-10 mt-5">
                <div class="text-sm text-gray-400"><p>{{Search().length}} Stores Near You</p></div>
                <div class="inline-block px-4 py-1 text-lg border-2 border-gray-900 border-solid rounded-full">
                    <button>Filters</button>
                </div>
            </div>

            <div class="mt-5">
                <hr><hr>
                <div v-for="store in Search()" v-show="store.id < Count"  class="px-2 my-4 border-b-2 border-gray-400 border-solid">
                    <h2 class="text-xl ">{{store.name}}</h2>
                    <p class="text-sm text-gray-400">{{store.description}}</p>
                    <p>{{store.location}}</p>
                    <p class="mb-2"><span :class="{'text-green-600': store.status , 'text-red-600': !store.status}">{{store.opens}} </span> . {{store.clock}}</p>
                </div>

                <p @click="showAll()" class="mt-5 ml-5 text-lg underline cursor-pointer">View All Stores</p>
            </div>
        </div>
        <div class="basis-1/2">
            <iframe class="rounded-lg" width="800" height="800" frameborder="0" src="https://www.bing.com/maps/embed?h=800&w=800&cp=34.45889153452512~53.110872366366266&lvl=5.388728741023712&typ=d&sty=r&src=SHELL&FORM=MBEDV8" scrolling="no"></iframe>
        </div>
    </div>
</template>