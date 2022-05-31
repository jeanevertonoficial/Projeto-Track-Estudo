<template>
<header>
  <h1>
    <img class="imagem" src="../assets/logo-do-vuejs.png" alt="">
  </h1>
  <button class="button" @click="alterarTema">
    {{ textoBotao }}
  </button>
  <nav class="painel mt-5">
    <ul>
      <li>
        <router-link to="/" class="link">
          <i class="fas fa-tasks">
            Tarefas
          </i>
        </router-link>
      </li>
      <li>
        <router-link to="/Projetos" class="link">
          <i class="fas fa-project-diagram">
            Projetos
          </i>
        </router-link>
      </li>
    </ul>
  </nav>
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

.painel {
  display: flex;
}
.painel li {
  margin: 8px 0;
}
.link {
  color: #ffffff;
}
.link:hover{
  color: #faf0ca;
}
.link.router-link-active{
  color: #faf0ca;
}
</style>