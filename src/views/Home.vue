<template>
  <div class="bg-gradient-to-r from-teal-500 to-cyan-600 text-white overflow-hidden">
    <div class="container mx-auto px-6 sm:px-12 py-24">

      <div class="text-center mb-16">
        <h1 class="text-4xl font-bold text-white mb-4">
          Hola, ¿qué necesitas consultar hoy?
        </h1>

        <div class="grid  sm:grid-cols-3 gap-6 justify-center mb-16">
          <router-link to="/ruc"
            class="border-2 border-red-300 text-white font-semibold py-2 px-6 rounded-full hover:bg-red-300 hover:text-white transition-all">
            <button>
              RUC
            </button>
          </router-link>
          <router-link to="/principal"
            class="border-2 border-purple-300 text-white font-semibold py-2 px-6 rounded-full hover:bg-purple-300 hover:text-white transition-all">
            <button>
              DNI
            </button>
          </router-link>    
          <router-link to="/placa"
            class="border-2 border-purple-300 text-white font-semibold py-2 px-6 rounded-full hover:bg-purple-300 hover:text-white transition-all">
            <button>
              PLACA DE VEHÍCULO
            </button>
          </router-link>          
        </div>

        <div class="text-center mb-16">
          <p class="text-2xl font-extrabold text-purple-300 mb-2">
            Simple, fácil y rápido
          </p>
          <p class="text-lg font-medium text-white mb-20">
            API para desarrolladores
          </p>
        </div>

      </div>

      <div class="flex flex-col md:flex-row justify-center items-center md:items-start text-left"
        style="margin-top: 180px">
        <div class="mb-16 md:mb-0 md:w-1/2 text-center md:text-left flex flex-col items-center">
          <h1 class="text-2xl font-bold text-purple-300 mb-2">
            TODO LO QUE NECESITAS
          </h1>
          <h2 class="text-3xl font-semibold text-white mb-4">
            Nuestros servicios
          </h2>
        </div>

        <div class="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 px-6 max-w-4xl">

          <div class="text-gray-200">
            <h3 class="text-xl font-semibold text-white mb-2">RUC</h3>
            <p class="text-sm text-purple-300 mb-4">
              Nuestra plataforma valida los datos de empresas con información oficial de Sunat.
            </p>
          </div>

          <div class="text-gray-200">
            <h3 class="text-xl font-semibold text-white mb-2">DNI</h3>
            <p class="text-sm text-purple-300 mb-4">
              Servicio de consultas de DNI en tiempo real, obteniendo datos verídicos de fuentes públicas oficiales.
            </p>
          </div>

          <div class="text-gray-200">
            <h3 class="text-xl font-semibold text-white mb-2">Tipo de Cambio</h3>
            <p class="text-sm text-purple-300 mb-4">
              Consulta de tipo de cambio oficial con información de la SBS.
            </p>
          </div>

          <div class="text-gray-200">
            <h3 class="text-xl font-semibold text-white mb-2">Validez de CPE</h3>
            <p class="text-sm text-purple-300 mb-4">
              Verifica la validez de los comprobantes electrónicos enviados a Sunat.
            </p>
          </div>

          <div class="text-gray-200">
            <h3 class="text-xl font-semibold text-white mb-2">Carnet de Extranjería</h3>
            <p class="text-sm text-purple-300 mb-4">
              Consulta de carnet de extranjería en tiempo real, obteniendo datos verídicos de fuentes públicas
              oficiales.
            </p>
          </div>

          <div class="text-gray-200">
            <h3 class="text-xl font-semibold text-white mb-2">Placa de Vehículo</h3>
            <p class="text-sm text-purple-300 mb-4">
              Consulta de placa de vehículos en tiempo real, con información verídica de fuentes públicas oficiales.
            </p>
          </div>

          <div class="text-gray-200">
            <h3 class="text-xl font-semibold text-white mb-2">Licencia de Conducir</h3>
            <p class="text-sm text-purple-300 mb-4">
              Consulta de licencia de conducir en tiempo real, obteniendo datos verídicos de fuentes públicas oficiales.
            </p>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>


<script>
import imageRe from '@/assets/reniec.png';
import imageSu from '@/assets/sunat.jpg';

export default {
  name: 'HomePage',
  data() {
    return {
      imageRe: imageRe,
      imageSu: imageSu,
    };
  },
};
</script>

<style scoped>
.card-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.d-flex {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
}
</style>
