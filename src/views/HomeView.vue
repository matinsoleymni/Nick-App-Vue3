<script setup lang="ts">

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import TheNotification from '@/components/TheNotification.vue';
import TheBanner from '@/components/TheBanner.vue';
import TheButton from '@/components/TheButton.vue';
import TheCart   from '@/components/TheCart.vue'

</script>

<template>
  <!-- * Notification  -->
  <TheNotification Text="Hello Nike App" Description="Download the app to access everything Nike. <a class='underline' href='#'>Get Your Great</a>" class="bg-gray-200 text-center"/>
  <!-- * Banner -->
  <TheBanner />
  <main>

    <div class="text-center mt-10">
        <p class="font-bold text-lg">First Look</p>
        <h1 class="text-6xl font-black">Nike Air Max Pulse</h1>
        <p class="text-xl my-5">Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse<br>
          —designed to push you past your limits and help you go to the max.</p>
        <div class="flex justify-center gap-4">
          <TheButton Text="Notify Me" />
          <TheButton Text="Shop Air Max" />
        </div>
      </div>
      
      
    <div class="mt-10 px-24">
      <h2 class="text-2xl mb-3">Best of Air Max</h2>
      <swiper :slides-per-view="3" :space-between="50" :autoplay="{ delay: 500 , disableOnInteraction: false}">
        <swiper-slide><TheCart /></swiper-slide>
        <swiper-slide><TheCart /></swiper-slide>
        <swiper-slide><TheCart /></swiper-slide>
        <swiper-slide><TheCart /></swiper-slide>
        <swiper-slide><TheCart /></swiper-slide>
        <swiper-slide><TheCart /></swiper-slide>
        <swiper-slide><TheCart /></swiper-slide>
      </swiper>
    </div>
    
    
    <div class="mt-10">
      <div>
        <h2 class="ml-24 mb-4 text-2xl font-semibold">Featured</h2>
      </div>
      <img class="mx-auto" src="@/assets/images/featured.png" alt="">
    </div>

    <div class="text-center mt-10">
      <h2 class="font-medium text-6xl">STEP INTO WHAT FEELS GOOD</h2>
      <p class="py-5">Cause everyone should know the feeling of running in that perfect pair.</p>
      <TheButton Text="Find Your Shoe" />
    </div>
    
    <div class="mt-10 px-24">
      <h2 class="text-2xl mb-3">Gear Up</h2>
      <div class="flex gap-10">  
        <swiper :slides-per-view="2" :space-between="50">
          <swiper-slide><TheCart /></swiper-slide>
          <swiper-slide><TheCart /></swiper-slide>
          <swiper-slide><TheCart /></swiper-slide>
          <swiper-slide><TheCart /></swiper-slide>
          <swiper-slide><TheCart /></swiper-slide>
          <swiper-slide><TheCart /></swiper-slide>
          <swiper-slide><TheCart /></swiper-slide>
        </swiper>
        <swiper :slides-per-view="2" :space-between="50">
          <swiper-slide><TheCart /></swiper-slide>
          <swiper-slide><TheCart /></swiper-slide>
          <swiper-slide><TheCart /></swiper-slide>
          <swiper-slide><TheCart /></swiper-slide>
          <swiper-slide><TheCart /></swiper-slide>
          <swiper-slide><TheCart /></swiper-slide>
          <swiper-slide><TheCart /></swiper-slide>
        </swiper>
      </div>
    </div>


    <div>
      <div>
        <h2 class="ml-24 mb-4 text-2xl font-semibold">Don't Miss</h2>
      </div>
      <img class="mx-auto" src="@/assets/images/miss.png" alt="">
    </div>


    <div class="text-center mt-10">
      <h2 class="font-medium text-6xl">FLIGHT ESSENTIALS</h2>
      <p class="py-5">Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p>
      <TheButton Text="Shop" />
    </div>


    <div>
      <div>
        <h2 class="ml-24 mb-4 text-2xl font-semibold">The Essentials</h2>
      </div>
      <div class="flex mx-24 justify-center">
        <img class="mx-auto" src="@/assets/images/mans.png" alt="">
        <img class="mx-auto" src="@/assets/images/womans.png" alt="">
        <img class="mx-auto" src="@/assets/images/kidss.png" alt="">
      </div>
    </div>

    <div class="flex justify-center mt-20 gap-36">
      <div class="flex flex-col gap-2">
        <p class="font-medium mb-3">Icons</p>
        <a href="#">Air Force 1</a>
        <a href="#">Huarache</a>
        <a href="#">Air Max 90</a>
        <a href="#">Air Max 95</a>
      </div>
      <div class="flex flex-col gap-2">
        <p class="font-medium mb-3">Shoes</p>
        <a href="#">All Shoes</a>
        <a href="#">Custom Shoes</a>
        <a href="#">Jordan Shoes</a>
        <a href="#">Running Shoes </a>
      </div>
      <div class="flex flex-col gap-2">
        <p class="font-medium mb-3">Clothing</p>
        <a href="#">All Clothing</a>
        <a href="#">Modest Wear</a>
        <a href="#">Hoodies & Pullovers</a>
        <a href="#">Shirts & Tops</a>
      </div>
      <div class="flex flex-col gap-2">
        <p class="font-medium mb-3">Kids'</p>
        <a href="#">Infant & Toddler Shoes</a>
        <a href="#">Kids' Shoes</a>
        <a href="#">Kids' Jordan Shoes</a>
        <a href="#">Kids' Basketball Shoes</a>
      </div>
      
    </div>
    
  </main>
</template>
