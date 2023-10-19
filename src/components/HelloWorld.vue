
<script setup>
import { defineProps, ref } from 'vue';
import Transposicion from '../assets/Encrypt.js';
import DescifradoTransposicion from '../assets/DesEncrypt';

const { msg } = defineProps({
  msg: String,
});

const mensaje = ref('');
const llave = 3
const Encriptado = ref('');
const mensajeEncriptado = ref('');
const menDescifrado = ref('');

const encryptTrans = () => {
  mensajeEncriptado.value = Transposicion(mensaje.value, llave);
};

const DesEncrypt = () => {
  menDescifrado.value = DescifradoTransposicion(Encriptado.value, llave);
};
</script>

<template>
  <div class="container">
    <h1 class="text-center">{{ msg }}</h1>
    <section class="my-5">
      <div class="mb-3">
        <label class="form-label">Encriptar:</label>
        <input type="text" id="mensaje" v-model="mensaje" class="form-control" />
      </div>
      <button @click="encryptTrans" class="btn btn-primary">Cifrar</button>
      <div class="mt-3">
        <p>Mensaje Cifrado: {{ mensajeEncriptado }}</p>
      </div>
    </section>
    <section class="my-5">
      <div class="mb-3">
        <label class="form-label">Desencriptar:</label>
        <input type text id="Encriptado" v-model="Encriptado" class="form-control" />
      </div>
      <button @click="DesEncrypt" class="btn btn-primary">Descifrar</button>
      <div class="mt-3">
        <p>Mensaje Descifrado: {{ menDescifrado }}</p>
      </div>
    </section>
  </div>
</template>
