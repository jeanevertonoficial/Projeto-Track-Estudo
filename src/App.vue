<template>

  <main class="columns is-gapless is-muiltiline">
    <div class="column is-one-quarter">
      <BarraLateral/>
    </div>
    <div class="column is-three-quarter">
      <FormularioCad/>
    </div>
  </main>

</template>

<style>
</style>
<script lang="ts">

import {defineComponent} from "vue";
import BarraLateral from "@/components/BarraLateral.vue";
import FormularioCad from "@/components/FormularioCad.vue";

export default defineComponent ({
  name:'App',
  components: {
    BarraLateral,
    FormularioCad
  }
})

</script>