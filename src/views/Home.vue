<template>
  <div class="home">
    <Hero
      :header="heroContent.header"
      :title="heroContent.title"
      :description="heroContent.description"
    />
    <Article
      v-for="article in mainArticles"
      :key="article.title"
      :title="article.title"
      :description="article.description"
      :image="article.image"
      :imgPosition="article.imgPosition"
    />
    <CoreBreaker />
    <Quote :quote="quote.body" :author="quote.author" />
    <CoreBreaker />
    <Article
      v-for="article in secondaryArticles"
      :key="article.title"
      :title="article.title"
      :description="article.description"
      :image="article.image"
      :imgPosition="article.imgPosition"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CoreBreaker from "@/components/core/CoreBreaker.vue";
import Hero from "@/components/Hero.vue";
import Article from "@/components/Article.vue";
import Quote from "@/components/Quote.vue";

export default defineComponent({
  name: "Home",
  components: {
    CoreBreaker,
    Hero,
    Article,
    Quote,
  },
  setup() {
    const heroContent = {
      header: "Case Study",
      title: "How ABC Company Improved Marketing Engagement by x%",
      description:
        "XYZ delivered a custom marketing tool that solved challenges with building marketing campaigns and resulted in a 100% improvement to audience engagement on email marketing campaigns.",
    };

    const mainArticles = [
      {
        title: "Solving For Complexity",
        description:
          "Nullam ut nunc dapibus, interdum nisl vel, porta lectus. Aliquam dictum eros vitae tempus ultricies. Sed rutrum pulvinar libero, eu vestibulum ligula interdum quis. Suspendisse accumsan tempus nisl. Nunc vitae scelerisque sapien. Nunc auctor maximus odio, viverra dictum ex pellentesque id. Mauris eu ullamcorper sem. Donec nec nisl a turpis rhoncus dictum at eu justo. Sed a magna elit. Donec placerat ullamcorper laoreet.",
        image:
          "https://hips.hearstapps.com/pop.h-cdn.co/assets/17/32/1502315162-badass-plane-f-22.jpg",
      },
      {
        title: "Solving For Complexity",
        description:
          "Nullam ut nunc dapibus, interdum nisl vel, porta lectus. Aliquam dictum eros vitae tempus ultricies. Sed rutrum pulvinar libero, eu vestibulum ligula interdum quis. Suspendisse accumsan tempus nisl. Nunc vitae scelerisque sapien. Nunc auctor maximus odio, viverra dictum ex pellentesque id. Mauris eu ullamcorper sem. Donec nec nisl a turpis rhoncus dictum at eu justo. Sed a magna elit. Donec placerat ullamcorper laoreet. Suspendisse accumsan tempus nisl. Nunc vitae scelerisque sapien. Nunc auctor maximus odio, viverra dictum ex pellentesque id. Nullam ut nunc dapibus, interdum nisl vel, porta lectus. Aliquam dictum eros vitae tempus ultricies. Sed rutrum pulvinar libero, eu vestibulum ligula interdum quis. Suspendisse accumsan tempus nisl. Nunc vitae scelerisque sapien. Nunc auctor maximus odio, viverra dictum ex pellentesque id. Nullam ut nunc dapibus, interdum nisl vel, porta lectus. Aliquam dictum eros vitae tempus ultricies. Sed rutrum pulvinar libero, eu vestibulum ligula interdum quis. Suspendisse accumsan tempus nisl. Nunc vitae scelerisque sapien. Nunc auctor maximus odio, viverra dictum ex pellentesque id. Mauris eu ullamcorper sem. Donec nec nisl a turpis rhoncus dictum at eu justo. Sed a magna elit. Donec placerat ullamcorper laoreet.",
        image:
          "https://specials-images.forbesimg.com/imageserve/5d2fd2aaeab9270008f9a912/960x0.jpg?cropX1=0&cropX2=620&cropY1=0&cropY2=414",
        imgPosition: "right",
      },
      {
        title: "Solving For Complexity",
        description:
          "Nullam ut nunc dapibus, interdum nisl vel, porta lectus. Aliquam dictum eros vitae tempus ultricies. Sed rutrum pulvinar libero, eu vestibulum ligula interdum quis. Suspendisse accumsan tempus nisl. Nunc vitae scelerisque sapien. Nunc auctor maximus odio, viverra dictum ex pellentesque id. Mauris eu ullamcorper sem. Donec nec nisl a turpis rhoncus dictum at eu justo. Sed a magna elit. Donec placerat ullamcorper laoreet. Suspendisse accumsan tempus nisl. Nunc vitae scelerisque sapien. Nunc auctor maximus odio, viverra dictum ex pellentesque id. Nullam ut nunc dapibus, interdum nisl vel, porta lectus. Aliquam dictum eros vitae tempus ultricies. Sed rutrum pulvinar libero, eu vestibulum ligula interdum quis. Suspendisse accumsan tempus nisl. Nunc vitae scelerisque sapien. Nunc auctor maximus odio, viverra dictum ex pellentesque id. Nullam ut nunc dapibus, interdum nisl vel, porta lectus. Aliquam dictum eros vitae tempus ultricies. Sed rutrum pulvinar libero, eu vestibulum ligula interdum quis. Suspendisse accumsan tempus nisl. Nunc vitae scelerisque sapien. Nunc auctor maximus odio, viverra dictum ex pellentesque id. Mauris eu ullamcorper sem. Donec nec nisl a turpis rhoncus dictum at eu justo. Sed a magna elit. Donec placerat ullamcorper laoreet.",
      },
    ];

    const secondaryArticles = [
      {
        title: "Solving For Complexity",
        description:
          "Nullam ut nunc dapibus, interdum nisl vel, porta lectus. Aliquam dictum eros vitae tempus ultricies. Sed rutrum pulvinar libero, eu vestibulum ligula interdum quis. Suspendisse accumsan tempus nisl. Nunc vitae scelerisque sapien. Nunc auctor maximus odio, viverra dictum ex pellentesque id. Mauris eu ullamcorper sem. Donec nec nisl a turpis rhoncus dictum at eu justo. Sed a magna elit. Donec placerat ullamcorper laoreet.",
      },
      {
        title: "Solving For Complexity",
        description:
          "Nullam ut nunc dapibus, interdum nisl vel, porta lectus. Aliquam dictum eros vitae tempus ultricies. Sed rutrum pulvinar libero, eu vestibulum ligula interdum quis. Suspendisse accumsan tempus nisl. Nunc vitae scelerisque sapien. Nunc auctor maximus odio, viverra dictum ex pellentesque id. Mauris eu ullamcorper sem. Donec nec nisl a turpis rhoncus dictum at eu justo. Sed a magna elit. Donec placerat ullamcorper laoreet.",
        image:
          "https://hips.hearstapps.com/pop.h-cdn.co/assets/17/32/1502315162-badass-plane-f-22.jpg",
        imgPosition: "bottom",
      },
    ];

    const quote = {
      body:
        "Nullam ut nunc dapibus, interdum nisl vel, porta lectus. Aliquam dictum eros vitae tempus ultricies. Sed rutrum pulvinar libero, eu vestibulum ligula interdum quis. Suspendisse accumsan tempus nisl. Nunc vitae scelerisque sapien. Nunc auctor maximus odio, viverra dictum ex pellentesque id. Mauris eu ullamcorper sem. Donec nec nisl a turpis rhoncus dictum at eu justo. Sed a magna elit. Donec placerat ullamcorper laoreet.",
      author: "Person Name, Chief Executive Officer, ABC Company",
    };

    return { heroContent, mainArticles, quote, secondaryArticles };
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
