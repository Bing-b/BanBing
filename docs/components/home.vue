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

    <h1 class="title !mt-20">Who I Am</h1>

    <div
      class="border border-[#e4e4e7] max-w-[1200px] my-10 mx-auto pt-10 rounded-md min-h-[800px]"
    >
      <div class="relative w-full overflow-hidden rounded-lg">
        <div
          class="absolute flex w-full flex-col items-center justify-center gap-2 p-8 text-center font-heading"
        >
          <span class="text-2xl font-cyly"> 一名攻城路上的超级兵 </span>
        </div>

        <PatternBackground
          :animate="true"
          :direction="PATTERN_BACKGROUND_DIRECTION.TopRight"
          :variant="PATTERN_BACKGROUND_VARIANT.Dot"
          class="flex h-[49rem] w-full items-center justify-center"
          :speed="PATTERN_BACKGROUND_SPEED.Slow"
        >
          <Spline
            :scene="sceneUrl"
            class="mt-24 size-full"
            :onLoad="() => (isLoading = false)"
          />
        </PatternBackground>
      </div>
    </div>

    <!-- <div class="flex h-96 w-full items-center justify-center">
      <LiquidLogo :image-url="imageUrl" />
    </div> -->

    <Loading v-show="isLoading" />

    <section class="words">
      <div class="container scorll-box">
        <p class="reveal-type">
          <span v-for="(i, index) in text" :key="index">{{ i }}</span>
        </p>
      </div>
    </section>

    <section class="skills">
      <h1 class="title !mt-20">技术</h1>
      <div class="container">
        <div class="left">
          <div class="">
            <h1>待续。。。</h1>

            <p>error</p>
          </div>
        </div>
        <div class="right"></div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import gsap from "gsap";
import { nextTick, onMounted, onUnmounted, ref } from "vue";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitType from "split-type";
import Lenis from "@studio-freight/lenis";
import ParticlesBg from "./ParticlesBg.vue";
import { computed } from "vue";
import { useColorMode } from "@vueuse/core";
// import LiquidLogo from "./logo/LiquidLogo.vue";
import Spline from "./spline/Spline.vue";
import PatternBackground from "./dotbg/PatternBackground.vue";
import Loading from "./loading/index.vue";

const imageUrl = "https://inspira-ui.com/images/apple-logo.svg";
// const imageUrl = new URL("../assets/images/logo-octocat.avg", import.meta.url);
//const sceneUrl = "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";
const sceneUrl = new URL("./spline/scene.spline", import.meta.url);
const isDark = computed(() => useColorMode().value == "dark");
let ctx: gsap.Context | null = null; // 用于存储 GSAP 上下文以便清理
let lenis: Lenis | null = null;

import {
  PATTERN_BACKGROUND_DIRECTION,
  PATTERN_BACKGROUND_SPEED,
  PATTERN_BACKGROUND_VARIANT,
} from "./dotbg/index";

const isLoading = ref(true);

// const lenis = new Lenis();
// lenis.on("scroll", (e) => {});

// function raf(time) {
//   lenis.raf(time);
//   requestAnimationFrame(raf);
// }

// requestAnimationFrame(raf);

gsap.registerPlugin(ScrollTrigger); // 注册 ScrollTrigger 插件c

const text =
  "我来自有着“恐龙之乡”“南国灯城”美誉的四川自贡，是一名从事计算机软件开发的普通人。每天穿梭于代码与文档之间，在枯燥与重复中寻找灵光与秩序。工作时常令人焦躁不安，有时热血沸腾，也有时难免摆烂，但我依然保持对技术的好奇与钻研的习惯，哪怕这份执着在同事眼中有些“较真”。生活跌宕起伏，我学着坦然面对。热爱生活，也热爱烟火气，喜欢做饭，不太喜欢洗碗。始终记得一句让我坚持下来的话：“世上只有一种英雄主义，就是在认清生活真相之后依然热爱生活。”";

// Lenis 平滑滚动初始化
const initLenis = () => {
  lenis = new Lenis();
  function raf(time: number) {
    lenis?.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
};

// 初始化
const init = () => {
  ctx = gsap.context(() => {
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
  });

  nextTick(() => {
    const splitTypes = document.querySelectorAll(".reveal-type");
    splitTypes.forEach((word) => {
      // SplitType 会破坏 DOM，所以在 Vue 中必须小心
      const text2 = new SplitType(word as HTMLElement, { types: "words" });

      // 初始状态
      gsap.set(text2.words, { opacity: 0.2 });

      gsap.to(text2.words, {
        scrollTrigger: {
          trigger: word,
          start: "top 80%", // 稍微提前一点触发
          end: "bottom 40%",
          scrub: 1, // 降低 scrub 值让跟随更灵敏，避免延迟导致的视觉空白
          markers: false,
          // !!! 关键修改：移除了 pin: true，这通常是导致下方元素消失的罪魁祸首
        },
        opacity: 1,
        stagger: 0.02, // 调整 stagger 使其更流畅
        duration: 1,
      });
    });
  });
};

onMounted(() => {
  initLenis();

  // 等待 DOM 完全渲染，特别是字体加载可能会影响高度
  nextTick(() => {
    // 稍微延迟一下确保 ClientOnly 内容已挂载
    setTimeout(() => {
      init();
    }, 100);
  });
});

onUnmounted(() => {
  ctx?.revert(); // 清理 GSAP 动画，防止内存泄漏和布局错乱
  lenis?.destroy();
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
  padding: 40px 0;
  .container {
    padding: 0 50px;
    scroll-snap-type: proximity;
    p {
      font-size: 32px;
      line-height: 48px;
      letter-spacing: -0.01em;
      font-family: "cyly";
    }
  }
}

.skills {
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
