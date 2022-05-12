<template>
  <div class="box has-text-weight-bold">
    <slot></slot>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "vue";

export default defineComponent({
  name: "BoxPadrao"
})
</script>

<style scoped>
.box {
  background: #42b785;
  color: white;
}
</style>