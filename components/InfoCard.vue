<template>
  <div class="info--card" v-intersect="onIntersect">
    <div class="title" v-intersect="onIntersect">{{ career.title }}</div>
    <div class="wrapper--career" v-for="item,i in career.content" :key="i">
      <p class="subtitle" v-intersect="onIntersect">{{item.title}}</p>
      <p class="year">{{ item.year}}</p>
      <p class="content"  v-intersect="onIntersect">
        
        {{ item.content}}
      </p>
      
      <div class="separator" v-intersect="onIntersect"></div>
    </div>
   
  </div>
  
</template>

<script>
import gsap from 'gsap'
export default {
  name: "InfoCard",
  props: {
    career: Object
  },
  mounted() {
    //this.linkify(this.info.contents.content);
    // this.info.contents.forEach(item=>{
    //   console.log(item);
    // })
    //console.log(this.info.contents[5].title);
  },
  methods: {
    linkify(inputText) {
      var replacedText, replacePattern1;
      //URLs starting with http://, https://, or ftp://
      replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
      replacedText = inputText.replace(
        replacePattern1,
        '<a href="$1" target="_blank">$1</a>'
      );
      return replacedText;
    },
    onIntersect(observer) {
      this.isVisible = observer.isIntersecting;
      let target = observer.entries[0].target;
      if (this.isVisible) {
        gsap
          
          .to(target, {
            stagger: 0.5,
            duration: 2,
            x: "0px",
            opacity: 1
          });
      }
    }
  }
};
</script>

<style lang="scss">
.info--card {
  
  color: #fff;
  
  .title {
    text-align: left;
    font-size: 20px;
    color: red;
    margin-top: 40px;
    line-height: 10px;
    opacity: 0;
    transform: translateX(100px);
    font-family: 'Text';
  }
  .wrapper--career {
    margin-bottom: 40px;
    .subtitle {
      font-size: 20px;
      font-weight: bold;
      line-height: 20px;
 
      // margin: 1rem 0;
    }
    .separator{
      height: 1px;
      background: #fff;
      margin-top: 40px;
     opacity:0;
     transform:translateX(-40px);
    }
    .year{
      font-size: 15px;
      color: grey;
    }
    .content{
      
       font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
           line-height: 25px;
           opacity:0;
     transform:translateX(-40px);
     
    }

  }
  @media screen and (min-width:$laptop) {
    color: #fff;
  text-align: left;
  .title {

    font-size: 20px;
    color: red;
    margin-top: 40px;
    line-height: 10px;
    text-decoration: underline;
    font-family: 'Text';
    opacity:0;
     transform:translateX(-40px);
  }
  .wrapper--career {
    margin-bottom: 40px;
    .subtitle {
      font-size: 30px;
      font-weight: bold;
      line-height: 20px;
             
      // margin: 1rem 0;
    }
    .separator{
      height: 1px;
      background: #fff;
      margin-top: 40px;
    }
    .year{
      font-size: 15px;
    }
    .content{
      
       font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
           line-height: 25px;
    }

  }
  }
  

}
</style>
