<script setup lang="ts">
import TheButton from '@/components/TheButton.vue';
import { ref , onMounted } from 'vue';

interface Jobs {
    id:number,
    image:string,
    title:string,
    description:string,
    location:string,
    created_at:string,
    updated_at:string
}

const careers = ref<Jobs[]>([]);

const getJobs = async() => {
    return fetch("http://127.0.0.1:8000/api/careers")
    .then(res => res.json())
    .then(data => careers.value = data)
}

onMounted(()=> {
    getJobs()
})

let search = ref("")
function Search(){
    return careers.value.filter(job => job.title.toLowerCase().includes(search.value.toLowerCase()))
}

function setAlert(){
    if(!search.value){
        alert("you don't write any job title in field")
        return 
    }

    alert(`Job title:  ${search.value} Is Set`)

}

</script>
<template>
    <div class="flex px-5 my-10">
        <div class="flex flex-col gap-20 basis-1/3">
            <h1 class="mx-10 text-5xl font-semibold text-center">There are {{Search().length}} open Positions</h1>
            <div class="flex items-center justify-center mx-20 border-2 border-gray-900 border-solid">
                <input v-model="search" class="w-full p-2 outline-none" type="search" name="keyword" placeholder="Search KeyWords..." id="">
                <div @click="Search()" class="p-1 bg-gray-800"><svg class="" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Frame"><path id="Vector" d="M13.962 16.296C12.916 16.9224 11.7192 17.2521 10.5 17.25C9.6134 17.2512 8.7353 17.0772 7.91618 16.7379C7.09707 16.3986 6.35308 15.9008 5.72701 15.273C5.09924 14.6469 4.6014 13.9029 4.26212 13.0838C3.92284 12.2647 3.7488 11.3866 3.75001 10.5C3.75001 8.63601 4.50501 6.94901 5.72701 5.72701C6.35308 5.09924 7.09707 4.6014 7.91618 4.26212C8.7353 3.92284 9.6134 3.7488 10.5 3.75001C12.364 3.75001 14.051 4.50501 15.273 5.72701C15.9008 6.35308 16.3986 7.09707 16.7379 7.91618C17.0772 8.7353 17.2512 9.6134 17.25 10.5C17.2517 11.6974 16.9338 12.8736 16.329 13.907C15.812 14.789 15.895 15.895 16.618 16.618L20.471 20.471" stroke="white" stroke-width="2  "/></g></svg></div>
            </div>
            <div class="flex flex-col gap-5 mx-20">
                <TheButton @click="setAlert()" class="text-gray-900 bg-transparent border-2 border-gray-900 border-solid rounded-lg" Text="Set a job alert"/>
                <TheButton class="rounded-lg" Text="Search Contract Jobs*"/>
                <TheButton class="rounded-lg" Text="Join the contract Talent Community*"/>
            </div>
        </div>

        <div class="px-5 border-l-2 border-gray-500 border-solid basis-2/3">
        
            <div v-for="job in Search()" class="flex items-center justify-between gap-3 p-1 mb-2 rounded-lg">
                <div class="mt-10"><img :src="job.image" alt="img"></div>
                <ul class="ml-5">
                    <img src="@/assets/images/logo.svg" alt="logo">
                    <li class="text-xl">{{job.title}}</li>
                    <li>{{job.description}}</li>
                    <li>{{job.location}}</li>
                </ul>
                <div>
                    <p><TheButton Text="Apply" /></p>
                </div>
            </div>
        </div>
    </div>
</template>