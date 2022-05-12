<template>
  <div class="box">
    <div class="columns">
      <div
          class="column is-8"
          role="form"
          arie-label="Formulário para criação de um nova tafera">
        <input
            type="text"
            class="input"
            placeholder="Qual tafera você deseja iniciar?"
            v-model="descricao"
        />
      </div>
      <div class="column">
        <TemporizadorTime @aofinalizarOTempo="finalizarAtividade"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import TemporizadorTime from "@/components/TemporizadorTime.vue";

export default defineComponent({
  name: "FormularioCad",
  emits:['aoSalvarTarefa'],
  components: {TemporizadorTime},
  data () {
    return {
      descricao: null
    }
  },
  methods: {
    finalizarAtividade(tempoDecorrido: number): void {
      this.$emit('aoSalvarTarefa',
          {
            duracaoEmSegundos: tempoDecorrido,
            descricaoDaTarefa: this.descricao
          });

      this.descricao = null;
    }
  }
});
</script>
