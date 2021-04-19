<template>
  <img
    class="logo"
    :src="require(`@/assets/img/${logo}`)"
    :style="{ height, width }"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CoreLogo",
  props: {
    logo: {
      type: String,
      default: "logo.png",
    },
    height: {
      type: String,
      default: "72px",
    },
    width: {
      type: String,
      default: "72px",
    },
  },
});
</script>

<style scoped lang="scss">
.logo {
  margin: auto 0;
}
</style>
