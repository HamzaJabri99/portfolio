<template>
  <div class="about padding">
    <div class="wrapper--presentation">
      <div class="wrapper--title">
        <p>Buenos Días, It's Me</p>
        <h1>Jabri</h1>
        <h1>Hamza</h1>
      </div>

      <div class="wrapper--img">
        <img :src="require(`~/assets/imgs/5252.jpg`)" alt="" />
      </div>
      <p class="presentation--pitch">
        junior fullstack developer, Recently graduated as a software and website
        developer, I learnt to code from an early age in various computer
        languages, I master the different technical steps of creating a web
        application, understanding user needs, from frontend and backend
        development to maintenance.
      </p>
    </div>
    <div class="wrapper--career">
      <InfoCard v-for="(career, i) in careers" :key="i" :career="career" />
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
    <div class="wrapper--infos ">
      <div class="infos">
        <p class="title">{{ infos.skills.title }}</p>
        
        <div v-for="(content, i) in infos.skills.content" :key="i" >
          
         <h3>{{ content.title }}</h3> 
           
         <div class="wrapper--languages" v-for="contents,i in content.content" :key="i">{{contents}}</div> 
       </div>
      </div>
      <div class="links ">
        
        <p class="title ">{{ infos.links.link }}</p>
          <div class="link" v-for="(link, i) in infos.links.content" :key="i">
          <h3>{{ link.title }}</h3>
          <div> {{ link.site }}</div>
        </div>
      </div>
    </div>

    <div class="wrapper--contact">
      <h1>Interested?</h1>
      <h1>don't hesitate to contact me !</h1>
      <p>
        I'll be Glad hearing from you, Answering Your Questions, And Sharing
        Ideas.
      </p>
      <!-- <a to="mailto:jabri.oldd@gmail">Contact Me</a> -->
    </div>
    <router-link to="/Contact">Contact Me</router-link>
    <!-- <p class="inspired">Made By Hamza</p> -->
  </div>
</template>

<script>
import InfoCard from "~/components/InfoCard.vue";
export default {
  name: "About",
  data() {
    return {
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
            frontEnd: 
              {
                title: "FrontEnd",
                content: [
                  "html",
                  "Css",
                  "JavaScript",
                  "VueJs",
                  "ReactJs",
                  "GSAP"
                ]
              }
            ,
            backEnd: {
                title: "BackEnd",
                content: [
                  "PHP",
                  "Laravel",
                  "NodeJs",
                ]
              },
            other: {
                title: "Other",
                content: [
                  "Git",
                  "Figma",
                  "AdobeXD",
                ]
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
  components: { InfoCard }
};
</script>

<style lang="scss">
.about {
  
  @media screen and(min-width:$laptop) {
    //margin: 0px auto;
    margin-left: auto;
    margin-right: auto;
  }
  .wrapper--presentation {
    p,
    h1 {
      text-align: center;
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
    @media screen and(min-width:$laptop){
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
        @media screen and(min-width:$laptop){
          h1 {
      text-align: center;
      @media screen and (min-width: $laptop) {
        margin: 30px 0px;
        line-height: 115px;
      }
    }
    p {
      
      @media screen and (min-width: $laptop) {
        text-align: center;
        font-size: 20px;
        letter-spacing: 2px;
        line-height: 35px;
        text-align: center;
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
    
    @media screen and (min-width: $laptop){
    width: 100%;
    font-size: 20px;
    margin: 0px 10%;
    ul {
      padding: 0;


    }
    div {
      width: 100%;
    }
    }
    
  }
  .wrapper--infos {
    @media screen and(min-width:$laptop) {
      display: flex;
    }

    > div {
      .title {
        color: #ff022a;
        text-transform: uppercase;
        font-size: 20px;
      }
      @media screen and(min-width:$laptop) {
        margin-right: 240px;
      }
    }

    // .infos,.links{
    //     border: 2px black solid;
    //     border-radius: 5px;
    //     padding: 1rem;
    //     text-align: center;
    // }
  }
  .wrapper--languages{
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    width:100%;
    letter-spacing: 1px;
  }
  .links,.infos{

    text-align: center;
    display: block;
    margin: 3rem auto;
   border: 2px solid black;
   padding: 0.2rem 0rem;
   border-radius: 5px;
   background: rgba(206, 204, 204,0.5);
   
   .separator{
     width:10%;
      height: 1px;
      background: $black;
      margin-top: 40px;
    }
    @media screen and(min-width:$laptop) {
      text-align: center;
    display: block;
    margin: 3rem auto;
   border: 2px solid black;
   padding: 1rem;
   border-radius: 5px;
   background: rgba(206, 204, 204,0.5);
   
   .separator{
     width:10%;
      height: 1px;
      background: $black;
      margin-top: 40px;
    }
    }
    
  }
  .links{
    padding: 4rem 3rem;
    @media screen and (min-width: $laptop){
      padding: 5rem;
    }
   
  }
  .infos{
    padding: 3rem 3rem;
    @media screen and (min-width: $laptop){
      padding: 5rem;
    }
   
  }
}
</style>
