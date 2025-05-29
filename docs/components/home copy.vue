<template>
  <div class="home-wrapper">
    <!-- <section class="skill">
      <div class="container flex flex-col items-center">
        <h2>Personal skill</h2>
        <div class="box">
          <div><img src="../public/avatar.png" alt="" />HTML</div>
          <div><img src="../public/avatar.png" alt="" />Vue</div>
          <div><img src="../public/avatar.png" alt="" />Vite</div>
          <div><img src="../public/avatar.png" alt="" />TypeScript</div>
          <div><img src="../public/avatar.png" alt="" />Next</div>
        </div>
      </div>
    </section> -->

    <ParticlesBg
      class="absolute inset-0"
      :quantity="100"
      :ease="100"
      :color="isDark ? '#FFF' : '#000'"
      :staticity="10"
      refresh
    />

    <section class="imgSec">
      <div className="images_head">
        <div className="images_title">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-[3px]"
          >
            <path
              d="M8.75348 17.6952C7.72056 14.0706 3.94416 10.3084 0.305928 9.27938C-0.101976 9.14829 -0.101976 8.8599 0.305928 8.72226C3.95074 7.68666 7.72056 3.931 8.76005 0.299863C8.8719 -0.0999545 9.14164 -0.0999545 9.25349 0.299863C10.2864 3.931 14.0628 7.68666 17.6945 8.72226C18.1024 8.85335 18.1024 9.14829 17.6945 9.27938C14.0562 10.3084 10.2798 14.0706 9.24691 17.6952C9.13506 18.1016 8.86532 18.1016 8.75348 17.6952Z"
              fill="#A594FD"
            ></path>
          </svg>
          <h1 className=" !text-[20px]">Who am I ？</h1>
        </div>

        <div className="images_subtitle">
          <!-- <h1>
            A new, easy <br />
            way to create.
          </h1> -->
        </div>
      </div>

      <div class="scroll-up">
        <div>
          <img src="../public/home/block-tickets.png" alt="" />
        </div>
        <div>
          <img src="../public/home/block-poll.png" alt="" />
        </div>
      </div>

      <div class="scroll-down">
        <div>
          <img src="../public/home/block-image-stack.png" alt="" />
        </div>
        <div>
          <img src="../public/home/svg1.svg" alt="" />
        </div>
      </div>

      <div class="scroll-up">
        <div>
          <img src="../public/home/svg2.svg" alt="" />
        </div>
      </div>

      <div class="scroll-down">
        <div>
          <img src="../public/home/block-roadmap.png" alt="" />
        </div>
        <div>
          <img src="../public/home/block-jessica.png" alt="" />
        </div>
      </div>

      <div class="scroll-up">
        <div>
          <img src="../public/home/block-stats.png" alt="" />
        </div>
        <div>
          <img src="../public/home/block-timeline.png" alt="" />
        </div>
      </div>

      <div class="scroll-down">
        <div>
          <img src="../public/home/block-ranking.png" alt="" />
        </div>
        <div>
          <img src="../public/home/svg3.svg" alt="" />
        </div>
      </div>
    </section>

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
        <div class="right"><img src="../public/home/svg4.svg" alt="" /></div>
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

const isDark = computed(() => useColorMode().value == "dark");
const lenis = new Lenis();
lenis.on("scroll", (e) => {});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

gsap.registerPlugin(ScrollTrigger); // 注册 ScrollTrigger 插件

const text =
  "路漫漫其修远兮，吾将上下而求索 风萧萧兮易水寒，壮士一去不复返 卷不动及回家种田卷不动及回家种田卷不动及回家种田卷不动及回家种田卷不动及回家种田卷不动及回家种田卷不动及回家种田卷不动及回家种田";

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
    }
  }
}

.mode {
  .container {
    display: flex;
    gap: 40px;
    div {
      width: 58%;
      // height: 400px;
      background-color: #101010;
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
