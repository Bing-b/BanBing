<template>
  <div class="home-wrapper">
    <!-- 粒子背景 -->
    <ParticlesBg
      class="absolute inset-0 z-[-2]"
      :quantity="100"
      :ease="100"
      :color="isDark ? '#FFF' : '#000'"
      :staticity="10"
      refresh
    />

    <h1 class="title !mt-20">who I am</h1>

    <div
      class="border border-[#e4e4e7] max-w-[1200px] my-10 mx-auto pt-10 rounded-md min-h-[800px]"
    >
      <div class="relative w-full overflow-hidden rounded-lg">
        <div
          class="absolute flex w-full flex-col items-center justify-center gap-2 p-8 text-center font-heading"
        >
          <span class="text-4xl font-semibold"> master </span>
          <span class="font-sans font-light">xx</span>
        </div>

        <PatternBackground
          :animate="true"
          :direction="PATTERN_BACKGROUND_DIRECTION.TopRight"
          :variant="PATTERN_BACKGROUND_VARIANT.Dot"
          class="flex h-[49rem] w-full items-center justify-center"
          :speed="PATTERN_BACKGROUND_SPEED.Slow"
        >
          <Spline :scene="sceneUrl" class="mt-24 size-full" />
        </PatternBackground>
      </div>
    </div>

    <!-- <div class="flex h-96 w-full items-center justify-center">
      <LiquidLogo :image-url="imageUrl" />
    </div> -->

    <section class="words">
      <div class="container scorll-box">
        <p class="reveal-type">
          <span v-for="(i, index) in text" :key="index">{{ i }}</span>
        </p>
      </div>
    </section>

    <section class="mode">
      <div class="container">
        <div class="left">
          <div class="">
            <h1>ddsdsd</h1>

            <p>dsdsds</p>
          </div>
        </div>
        <div class="right"></div>
      </div>
    </section>
  </div>
</template>

<script setup>
import gsap from "gsap";
import { nextTick, onMounted, watch } from "vue";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Lenis from "@studio-freight/lenis";
import ParticlesBg from "./ParticlesBg.vue";
import { computed } from "vue";
import { useColorMode } from "@vueuse/core";
import LiquidLogo from "./logo/LiquidLogo.vue";
import Spline from "./spline/Spline.vue";
import PatternBackground from "./dotbg/PatternBackground.vue";

const imageUrl = "https://inspira-ui.com/images/apple-logo.svg";
// const imageUrl = new URL("../assets/images/logo-octocat.avg", import.meta.url);
//const sceneUrl = "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";
const sceneUrl = new URL("./spline/scene.spline", import.meta.url);
const isDark = computed(() => useColorMode().value == "dark");

import {
  PATTERN_BACKGROUND_DIRECTION,
  PATTERN_BACKGROUND_SPEED,
  PATTERN_BACKGROUND_VARIANT,
} from "./dotbg/index";

const lenis = new Lenis();
lenis.on("scroll", (e) => {});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

gsap.registerPlugin(ScrollTrigger); // 注册 ScrollTrigger 插件

const text =
  "My Journey as a Self-Taught Frontend Engineer  I’m a frontend engineer with a passion for building clean, user-friendly web experiences. ";

onMounted(() => {
  gsap.fromTo(
    ".scroll-up",
    {},
    {
      transform: "translateY(40px)",
      scrollTrigger: {
        trigger: ".scroll-up",
        start: "top 60%",
        end: "top top",
        scrub: 1,
        toggleActions: "play play reverse reverse",
      },
    }
  );

  gsap.fromTo(
    ".scroll-down",
    {},
    {
      transform: "translateY(-40px)",
      scrollTrigger: {
        trigger: ".scroll-down",
        start: "top 60%",
        end: "top top",
        scrub: 1,
        toggleActions: "play play reverse reverse",
      },
    }
  );

  nextTick(() => {
    const splitTypes = document.querySelectorAll(".reveal-type");
    if (splitTypes.length === 0) {
      console.error("No elements found with class 'reveal-type'.");
      return;
    }

    // 默认设置文字的透明度为 0.2
    splitTypes.forEach((word) => {
      const text2 = new SplitType(word, { types: "words" });

      // 初始透明度设置为 0.2
      gsap.set(text2.words, { opacity: 0.2 });

      gsap.to(text2.words, {
        scrollTrigger: {
          trigger: word,
          start: "top 30%", // 页面滚动到文字的顶部位置
          end: "bottom 10%", // 文字区域滚动到16%时结束
          scrub: 3, // 开启滚动同步  值越大同步越慢  达到延迟效果
          toggleActions: "play play reverse reverse",
          markers: true, // 开启调试模式，显示滚动触发器的位置
          pin: true, // 固定文字区域
        },

        opacity: 1, // 高亮效果
        stagger: 1, // 逐字动画，间隔 0.2 秒
        duration: 3,
      });
    });
  });
});
</script>

<style lang="scss" scoped>
.container {
  max-width: 1400px;
  margin: 0 auto;
}

.flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}
.items-center {
  align-items: center;
}

.title {
  text-align: center;
  margin: 60px auto;
  font-size: 52px;
  font-weight: bold;
  font-family: "maoken";
}

.skill {
  padding: 60px 0;
  h2 {
    font-size: 50px;
    margin-bottom: 30px;
    font-family: "xht";
  }
  .box {
    border-top: 1px solid #4f4f4f;
    padding-top: 30px;
    display: flex;
    gap: 50px;
    div {
      padding: 5px 12px;
      display: flex;
      align-items: center;
      gap: 5px;
      background-color: #101010;
      border-radius: 4px;
      img {
        width: 30px;
        width: 30px;
      }
    }
  }
}

.imgSec {
  position: relative;
  padding: 400px 40px 100px;
  display: flex;
  gap: 10px;
  justify-content: space-between;
  .images_head {
    position: absolute;
    left: 20%;
    top: 20%;
    z-index: 1;
    .images_title {
      width: 540px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
    h1 {
      font-size: 80px;
      line-height: 88px;
      font-family: "xht";
      font-style: normal;
      font-weight: 600;
    }
  }
  .scroll-up,
  .scroll-down {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 287px;
    gap: 24px;
    div {
      width: 100%;
      border-radius: 20px;
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
}

.words {
  padding: 100px 0;
  .container {
    padding: 0 200px;
    scroll-snap-type: proximity;
    p {
      font-size: 60px;
      line-height: 88px;
      letter-spacing: -0.01em;
      font-family: "Atkinson";
    }
  }
}

.mode {
  .container {
    display: flex;
    gap: 40px;
    > div {
      padding: 30px;
      width: 58%;
      // height: 400px;
      border: 1px solid #e4e4e7;
      border-radius: 1.25rem;
    }
    .right {
      img {
        width: 80%;
        transition: 0.3s ease;
        transform-origin: right top;
        transform: skew(5deg) rotateX(50deg);
      }
      &:hover {
        img {
          transform: rotateY(0deg);
        }
      }
    }
  }
}
</style>
