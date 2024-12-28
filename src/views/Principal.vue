<template>
  <div class="container py-6">
    <img src="@/assets/reniec.png" alt="Logo" class="mx-auto mb-6 w-80 h-auto border-2 border-white rounded-full">
    <h1 class="text-white font-bold text-4xl text-center mb-6">DNI</h1>

    <h2 class="text-white font-semibold text-2xl text-center mb-4">Ingrese el número de identificación</h2>
    
    <form @submit.prevent="buscarDni" class="max-w-md mx-auto">
      <div class="input-group mb-3">
        <input type="text" 
        v-model="dni" 
        class="form-control rounded-lg p-3 text-gray-800"
          placeholder="Número de identificación" 
          aria-label="Número de identificación" 
          aria-describedby="button-addon2"
          @input="validaDni" 
          />
        <button
          class="btn btn-outline-secundary rounded-lg p-3 bg-blue-800 text-white hover:bg-purple-700 transition-colors"
          type="submit" id="button-addon2" :disabled="dni.length !== 8">
          Consultar
        </button>
      </div>
      <p v-if="dni && dni.length !== 8" class="text-red-500 text-center mt-2">El número de DNI debe tener exactamente 8
        dígitos.</p>
    </form>

    <div v-if="reniec.length" class="result-container mt-8">
      <h3 class="text-purple-300 font-bold text-2xl mb-4 text-center">DATOS DEL DNI</h3>

      <div class="card bg-transparent border-1 border-purple-500 rounded-lg p-6 shadow-lg max-w-3xl mx-auto">
        <div class="card-body text-white text-left">
          <div class="mb-2 text-xs">
            <strong class="text-purple-500">DNI:</strong>
            <span class="text-gray-300">{{ reniec[0].number }}</span>
          </div>
          <div class="mb-2 text-xs">
            <strong class="text-purple-500">Nombres completos:</strong>
            <span class="text-gray-300">{{ reniec[0].full_name }}</span>
          </div>
          <div class="mb-2 text-xs">
            <strong class="text-purple-500">Nombres:</strong>
            <span class="text-gray-300">{{ reniec[0].name }}</span>
          </div>
          <div class="mb-2 text-xs">
            <strong class="text-purple-500">Apellido paterno:</strong>
            <span class="text-gray-300">{{ reniec[0].surname.split(' ')[0] }}</span>
          </div>
          <div class="mb-2 text-xs">
            <strong class="text-purple-500">Apellido materno:</strong>
            <span class="text-gray-300">{{ reniec[0].surname.split(' ')[1] }}</span>
          </div>
          <div class="mb-2 text-xs">
            <strong class="text-purple-500">Código de verificación:</strong>
            <span class="text-gray-300">{{ reniec[0].verification_code || 'No disponible' }}</span>
          </div>
          <div class="mb-2 text-xs">
            <strong class="text-purple-500">Fecha de nacimiento:</strong>
            <span class="text-gray-300">{{ reniec[0].date_of_birth }}</span>
          </div>
          <div class="mb-2 text-xs">
            <strong class="text-purple-500">Departamento:</strong>
            <span class="text-gray-300">{{ reniec[0].department }}</span>
          </div>
          <div class="mb-2 text-xs">
            <strong class="text-purple-500">Provincia:</strong>
            <span class="text-gray-300">{{ reniec[0].province }}</span>
          </div>
          <div class="mb-2 text-xs">
            <strong class="text-purple-500">Distrito:</strong>
            <span class="text-gray-300">{{ reniec[0].district }}</span>
          </div>
          <div class="mb-2 text-xs">
            <strong class="text-purple-500">Dirección:</strong>
            <span class="text-gray-300">{{ reniec[0].address }}</span>
          </div>
          <div class="mb-2 text-xs">
            <strong class="text-purple-500">Ubigeo:</strong>
            <span class="text-gray-300">{{ reniec[0].ubigeo }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.result-container {
  max-width: 90%;
  margin: 0 auto;
  padding: 20px;
}

.card {
  border-radius: 10px;
}

.card-body {
  font-size: 0.75rem;
}

.text-xs {
  font-size: 0.75rem;
}

.card {
  background-color: transparent;
  border: 1px solid white;
}

.card-body {
  padding: 20px;
}

.card-body .mb-2 {
  margin-bottom: 0.75rem;
}

.card-body strong {
  font-size: 0.875rem;
}
</style>


<script>
import axios from 'axios';
import swal from 'sweetalert';

export default {
  name: 'PrincipalPage',
  data() {
    return {
      dni: '',
      reniec: [],
    };
  },
  methods: {
    validaDni() {
      this.dni = this.dni.replace(/\D/g, '').slice(0, 8);
    },

    buscarDni() {

      if (this.dni.length !== 8) {
        swal("Error", "El número de DNI debe tener exactamente 8 dígitos.", "error");
        return;
      }

      const token = 'b9cfe8f25e95bf5a7dc0d043433c20f2e204dc4665767aa6df15a8ff068fe041';
      axios
        .post('https://api.consultasperu.com/api/v1/query', {
          token: token,
          type_document: 'dni',
          document_number: this.dni,
        })
        .then((response) => {
          if (response.data.success) {
            this.reniec = [response.data.data];
            swal("Datos obtenidos", "Correctamente", "success");
          }else{
            this.reniec = [];
            swal("No se encontró el DNI", "Intenta con otro número", "error");
          }
        })
        .catch((error) => {
          console.error('Error al obtener los datos:', error);
          this.reniec = [];
        });
    },
  },
};
</script>