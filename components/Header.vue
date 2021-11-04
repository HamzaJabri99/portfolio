<template>
  <div class="header">
    <div class="wrapper--img">
      <nuxt-link class="circle" :to="`${home.path}`"
        ><img
          :src="require(`~/assets/imgs/logo1.svg`)"
          alt="logo"
          width="100"
          id="brand"
          draggable="false"
      /></nuxt-link>
    </div>

    <div class="wrapper--links">
      <nuxt-link
        v-for="(link, index) in links"
        :key="index"
        :to="`${link.path}`"
      >
        {{ link.name }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      home: {
        name: "Home",
        path: "/"
      },
      links: [
        {
          name: "Projects",
          path: "/Projects"
        },
        {
          name: "About",
          path: "/About"
        },
        {
          name: "Contact",
          path: "/Contact"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  position: absolute;
  box-sizing: border-box;
  margin-top: 0.2rem;
  .wrapper--links {
    overflow: visible;
    display: flex;
    margin-right: 1.2rem;
    font-size: 12px;
    @media screen and (min-width: $laptop) {
      margin-top: 0.5rem;
      margin-right: 10rem;
      font-size: 18px;
      font-size: Title;
    }
    a {
      margin-left: 10px;
      text-transform: uppercase;
      cursor: pointer;
      z-index: 99;
    }
  }
  #brand {
    width: 4rem;
    z-index: 99;
    position: absolute;
    left: 0;
    top: 1rem;
    margin-left: 1rem;
  }
  @media screen and(min-width:$laptop) {
    #brand {
      margin-left: 10rem;
      width: 7rem;
    }
  }

}
</style>
