<template>
    <div class="flex justify-between py-1 px-11 bg-gray-200">
        <div class="topbar__logo pl-3">
            <router-link to="/"><img src="@/assets/images/TopbarIcon.svg" alt="Topbar_Icon"></router-link>
        </div>
        <div class="topbar__menu">
            <ul class="flex gap-3">
                <li><router-link to="/retail">Find a Store</router-link></li>
                <li>|</li>
                <li><router-link to="/help">Help</router-link></li>
                <li>|</li>
                <li><router-link to="/join">Join Us</router-link></li>
                <li>|</li>
                <li><router-link to="/signin">Sign In</router-link></li>
            </ul>
        </div>
    </div>
</template>