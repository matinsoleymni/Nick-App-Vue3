<script setup lang="ts">

defineProps<{
    Text?: String
}>()

</script>

<template>
    <button class="bg-gray-900 text-gray-50 px-5 py-2 rounded-full">{{Text}}</button>
</template>