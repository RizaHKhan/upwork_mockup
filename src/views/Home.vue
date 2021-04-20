<template>
  <div class="home">
    <Hero
      :header="heroContent.header"
      :title="heroContent.title"
      :description="heroContent.description"
    />
    <CoreBreaker />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CoreBreaker from "@/components/core/CoreBreaker.vue";
import Hero from "@/components/Hero.vue";

export default defineComponent({
  name: "Home",
  components: {
    CoreBreaker,
    Hero,
  },
  setup() {
    const heroContent = {
      header: "Case Study",
      title: "How ABC Company Improved Marketing Engagement by x%",
      description:
        "XYZ delivered a custom marketing tool that solved challenges with building marketing campaigns and resulted in a 100% improvement to audience engagement on email marketing campaigns.",
    };

    return { heroContent };
  },
});
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;

  &__title {
    font-weight: 300;
    padding: 5px 69px;
    border: solid 1px #000000;
    font-size: 24px;
  }
}
</style>
