<template>
  <main class="columns is-gapless is-muiltiline " :class="{'modo-escuro': modoEscuro}">
    <div class="column is-one-quarter">
      <BarraLateral @aoTemaAlterado="trocarTema"/>
    </div>
    <div class="column is-three-quarter conteudo">
      <router-view/>
    </div>
  </main>
</template>

<style>
</style>
<script lang="ts">

import {defineComponent} from "vue";
import BarraLateral from "@/components/BarraLateral.vue";
import ITarefas from "@/interface/ITarefas";

export default defineComponent ({
  name:'App',
  components: {
    BarraLateral,
  },
  data () {
    return {
      tarefas: [] as ITarefas[],
      modoEscuro: false
    }
  },
  methods: {
    trocarTema(modoEscuro: boolean) {
      this.modoEscuro = modoEscuro
    }
  }
})

</script>

<style>

main {
  --bg-primario: #fff;
  --texto-primario: black;
}

main.modo-escuro {
  --bg-primario: #252525;
  --texto-primario: white;
}

.conteudo {
  background: var(--bg-primario);
}
</style>