<script setup lang="ts">
import { ref } from 'vue';
import TheButton from '@/components/TheButton.vue';


const faqs = [
    {
        title: "Does my card need international purchases enabled?",
        desc : "Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.",
        open : ref(false),
    },
    
    {
        title: "Can I pay for my order with multiple methods?",
        desc : "No, payment for Nike orders can't be split between multiple payment methods.",
        open : ref(false),
    },
    
    {
        title: "What payment method is accepted for SNKRS orders?",
        desc : "You can use any accepted credit card to pay for your SNKRS order.",
        open : ref(false),
    },
    
    {
        title: "Why don't I see Apple Pay as an option?",
        desc : "To see Apple Pay as an option in the Nike App or on Nike.com, you'll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you'll need to use Safari to use Apple Pay on Nike.com.",
        open : ref(false),
    },
    
    {
        title: "Who Develope this App?",
        desc : "Matin Soleymani at Blokchainology Team | Our Team members is : Zeynab Khayyati , Sajad Tavousi , Arman Hurian | ",
        open : ref(false),
    },
    
]

let search = ref("")

function Search(){
    return faqs.filter(faq => faq.title.toLowerCase().includes(search.value.toLowerCase()))
}

function goFaqs(){
    window.scrollTo(0, 650);
}
</script>
<template>
    <div class="text-center mt-10 mb-1">
        <h1 class="text-black text-4xl font-me">Get Help</h1>
    </div>
    <div class="flex justify-center my-5">
        <div class="border-2 border-solid border-gray-800  flex p-1 px-2 rounded-md w-1/3">
            <input v-model="search" class="w-full focus:outline-none outline-none px-2" placeholder="What can we help you with?" type="text">
            <img @click="goFaqs()" src="@/assets/images/search.svg" alt="">
        </div>
    </div>
    <div class="flex px-10 mt-16">
        <div class="basis-2/3 w-full">
            <div>
                <h2 class="text-3xl font-medium">WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h2>
                <p class="mt-5">We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:</p>
                <div class="flex justify-center bg-black my-10 rounded-full mx-20">
                    <img src="@/assets/images/payment.svg" alt="">
                </div>
                <p>If you enter your PAN information at checkout, you'll be able to pay for your order with PayTM or a local credit or debit card.</p>
                <div class="flex justify-center mt-5 mb-10 rounded-full mx-20">
                    <img class="mt-2 w-11" src="@/assets/images/ApplePay.svg" alt="">
                </div>
                <p>Nike Members can store multiple debit or credit cards in their profile for faster checkout.<br> If you're not already a Member, join us today.</p>
                <div class="mt-5 flex gap-3">
                    <TheButton Text="JOIN US" />
                    <TheButton Text="SHOP NIKE" />
                </div>
            </div>
            <div class="mt-10">
                <div>
                    <h2 class="text-2xl font-medium">FAQs</h2>
                </div>
                <div class="my-8 flex gap-8 flex-col mr-8">
                    <div v-for="faq in Search()" class="border-2 border-solid p-1 select-none border-gray-900 rounded-lg">
                        <h3 @click="faq.open.value = !faq.open.value" class="mb-3 text-lg pl-1 cursor-pointer">{{faq.title}}</h3>
                        <p v-show="faq.open.value" class="pl-4">{{faq.desc}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="basis-1/3 w-full border-l-2" id="contact">
            <div>
                <h2 class="text-center text-3xl">Contact Us</h2>
            </div>
            <div class="flex flex-col gap-11">
                <div class="flex flex-col items-center mt-7">
                    <div>
                        <img src="@/assets/images/phone.png" alt="">
                    </div>
                    <div class="mt-5 text-center flex flex-col gap-4">
                        <h3 class="font-bold text-lg"><a href="tel:+989032142858">09032142858</a></h3>
                        <p>Products & Orders: 24 hours a day, 7 days a week</p>
                        <p>Company Info & Enquiries: 07:30 - 16:30, Monday - Friday</p>
                    </div>
                </div>

                    <div class="flex flex-col items-center mt-7">
                        <div>
                            <img src="@/assets/images/message.png" alt="">
                        </div>
                        <div class="mt-5 text-center flex flex-col gap-4">
                            <p>24 hours a day</p>
                            <p>7 days a week</p>
                        </div>
                    </div>

                    <div class="flex flex-col items-center mt-7">
                        <div>
                            <img src="@/assets/images/sms.png" alt="">
                        </div>
                        <div class="mt-5 text-center flex flex-col gap-4">
                            <p>We'll reply within</p>
                            <p>five business days</p>
                        </div>
                    </div>

                    <div class="flex flex-col items-center mt-7">
                        <div>
                            <img src="@/assets/images/nikelocation.png" alt="">
                        </div>
                        <div class="mt-5 text-center flex flex-col gap-4">
                            <p>STORE LOCATOR</p>
                            <p>Find Nike retail stores near you</p>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</template>