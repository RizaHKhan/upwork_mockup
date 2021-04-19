<template>
  <Header />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Menu.vue";

export default defineComponent({
  components: { Header },
});
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  max-width: 1460px;
  margin: auto;
}
</style>
