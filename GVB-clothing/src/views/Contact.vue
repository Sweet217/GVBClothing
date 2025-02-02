<template>
  <div class="bg-black min-h-screen flex flex-col text-white">
    <HeaderComponent />

    <div class="flex-grow flex items-center justify-center bg-black py-12">
      <div class="text-center">
        <h1 class="text-6xl font-extrabold text-white font-super-funky mb-8">
          Contactanos!
        </h1>
        <p class="text-2xl mb-6">Estaremos felices de poder ayudarte!</p>

        <div class="space-y-6">
          <div>
            <span class="material-icons">phone_iphone</span>
            <a
              href="https://www.instagram.com/gvb_clothing/"
              target="_blank"
              class="text-xl font-bold text-white hover:underline"
            >
              Siguenos en Instagram
            </a>
          </div>

          <div>
            <span class="material-icons mr-2">chat_bubble</span>
            <a
              href="https://wa.me/523125953394"
              target="_blank"
              class="text-xl font-bold text-green-500 hover:underline"
            >
              WhatsApp: +52 312 595 3394
            </a>
          </div>
        </div>
      </div>
    </div>

    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "../components/Header.vue";
import FooterComponent from "../components/Footer.vue";

export default {
  name: "ContactPage",
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style scoped>
/* You can add additional styles for your contact page here */
</style>
