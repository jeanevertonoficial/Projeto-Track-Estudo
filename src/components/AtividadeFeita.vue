<template>

  <BoxPadrao>
    <div class="columns">
      <div class="column is-7">
        {{ tarefa.descricaoDaTarefa || 'Tarefa sem descrição' }}
      </div>
      <div class="column temp">
        <CronometroTempo :tempo-em-segundo="tarefa.duracaoEmSegundos"/>
      </div>
    </div>
  </BoxPadrao>

</template>

<script lang="ts">

import {defineComponent, PropType} from "vue";
import CronometroTempo from "@/components/CronometroTempo.vue";
import BoxPadrao from "@/components/BoxPadrao.vue";
import ITarefas from "@/interface/ITarefas";

export default defineComponent({
  name: "AtividadeFeita",
  components: {CronometroTempo, BoxPadrao},
  props: {
    tarefa: {
      type: Object as PropType<ITarefas>,
      required: true
    }
  }
});

</script>

<style scoped>

</style>