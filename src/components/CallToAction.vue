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

<style scoped lang="scss">
.call-to-action {
  display: flex;
  text-align: center;
  flex-direction: column;

  &__header {
    font-weight: 600;
    font-size: 60px;
  }

  &__desc {
    margin: 26px auto;
    font-weight: 300;
    font-size: 32px;
    color: #4200ff;
  }

  &__button {
    margin: 41px auto 172px auto;
    padding: 10px 30px;
    border-radius: 27px;
    background: #4200ff;
    color: white;
  }
}
</style>
