<script setup lang="ts">
const contactInfo = [
  { icon: 'fas fa-envelope', label: 'Email', value: 'library@example.com' },
  { icon: 'fas fa-phone', label: 'Teléfono', value: '+57 (604) 123 4567' },
  { icon: 'fas fa-location-dot', label: 'Dirección', value: 'Cra. 43A #1-50, Medellín' },
  { icon: 'fas fa-clock', label: 'Horario', value: 'Lunes a viernes, 8:00 a.m. - 6:00 p.m.' },
];
</script>

<template>
  <section class="mt-4 mb-4">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl font-bold text-gray-800 text-center">Contact Page</h2>

      <p class="mt-4 text-center text-gray-600">
        ¿Tienes dudas sobre la biblioteca? Escríbenos y con gusto te ayudamos.
      </p>

      <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="item in contactInfo"
          :key="item.label"
          class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex items-center"
        >
          <div class="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mr-4">
            <i :class="item.icon" class="text-white"></i>
          </div>
          <div>
            <p class="text-sm font-semibold text-gray-800">{{ item.label }}</p>
            <p class="text-sm text-gray-600">{{ item.value }}</p>
          </div>
        </div>
      </div>

      <div class="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 class="text-xl font-bold text-gray-800 mb-4">Síguenos</h3>
        <div class="flex space-x-4">
          <a
            href="#"
            class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-500 hover:text-white transition duration-200"
          >
            <i class="fab fa-facebook-f"></i>
          </a>
          <a
            href="#"
            class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-500 hover:text-white transition duration-200"
          >
            <i class="fab fa-twitter"></i>
          </a>
          <a
            href="#"
            class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-500 hover:text-white transition duration-200"
          >
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
