<template>
  <div class="home">
    <h1 class="home__header">{{ header }}</h1>
    <h1 class="home__title">{{ title }}</h1>
    <p class="home__description">{{ description }}</p>
    <div class="home__action">
      <p class="home__action--p">See How</p>
      <CoreLogo
        class="home__action--logo"
        logo="angle-down.svg"
        height="17px"
        width="17px"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CoreLogo from "@/components/core/CoreLogo.vue";

export default defineComponent({
  name: "Home",
  components: {
    CoreLogo,
  },
  props: {
    header: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../assets/css/breakpoints.scss";

.home {
  display: flex;
  flex-direction: column;
  text-align: center;

  &__header {
    font-weight: 300;
    padding: 5px 69px;
    border: solid 1px #000000;
    font-size: 24px;
    margin: 71px auto;
  }

  &__title {
    font-size: 96px;
    @include media-down(lg) {
      font-size: 36px;
    }
  }

  &__description {
    font-size: 24px;
    max-width: 80%;
    margin: 35px auto 110px auto;
  }

  &__action {
    &--p {
      font-size: 36px;
      color: #4200ff;
    }

    &--logo {
      animation: bounce 1s infinite alternate;
      -webkit-animation: bounce 1s infinite alternate;
    }
  }
}

@keyframes bounce {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(5px);
  }
}
</style>
