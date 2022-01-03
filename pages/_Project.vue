<template>
  <div class="project padding" v-intersect="onIntersect">
    <div class="wrapper--presentation" v-intersect="onIntersect">
      <Title :title="project.title" v-intersect="onIntersectT" />
      <p class="description" v-intersect="onIntersect">
        {{ project.description }}
      </p>
      <div class="wrapper--img" v-intersect="onIntersect">
        <img
          class="poster"
          :src="require(`~/assets/imgs/${this.project.poster}`)"
          alt=""
        />
      </div>
      <h2 v-intersect="onIntersect">My Role</h2>
      <p style="margin-bottom:20px" v-intersect="onIntersect">
        {{ project.role }}
      </p>
      <h2 data-scroll v-intersect="onIntersect">Stack</h2>
      <p v-intersect="onIntersect">{{ project.techno }}</p>
    </div>
    <div class="separator"></div>
    <div class="wrapper--content" v-intersect="onIntersect">
      <!-- <img
          v-for="(img, index) in project.project_img"
          :key="index"
          :src="require(`~/assets/imgs/${project.poster}`)"
          alt=""
        /> -->
      <div class="wrapper--img wrapper--first--img" v-intersect="onIntersect">
        <img :src="require(`~/assets/imgs/${project.poster}`)" alt="" />
      </div>
      <div class="wrapper--second--third--img">
        <div class="wrapper--img" v-intersect="onIntersect">
          <img :src="require(`~/assets/imgs/${project.poster}`)" alt="" />
        </div>
        <div class="wrapper--img" v-intersect="onIntersect">
          <img :src="require(`~/assets/imgs/${project.poster}`)" alt="" />
        </div>
      </div>
      <div class="wrapper--four--img">
        <div class="wrapper--img" v-intersect="onIntersect">
          <img :src="require(`~/assets/imgs/${project.poster}`)" alt="" />
        </div>
      </div>
      <div class="wrapper--five--img">
        <div class="wrapper--img" v-intersect="onIntersect">
          <img :src="require(`~/assets/imgs/${project.poster}`)" alt="" />
        </div>
      </div>
    </div>
    <div class="wrapper--other-projects" v-intersect="onIntersect">
      <div
        class="wrapper--previous--project wrapper--other--project"
        v-intersect="onIntersect"
      >
        <nuxt-link
          :to="{
            path: `/${
              projects_info[getOtherProjects(project_number - 1)].title
            }`
          }"
        >
          <SquareImg
            v-intersect="onIntersect"
            :img_path="
              projects_info[getOtherProjects(project_number - 1)].poster
            "
          />
          <h1 v-intersect="onIntersect">
            {{ projects_info[getOtherProjects(project_number - 1)].title }}
          </h1>
          <p v-intersect="onIntersect">Previous</p>
        </nuxt-link>
      </div>
      <div
        class="wrapper--next--project wrapper--other--project"
        v-intersect="onIntersect"
      >
        <nuxt-link
          :to="{
            path: `/${
              projects_info[getOtherProjects(project_number + 1)].title
            }`
          }"
        >
          <SquareImg
            v-intersect="onIntersect"
            :img_path="
              projects_info[getOtherProjects(project_number + 1)].poster
            "
          />
          <h1 v-intersect="onIntersect">
            {{ projects_info[getOtherProjects(project_number + 1)].title }}
          </h1>
          <p v-intersect="onIntersect">Next</p>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import projects from "../projects.json";

