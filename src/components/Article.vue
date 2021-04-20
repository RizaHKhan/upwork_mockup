<template>
  <div
    class="article"
    :style="
      !image || imgPosition === 'bottom' ? 'grid-template-columns: 1fr' : ''
    "
    :class="
      imgPosition === 'right' || imagePosition === 'bottom' ? 'reverse' : ''
    "
  >
    <div class="article__image-container" v-if="image">
      <img :src="image" class="article__image-container--image" />
    </div>
    <div class="article__content-container">
      <h3 class="article__content-container--title">{{ title }}</h3>
      <p class="article__content-container--description">{{ description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

type imagePosition = "right" | "left" | "bottom" | null;

export default defineComponent({
  name: "Article",
  setup() {
    return {};
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
      required: false,
    },
    imgPosition: {
      type: String as () => imagePosition,
      default: "left",
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../assets/css/breakpoints.scss";

.article {
  margin: 40px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @include media-down(md) {
    grid-template-columns: 1fr;
  }

  &__image-container {
    margin: auto;
    padding: 10px;
    &--image {
      object-fit: cover;
      max-height: 725px;
      max-width: 100%;

      @include media-down(sm) {
        max-height: 347px;
        max-width: 100%;
      }
    }
    @include media-down(sm) {
      margin: auto;
    }
  }

  &__content-container {
    padding: 20px;
    @include media-down(md) {
      text-align: center;
    }

    &--title {
      font-size: 48px;
      font-weight: 400;
    }

    &--description {
      font-size: 18px;
      font-weight: 300;
    }
  }
}
.reverse {
  direction: rtl;
}
</style>
