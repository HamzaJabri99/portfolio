<template>
  <div class="project padding">
    <div class="wrapper--presentation">
      <h1>{{ project.title }}</h1>
      <p>{{ project.description }}</p>
      <div class="wrapper--img">
        <img
          class="poster"
          :src="require(`~/assets/imgs/${this.project.poster}`)"
          alt=""
        />
      </div>
      <h2>My Role</h2>
      <p style="margin-bottom:20px">{{ project.role }}</p>
      <h2 data-scroll >Stack</h2>
      <p>{{ project.techno }}</p>
    </div>
    <div class="separator"></div>
    <div class="wrapper--content ">
      <!-- <img
          v-for="(img, index) in project.project_img"
          :key="index"
          :src="require(`~/assets/imgs/${project.poster}`)"
          alt=""
        /> -->
      <div class="wrapper--img wrapper--first--img"  v-intersect.enter="onIntersect">
        <img :src="require(`~/assets/imgs/${project.poster}`)" alt="" />
      </div>
      <div class="wrapper--second--third--img">
        <div class="wrapper--img" v-intersect.enter="onIntersect">
          <img :src="require(`~/assets/imgs/${project.poster}`)" alt="" />
        </div>
        <div class="wrapper--img" v-intersect.enter="onIntersect">
          <img :src="require(`~/assets/imgs/${project.poster}`)" alt="" />
        </div>
      </div>
      <div class="wrapper--four--img"> 
        <img :src="require(`~/assets/imgs/${project.poster}`)" alt="" />
         </div>
               <div class="wrapper--five--img"> 
        <img  :src="require(`~/assets/imgs/${project.poster}`)" alt="" />
         </div>
    </div>
    <div class="wrapper--other-projects">
      <div class="wrapper--previous--project wrapper--other--project">
        <nuxt-link
          :to="{
            path: `/${
              projects_info[getOtherProjects(project_number - 1)].title
            }`
          }"
        >
          <SquareImg
            :img_path="
              projects_info[getOtherProjects(project_number - 1)].poster
            "
          />
          <h1>
            {{ projects_info[getOtherProjects(project_number - 1)].title }}
          </h1>
          <p>Previous</p>
        </nuxt-link>
      </div>
      <div class="wrapper--next--project wrapper--other--project">
        <nuxt-link
          :to="{
            path: `/${
              projects_info[getOtherProjects(project_number + 1)].title
            }`
          }"
        >
          <SquareImg
            :img_path="
              projects_info[getOtherProjects(project_number + 1)].poster
            "
          />
          <h1>
            {{ projects_info[getOtherProjects(project_number + 1)].title }}
          </h1>
          <p>Next</p>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import projects from "../projects.json";
import LocomotiveScroll from 'locomotive-scroll';
import gsap from 'gsap'
export default {
  name: "Project",
  data() {
    return {
      projects_info: projects,
      project: {},
      project_number: 0
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
  mounted(){
    
    
    const scroll = new LocomotiveScroll({
    el: document.querySelector('body'),
    smooth: true
});

    
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
    onIntersect(observer){
    this.isVisible = observer.isIntersecting;
    let target=observer.entries[0].target;
    if(this.isVisible){
      gsap.to(target,{
        x:'0px',
        opacity:1.2,
        duration:1,
        delay:0.2,
      })
    }
} 
    } 
};
</script>

<style lang="scss" >
.project {
   padding-top: 80px;

  .wrapper--presentation {
    h1 {
      text-align: center;
      margin-bottom: 20px;
    }
    .wrapper--img {
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
      text-align: center;
      @media screen and (min-width: $laptop) {
        max-width: 500px;
        margin: 0px auto;
      }
    }
  }

  .wrapper--content {
    .wrapper--img {
     opacity:0;
     transform:translateX(-40px);
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
    .wrapper--four--img,.wrapper--five--img{
      margin: 40px 0px;
    }
    .wrapper--five--img{
      width: 50%;
      margin: 40px auto;
      img{
        width: 100%;
      }
    }
    .wrapper--four--img{
      width: 50%;
      margin: 40px auto;
      img{
        width: 100%;
      }
    }
  }
  .wrapper--other-projects {
    display: flex;
    margin: 60px 0;
    .wrapper--other--project {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 50%;
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
        font-size: 22px;
        @media screen and(min-width:$tablet) {
          font-size: 42px;
        }
      }
      .wrapper--square--img {
        display: none;
        @media screen and(min-width:$tablet) {
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
.separator{

  height: 1px;
  background-color: $black;
  width: 80%;
  opacity: 0.2;
  color:white;
  @media screen and(min-width:$laptop){
    margin: 100px auto;
  }
}
}
</style>
