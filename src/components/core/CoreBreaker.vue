<template>
  <div class="breaker"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "CoreBreaker",
});
</script>

<style lang="scss" scoped>
.breaker {
  width: 100%;
  height: 13px;
  border: 1px solid #3300ff;
}
</style>
