<template>
  <section>
    <strong class="display">
      {{ tempoDecorrido }}
    </strong>
  </section>
</template>

<script lang="ts">

import {defineComponent} from "vue";

export default defineComponent({
  name: "CronometroTempo",
  props: {
    tempoEmSegundo: {
      type: Number,
      default: 0
    }
  },
  // conforme informação a ser passada esta função faz a compilação e modificação
  computed: {
    tempoDecorrido () : string {
      // apartir da posição 11 pegar 8 caracter
      // no casa aqui é o formato de hora do javacript
      return new Date(this.tempoEmSegundo * 1000).toISOString().substr(11, 8)

    }
  },
})
</script>
<style>
.display {
  color: var(--texto-primario);
}
</style>