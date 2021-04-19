<template>
  <Header />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Menu";

export default defineComponent({
  components: { Header },
});
</script>

<style lang="scss">
#app {
}
</style>
