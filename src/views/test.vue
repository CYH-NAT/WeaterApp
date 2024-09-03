<template>
    <div class="max-w-[300px] max-h-[300px] bg-white flex flex-wrap justify-between gap-3">
        <p class="flex-1 bg-red-500">1</p>
        <p class="flex-1 bg-green-500">1</p>
        <p class="flex-1 bg-blue-500">1</p>
        <button @click="store.switchLang">按鈕</button>
    </div>
    {{ store.flag }}
    {{ store.lang.asyncCity.HourlyWeather.title }}
</template>

<script setup>
import { useStore } from '@/stores';
const store = useStore()
console.log(store.lang)
</script>

<style lang="scss" scoped>

</style>