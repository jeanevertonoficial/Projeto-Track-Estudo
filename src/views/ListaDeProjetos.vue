<template>
  <section class="projetos">
    <h1 class="title">Projetos</h1>

    <form @submit.prevent="salvar">
      <div class="field">
        <label for="nomeDoProjeto" class="label">Nome do Projeto</label>
        <input
            type="text"
            class="input"
            v-model="nomeDoProjeto"
            id="nomeDoProjeto"
        />
      </div>
      <div class="field">
        <button type="submit" class="button">Salvar</button>
      </div>
    </form>
    <div class="table is-fullwidth">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
        </tr>
      </thead>
      <tbody>
      <tr v-for="projeto in projetos" :key="projeto.id">
        <td>{{ projeto.id }}</td>
        <td>{{ projeto.nome }}</td>
      </tr>
      </tbody>
    </div>
  </section>
</template>

<script lang="ts">

import {defineComponent} from "vue";
import IProjetos from "@/interface/IProjetos";

export default defineComponent({
  name: "ListaDeProjetos",
  data () {
    return {
      nomeDoProjeto: '',
      projetos: [] as IProjetos[]
    }
  },
  methods :{
    salvar() {
      const projeto: IProjetos = {
        nome: this.nomeDoProjeto,
        id: new Date().toISOString()
      }
      this.projetos.push(projeto)
      this.nomeDoProjeto = ''
    }
  }
})

</script>

<style scoped>
.projetos {
  padding: 1.25rem;
}
.table.is-fullwidth {
  display: inline-table;
}
</style>