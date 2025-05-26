<template>
    <div id="appvue" class="container-fluid">
        <div>
            <h1 class="text-center my-4">NT2 - Parcial</h1>
        </div>
        <main>
            <RouterView/>
            <hr>
            <Results/>
        </main>
        <Footer/>
    </div>
</template>

<script>
import Footer from './components/Footer.vue'
import Results from './components/Results.vue'

export default {
    name: 'app',
    components: {
        Footer,
        Results,
    },
}
</script>



<style scoped>

#appvue {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 0 !important;
}

main {
    flex: 1;
    padding: 1rem 1rem 0 1rem;
}


</style>
