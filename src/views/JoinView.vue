<template>
    <div class="flex justify-center items-center">
        <div class="w-2/6 text-center p-5">
            <div>
                <img class="mx-auto" src="@/assets/images/logo.svg" alt="">
                <h1 class="text-3xl mx-10 font-bold">BECOME A NIKE MEMBER</h1>
            </div>

            <p class="text-gray-500 mt-5">Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.</p>
            <form class="mt-8 flex flex-col items-center gap-4">
                <input class="border-2 border-solid border-gray-800 w-3/4 px-3 py-1 rounded-lg" type="email" placeholder="Email Address" name="email" required>
                <input class="border-2 border-solid border-gray-800 w-3/4 px-3 py-1 rounded-lg" type="password" placeholder="Password" name="password" required>
                <input class="border-2 border-solid border-gray-800 w-3/4 px-3 py-1 rounded-lg" type="text" placeholder="First Name" name="namef" required>
                <input class="border-2 border-solid border-gray-800 w-3/4 px-3 py-1 rounded-lg" type="text" placeholder="Last Name" name="namel" required>
                
                <div class="my-5">
                    <label class=" px-14 py-2 my-5  mx-2 bg-transparent border border-solid border-gray-800" for="sexman">Man</label>
                    <input class="hidden" type="radio" name="sex" id="sexman">
                    <label class="w-1/2 px-14 py-2  my-5 mx-2 bg-transparent border border-solid border-gray-800" for="sexwoman">Woman</label>
                    <input class="hidden" type="radio" name="sex" id="sexwoman">
                </div>

                <div class="flex gap-10">
                    <div class="flex items-center gap-2">
                        <input class="w-5 h-5" type="checkbox" name="remember" id="remember" required>
                        <label class="text-sm" for="remember">Keep me signed in</label>
                    </div>
                    <div>
                        <a href="#" class="text-sm text-gray-500">Forgotten your password?</a>
                    </div>
                </div>
                <p class="text-center w-9/12 my-2">By logging in, you agree to Nike's Privacy Policy and Terms of Use.</p>
                <button class="text-gray-50 w-9/12 rounded-md text-lg py-1 bg-gray-900">Submit</button>
                <p>Member? <span class="font-bold"><router-link to="/signin">Sign In.</router-link></span></p>
            </form>
        </div>
    </div>
</template>