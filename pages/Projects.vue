<template>
  <div class="projects padding" v-intersect="onIntersect">
    <carousel>
      <carousel-slide
        v-for="(item, index) in projects_info"
        :key="index"
        class="carousel-slider"
      >
        <Title
          :title="projects_info[index].title"
          class="projectNow"
          v-intersect="onIntersectT"
        />
        <nuxt-link
          :to="{
            path: `/${projects_info[index].title}`,
            params: { index: projects_info[index] }
          }"
        >
          <img :src="require(`~/assets/imgs/${projects_info[index].poster}`)" />
        </nuxt-link>
      </carousel-slide>
    </carousel>
  </div>
</template>

<script>
import Carousel from "../components/Carousel.vue";
import CarouselSlide from "../components/CarouselSlide";
import projects from "../projects.json";
import gsap from "gsap";
export default {
  data() {
    return {
      mounted_comp: true,
      projects_info: projects
    };
  },
  components: {
    Carousel: Carousel,
    CarouselSlide: CarouselSlide
  },
  methods: {
    onIntersectT(observer) {
      this.isVisible = observer.isIntersecting;
      let target = observer.entries[0].target;
      if (this.isVisible && this.mounted_comp == true) {
        gsap
          .timeline()
          .set(".title--component span.letters", {
            skewX: "20deg",
            skewY: "20deg",
            y: "-120%",
            ease: "expo.inOut",
            opacity: 0
          })
          .to(".title--component span.letters", {
            duration: 1,
            y: "0",
            skewX: "0deg",
            skewY: "0deg",
            opacity: 1,
            ease: "expo.inOut"
          });
      }
    },
    onIntersect(observer) {
      this.isVisible = observer.isIntersecting;
      let target = observer.entries[0].target;
      if (this.isVisible) {
        gsap.to(target, {
          opacity: 1,
          duration: 1,
          delay: 0.2
        });
      }
    }
  }
};
</script>

<style lang="scss">
.projects {
  display: flex;
  justify-content: center;
  opacity: 0;
  .carousel {
    position: relative;
    overflow: hidden;
    width: 800px;
    height: 500px;
    z-index: 10;
  }
  .btn {
    padding: 5px 10px;
    background-color: rgba(0, 0, 0, 0.5);
    border: 1px solid transparent;
    margin: 5px 10px;
    color: #fff;
    height: 50px;
    width: 50px;
    position: absolute;
    margin-top: -25px;
    z-index: 2;
  }
  a {
    cursor: grab;
  }
  .btn:hover {
    cursor: pointer;
  }
  .btn:focus {
    outline: none;
  }
  .btn-next {
    top: 50%;
    right: 0;
  }
  .btn-prev {
    top: 50%;
    left: 0;
  }
  .carousel-slider {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  .carousel-slider img {
    width: 100%;
    height: 100%;
  }
  .projectNow {
    text-align: center;
    margin: 1rem auto;
  }
}
</style>
