<template>
  <div class="relative" style="margin-top: 65px">
    <HeaderComponent v-if="!isModalOpen" />

    <!-- Main Container -->
    <div class="bg-gray-200 py-10 px-10">
      <!-- Carousel -->
      <div class="flex flex-wrap justify-center gap-6 mb-8">
        <section
          v-for="(images, index) in filteredCarouselImages"
          :key="index"
          class="relative h-96 w-full sm:w-64 md:w-72 lg:w-80 xl:w-96 2xl:w-[300px]"
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
      <!--Slogan -->
      <div class="ml-1 font-new-rocker text-4xl text-center text-black mb-5">
        <a>GVB Clothing – Estilo, Calidad y Comodidad 100% Mexicana.</a>
      </div>

      <div class="ml-1 font-new-rocker text-2xl text-center text-black ml-20 mr-20 mb-10">
        <a
          >GVB Clothing es una marca de ropa 100% mexicana que combina estilo, calidad y
          comodidad en cada prenda. Nos inspiramos en la identidad y creatividad de México
          para ofrecer diseños únicos con materiales de calidad premium. Enviamos a toda
          la República, asegurando que cada cliente reciba lo mejor en moda urbana y
          casual.</a
        >
      </div>
      <!-- Products Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-5 gap-10 mr-20 ml-20">
        <div
          class="max-w-xs rounded overflow-hidden shadow-lg bg-white outline-double outline-slate-800 flex flex-col"
          v-for="(product, index) in products"
          :key="index"
        >
          <img
            class="object-contain sm:h-[300px] lg:h-[220px] xl:h-[180px] w-full aspect-[3/4]"
            :src="product.image"
            :alt="product.name"
          />
          <div class="px-4 py-4 flex flex-col flex-grow">
            <h2 class="font-semibold text-l text-gray-800 truncate">
              {{ product.name }}
            </h2>
            <p class="text-gray-600 text-sm mt-2 mb-4 flex-grow">
              {{ product.description }}
            </p>
          </div>
          <div class="px-4 py-4 flex items-center justify-between">
            <span class="font-bold text-lg text-gray-800">{{ product.price }} MXN</span>
            <button
              @click="openModal(product)"
              class="border-2 text-black px-4 py-2 rounded hover:border-slate-500 focus:outline-none focus:ring focus:ring-blue-300"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      v-if="isModalOpen"
      class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300 ease-in-out"
    >
      <div
        class="bg-white p-8 rounded-lg shadow-xl w-full max-w-4xl relative transform scale-95 transition-all duration-500 ease-in-out"
      >
        <button
          @click="closeModal"
          class="absolute top-2 right-2 text-2xl text-gray-800 hover:text-red-500"
        >
          ×
        </button>

        <div class="flex">
          <!-- Main Image -->
          <div
            class="flex-shrink-0 w-1/2 h-96 bg-cover bg-center rounded-lg"
            :style="{ backgroundImage: `url(${selectedImage})` }"
          ></div>

          <!-- Product Description -->
          <div class="ml-8 w-1/2 flex flex-col">
            <h2 class="text-3xl font-semibold text-gray-800">{{ modalProduct.name }}</h2>
            <p class="text-gray-600 text-lg mt-2 mb-4 flex-grow">
              {{ modalProduct.description }}
            </p>

            <!-- Product Images -->
            <div class="mt-4">
              <h3 class="text-xl font-semibold text-gray-800">Imágenes:</h3>
              <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 mt-2">
                <div
                  v-for="(image, index) in modalImages"
                  :key="index"
                  class="w-16 h-16 bg-cover bg-center rounded-lg cursor-pointer"
                  :style="{ backgroundImage: `url(${image})` }"
                  @click="updateMainImage(image)"
                ></div>
              </div>
            </div>

            <!-- Price -->
            <div class="mt-4 flex items-center justify-between">
              <span class="font-bold text-2xl text-gray-800">
                {{ modalProduct.price }} MXN</span
              >
              <a
                href="https://wa.me/523125953394"
                target="_blank"
                class="flex items-center border-2 border-green-500 text-green-500 px-4 py-2 rounded hover:bg-green-500 hover:text-white transition"
              >
                <span class="material-icons mr-2">chat</span>
                WhatsApp
              </a>
            </div>
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
import basic_oversize_1 from "../assets/basic-oversize-1.jpg";
import basic_oversize_2 from "../assets/basic-oversize-2.jpg";
import basic_oversize_3 from "../assets/basic-oversize-3.jpg";
import basic_oversize_4 from "../assets/basic-oversize-4.jpg";
import basic_oversize_5 from "../assets/basic-oversize-5.jpg";
import gvb_on_clothing from "../assets/GVB on clothing.jpg";
import arena_back from "../assets/Arena/Arena Back.png";
import arena_side from "../assets/Arena/Arena Side.png";
import cafe_back from "../assets/Cafe/Cafe Back.png";
import cafe_side from "../assets/Cafe/Cafe Side.png";
import cafe_front from "../assets/Cafe/Cafe Front.jpg";
import gris_oxford_front from "../assets/Gris Oxford/Gris Oxford Front.jpg";
import gris_oxford_side from "../assets/Gris Oxford/Gris Oxford Side.png";
import gris_oxford_croptop_front from "../assets/Gris Oxford/Gris Oxford CropTop Front.png";
import gris_oxford_croptop_side from "../assets/Gris Oxford/Gris Oxford CropTop Side.png";
import rosa_palo_back from "../assets/Rosa Palo/Rosa Palo Back.png";
import rosa_palo_side from "../assets/Rosa Palo/Rosa Palo Side.png";
import colores from "../assets/colores.jpg";
import normal_fit from "../assets/normal_fi-rbg.png";

