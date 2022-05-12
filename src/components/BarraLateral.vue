<template>
<header>
  <h1>
    <img class="imagem" src="../assets/logo-do-vuejs.png" alt="">
  </h1>
  <button class="button" @click="alterarTema">
    {{ textoBotao }}
  </button>
</header>
</template>

<script lang="ts">

import { defineComponent} from "vue";

export default defineComponent({
  name: "BarraLateral",
  emits: ['aoTemaAlterado'],
  data () {
    return {
      modoEscuro: false
    }
  },
  computed: {
    textoBotao() {
      if (this.modoEscuro) {
        return 'Desativar modo escuro'
      }else {
        return 'Ativar modo escuro'
      }
    }
  },
  methods: {
    alterarTema() {
      this.modoEscuro = !this.modoEscuro
      this.$emit('aoTemaAlterado', this.modoEscuro)
    }
  }

})


</script>

<style scoped>
.imagem {
  border-radius: 12px;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.53);
}
header {
  padding: 1rem;
  background: #0d3b66;
  width: 100%;
  height: 100vh;
  text-align: center;
}
@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
</style>