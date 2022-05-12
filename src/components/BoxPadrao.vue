<template>
  <div class="box has-text-weight-bold" :style="estilos">
    <slot></slot>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "vue";

export default defineComponent({
  name: "BoxPadrao",
  data() {
    return {
      estilos: {
        background: '#42b785',
        color: 'white'
      }
    }
  }
})
</script>
