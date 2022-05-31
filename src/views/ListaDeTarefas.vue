<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <lista-tarefas/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ListaTarefas from "@/components/ListaTarefas.vue";

export default defineComponent({
  name: 'ListaDeTaferas',
  components: {
    ListaTarefas
  },
});
</script>
