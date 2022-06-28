<template>
  <div class="padding overlay contact" v-intersect="onIntersect">
    <div class="left" v-intersect="onIntersect">
      <form
        ref="form"
        @submit="sendContact"
        action="https://formsubmit.co/e673b9a91f7a24d38d22e160d6c1ff7c"
        method="POST"
        autocomplete="off"
      >
        <h1>Send a Message</h1>

        <label for="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your Name"
          v-model="contact.name"
          required
        />
        <small class="error"></small>

        <label for="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Your E-mail"
          v-model="contact.email"
          required
        />
        <small class="error"></small>

        <label for="message">Message:</label>
        <textarea
          type="text"
          name="message"
          id="message"
          placeholder="Your Message"
          rows="6"
          v-model="contact.message"
          required
        ></textarea>
        <small class="error"></small>
        <div class="center">
          <input type="submit" name="" id="" value="Send" />
          <p id="success"></p>
        </div>
        <input
          type="hidden"
          name="_next"
          value="https://github.com/HamzaJabri99/portfolio/blob/master/pages/Thanks.vue"
        />
        <input type="hidden" name="_captcha" value="false" />
      </form>
    </div>
    <div class="right" v-intersect="onIntersect">
      <p class="touch" v-intersect="onIntersect">Get In Touch</p>
      <p class="lets" v-intersect="onIntersect">
        Let’s talk about your next project idea.
      </p>
      <p class="lets" v-intersect="onIntersect">
        Feel free to message me and i will reply in a matter of hours.
      </p>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import gsap from "gsap";
export default {
  data() {
    return {
      contact: {
        name: "",
        email: "",
        message: ""
      },
      isSending: false
    };
  },
  mounted() {
    this.loadPage();
  },
  methods: {
    sendContact(e) {
      var usernamecheck = /^[^~`^<>]+$/;
      e.preventDefault();
      if (this.contact.name.length <= 2) {
        alert("name must be at elast 3 characters");
        return;
      }
      if (!this.contact.name.match(usernamecheck)) {
        alert("message must have valid character :D");
        return;
      } else {
        this.$refs.form.submit();
      }
    },
    loadPage() {
      gsap.timeline().to(".contact", {
        duration: 1,
        ease: "expo.out",
        opacity: 1
      });
    },
    onIntersect(observer) {
      this.isVisible = observer.isIntersecting;
      let target = observer.entries[0].target;
      if (this.isVisible) {
        gsap.to(target, {
          x: "0px",
          y: "0px",
          opacity: 1.2,
          duration: 0.5,
          delay: 0.2,
          skewY: "0deg",
          skewX: "0deg",
          stagger: 1
        });
      }
    }
  }
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;600&display=swap");
.contact {
  opacity: 0;
}
.overlay {
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  align-content: center;
  @media screen and(min-width:$laptop) {
    flex-direction: row;
  }
}
.right {
  margin: 3rem 0 2rem 0;
  text-align: center;
  width: 100%;
  @media screen and(min-width:$laptop) {
    margin: 18rem 1rem;
    transform: translateY(100%);
    text-align: left;
  }
}
.lets {
  font-weight: 600;
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  width: 100%;
  transform: translateX(100px);
  @media screen and(min-width:$laptop) {
    transform: translateY(-1500%);
    opacity: 1;
    font-size: 15px;
  }
}
.touch {
  font-weight: 600;
  margin-bottom: 1.5rem;
  width: 100%;
  font-family: "Poppins", sans-serif;
  color: rgb(28, 28, 66);
  transform: translateX(-100px);
  @media screen and(min-width:$laptop) {
    font-size: 26px;
    transform: translateY(-1000%);
    opacity: 1;
  }
}
.left {
  width: 100%;
  margin-bottom: 4rem;

  @media screen and(min-width:$laptop) {
    width: 100%;
  }
}
.overlay h1 {
  font-size: 30px;
  text-align: center;
  margin: 0;
  font-family: Poppins;
  font-weight: 400;
}
.overlay h1:after {
  position: absolute;
  content: "";
  height: 2px;
  top: 114px;
  margin: 0rem auto;
  left: 0;
  right: 0;
  width: 40%;

  transform: translateY(0%);
  transform: translateX(0%);
  border-bottom: 2px solid rgb(255, 103, 103);
}
form {
  max-width: 550px;
  width: 100%;
  background: white;
  margin: 2rem auto 0 auto;
  padding: 40px;
  border-radius: 4px;
  box-sizing: border-box;
  box-shadow: 5px 10px 18px #888888;
  @media screen and(min-width:$laptop) {
    width: 70%;
  }
}
label {
  display: block;
  margin: 20px 0;
}
input,
textarea {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  outline: none;
  resize: none;
  border: none;
  border-bottom: solid 1px #d3d3d3;
}
input:focus,
textarea:focus {
  border-bottom: 1px solid rgb(255, 103, 103);
}
textarea::-webkit-scrollbar {
  width: 4px;
}
textarea::-webkit-scrollbar-thumb {
  background-color: rgb(255, 103, 103);
}
.center {
  text-align: center;
}
input[type="submit"] {
  margin-top: 30px;

  background: linear-gradient(to right, rgb(71, 71, 71), rgb(114, 114, 114));
  color: white;
  font-size: 17px;
  cursor: pointer;
  border-radius: 3px;
  width: 80%;
  transition: all 0.1s;
  &:active {
    border: none;
    width: 85%;
  }
}
</style>
