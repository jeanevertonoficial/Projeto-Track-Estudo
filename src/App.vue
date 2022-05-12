<template>
  <main class="columns is-gapless is-muiltiline">
    <div class="column is-one-quarter">
      <BarraLateral/>
    </div>
    <div class="column is-three-quarter">
      <FormularioCad @aoSalvarTarefa="salvarTarefa"/>
      <div class="lista">
         <AtividadeFeita  v-for="tarefa in tarefas" :key="tarefa.id" :tarefa="tarefa"/>
        <BoxPadrao v-if="listaVazia">
          Você não iniciou nenhuma tafera hoje :[
        </BoxPadrao>
      </div>
    </div>
  </main>

</template>

<style>
</style>
<script lang="ts">

import {defineComponent} from "vue";
import BarraLateral from "@/components/BarraLateral.vue";
import FormularioCad from "@/components/FormularioCad.vue";
import AtividadeFeita from "@/components/AtividadeFeita.vue";
import ITarefas from "@/interface/ITarefas";
import BoxPadrao from "@/components/BoxPadrao.vue";

export default defineComponent ({
  name:'App',
  components: {
    BoxPadrao,
    AtividadeFeita,
    BarraLateral,
    FormularioCad
  },
  data () {
    return {
      tarefas: [] as ITarefas[]
    }
  },
  computed: {
    listaVazia(): boolean {
      return this.tarefas.length === 0
    }
  },
  methods: {
    salvarTarefa (tarefa: ITarefas){
      this.tarefas.push(tarefa)
    }
  }
})

</script>

<style>
.lista {
  padding: 1.25rem;
}
</style>