<template>
  <div id="app">
    <Header />
    <div class="container">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Menu.vue";
import Footer from "@/components/Footer.vue";

export default defineComponent({
  components: { Header, Footer },
});
</script>

<style lang="scss">
@import "./assets/css/breakpoints.scss";

#app {
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 100%;
  min-height: 100vh;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    169deg,
    rgba(255, 255, 255, 1) 24%,
    rgba(240, 240, 240, 1) 24%
  );

  @include media-down(md) {
    background: linear-gradient(
      169deg,
      rgba(255, 255, 255, 1) 14%,
      rgba(240, 240, 240, 1) 14%
    );
  }
}
.container {
  max-width: 1460px;
  margin: auto;
  padding: 10px;
}
</style>
