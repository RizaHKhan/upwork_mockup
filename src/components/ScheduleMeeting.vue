<template>
  <div class="call-to-action">
    <h1 class="call-to-action__header">
      Interested In Learning How We Can Help Your Business Win?
    </h1>
    <p class="call-to-action__desc">
      We're ready to help you capture greater opportunity
    </p>
    <button class="call-to-action__button">Let's Schedule a Meeting</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CallToAction",
});
</script>

<style lang="scss" scoped>
.call-to-action {
  display: flex;
}
</style>
