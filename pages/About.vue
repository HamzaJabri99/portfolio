<template>
  <div class="about padding" v-intersect="onIntersect">
    <div class="wrapper--presentation" v-intersect="onIntersect">
      <div class="wrapper--title" v-intersect="onIntersect">
        <p v-intersect="onIntersect">Buenos Días, It's Me</p>
        <Title title="Jabri" v-intersect="onIntersectT" />
        <Title title="Hamza" v-intersect="onIntersectT" />
      </div>

      <div class="wrapper--img" v-intersect="onIntersect">
        <img
          :src="require(`~/assets/imgs/5252.jpg`)"
          alt=""
          v-intersect="onIntersect"
        />
      </div>
      <p class="presentation--pitch" v-intersect="onIntersect">
        junior fullstack developer, Recently graduated as a software and website
        developer, I learnt to code from an early age in various computer
        languages, I master the different technical steps of creating a web
        application, understanding user needs, from frontend and backend
        development to maintenance.
      </p>
    </div>
    <div class="wrapper--career">
      <InfoCard
        v-for="(career, i) in careers"
        :key="i"
        :career="career"
        v-intersect="{ callback: onIntersect, options: { threshold: 0.5 } }"
      />
      <!-- <div class="download">
      <button>French CV</button>
      <button>French CV</button>
    </div> -->
      <div class="download">
        <button
          href="https://www.dropbox.com/s/4bov1b6qiuvkau3/mon_CV%20%282%29.pdf?dl=0"
        >
          DOWNLOAD CV
        </button>
        <button>TÉLECHARGER CV</button>
      </div>
    </div>
    <div
      class="wrapper--infos"
      v-intersect="{ callback: onIntersect, options: { threshold: 0.3 } }"
    >
      <div class="infos" v-intersect="onIntersect">
        <p class="title">{{ infos.skills.title }}</p>

        <div v-for="(content, i) in infos.skills.content" :key="i">
          <h3>{{ content.title }}</h3>
          <div class="dd">
            <p
              v-for="(contents, i) in content.content"
              :key="i"
              v-intersect="onIntersect"
            >
              {{ contents }}
            </p>
          </div>
        </div>
      </div>
      <div
        class="links"
        v-intersect="{ callback: onIntersect, options: { threshold: 0.3 } }"
      >
        <p class="title">{{ infos.links.link }}</p>
        <div class="link" v-for="(link, i) in infos.links.content" :key="i">
          <h3 v-intersect="onIntersect">{{ link.title }}</h3>

          <a :href="link.site" v-intersect="onIntersect" target="blank">
            {{ link.site.slice(8) }}
          </a>
        </div>
      </div>
    </div>

    <div class="wrapper--contact" v-intersect="onIntersect">
      <h1>Interested?</h1>
      <h1>don't hesitate to contact me !</h1>
      <p>
        I'll be Glad hearing from you, Answering Your Questions, And Sharing
        Ideas.
      </p>
      <!-- <a to="mailto:jabri.oldd@gmail">Contact Me</a> -->
    </div>
    <router-link to="/Contact" class="con"
      >Contact Me
      <div class="under"></div
    ></router-link>

    <!-- <p class="inspired">Made By Hamza</p> -->
  </div>
</template>

