<script setup lang="ts">

defineProps<{
    Text?: String,
    Description?: String,
}>()

</script>
<template>
    <div class="py-1" :class="{ hidden: !Text}">
        <p class="">{{ Text }}</p>
        <p class="text-sm" v-html="Description"></p>
    </div>
</template>