<template>
  <div class="header">
    <div class="header__back" @click="handleBackClick">
      <CoreLogo
        class="header__back--icon"
        logo="angle-left.svg"
        height="34px"
        width="17px"
      />
      <span class="header__back--text"> Back to Blog </span>
    </div>
    <div class="header__logo">
      <CoreLogo />
    </div>
    <div class="header__menu">Menu</div>
    <!--
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CoreLogo from "@/components/core/CoreLogo";

export default defineComponent({
  name: "Menu",
  components: { CoreLogo },
  setup() {
    const handleBackClick = () => {
      alert("Going back to the blog!");
    };

    return { handleBackClick };
  },
});
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 30px;

  &__back {
    display: flex;

    &--text {
      margin: auto 0 auto 29px;
    }

    &--icon {
      transition: transform 0.5s ease;
    }

    &:hover {
      cursor: pointer;
    }
  }

  .header__back:hover > .header__back--icon {
    transform: translateX(-5px);
  }
}
</style>
