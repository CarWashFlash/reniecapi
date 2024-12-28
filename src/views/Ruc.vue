<template>
    <div>
        <div class="container py-6">
            <img src="@/assets/sunat.jpg" alt="Logo" class="mx-auto mb-6 w-40 h-40 border-4 border-white rounded-full">
            <h1 class="text-white font-bold text-4xl text-center mb-6">RUC</h1>
            <h2 class="text-white font-semibold text-2xl text-center mb-4">Ingrese el número de RUC</h2>
            <form @submit.prevent="buscarRuc" class="max-w-md mx-auto">
                <div class="input-group mb-3">
                    
                    <input 
                        type="text" 
                        v-model="numero" 
                        class="form-control rounded-lg p-3 text-gray-800" 
                        placeholder="Número de identificación" 
                        aria-label="Número de identificación" 
                        aria-describedby="button-addon2" 
                        @input="validateRuc" 
                    />
                    <button 
                        class="btn btn-outline-secundary rounded-lg p-3 bg-blue-800 text-white hover:bg-purple-700 transition-colors" 
                        type="submit" 
                        id="button-addon2"
                        :disabled="numero.length !== 11"
                    >
                        Consultar
                    </button>
                </div>
                <p v-if="numero && numero.length !== 11" class="text-red-500 text-center mt-2">El número de RUC debe tener exactamente 11 dígitos.</p>
            </form>
        </div>

        <div v-if="ruc.length > 0 && ruc[0]" class="result-container mt-8">
            <h3 class="text-purple-300 font-bold text-2xl mb-4 text-center">DATOS DEL RUC</h3>
            <div class="card bg-transparent border-1 border-purple-500 rounded-lg p-6 shadow-lg max-w-3xl mx-auto">
                <div class="card-body text-white text-left">
                    <div class="mb-2 text-xs">
                        <strong class="text-purple-500">RUC:</strong>
                        <span class="text-gray-300">{{ ruc[0].number }}</span>
                    </div>
                    <div class="mb-2 text-xs">
                        <strong class="text-purple-500">Nombre completo:</strong>
                        <span class="text-gray-300">{{ ruc[0].name }}</span>
                    </div>
                    <div class="mb-2 text-xs">
                        <strong class="text-purple-500">Linea de negocio:</strong>
                        <span class="text-gray-300">{{ ruc[0].business_line }}</span>
                    </div>
                    <div class="mb-2 text-xs">
                        <strong class="text-purple-500">Estado:</strong>
                        <span class="text-gray-300">{{ ruc[0].status }}</span>
                    </div>
                    <div class="mb-2 text-xs">
                        <strong class="text-purple-500">Domilio condiciones:</strong>
                        <span class="text-gray-300">{{ ruc[0].domicile_conditions }}</span>
                    </div>
                    <div class="mb-2 text-xs">
                        <strong class="text-purple-500">Domilio Ubigeo:</strong>
                        <span class="text-gray-300">{{ ruc[0].ubigeo }}</span>
                    </div>
                    <div class="mb-2 text-xs">
                        <strong class="text-purple-500">Departamento:</strong>
                        <span class="text-gray-300">{{ ruc[0].department }}</span>
                    </div>
                    <div class="mb-2 text-xs">
                        <strong class="text-purple-500">Provincia:</strong>
                        <span class="text-gray-300">{{ ruc[0].province }}</span>
                    </div>
                    <div class="mb-2 text-xs">
                        <strong class="text-purple-500">Distrito:</strong>
                        <span class="text-gray-300">{{ ruc[0].district }}</span>
                    </div>
                    <div class="mb-2 text-xs">
                        <strong class="text-purple-500">Direccion:</strong>
                        <span class="text-gray-300">{{ ruc[0].address }}</span>
                    </div>
                    <div class="mb-2 text-xs">
                        <strong class="text-purple-500">Dia de creacion:</strong>
                        <span class="text-gray-300">{{ ruc[0].date_creation }}</span>
                    </div>
                    <div class="mb-2 text-xs">
                        <strong class="text-purple-500">Dia de actualizacion:</strong>
                        <span class="text-gray-300">{{ ruc[0].date_update }}</span>
                    </div>
                    <div class="mb-2 text-xs">
                        <strong class="text-purple-500">Codigo de persona:</strong>
                        <span class="text-gray-300">{{ ruc[0].person_type_code }}</span>
                    </div>
                    <div class="mb-2 text-xs">
                        <strong class="text-purple-500">Tipo persona:</strong>
                        <span class="text-gray-300">{{ ruc[0].person_type }}</span>
                    </div>
                    <div class="mb-2 text-xs">
                        <strong class="text-purple-500">Zona:</strong>
                        <span class="text-gray-300">{{ ruc[0].zone }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert';

export default {

    name: 'RucPage',

    data() {
        return {
            numero: '',  
            ruc: [],     
        };
    },
    methods: {
        // Aseguramos que solo se ingresen números y limitamos a 11 caracteres
        validateRuc() {
            this.numero = this.numero.replace(/\D/g, '').slice(0, 11);
        },

        buscarRuc() {
            if (this.numero.length !== 11) {
                swal("Error", "El número de RUC debe tener 11 dígitos.", "error");
                return;
            }

            const token = 'b9cfe8f25e95bf5a7dc0d043433c20f2e204dc4665767aa6df15a8ff068fe041';
            axios
                .post('https://api.consultasperu.com/api/v1/query', {
                    token: token,
                    type_document: 'ruc',
                    document_number: this.numero,
                })
                .then((response) => {
                    if (response.data.success) {
                        this.ruc = [response.data.data];
                        swal("Datos obtenidos", "Correctamente", "success");
                    } else {
                        this.ruc = [];
                        swal("No se encontró el RUC", "Intenta con otro número", "error");
                    }
                })
                .catch(() => {
                    this.ruc = [];
                    swal("Error", "Ocurrió un error al consultar el RUC. Intenta nuevamente.", "error");
                });
        },
    },
};
</script>