<template>
  <div class="relative mt-20">
    <HeaderComponent />
    <!-- Text/Image Hovering Over All Sections -->

    <!-- Container for Horizontal Layout -->
    <div class="flex space-x-4 relative z-20">
      <!-- Section 1 -->
      <section class="relative h-96 w-96">
        <div class="relative w-full h-full overflow-hidden">
          <!-- Carousel Images -->
          <div
            v-for="(image, index) in carouselImages1"
            :key="index"
            :class="[
              'absolute inset-0 transition-opacity duration-700 ease-in-out',
              currentSlide1 === index ? 'opacity-100' : 'opacity-0',
            ]"
            :style="{ backgroundImage: `url(${image})` }"
            class="bg-cover bg-center w-full h-full"
          ></div>
        </div>
      </section>

      <!-- Section 2 -->
      <section class="relative h-96 w-96">
        <div class="relative w-full h-full overflow-hidden">
          <!-- Carousel Images -->
          <div
            v-for="(image, index) in carouselImages2"
            :key="index"
            :class="[
              'absolute inset-0 transition-opacity duration-700 ease-in-out',
              currentSlide2 === index ? 'opacity-100' : 'opacity-0',
            ]"
            :style="{ backgroundImage: `url(${image})` }"
            class="bg-cover bg-center w-full h-full"
          ></div>
        </div>
      </section>

      <!-- Section 3 -->
      <section class="relative h-96 w-96">
        <div class="relative w-full h-full overflow-hidden">
          <!-- Carousel Images -->
          <div
            v-for="(image, index) in carouselImages3"
            :key="index"
            :class="[
              'absolute inset-0 transition-opacity duration-700 ease-in-out',
              currentSlide3 === index ? 'opacity-100' : 'opacity-0',
            ]"
            :style="{ backgroundImage: `url(${image})` }"
            class="bg-cover bg-center w-full h-full"
          ></div>
        </div>
      </section>

      <!-- Section 4 -->
      <section class="relative h-96 w-96">
        <div class="relative w-full h-full overflow-hidden">
          <!-- Carousel Images -->
          <div
            v-for="(image, index) in carouselImages4"
            :key="index"
            :class="[
              'absolute inset-0 transition-opacity duration-700 ease-in-out',
              currentSlide4 === index ? 'opacity-100' : 'opacity-0',
            ]"
            :style="{ backgroundImage: `url(${image})` }"
            class="bg-cover bg-center w-full h-full"
          ></div>
        </div>
      </section>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-10">
      <!-- Producto 1 -->
      <div
        class="max-w-xs rounded overflow-hidden shadow-lg bg-white outline-double outline-slate-800 flex flex-col"
      >
        <img
          class="w-full h-64 object-cover"
          src="../assets/basic-oversize-4.jpg"
          alt="Clothing Image"
        />
        <div class="px-6 py-4 flex flex-col flex-grow">
          <h2 class="font-semibold text-l text-gray-800 truncate">
            Camisa negra corte oversize 250GSM
          </h2>
          <p class="text-gray-600 text-sm mt-2 mb-4 flex-grow">
            Camisa negra oversize de alta calidad, con cuello que no se deforma, pesada y
            con estilo. <p>Logo bordado en la parte inferior izquierda</p>
          </p>
        </div>
        <div class="px-6 py-4 flex items-center justify-between">
          <span class="font-bold text-lg text-gray-800">350 MXN</span>
          <button
            @click="addToCart"
            class="border-2 text-black px-4 py-2 rounded hover:border-slate-500 focus:outline-none focus:ring focus:ring-blue-300"
          >
            +
          </button>
        </div>
      </div>

      <!-- Producto 2
      <div
        class="max-w-xs rounded overflow-hidden shadow-lg bg-white outline-double outline-slate-800 flex flex-col"
      >
        <img
          class="w-full h-64 object-cover"
          src="../assets/model_ex2.jpg"
          alt="Clothing Image"
        />
        <div class="px-6 py-4 flex flex-col flex-grow">
          <h2 class="font-semibold text-l text-gray-800 truncate">
            Camisa Azul OVERSIZE 240GM
          </h2>
          <p class="text-gray-600 text-sm mt-2 mb-4 flex-grow">
            Camisa azul oversize, cómoda y con diseño moderno para cualquier ocasión.
          </p>
        </div>
        <div class="px-6 py-4 flex items-center justify-between">
          <span class="font-bold text-lg text-gray-800">280 MXN</span>
          <button
            @click="addToCart"
            class="border-2 text-black px-4 py-2 rounded hover:border-slate-500 focus:outline-none focus:ring focus:ring-blue-300"
          >
            +
          </button>
        </div>
      </div>

      Producto 3
      <div
        class="max-w-xs rounded overflow-hidden shadow-lg bg-white outline-double outline-slate-800 flex flex-col"
      >
        <img
          class="w-full h-64 object-cover"
          src="../assets/model_ex3.jpg"
          alt="Clothing Image"
        />
        <div class="px-6 py-4 flex flex-col flex-grow">
          <h2 class="font-semibold text-l text-gray-800 truncate">Camiseta Gris 180GM</h2>
          <p class="text-gray-600 text-sm mt-2 mb-4 flex-grow">
            Camiseta gris con material suave y cómodo, ideal para un look casual.
          </p>
        </div>
        <div class="px-6 py-4 flex items-center justify-between">
          <span class="font-bold text-lg text-gray-800">200 MXN</span>
          <button
            @click="addToCart"
            class="border-2 text-black px-4 py-2 rounded hover:border-slate-500 focus:outline-none focus:ring focus:ring-blue-300"
          >
            +
          </button>
        </div>
      </div> -->
      <div
        class="max-w-xs rounded overflow-hidden shadow-lg bg-white outline-double outline-slate-800 flex flex-col"
      >
        <img
          class="w-full h-64 object-cover"
          src="../assets/sweater_ex.jpg"
          alt="Clothing Image"
        />
        <div class="px-6 py-4 flex flex-col flex-grow">
          <h2 class="font-semibold text-l text-gray-800 truncate">Playera negra corte regular 250GSM</h2>
          <p class="text-gray-600 text-sm mt-2 mb-4 flex-grow">
            Camisa negra regularfit de alta calidad, con cuello que no se deforma, pesada y
            con estilo. <p>Logo bordado en la parte inferior izquierda</p>
          </p>
        </div>
        <div class="px-6 py-4 flex items-center justify-between">
          <span class="font-bold text-lg text-gray-800">300 MXN</span>
          <button
            @click="addToCart"
            class="border-2 text-black px-4 py-2 rounded hover:border-slate-500 focus:outline-none focus:ring focus:ring-blue-300"
          >
            +
          </button>
        </div>
      </div>
    </div>

    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from "../components/Header.vue";
