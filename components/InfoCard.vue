<template>
  <div class="info--card">
    <div class="title">{{ career.title }}</div>
    <div class="wrapper--career" v-for="(item, i) in career.content" :key="i">
      <p class="subtitle">{{ item.title }}</p>
      <p class="year">{{ item.year }}</p>
      <p class="content">
        {{ item.content }}
      </p>

      <div class="separator"></div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
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
    font-family: "Text";
  }
  .wrapper--career {
    margin-bottom: 40px;
    .subtitle {
      font-size: 20px;
      font-weight: bold;
      line-height: 20px;

      // margin: 1rem 0;
    }
    .wrapper--career::selection {
      background: rgb(65, 249, 255);
      content: "";
      /* WebKit/Blink Browsers */
    }
    .separator {
      height: 1px;
      background: #fff;
      margin-top: 40px;
      opacity: 0;
      transform: translateX(-40px);
    }
    .year {
      font-size: 15px;
      color: grey;
    }
    .content {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      line-height: 25px;
      opacity: 0;
      transform: translateX(-40px);
    }
  }
  @media screen and (min-width: $laptop) {
    color: #fff;
    text-align: left;
    .title {
      font-size: 20px;
      color: red;
      margin-top: 40px;
      line-height: 10px;
      text-decoration: underline;
      font-family: "Text";
      opacity: 0;
      transform: translateX(-40px);
    }
    .wrapper--career {
      margin-bottom: 40px;
      .subtitle {
        font-size: 30px;
        font-weight: bold;
        line-height: 20px;

        // margin: 1rem 0;
      }
      .separator {
        height: 1px;
        background: #fff;
        margin-top: 40px;
      }
      .year {
        font-size: 15px;
      }
      .content {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        line-height: 25px;
      }
    }
  }
}
</style>
