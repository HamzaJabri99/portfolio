<template>
  <!-- <Header></Header> -->
  <div class="home padding">
    <div class="wrapper--imgs">
      <div
        :class="`wrapper--img img-${index}`"
        v-for="(item, index) in projects_info"
        :key="index"
      >
        <nuxt-link
          :to="{
            path: `/${projects_info[project_number].title}`,
            params: { index: projects_info[project_number] }
          }"
        >
          <img
            :src="
              require(`~/assets/imgs/${projects_info[project_number].poster}`)
            "
            alt=""
          />
        </nuxt-link>
      </div>
      <div class="wrapper--commandes-desktop">
        <p @click="animeImg('previous')">previous</p>
        <p @click="animeImg('next')">next</p>
      </div>
    </div>

    <div class="wrapper--infos">
      <p class="technos">{{ projects_info[project_number].techno }}</p>
      <!-- <h1>{{ projects_info[project_number].title }}</h1> -->
      <Title :title="projects_info[project_number].title" />
    </div>
    <div class="wrapper--commandes">
      <p @click="animeImg('previous')">previous</p>
      <p @click="animeImg('next')">next</p>
    </div>
  </div>
</template>

<script>
import projects from "../projects.json";
import gsap from "gsap";
export default {
  name: "Home",
  data() {
    return {
      projects_info: projects,
      project_number: 0
    };
  },
  methods: {
    changeImg(value) {
      if (value === "next") {
        this.project_number === this.projects_info.length - 1
          ? (this.project_number = 0)
          : this.project_number++;
        console.log(projects);
      } else {
        // this.project_number--;
        // if (this.project_number < 0) {
        //   this.project_number = this.projects_info.length - 1;
        // }
        this.project_number - 1 < 0
          ? (this.project_number = this.projects_info.length - 1)
          : this.project_number--;
      }
    },
    animeImg(value) {
      const wrapper_img_left = document.querySelector(".wrapper--img.img-0");
      const wrapper_img_right = document.querySelector(".wrapper--img.img-1");
      const wrapper_img_center = document.querySelector(".wrapper--img.img-2");
      const duration = 0.67;
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
        .add(() => this.animeTitle(), "start")
        .add(() => this.changeImg(value))
        .set(
          [
            wrapper_img_center.querySelector("a img"),
            wrapper_img_right.querySelector("a img"),
            wrapper_img_left.querySelector("a img")
          ],
          {
            top: "-100%"
          }
        )
        .to(
          [
            wrapper_img_left.querySelector("a img"),
            wrapper_img_right.querySelector("a img"),
            wrapper_img_center.querySelector("a img")
          ],
          {
            duration: duration,
            stagger: 0.01,
            top: "50%",
            ease: "expo.inOut"
          }
        )
        .add(() => this.animeTitleBottom(), "second")
        .to(
          ".technos",
          {
            opacity: 1,
            duration: 0.5
          },
          "second"
        )

        .to(
          [wrapper_img_left, wrapper_img_right],
          {
            scale: 0.8
          },
          "finish"
        )
        .to(
          wrapper_img_right,
          {
            rotate: "12deg",
            x: "-20%"
          },
          "finish"
        )
        .to(
          wrapper_img_left,
          {
            rotate: "-12deg",
            x: "-80%"
          },
          "finish"
        );
      // console.log(wrapper_img_center.querySelector('a img'));
      // console.log(wrapper_img_right.querySelector('a img'));
      // console.log(wrapper_img_left.querySelector('a img'));
    },
    animeTitle() {
      const duration = 1;
      gsap
        .timeline()
        .to(".title--component span", {
          duration: duration,
          stagger: 0.02,
          skewX: "-40deg",
          skewY: "-40deg",
          y: "150%",
          ease: "expo.inOut"
        })
        .to(".title--component span", {
          duration: duration,
          stagger: 0.02,
          y: "100%",
          ease: "expo.inOut"
        });
    },
    animeTitleBottom() {
      const duration = 0.9;
      gsap
        .timeline()
        .set(".title--component span", {
          skewX: "20deg",
          skewY: "20deg"
        })
        .to(".title--component span", {
          duration: duration,
          stagger: 0.02,
          y: "0%",
          skewX: "0deg",
          skewY: "0deg",
          ease: "expo.inOut"
        });
    }
  }
};
</script>

<style lang="scss">
.home {
  height: calc(70vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  position: absolute;
  @media screen and (min-width: $laptop) {
    height: calc(100vh - 160px);

    flex-direction: column-reverse;
    justify-content: space-between;
  }
  position: relative;
  .wrapper--imgs {
    width: 100%;
    height: 300px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: $tablet) {
      height: 500px;
      margin-top: 2rem;
    }
    @media screen and (min-width: $laptop) {
      height: 500px;
      margin-top: 1rem;
    }
    .wrapper--commandes-desktop {
      display: flex;
      justify-content: space-between;
      width: 100%;

      display: none;
      font-weight: bold;
      @media screen and (min-width: $laptop) {
        display: flex;
        margin: 0rem 16rem 0rem 13rem;
        font-weight: bold;
      }
      p {
        cursor: pointer;
        font-family: "Title";
        text-transform: uppercase;
        font-weight: 900;
        font-size: 30px;
      }
    }
    .wrapper--img {
      position: absolute;
      width: 220px;
      height: 240px;
      left: 50%;
      top: 50%;
      overflow: hidden;
      transform: translate(-50%, -50%);
      @media screen and (min-width: $tablet) {
        width: 440px;
        height: 480px;
      }
      @media screen and (min-width: $laptop) {
        width: 330px;
        height: 360px;
      }

      &.img-0 {
        transform: translate(-80%, -50%) rotate(-12deg) scale(0.8);
        opacity: 0.6;
        @media screen and (min-width: $laptop) {
          transform: translate(-80%, -50%) rotate(-12deg) scale(0.8);
        }
      }
      &.img-1 {
        transform: translate(-20%, -50%) rotate(12deg) scale(0.8);
        opacity: 0.6;
        @media screen and (min-width: $laptop) {
          transform: translate(-20%, -50%) rotate(12deg) scale(0.8);
        }
      }
      img {
        width: 100%;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        @media screen and(min-width:$tablet) {
          width: 720px;
          height: 440px;
        }
      }
    }
  }

  .wrapper--infos {
    text-align: center;
    @media screen and(min-width:$laptop) {
      padding-top: 50px;
    }
    h1 {
      text-transform: uppercase;

      @media screen and (min-width: $laptop) {
        letter-spacing: 5px;
      }
    }
    p {
      @media screen and (min-width: $laptop) {
        font-size: 24px;
      }
    }
  }
  .wrapper--commandes {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 20px;
    font-weight: bold;
    @media screen and(min-width: $laptop) {
      display: none;
    }
    p {
      font-family: "Title";
      text-transform: uppercase;
    }
  }
}
</style>
