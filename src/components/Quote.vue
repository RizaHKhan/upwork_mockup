<template>
  <div class="quote">
    <div class="quote__icon">
      <CoreLogo logo="quote.svg" width="159px" />
    </div>
    <div class="quote__content">
      <p class="quote__content--body">{{ quote }}</p>
      <p class="quote__content--author">{{ author }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CoreLogo from "@/components/core/CoreLogo.vue";

export default defineComponent({
  name: "Quote",
  components: { CoreLogo },
  props: {
    quote: {
      type: String,
      default: "",
    },
    author: {
      type: String,
      default: "",
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../assets/css/breakpoints.scss";

.quote {
  display: grid;
  grid-template-columns: 200px 1fr;

  &__icon {
    margin: 30px auto 0 auto;
  }

  &__content {
    &--body {
      font-weight: 200;
      font-size: 24px;
      font-style: italic;
    }
    &--author {
      margin-top: 50px;
      font-weight: 400;
      font-size: 24px;
    }
  }
}
</style>
