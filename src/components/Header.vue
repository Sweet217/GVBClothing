<template>
  <header
    :class="[
      'py-4 fixed top-0 left-0 w-full transition-all duration-300 z-50',
      isScrolled ? 'bg-transparent text-white shadow-lg' : 'bg-black text-white',
    ]"
  >
    <div class="container mx-auto flex justify-between items-center px-6">
      <!-- Logo and Title -->
      <div class="flex items-center">
        <a
          :class="[
            'font-new-rocker text-3xl',
            isScrolled ? 'text-6xl mt-10' : 'text-3xl',
          ]"
          >GBV</a
        >
        <a
          :class="[
            'ml-1 font-new-rocker text-1xl',
            isScrolled ? 'text-4xl mt-10' : 'text-1xl',
          ]"
        >
          Clothing</a
        >
      </div>

      <!-- Navigation Links -->
      <nav class="flex items-center w-full justify-between ml-4">
        <!-- Centered Links -->
        <div class="flex justify-center flex-1 space-x-10 mr-20">
          <!-- Add classes to hide these links on scroll down -->
          <router-link
            to="/"
            class="font-super-funky hover:text-purple-100"
            :class="{ 'opacity-0': isScrollingDown }"
          >
            Home
          </router-link>
          <router-link
            to="/locker"
            class="font-super-funky hover:text-purple-100"
            :class="{ 'opacity-0': isScrollingDown }"
          >
            Locker
          </router-link>
          <router-link
            to="/contact"
            class="font-super-funky hover:text-purple-100"
            :class="{ 'opacity-0': isScrollingDown }"
          >
            Contact
          </router-link>
        </div>

        <!-- Cart Icon -->
        <router-link
          to="/cart"
          class="font-super-funky hover:text-purple-100 flex items-center mr-20"
        >
          <span class="material-icons">shopping_cart</span>
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      lastScrollY: 0,
      isScrollingDown: false,
      isScrolled: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const currentScrollY = window.scrollY;
      this.isScrollingDown = currentScrollY > this.lastScrollY;
      this.lastScrollY = currentScrollY;

      this.isScrolled = currentScrollY > 50;
    },
  },
};
</script>

<style scoped>
header {
  z-index: 50;
  transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease,
    opacity 0.3s ease;
}

header.bg-transparent {
  box-shadow: none;
}

body {
  margin-top: 80px;
}

img {
  transition: opacity 0.3s ease;
}
</style>
