<template>
  <div
    class="flex py-6 px-3 bg-weather-secondary rounded-md shadow-md cursor-pointer"
  >
    <div class="flex flex-col flex-1">
      <h2 class="text-3xl">{{ city.city }}</h2>
      <h3>{{ city.state }}</h3>
    </div>

    <div class="flex flex-col gap-2">
      <p class="text-3xl self-end">
        {{ store.toCelisius(city.weather.main.temp) }}&deg;
        
      </p>
      <div class="flex gap-2">
        <span class="text-xs">
          {{ store.lang.cityCard.high }}
          {{ store.toCelisius(city.weather.main.temp_max) }}&deg;
        </span>
        <span class="text-xs">
          {{ store.lang.cityCard.low }}
          {{ store.toCelisius(city.weather.main.temp_min) }}&deg;
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "@/stores";
import { computed } from "vue";

const store=useStore()

const props = defineProps({
  city: {
    type: Object,
    default: () => {},
  },
});


</script>
