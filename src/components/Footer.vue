<template>
  <div class="footer">
    <CoreLogo logo="logo-white.svg" />
    <p>Copyright 2021 Company Name</p>
    <a>Return to Top</a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CoreLogo from "./core/CoreLogo.vue";

export default defineComponent({
  name: "Footer",
  components: { CoreLogo },
});
</script>

<style lang="scss" scoped>
.footer {
  background: #333333;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 58px 10px;
  font-size: 18px;

  p {
    margin: 24px 0;
    font-weight: 200;
  }

  a {
    text-decoration: underline;

    &:hover {
      cursor: pointer;
    }
  }
}
</style>