<script>
import InfoCard from "~/components/InfoCard.vue";
import gsap from "gsap";
export default {
  name: "About",
  data() {
    return {
      mounted_comp: true,
      careers: [
        {
          title: "Experience",
          content: [
            {
              title: "FrontEnd Developer Fast-Anime.tv",
              year: "2018-2021",
              content:
                "This was my first Side Project. I learned Web Development cause of it I Developed the FrontEnd of it.Sadly it got shutdown in 2019 because of Copyright Stuff. and i created it in 2021"
            },
            {
              title: "FrontEnd Developer Axiesos.com ",
              year: "2021-2022",
              content:
                "Creating The frontEnd Design Also as Developing it. This Website is dedicated to the card game called Axie infinity. Making it a bit clear to new players"
            }
          ]
        },
        {
          title: "Education",
          content: [
            {
              title: "specialized technician diploma - ISTA",
              year: "2018-2020",
              content:
                "Studied two years after reaching my highschool degree in a vocational school and being able to Obtain my diploma degree in programming"
            },
            {
              title: "Bachelor Degree in Web Developement - LUS ",
              year: "2021-2022",
              content:
                "After reaching my diploma degree, i continued Studying for a bachelor dagree in Web Development"
            }
          ]
        }
      ],
      infos: {
        skills: {
          title: "Skills",
          content: {
            frontEnd: {
              title: "FrontEnd",
              content: ["html", "Css", "JavaScript", "VueJs", "ReactJs", "GSAP"]
            },
            backEnd: {
              title: "BackEnd",
              content: ["PHP", "Laravel", "NodeJs"]
            },
            other: {
              title: "Other",
              content: ["Git", "Figma", "AdobeXD", "WordPress"]
            }
          }
        },
        links: {
          link: "Links",
          content: [
            {
              title: "github",
              site: "https://github.com/HamzaJabri99"
            },
            {
              title: "dribbble",
              site: "https://dribble.com/HamzaJabri99"
            },
            {
              title: "Behance",
              site: "https://dribble.com/HamzaJabri99"
            }
          ]
        }
      }
    };
  },
  components: { InfoCard },
  mounted() {
    this.loadPage();
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
            ease: "expo.inOut"
          })
          .to(".title--component span.letters", {
            duration: 1,
            stagger: 0.02,
            y: "0",
            skewX: "0deg",
            skewY: "0deg",
            ease: "expo.inOut"
          });
      }
      this.mounted_comp = false;
    },
    loadPage() {
      gsap.timeline().to(".about", {
        duration: 0.5,
        ease: "expo.out",
        opacity: 1
      });
    },
    onIntersect(observer) {
      this.isVisible = observer.isIntersecting;
      const target = observer.entries[0].target;
      if (this.isVisible) {
        switch (target.className) {
          case "about":
            gsap.timeline().to(".about", {
              opacity: 1,
              ease: "expo.inOut"
            });

            break;
          case "info--card":
            gsap
              .timeline()
              .to(
                target.querySelectorAll(
                  ".title, .subtitle, .content, .separator"
                ),
                {
                  stagger: 0.25,
                  duration: 1.1,
                  x: "0px",
                  opacity: 1,
                  ease: "expo.out"
                }
              );
            break;
          case "wrapper--infos":
            {
              gsap
                .timeline()
                .to(target.querySelectorAll(".infos, p, a, .title"), {
                  stagger: 0.1,
                  duration: 0.5,
                  x: "0px",
                  y: "0px",
                  opacity: 1,
                  ease: "expo.inOut"
                });
            }
            break;
          case "links":
            {
              gsap
                .timeline()
                .to(target.querySelectorAll(".links, .title, .link, h3, a"), {
                  stagger: 0.1,
                  duration: 0.5,
                  x: "0px",
                  y: "0px",
                  opacity: 1,
                  ease: "expo.inOut"
                });
            }
            break;
          case "wrapper--contact": {
            gsap.timeline().to(target.querySelectorAll("h1, p"), {
              stagger: 0.1,
              duration: 0.5,
              x: "0px",
              y: "0px",
              opacity: 1,
              ease: "expo.inOut"
            });
          }
        }
      }
    }
  },
  transition: {
    css: false,
    leave(el, done) {
      gsap
        .timeline()
        .to(".about", {
          opacity: 0
        })
        .add(() => done());
    }
  }
};
</script>

