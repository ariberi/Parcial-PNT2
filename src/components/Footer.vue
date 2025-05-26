<script>

export default {
    name: 'footerapp',
};
</script>

<template>
    <footer class="footer">
        <div class="logo-container">
            <a href="https://vite.dev" target="_blank">
                <img src="/vite.svg" class="logo" alt="Vite logo" />
            </a>
            <a href="https://vuejs.org/" target="_blank">
                <img src="/vue.svg" class="logo vue" alt="Vue logo" />
            </a>
        </div>
        <p><b>Vite + Vue app made by Ariel Berinstein</b></p>
    </footer>
</template>

<style scoped>

.footer {
    background-color: #f8f8f8; /* Opcional: color de fondo */
    text-align: center;
    padding: 1rem 0;
}

.logo-container {
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

.logo {
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>