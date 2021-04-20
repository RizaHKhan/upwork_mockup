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
    <div class="header__menu" @click="handleMenuClick">
      <span class="header__menu--text">Menu</span>
      <div class="burger">
        <div :class="menuOpen ? 'me' : 'me-close'"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import CoreLogo from "@/components/core/CoreLogo.vue";

export default defineComponent({
  name: "Menu",
  components: { CoreLogo },
  setup() {
    const menuOpen = ref<boolean>(false);
    const handleBackClick = () => {
      alert("Going back to the blog!");
    };

    const handleMenuClick = () => {
      menuOpen.value = !menuOpen.value;
    };

    return { handleBackClick, handleMenuClick, menuOpen };
  },
});
</script>

<style lang="scss" scoped>
@import "../assets/css/breakpoints.scss";

.header {
  display: flex;
  justify-content: space-between;
  padding: 30px;

  &__back {
    display: flex;

    &--text {
      margin: auto 0 auto 29px;

      @include media-down(sm) {
        display: none;
      }
    }

    &--icon {
      transition: transform 0.5s ease;
    }

    &:hover {
      cursor: pointer;
    }
  }

  &__menu {
    display: flex;

    &--text {
      margin: auto 30px auto 0;

      @include media-down(sm) {
        display: none;
      }
    }

    .burger {
      margin: auto 0;
    }
  }

  .header__back:hover > .header__back--icon {
    transform: translateX(-5px);
  }
}

.burger {
  display: flex;
  height: 10px;
}

%bar {
  width: 52px;
  height: 2px;
  background: black;
  border-radius: 10px;
  transition: all 0.5s ease;
}

%base {
  position: relative;
  transition: all 0.5s ease;
}

.me {
  @extend %bar;
  @extend %base;

  &:before,
  &:after {
    @extend %bar;
    content: "";
    position: absolute;
    top: -12px;
    left: 0;
  }

  &:before {
    animation: me-top-out 0.75s ease forwards;
  }

  &:after {
    animation: me-bottom-out 0.75s ease forwards;
    top: 12px;
  }
}

.me-close {
  @extend .me;
  background: transparent;

  &:before,
  &:after {
    @extend %bar;
    content: "";
    position: absolute;
    left: 0;
  }

  &:before {
    animation: me-top-in 0.75s ease forwards;
  }

  &:after {
    top: 15px;
    animation: me-bottom-in 0.75s ease forwards;
  }
}

@keyframes me-top-in {
  0% {
    top: -12px;
  }
  50% {
    top: 0px;
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(45deg);
    top: 0px;
  }
}

@keyframes me-bottom-in {
  0% {
    top: 12px;
  }
  50% {
    top: 0px;
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(135deg);
    top: 0px;
  }
}

@keyframes me-top-out {
  100% {
    top: -12px;
  }
  50% {
    top: 0px;
    transform: rotate(0deg);
  }
  0% {
    transform: rotate(45deg);
    top: 0px;
  }
}

@keyframes me-bottom-out {
  100% {
    top: 12px;
  }
  50% {
    top: 0px;
    transform: rotate(0deg);
  }
  0% {
    transform: rotate(135deg);
    top: 0px;
  }
}
</style>
