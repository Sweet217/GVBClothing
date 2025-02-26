<template>
  <div class="bg-black" style="margin-top: 65px">
    <HeaderComponent />
    <div
      class="font-super-funky bg-custom-bg flex flex-col items-center justify-center h-screen bg-black text-white"
    >
      <h1 class="text-6xl font-extrabold text-blue-300 super-funky">
        Funcion no disponible!
        <router-link to="/contact" class="text-blue-500 hover:underline">
          Contactanos!
        </router-link>
      </h1>
      <p class="text-blue-300 text-8xl mt-4">:(</p>
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "../components/Header.vue";
import FooterComponent from "../components/Footer.vue";

export default {
  name: "NotAvailablePage",
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style></style>
