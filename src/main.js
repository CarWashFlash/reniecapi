import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js'; // Importa el enrutador

// Crear la instancia de Vue y usar Vue Router
const app = createApp(App);
app.use(router);

// Monta la aplicación en el contenedor con id 'app'
app.mount('#app');
