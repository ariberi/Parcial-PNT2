import {createRouter, createWebHistory} from "vue-router"

import TextTransformer from "./components/TextTransformer.vue";

const routes = [
    /* --- definicion de la ruta raiz*/
    // {path: '/', component: Binding},
    {path: '/texttransformer', component: TextTransformer},

    /* --- definicion de las rutas activas/componentes */
    {path: '/texttransformer', component: TextTransformer},


    /* --- definicion de las rutas no existentes por default */
    {path: '/:pathMatch(.*)*', redirect: '/texttransformer'},

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
