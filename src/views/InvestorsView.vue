<script setup lang="ts">
import TheButton from '@/components/TheButton.vue';
import { ref } from 'vue';

const Investors = [
    {
        name: "Matin Soleymani",
        email: "mailto:matinsoleymni@gmail.com",
        github: "https://github.com/matinsoleymni",
        telegram: "https://t.me/matinsoleymni",
        linkedin : "https://linkedin.com/in/matinsoleymani"
    },
    {
        name: "Zeynab Khayyati",
        email: "mailto:zeynab.khayyati.11@gmail.com",
        github: "https://github.com/zeynabkhayyati",
        telegram: "https://t.me/TIME_TO_SELF",
        linkedin : "https://linkedin.com/in/zeynab-khayyati24"
    },
    {
        name: "Sajad Tavousi",
        email: "",
        github: "",
        telegram: "",
        linkedin : ""
    },
    {
        name: "Arman Hurian",
        email: "",
        github: "",
        telegram: "",
        linkedin : ""
    },
]

</script>

<template>
    <div>
        <div class="sm:ml-32 mb-5">
            <h1 class="text-4xl font-medium">Investors</h1>
        </div>
    </div>
    <div class="" v-for="investor in Investors">
        <div class="border-2 bg-black p-2 rounded-full sm:mx-24 flex items-center flex-col">
            <h2 class="text-xl text-gray-300 font-bold">{{investor.name}}</h2>
            <div class="flex gap-5 my-1">
                <a class="text-fuchsia-700 font-bold hover:text-fuchsia-500" :href="investor.email">Email</a>
                <a class="text-fuchsia-700 font-bold hover:text-fuchsia-500" :href="investor.github">Github</a>
                <a class="text-fuchsia-700 font-bold hover:text-fuchsia-500" :href="investor.linkedin">Linkedin</a>    
            </div>
        </div>
    </div>
</template>