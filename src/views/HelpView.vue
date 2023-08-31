<template>
    <div class="text-center mt-10 mb-1">
        <h1 class="text-black text-4xl font-me">Get Help</h1>
    </div>
    <div class="flex justify-center my-5">
        <div class="border-2 border-solid border-gray-800  flex p-1 px-2 rounded-md w-1/3">
            <input class="w-full focus:outline-none outline-none px-2" placeholder="What can we help you with?" type="text">
            <img src="@/assets/images/search.svg" alt="">
        </div>
    </div>
    <div class="flex px-10">
        <div class="basis-2/3 w-full h-10 bg-red-500">

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