export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
  data() {
    return {
      carouselImages: [
        [basic_oversize_2, basic_oversize_3, basic_oversize_5],
        [basic_oversize_1, basic_oversize_5, basic_oversize_4],
        [basic_oversize_5, basic_oversize_1, basic_oversize_3],
        [basic_oversize_4, gvb_on_clothing, basic_oversize_2],
      ],
      currentSlide: [0, 0, 0, 0],
      windowWidth: window.innerWidth, // Track screen width
      products: [
        {
          name: "Playera corte oversize 250GSM",
          description:
            "Camisa negra oversize de alta calidad, con cuello que no se deforma, pesada y con estilo. Logo bordado en la parte inferior izquierda.",
          price: 350,
          image: basic_oversize_4,
          images: [
            gvb_on_clothing,
            basic_oversize_1,
            basic_oversize_2,
            basic_oversize_3,
            colores,
          ],
        },
        {
          name: "Playera corte regular 250GSM",
          description:
            "Camisa negra regularfit de alta calidad, con cuello que no se deforma, pesada y con estilo. Logo bordado en la parte inferior izquierda.",
          price: 300,
          image: normal_fit,
          images: [
            gvb_on_clothing,
            basic_oversize_1,
            basic_oversize_2,
            basic_oversize_3,
            colores,
          ],
        },
        {
          name: "Playera Arena Oversize 240GSM",
          description:
            "Camisa corte oversize, suave, fresca y de la más alta calidad, con cuello que no se deforma, pesada y con estilo. Logo bordado en la parte inferior izquierda.",
          price: 350,
          image: arena_back,
          images: [arena_back, arena_side],
        },
        {
          name: "Playera Café Oversize 240GSM",
          description:
            "Camisa corte oversize, suave, fresca y de la más alta calidad, con cuello que no se deforma, pesada y con estilo. Logo bordado en la parte inferior izquierda.",
          price: 350,
          image: cafe_front,
          images: [cafe_back, cafe_side, cafe_front],
        },
        {
          name: "Playera Gris Oxford Oversize 240GSM",
          description:
            "Camisa corte oversize, suave, fresca y de la más alta calidad, con cuello que no se deforma, pesada y con estilo. Logo bordado en la parte inferior izquierda.",
          price: 350,
          image: gris_oxford_front,
          images: [gris_oxford_front, gris_oxford_side],
        },
        {
          name: "Crop Top Gris Oxford Oversize 240GSM",
          description:
            "Crop top oversize, suave, fresco y de la más alta calidad, con cuello que no se deforma, pesado y con estilo. Logo bordado en la parte inferior izquierda.",
          price: 300,
          image: gris_oxford_croptop_front,
          images: [gris_oxford_croptop_front, gris_oxford_croptop_side],
        },
        {
          name: "Playera Rosa Palo Oversize 240GSM",
          description:
            "Camisa corte oversize, suave, fresca y de la más alta calidad, con cuello que no se deforma, pesada y con estilo. Logo bordado en la parte inferior izquierda.",
          price: 350,
          image: rosa_palo_back,
          images: [rosa_palo_back, rosa_palo_side],
        },
      ],
      isModalOpen: false,
      modalProduct: {},
      modalImages: [],
      selectedImage: "",
    };
  },
  computed: {
    filteredCarouselImages() {
      if (this.windowWidth >= 1538) return this.carouselImages; // lg+ → 4 images
      if (this.windowWidth >= 900) return this.carouselImages.slice(0, 3); // md → 3 images
      if (this.windowWidth >= 640) return this.carouselImages.slice(0, 2); // sm → 2 images
      return this.carouselImages.slice(0, 1); // xs → 1 image
    },
  },
  mounted() {
    window.addEventListener("resize", this.updateWindowWidth);
    this.carouselImages.forEach((_, index) => {
      this.startCarousel(index);
    });
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateWindowWidth);
  },
  methods: {
    updateWindowWidth() {
      this.windowWidth = window.innerWidth;
    },
    startCarousel(index) {
      const updateSlide = () => {
        this.currentSlide[index] =
          (this.currentSlide[index] + 1) % this.carouselImages[index].length;
        setTimeout(updateSlide, 5000);
      };
      setTimeout(updateSlide, 5000);
    },
    openModal(product) {
      this.modalProduct = product;
      this.modalImages = product.images;
      this.selectedImage = product.image;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    updateMainImage(image) {
      this.selectedImage = image;
    },
  },
};
</script>
