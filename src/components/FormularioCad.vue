<template>
  <div class="box formulario">
    <div class="columns">
      <div
          class="column is-5"
          role="form"
          arie-label="Formulário para criação de um nova tafera">
        <input
            type="text"
            class="input"
            placeholder="Qual tafera você deseja iniciar?"
            v-model="descricao"
        />
      </div>
      <div class="column is-3">
        <div class="select">
          <select v-model="idProjeto">
            <option value="">Selecione o projeto</option>
            <option
                :value="projeto.id"
                v-for="projeto in projetos"
                :key="projeto.id"
            >
              {{ projeto.nome }}
            </option>
          </select>
        </div>
      </div>
      <div class="column">
        <TemporizadorTime @aofinalizarOTempo="finalizarAtividade"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent} from "vue";
import TemporizadorTime from "@/components/TemporizadorTime.vue";
import { useStore } from 'vuex'
import {key} from "@/store"

export default defineComponent({
  name: "FormularioCad",
  emits: ['aoSalvarTarefa'],
  components: {TemporizadorTime},
  data() {
    return {
      descricao: null,
      idProjeto: ''
    }
  },
  methods: {
    finalizarAtividade(tempoDecorrido: number): void {
      this.$emit('aoSalvarTarefa',
          {
            duracaoEmSegundos: tempoDecorrido,
            descricaoDaTarefa: this.descricao,
            projeto: this.projetos.find(proj => proj.id == this.idProjeto)
          });

      this.descricao = null;
    }
  },
  setup() {
    const store = useStore(key);
    return {
      projetos: computed(() => store.state.projetos)
    }
  }
});
</script>
<style>
.formulario {
  color: var(--texto-primario);
  background: var(--bg-primario);
}
</style>