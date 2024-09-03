<template>
  <header class="sticky top-0 bg-weather-primary shadow-lg">
    <nav
      class="container flex flex-col sm:flex-row items-center gap-4 text-white py-6"
    >
      <RouterLink :to="{ name: 'home' }">
        <div class="flex items-center gap-3">
          <i class="fa-solid fa-sun text-2xl"></i>
          <p class="text-2xl">{{ store.lang.siteNav.title }}</p>
        </div>
      </RouterLink>

      <div class="flex gap-3 flex-1 justify-end">
        <i @click="store.switchLang" class="fa-sharp fa-solid fa-language text-xl hover:text-weather-secondary duration-150 cursor-pointer"></i>
        <i
          class="fa-solid fa-circle-info text-xl hover:text-weather-secondary duration-150 cursor-pointer"
          @click="toggleModal"
        ></i>
        <i
          class="fa-solid fa-plus text-xl hover:text-weather-secondary duration-150 cursor-pointer"
          @click="addCity"
          v-if="route.query.preview"
        ></i>
      </div>

      <BaseModal
        :modalActive="modalActive"
        @close-modal="toggleModal"
      >
        <div class="text-black">
          <h1 class="text-2xl mb-1">{{ store.lang.siteNav.modal.about.title }}</h1>
          <p class="mb-4">
            {{ store.lang.siteNav.modal.about.text }}
          </p>
          <h2 class="text-2xl">{{ store.lang.siteNav.modal.how.title }}</h2>
          <ol class="list-decimal list-inside mb-4">
            <li>
              {{ store.lang.siteNav.modal.how.text1 }}
            </li>
            <li>
              {{ store.lang.siteNav.modal.how.text2 }}
            </li>
            <li>
              {{ store.lang.siteNav.modal.how.text3 }}
            </li>
          </ol>

          <h2 class="text-2xl">{{ store.lang.siteNav.modal.remove.title }}</h2>
          <p>
            {{store.lang.siteNav.modal.remove.text }}
          </p>
        </div>
      </BaseModal>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink, useRoute, useRouter } from "vue-router";
import { uid } from "uid";
import { ref } from "vue";
import BaseModal from "./BaseModal.vue";
import { useStore } from "@/stores";

const store=useStore()

const savedCities = ref([]);
const route = useRoute();
const router = useRouter();
const addCity = () => {
  if (localStorage.getItem("savedCities")) {
    savedCities.value = JSON.parse(
      localStorage.getItem("savedCities")
    );
  }

  const locationObj = {
    id: uid(),
    state: route.params.state,
    city: route.params.city,
    coords: {
      lat: route.query.lat,
      lng: route.query.lng,
    },
  };

  savedCities.value.push(locationObj);
  localStorage.setItem(
    "savedCities",
    JSON.stringify(savedCities.value)
  );

  let query = Object.assign({}, route.query);
  delete query.preview;
  query.id = locationObj.id;
  router.replace({ query });
};

const modalActive = ref(null);
const toggleModal = () => { modalActive.value = !modalActive.value};
console.log(route.query.preview)
</script>
