<template>
    <div>
        <div class="container py-6"> 
            <img src="@/assets/Placa.jpg" alt="Logo" class="mx-auto mb-6 w-40 h-auto border-2 border-white rounded-full">
            <h1 class="text-white font-bold text-4xl text-center mb-6">PLACA DE VEHÍCULO</h1>
            <h2 class="text-white font-semibold text-2xl text-center mb-4">Ingrese el número de placa</h2>
            <form @submit.prevent="buscarPlaca" class="max-w-md mx-auto">
                <div class="input-group mb-3">
                    <input 
                        type="text" 
                        v-model="numero"
                        class="form-control rounded-lg p-3 text-gray-800" 
                        placeholder="Número de identificación" 
                        aria-label="Número de identificación" 
                        aria-describedby="button-addon2" 
                        @input = "validatePlaca"
                    />
                    <button 
                        class="btn btn-outline-secundary rounded-lg p-3 bg-blue-800 text-white hover:bg-purple-700 transition-colors" 
                        type="submit" 
                        id="button-addon2"
                        :disabled="numero.length !== 6">
                        Consultar
                    </button>
                </div>
                <p v-if="numero && numero.length !== 6" class="text-red-500 text-center mt-2">La placa debe tener exactamente 6 dígitos.</p>
            </form>
        </div>

        <!-- Resultados de la búsqueda -->
        <div v-if="placa.length > 0 && placa[0]" class="result-container mt-8">
            <h3 class="text-purple-300 font-bold text-2xl mb-4 text-center">DATOS DEL VEHÍCULO</h3>
            <div class="card bg-transparent border-1 border-purple-500 rounded-lg p-6 shadow-lg max-w-3xl mx-auto">
                <div class="card-body text-white text-left">
                    <div class="mb-2 text-xs">
                        <strong class="text-purple-500">Marca:</strong>
                        <span class="text-gray-300">{{ placa[0].brand }}</span>
                    </div>
                    <div class="mb-2 text-xs">
                        <strong class="text-purple-500">Modelo:</strong>
                        <span class="text-gray-300">{{ placa[0].model }}</span>
                    </div>
                    <div class="mb-2 text-xs">
                        <strong class="text-purple-500">Placa:</strong>
                        <span class="text-gray-300">{{ placa[0].plate }}</span>
                    </div>
                    <div class="mb-2 text-xs">
                        <strong class="text-purple-500">Color:</strong>
                        <span class="text-gray-300">{{ placa[0].color }}</span>
                    </div>
                    <div class="mb-2 text-xs">
                        <strong class="text-purple-500">Serie:</strong>
                        <span class="text-gray-300">{{ placa[0].serie }}</span>
                    </div>
                    <div class="mb-2 text-xs">
                        <strong class="text-purple-500">VIN:</strong>
                        <span class="text-gray-300">{{ placa[0].vin }}</span>
                    </div>
                    <div class="mb-2 text-xs">
                        <strong class="text-purple-500">Motor:</strong>
                        <span class="text-gray-300">{{ placa[0].motor }}</span>
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
        name: 'PlacaPage',
    

        data() {
            return {
                numero: '',
                placa: [],
            };
        },
    
        methods: {
            validatePlaca() {
                this.numero = this.numero.slice(0, 6);
            },
            buscarPlaca() {
                if (this.numero.length !== 6) {
                    swal("Error", "La placa debe tener exactamente 6 dígitos.", "error");
                    return;
                }
                const token = 'b9cfe8f25e95bf5a7dc0d043433c20f2e204dc4665767aa6df15a8ff068fe041';
                axios
                    .post('https://api.consultasperu.com/api/v1/query/vehicle-plate', {
                        token: token,
                        plate: this.numero,
                    })
                    .then((response) => {
                        if(response.data.success){
                            this.placa = [response.data.data];
                            swal("Datos obtenidos", "Correctamente", "success");
                        }
                        else{
                            this.placa = [];
                            swal("No se encontró la placa", "Intenta con otra placa", "error");
                        }
                    })
                    .catch(() => {
                        this.placa = [];    
                        swal("Error", "Ocurrio un error al consultar la placa. Intenta nuevamente.", "error");
                    });
            },
        },
    };
</script>