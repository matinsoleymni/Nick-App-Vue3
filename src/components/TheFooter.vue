<template >
    <footer class="bg-gray-900 p-8 mt-8">
        <div class="flex justify-between">
            <div class="flex basis-1/2 justify-between">
                <div class="text-gray-50 flex flex-col gap-2">
                    <p><router-link to="/retail">Find A Store</router-link></p>
                    <p><router-link to="/joinUs">Become A Member</router-link></p>
                    <p><router-link to="/signin">Sign Up for Email</router-link></p>
                    <p><router-link to="/feedback">Send Us Feedback</router-link></p>
                    <p>Student Discounts</p>
                </div>
                <div class="text-gray-500 flex flex-col gap-2">
                    <p class="text-gray-50">Get Help</p>
                    <p><router-link to="/order-status">Order Status</router-link></p>
                    <p><router-link to="/help">Delivery</router-link></p>
                    <p><router-link to="/help">Returns</router-link></p>
                    <p><router-link to="/help">Payment Options</router-link></p>
                    <p><router-link to="/help">Contact Us</router-link></p>
                </div>
                <div class="text-gray-500 flex flex-col gap-2 pr-10">
                    <p class="text-gray-50">About Nike</p>
                    <p>News</p>
                    <p><router-link to="/jobs">Careers</router-link></p>
                    <p><router-link to="/investors">Investors</router-link></p>
                    <p>Sustainability</p>
                </div>
            </div>
            <div class="flex gap-5 pt-5 items-start">
                <a href="#"><img src="@/assets/images/twitter.svg" alt="twitter"></a>
                <a href="#"><img src="@/assets/images/facebook.svg" alt="facebook"></a>
                <a href="#"><img src="@/assets/images/youtube.svg" alt="youtube"></a>
                <a href="#"><img src="@/assets/images/instagram.svg" alt="instagram"></a>
            </div>
        </div>

        <div class="flex mt-10 items-end pb-2 px-8 justify-between text-gray-500">
            <div class="copywrite">
                <p>© 2023 Nike, Inc. All Rights Reserved</p>
                <p class="pl-3 text-purple-600"><a class="text-white" href="https://blokchainology.com">Blokchainology</a> - Matin Soleymani</p>
            </div>
            <div>
                <ul  class="flex gap-4">
                    <li>Guides</li>
                    <li>Terms of Sale</li>
                    <li>Terms of Use</li>
                    <li>Nike Privacy Policy</li>
                </ul>
            </div>
        </div>
    </footer>
</template>