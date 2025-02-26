<template>
  <div>
    <!-- Beta Message -->
    <div
      v-if="betaMessageVisible"
      class="bg-red-500 text-white p-3 text-center relative mt-20"
    >
      <span>This is a beta!</span>
      <button
        @click="betaMessageVisible = false"
        class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white font-bold"
      >
        ✕
      </button>
    </div>

    <HeaderComponent />

    <!-- Upload Section -->
    <section class="p-6">
      <h2 class="text-2xl font-bold mb-4">Upload Clothing Items</h2>
      <form @submit.prevent="uploadItem" class="space-y-4">
        <div>
          <label class="block font-semibold mb-2">Clothing Type</label>
          <select v-model="newItem.type" class="border p-2 rounded w-full">
            <option value="top">Top</option>
            <option value="bottom">Bottom</option>
            <option value="shoes">Shoes</option>
            <option value="accessory">Accessory</option>
          </select>
        </div>
        <div>
          <label class="block font-semibold mb-2">Upload Image</label>
          <input
            type="file"
            @change="handleFileUpload"
            class="border p-2 rounded w-full"
          />
        </div>
        <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded">
          Upload
        </button>
      </form>
    </section>

    <!-- Clothing Library Section -->
    <section class="p-6">
      <h2 class="text-2xl font-bold mb-4">Your Clothing Library</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div
          v-for="(item, index) in clothingLibrary"
          :key="index"
          class="border rounded p-2"
        >
          <img
            :src="item.image"
            alt="Clothing Item"
            class="w-full h-32 object-cover mb-2"
          />
          <p class="text-center capitalize">{{ item.type }}</p>
        </div>
      </div>
    </section>

    <!-- Outfit Builder Section -->
    <section class="p-6 flex flex-wrap md:flex-nowrap gap-6">
      <div class="w-full md:w-1/2 border rounded p-4">
        <h2 class="text-2xl font-bold mb-4">Build an Outfit</h2>
        <div class="flex flex-wrap gap-4">
          <div
            v-for="type in ['top', 'bottom', 'shoes', 'accessory']"
            :key="type"
            class="w-full md:w-full border rounded p-2"
          >
            <h3 class="font-semibold capitalize mb-2">{{ type }}</h3>
            <select v-model="outfit[type]" multiple class="border p-2 rounded w-full">
              <option
                v-for="item in clothingLibrary.filter((item) => item.type === type)"
                :key="item.image"
                :value="item.image"
              >
                {{ item.image.split("/").pop() }}
              </option>
            </select>
          </div>
        </div>
      </div>

      <div class="w-full md:w-1/2 border rounded p-4">
        <h2 class="text-2xl font-bold mb-4">Outfit Preview</h2>
        <div class="flex flex-col items-center gap-4">
          <div v-for="type in ['top', 'bottom', 'shoes', 'accessory']" :key="type">
            <div
              v-for="(item, idx) in outfit[type]"
              :key="idx"
              class="border rounded overflow-hidden mb-2"
            >
              <img :src="item" alt="Selected Item" class="w-32 h-32 object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "../components/Header.vue";
import FooterComponent from "../components/Footer.vue";

export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
  data() {
    return {
      betaMessageVisible: true, // Controls visibility of the beta message
      newItem: {
        type: "",
        image: null,
      },
      clothingLibrary: [],
      outfit: {
        top: [],
        bottom: [],
        shoes: [],
        accessory: [],
      },
    };
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.newItem.image = URL.createObjectURL(file);
      }
    },
    uploadItem() {
      if (this.newItem.type && this.newItem.image) {
        this.clothingLibrary.push({ ...this.newItem });
        this.newItem = { type: "", image: null };
      } else {
        alert("Please select a type and upload an image.");
      }
    },
  },
};
</script>

<style scoped>
/* No additional styles needed, using Tailwind for styling */
</style>