import FooterComponent from "../components/Footer.vue";
import basic_oversize_1 from "../assets/basic-oversize-1.jpg";
import basic_oversize_2 from "../assets/basic-oversize-2.jpg";
import basic_oversize_3 from "../assets/basic-oversize-3.jpg";
import basic_oversize_4 from "../assets/basic-oversize-4.jpg";
import basic_oversize_5 from "../assets/basic-oversize-5.jpg";
import gvb_on_clothing from "../assets/GVB on clothing.jpg";

export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
  data() {
    return {
      carouselImages1: [basic_oversize_2, basic_oversize_3, basic_oversize_5],
      carouselImages2: [basic_oversize_1, gvb_on_clothing, basic_oversize_2],
      carouselImages3: [basic_oversize_5, basic_oversize_1, basic_oversize_4],
      carouselImages4: [basic_oversize_3, gvb_on_clothing, basic_oversize_2],

      currentSlide1: 0,
      currentSlide2: 0,
      currentSlide3: 0,
      currentSlide4: 0,
    };
  },
  methods: {
    setCurrentSlide1(index) {
      this.currentSlide1 = index;
    },
    setCurrentSlide2(index) {
      this.currentSlide2 = index;
    },
    setCurrentSlide3(index) {
      this.currentSlide3 = index;
    },
    setCurrentSlide4(index) {
      this.currentSlide4 = index;
    },
    autoSlide1() {
      setInterval(() => {
        this.currentSlide1 = (this.currentSlide1 + 1) % this.carouselImages1.length;
      }, 5000); // Change every 3 seconds
    },
    autoSlide2() {
      setInterval(() => {
        this.currentSlide2 = (this.currentSlide2 + 1) % this.carouselImages2.length;
      }, 5500);
    },
    autoSlide3() {
      setInterval(() => {
        this.currentSlide3 = (this.currentSlide3 + 1) % this.carouselImages3.length;
      }, 6000);
    },
    autoSlide4() {
      setInterval(() => {
        this.currentSlide4 = (this.currentSlide4 + 1) % this.carouselImages4.length;
      }, 6500);
    },
  },
  mounted() {
    this.autoSlide1();
    this.autoSlide2();
    this.autoSlide3();
    this.autoSlide4();
  },
};
</script>
