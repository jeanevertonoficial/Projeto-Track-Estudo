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
        />
      </div>
      <div class="column">
        <div class="is-flex is-align-items-center is-justify-content-space-between">
          <section>
            <strong>{{ tempoDecorrido }}</strong>
          </section>
          <button class="button" @click="iniciar">
          <span class="icon">
            <i class="fas fa-play"></i>
          </span>
            <span>play</span>
          </button>
          <button class="button" @click="finalizar">
          <span class="icon">
            <i class="fas fa-stop"></i>
          </span>
            <span>stop</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "FormularioCad",
  data () {
    return{
      tempoEmSegundo: 0,
      cronometro: 0
    }
  },
  // conforme informação a ser passada esta função faz a compilação e modificação
  computed: {
      tempoDecorrido() {
        // apartir da posição 11 pegar 8 caracter
        // no casa aqui é o formato de hora do javacript
        return new Date(this.tempoEmSegundo * 1000).toISOString().substr(11,8)

      }
  },
  methods: {
    iniciar() {
      this.cronometro = setInterval(() =>{
       this.tempoEmSegundo += 1
      }, 1000)
    },
    finalizar() {
      clearInterval(this.cronometro)
    }
  }
})
</script>
