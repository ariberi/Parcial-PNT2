<template>
    <div class="container-fluid">
        <div class="page-header">
            <h1>Transformador de texto</h1>
        </div>

        <form class="form-horizontal">
            <div class="form-group">
                <label for="textInput" class="control-label my-2">Ingrese el texto a transformar:</label>
                <input
                    type="text"
                    id="textInput"
                    v-model="text"
                    class="form-control"
                    placeholder="Escriba aquí el texto a transformar"
                />
            </div>
        </form>

        <div class="my-2">
            <div>
                <p><strong>Cantidad de caracteres =</strong> {{ lengthText }}</p>
                <ol>
                    <li><strong>Codificado:</strong> {{ encodeString }}</li>
                    <li><strong>Mayúsculas:</strong> {{ transformToUpperCase }}</li>
                    <li><strong>Minúsculas:</strong> {{ transformToLowerCase }}</li>
                    <li><strong>Intercalar mayúsculas y minúsculas (primera mayúscula):</strong> {{ alternateCaseFirstUpper }}</li>
                    <li><strong>Intercalar mayúsculas y minúsculas (primera minúscula):</strong> {{ alternateCaseFirstLower }}</li>
                </ol>
            </div>
        </div>
    </div>

</template>



<script>


export default {
    name: "texttransformer",
    data() {
        return {
            text: "",
        };
    },
    computed: {
        transformToUpperCase(){
            return this.text.toUpperCase();

        },
        transformToLowerCase(){
            return this.text.toLowerCase();
        },
        encodeString(){
            let newString = this.text.toLowerCase();
            newString = newString.replace(
                /[aeiou]/gi, (word) => {
                    switch (word) {
                        case 'a': return 'u';
                        case 'e': return 'o';
                        case 'o': return 'e';
                        case 'u': return 'a';
                        default: return word;
                    }
                });
            return newString;
        },
        alternateCaseFirstUpper() {
            let result = '';
            for (let i = 0; i < this.text.length; i++) {
                result += (i % 2 === 0 ? this.text[i].toUpperCase() : this.text[i].toLowerCase());
            }
            return result;
        },
        alternateCaseFirstLower() {
            let result = '';
            for (let i = 0; i < this.text.length; i++) {
                result += (i % 2 === 0 ? this.text[i].toLowerCase() : this.text[i].toUpperCase());
            }
            return result;
        },
        lengthText(){
            return this.text.length;
        }
    },
}

</script>

<style scoped>

</style>