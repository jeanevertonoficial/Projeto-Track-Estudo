<template>

  <FormularioCad @aoSalvarTarefa="salvarTarefa"/>
  <div class="lista">
    <BoxPadrao v-if="listaVazia">
      Você não iniciou nenhuma tafera hoje :[
    </BoxPadrao>
    <AtividadeFeita v-for="tarefa in tarefas" :key="tarefa.id" :tarefa="tarefa"/>
  </div>

</template>

<style>
</style>
<script lang="ts">

import {defineComponent} from "vue";
import FormularioCad from "../components/FormularioCad.vue";
import AtividadeFeita from "../components/AtividadeFeita.vue";
import ITarefas from "../interface/ITarefas";
import BoxPadrao from "../components/BoxPadrao.vue";

export default defineComponent({
  name: 'App',
  components: {
    BoxPadrao,
    AtividadeFeita,
    FormularioCad
  },
  data() {
    return {
      tarefas: [] as ITarefas[],
      modoEscuro: false
    }
  },
  computed: {
    listaVazia(): boolean {
      return this.tarefas.length === 0
    }
  },
  methods: {
    salvarTarefa(tarefa: ITarefas) {
      this.tarefas.push(tarefa)
    }
  }
})

</script>

<style>
.lista {
  width: 90%;
  margin: auto;
}
</style>