import gsap from "gsap";
export default {
  name: "Project",
  data() {
    return {
      projects_info: projects,
      project: {},
      project_number: 0,
      mounted_component: true
    };
  },

  created() {
    //  this.projects_info.forEach(item => {
    //    if(item.title==this.$route.params.Project){
    //      this.project=item;
    //      console.log(this.project);
    //      console.log(this.$route.params.Project);
    //    }
    //  });
    this.getProject();
  },

  mounted() {
    gsap
      .timeline()

      .to(
        ".project .wrapper--presentation .title--component span",
        {
          duration: 1,
          stagger: 0.01,
          y: "0px",
          x: "0px",
          skewX: "0deg",
          skewY: "0deg",
          ease: "expo.inOut"
        },
        "start"
      )
      .to(
        ".wrapper--presentation .description",
        {
          x: "0px",
          y: "0px",
          opacity: 1
        },
        "start+=0.6"
      )
      .to(
        ".wrapper--presentation .wrapper--img",
        { y: "0px", x: "0px", opacity: 1 },
        "start+=0.6"
      );
  },
  methods: {
    getProject() {
      for (const [index, project] of this.projects_info.entries()) {
        if (project.title === this.$route.params.Project) {
          this.project = project;
          this.project_number = index;
        }
      }
    },
    getOtherProjects(project_number) {
      if (project_number < 0) {
        return this.projects_info.length - 1;
      } else if (project_number > this.projects_info.length - 1) {
        return 0;
      } else {
        return project_number;
      }
    },
    onIntersect(observer) {
      this.isVisible = observer.isIntersecting;
      let target = observer.entries[0].target;
      if (this.isVisible) {
        gsap.to(target, {
          x: "0px",
          y: "0px",
          opacity: 1.2,
          duration: 1,
          delay: 0.2
        });
      }
    },
    onIntersectT(observer) {
      this.isVisible = observer.isIntersecting;
      let target = observer.entries[0].target;
      if (this.isVisible && this.mounted_component == true) {
        gsap
          .timeline()
          .set(".title--component span.letters", {
            skewX: "20deg",
            skewY: "20deg",
            y: "-120%",
            ease: "expo.inOut"
          })
          .to(".title--component span.letters", {
            duration: 1,
            stagger: 0.02,
            y: "0%",
            skewX: "0deg",
            skewY: "0deg",
            ease: "expo.inOut"
          });
      }
      this.mounted_component = false;
    }
  },
  transition: {
    css: false,
    leave(el, done) {
      gsap
        .timeline()
        .to(".project", {
          opacity: 0
        })
        .add(() => done());
    }
  }
};
</script>

<style lang="scss">
.project {
  padding-top: 80px;

  .wrapper--presentation {
    opacity: 0;
    h1 {
      text-align: center;
      margin-bottom: 70px;
      margin-top: 2rem;
      @media screen and (min-width: $laptop) {
        margin-bottom: 50px;
      }
    }

    .wrapper--img {
      transform: translateX(-50px);
      opacity: 0;
      width: 60%;
      margin: 0px auto;
      .poster {
        width: 100%;
        margin: 20px 0;
        @media screen and(min-width:$laptop) {
          margin: 40px 0;
        }
      }
    }
    p,
    h2 {
      opacity: 0;
      transform: translateY(-50px);
      text-align: center;
      @media screen and (min-width: $laptop) {
        max-width: 500px;
        margin: 0px auto;
      }
    }
  }

  .wrapper--content {
    .wrapper--img {
      opacity: 0;
      transform: translateX(-40px);
      img {
        width: 100%;
      }
    }
    .wrapper--first--img {
      width: 50%;
      margin: 20px auto;
    }
    .wrapper--second--third--img {
      @media screen and(min-width:$laptop) {
        display: flex;
        .wrapper--img {
          width: 50%;
          margin: 20px 0px;
        }
      }
    }
    .wrapper--four--img,
    .wrapper--five--img {
      margin: 40px 0px;
    }
    .wrapper--five--img {
      width: 50%;
      margin: 40px auto;
      img {
        width: 100%;
      }
    }
    .wrapper--four--img {
      width: 50%;
      margin: 40px auto;
      img {
        width: 100%;
      }
    }
  }
  .wrapper--other-projects {
    display: flex;
    margin: 60px 0;
    flex-wrap: wrap;
    .wrapper--other--project {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      @media screen and(min-width: $laptop) {
        width: 50%;
      }
      margin-top: 100px;
      h1 {
        margin: 0;
        font-size: 22px;
      }
      p {
        font-family: Title;
        text-align: center;
        font-size: 15px;
        @media screen and(min-width:$tablet) {
          font-size: 22px;
        }
      }
      h1 {
        margin: 0;
        font-size: 30px;
        @media screen and(min-width:$tablet) {
          font-size: 42px;
        }
      }
      .wrapper--square--img {
        display: none;
        @media screen and(min-width:$tablet) {
          text-align: center;
          display: inherit;
          display: flex;
          margin: 0 5rem 0 0;
        }
        @media screen and(min-width:$laptop) {
          display: inherit;
        }
      }
    }
    .wrapper--previous--project {
      .wrapper--square--img {
        transform: rotate(-15deg) scale(0.6);
        @media screen and(min-width:$laptop) {
          transform: rotate(-15deg) scale(1);
          margin-bottom: 50px;
        }
      }
    }
    .wrapper--next--project {
      .wrapper--square--img {
        transform: rotate(15deg) scale(0.6);
        @media screen and(min-width:$laptop) {
          transform: rotate(15deg) scale(1);
          margin-bottom: 50px;
        }
      }
    }
  }
  .separator {
    height: 1px;
    background-color: $black;
    width: 80%;
    opacity: 0.2;
    color: white;
    @media screen and(min-width:$laptop) {
      margin: 100px auto;
    }
  }
}
</style>
