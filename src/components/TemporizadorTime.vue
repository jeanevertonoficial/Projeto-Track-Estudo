<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <CronometroTempo :tempo-em-segundo="tempoEmSegundo"/>
    <button class="button" @click="iniciar" :disabled="cronometroRod">
          <span class="icon">
            <i class="fas fa-play"></i>
          </span>
      <span>play</span>
    </button>
    <button class="button" @click="finalizar" :disabled="!cronometroRod" >
          <span class="icon">
            <i class="fas fa-stop"></i>
          </span>
      <span>stop</span>
    </button>
  </div>
</template>


<script lang="ts">

import {defineComponent} from "vue";
import CronometroTempo from "@/components/CronometroTempo.vue";

export default defineComponent({
  name: "TemporizadorTime",
  components: {CronometroTempo},
  emits: ['aofinalizarOTempo'],
  data() {
    return {
      tempoEmSegundo: 0,
      cronometro: 0,
      cronometroRod: false
    }
  },
  methods: {
    iniciar() {
      this.cronometroRod = true
      this.cronometro = setInterval(() => {
        this.tempoEmSegundo += 1
      }, 1000)
    },
    finalizar() {
      this.cronometroRod = false
      clearInterval(this.cronometro)
      this.$emit('aofinalizarOTempo', this.tempoEmSegundo)
      this.tempoEmSegundo = 0
    }
  }
});
</script>