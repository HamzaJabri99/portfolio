<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from "./Home.vue";
import gsap from "gsap";
export default {
  name: "default",
  components: {
    Home
  },
  transition: {
    css: false,
    leave(el, done) {
      const wrapper_img_left = document.querySelector(".wrapper--img.img-0");
      const wrapper_img_right = document.querySelector(".wrapper--img.img-1");
      const wrapper_img_center = document.querySelector(".wrapper--img.img-2");
      const duration = 0.5;
      gsap
        .timeline()
        .to([wrapper_img_left, wrapper_img_right], {
          duration: duration,
          x: "-50%",
          rotate: "0deg",
          scale: 1,
          ease: "expo.inOut"
        })
        .to(
          [
            wrapper_img_center.querySelector("a img"),
            wrapper_img_right.querySelector("a img"),
            wrapper_img_left.querySelector("a img")
          ],
          {
            duration: duration,
            stagger: 0.01,
            top: "200%",
            ease: "expo.inOut"
          },
          "start"
        )
        .to(
          ".technos",
          {
            opacity: 0,
            duration: duration
          },
          "start"
        )
        .to(".title--component span", {
          duration: duration,
          stagger: 0.02,
          skewX: "-40deg",
          skewY: "-40deg",
          y: "150%",
          ease: "expo.inOut"
        })
        .to(
          ".wrapper--commandes-desktop, .wrapper--commandes",
          {
            opacity: 0,
            duration: 0.2
          },
          "start"
        )
        .to(
          ".title--component span",
          {
            duration: duration,
            stagger: 0.02,
            y: "100%",
            ease: "expo.inOut"
          },
          "start"
        )
        .add(() => done());
    }
  }
};
</script>

<style lang="scss">
#app {
  min-height: 100vh;
}
</style>
