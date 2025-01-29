<template>
  <div class="relative mt-20">
    <HeaderComponent />

    <div class="flex flex-wrap justify-center gap-4 mb-8 bg-gray-200 py-4">
      <section
        v-for="(images, index) in carouselImages"
        :key="index"
        class="relative h-96 w-80 sm:w-64 md:w-72 lg:w-80 xl:w-96 2xl:w-[300px]"
      >
        <div class="relative w-full h-full overflow-hidden">
          <div
            v-for="(image, imageIndex) in images"
            :key="imageIndex"
            :class="[
              'absolute inset-0 transition-opacity duration-700 ease-in-out',
              currentSlide[index] === imageIndex ? 'opacity-100' : 'opacity-0',
            ]"
            :style="{ backgroundImage: `url(${image})` }"
            class="bg-cover bg-center w-full h-full"
          ></div>
        </div>
      </section>
    </div>

    <!-- Productos -->
    <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-6 gap-10 p-10">
      <div
        class="max-w-xs rounded overflow-hidden shadow-lg bg-white outline-double outline-slate-800 flex flex-col"
        v-for="(product, index) in products"
        :key="index"
      >
        <img
          class="w-full h-64 object-cover"
          :src="product.image"
          :alt="product.name"
        />
        <div class="px-4 py-4 flex flex-col flex-grow">
          <h2 class="font-semibold text-l text-gray-800 truncate">{{ product.name }}</h2>
          <p class="text-gray-600 text-sm mt-2 mb-4 flex-grow whitespace-nowrap">
            {{ product.description }}
          </p>
        </div>
        <div class="px-4 py-4 flex items-center justify-between">
          <span class="font-bold text-lg text-gray-800">{{ product.price }} MXN</span>
          <button
            @click="addToCart(product)"
            class="border-2 text-black px-4 py-2 rounded hover:border-slate-500 focus:outline-none focus:ring focus:ring-blue-300"
          >
            +
          </button>
        </div>
      </div>
    </div>

    <FooterComponent />
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
      carouselImages: [
        [basic_oversize_2, basic_oversize_3, basic_oversize_5],
        [basic_oversize_1, gvb_on_clothing, basic_oversize_2],
        [basic_oversize_5, basic_oversize_1, basic_oversize_4],
        [basic_oversize_3, gvb_on_clothing, basic_oversize_2],
      ],
      currentSlide: [0, 0, 0, 0],
      products: [
        {
          name: "Camisa negra corte oversize 250GSM",
          description:
            "Camisa negra oversize de alta calidad, con cuello que no se deforma, pesada y con estilo. Logo bordado en la parte inferior izquierda.",
          price: 350,
          image: basic_oversize_4,
        },
        {
          name: "Playera negra corte regular 250GSM",
          description:
            "Camisa negra regularfit de alta calidad, con cuello que no se deforma, pesada y con estilo. Logo bordado en la parte inferior izquierda.",
          price: 300,
          image: "",
        },
      ],
    };
  },
  methods: {
    addToCart(product) {
      console.log(`Añadido al carrito: ${product.name}`);
    },
    startCarousel(index) {
      const updateSlide = () => {
        this.currentSlide[index] =
          (this.currentSlide[index] + 1) % this.carouselImages[index].length;
        setTimeout(updateSlide, 5000); 
      };
      setTimeout(updateSlide, 5000);
    },
  },
  mounted() {
    this.carouselImages.forEach((_, index) => {
      this.startCarousel(index);
    });
  },
};
</script>