<style lang="scss">
.about {
  opacity: 0;
  @media screen and(min-width:$laptop) {
    //margin: 0px auto;
    margin-left: auto;
    margin-right: auto;
  }
  .wrapper--presentation {
    p,
    h1 {
      text-align: center;
      span {
        font-size: 35px;

        @media screen and (min-width: $laptop) {
          font-size: 100px;
          letter-spacing: -2px;
        }
      }
    }
    h1 {
      line-height: 30px;
      @media screen and(min-width:$tablet) {
        line-height: 50px;
      }
    }
    .wrapper--img {
      max-width: 80vw;
      margin: 15px auto;

      img {
        width: 100%;
        height: auto;
        border-radius: 10px;
      }
    }
    .presentation--pitch {
      font-size: 18px;
      line-height: 25px;
      text-align: end;
      @media screen and(min-width:$laptop) {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-size: 20px;
        line-height: 30px;
        text-align: center;
        margin: 2rem 0;
      }
    }
  }
  .wrapper--career {
    background: $black;
    border-radius: 10px;
    width: 100%;
    padding: 30px 40px;
    box-sizing: border-box;
    @media screen and(min-width:$laptop) {
      background: $black;
      border-radius: 10px;
      width: 100%;
      padding: 30px 40px;
      box-sizing: border-box;
    }
  }
  .wrapper--contact {
    width: 100%;

    line-height: 50px;
    text-align: center;
    @media screen and(min-width:$laptop) {
      h1 {
        transform: translateX(100px);
        text-align: center;
        opacity: 0;
        @media screen and (min-width: $laptop) {
          margin: 30px 0px;
          line-height: 115px;
          opacity: 0;
          transform: translateX(100px);
        }
      }
      p {
        @media screen and (min-width: $laptop) {
          text-align: center;
          font-size: 20px;
          letter-spacing: 2px;
          line-height: 35px;
          text-align: center;
          transform: translateX(100px);
          opacity: 0;
        }
      }
    }
  }

  a {
    display: block;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    width: 120px;
    margin: 20px auto;
  }
  .wrapper--title {
    h1 {
      margin: 0.1px 0px;
    }
    span.letters {
    }
    p {
      margin: 2rem;
      @media screen and(min-width: $tablet) {
        margin-top: 1rem;
      }
    }
    h1 {
      margin: 2rem;
      @media screen and(min-width: $tablet) {
        margin-top: 1rem;
      }
    }
    h1 {
      text-align: center;
      @media screen and (min-width: $laptop) {
        margin: 10px 0px;
        line-height: 115px;
      }
    }
  }
  .download {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 1rem;
    button {
      border: 2px solid white;
      margin: 0 1rem;
      border-radius: 5px;
      background-color: white;
      font-weight: bolder;
      font-family: "Title";
      cursor: pointer;
      padding: 10px;
      opacity: 0.9;
      transform: scale(1);
      transition: all 0.3s ease-in-out;
      outline: red;
      font-size: 15px;
    }
    button:hover {
      transform: scale(0.99);
      opacity: 1;
    }
    @media screen and (min-width: $laptop) {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-bottom: 1rem;
      button {
        border: 2px solid white;
        margin: 0 1rem;
        border-radius: 5px;
        background-color: white;
        font-weight: bolder;
        font-family: "Title";
        cursor: pointer;
        padding: 10px;
        opacity: 0.9;
        transform: scale(1);
        transition: all 0.3s ease-in-out;
        outline: red;
        font-size: 18px;
      }
      button:hover {
        transform: scale(0.99);
        opacity: 1;
      }
    }
  }
  .wrapper--infos {
    width: 100%;
    .title {
      transform: translateX(100px);
      opacity: 0;
    }
    @media screen and (min-width: $laptop) {
      width: 100%;
      font-size: 20px;
    }
  }
  .wrapper--infos {
    .title {
      color: #ff022a;
      text-transform: uppercase;
    }
    @media screen and(min-width:$laptop) {
      display: flex;
    }

    // > div {
    //       .title {
    //         color: #ff022a;
    //         text-transform: uppercase;
    //         font-size: 20px;
    //       }
    //       @media screen and(min-width:$laptop) {
    //         margin-right: 240px;
    //       }
    //     }

    // .infos,.links{
    //     border: 2px black solid;
    //     border-radius: 5px;
    //     padding: 1rem;
    //     text-align: center;
    // }
  }
  .link {
    p,
    a {
      font-size: 14px;
      padding: 10px;
      width: 100%;
      background: #fafafa;
      opacity: 1;
      transition: all 0.3s ease-in-out;
      margin: 5px;
      border-radius: 5px;
      border-width: 1.5px;
      box-shadow: 5px 15px 15px rgba($color: #000000, $alpha: 0.1);
      color: rgb(0, 0, 0, 0.9);
      transform: translateY(-100px);
      opacity: 0;
      &:hover {
        box-shadow: 5px 15px 15px rgba($color: #000000, $alpha: 0.3);
        cursor: default;
      }
    }

    @media screen and (min-width: $laptop) {
      a {
        font-size: 20px;
        font-weight: 200;
        padding: 10px;
        background: #fafafa;
        opacity: 1;
        transition: all 0.3s ease-in-out;
        margin: 5px;
        border-radius: 5px;
        border-width: 1.5px;
        box-shadow: 5px 15px 15px rgba($color: #000000, $alpha: 0.1);
        color: rgb(0, 0, 0, 0.9);
        transform: translateY(-100px);
        opacity: 0;
        &:hover {
          box-shadow: 5px 15px 15px rgba($color: #000000, $alpha: 0.3);
          cursor: pointer;
        }
      }
    }
  }
  .dd {
    display: flex;
    align-content: center;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    letter-spacing: 1px;
    width: 100%;
    p {
      font-size: 14px;
      padding: 10px;
      background: #fafafa;
      opacity: 1;
      transition: all 0.3s ease-in-out;
      margin: 5px;
      border-radius: 5px;
      border-width: 1.5px;
      box-shadow: 5px 15px 15px rgba($color: #000000, $alpha: 0.1);
      color: rgb(0, 0, 0, 0.9);
      transform: translateY(-100px);
      opacity: 0;
      &:hover {
        box-shadow: 5px 15px 15px rgba($color: #000000, $alpha: 0.3);
        cursor: default;
      }
    }
    @media screen and(min-width: $laptop) {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      letter-spacing: 1px;
      padding-bottom: 15px;
      p {
        font-size: 18px;
        padding: 10px;
        background: #fafafa;
        opacity: 1;
        transition: all 0.3s ease-in-out;
        margin: 5px;
        border-radius: 5px;
        border-width: 1.5px;
        box-shadow: 5px 15px 15px rgba($color: #000000, $alpha: 0.1);
        color: rgb(0, 0, 0, 0.9);
        transform: translateY(-100px);
        opacity: 0;
        &:hover {
          box-shadow: 5px 15px 15px rgba($color: #000000, $alpha: 0.3);
          cursor: default;
        }
      }
    }
  }
  .links,
  .infos {
    text-align: center;
    display: block;
    margin: 3rem auto;
    border: 2px solid black;

    border-radius: 5px;
    background: rgba(206, 204, 204, 0.5);

    .separator {
      width: 10%;
      height: 1px;
      background: $black;
      margin-top: 40px;
    }
    @media screen and(min-width:$laptop) {
      margin: 3rem auto;
      border: 2px solid black;
      padding: 1rem;
      border-radius: 5px;
      background: rgba(206, 204, 204, 0.5);
      div p {
        display: flex;
      }
      .separator {
        width: 10%;
        height: 1px;
        background: $black;
        margin-top: 40px;
      }
    }
  }
  .links {
    padding: 4rem 3rem;
    @media screen and (min-width: $laptop) {
      padding: 10px 5rem;
    }
  }
  .infos {
    padding: 3rem 3rem;
    @media screen and (min-width: $laptop) {
      padding: 10px 30px;
    }
  }
  .con {
    margin-top: 4rem;
  }
  .under {
    background: #ff93a3;
    height: 2px;
    text-align: center;
    width: 100%;
  }
}
</style>
