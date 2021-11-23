<template>
  <div id="overlay" class="overlay">
    <form action="https://formsubmit.co/e673b9a91f7a24d38d22e160d6c1ff7c" method="POST" >
      <h1>Send a Message</h1>

      <label for="name">Name:</label>
      <input type="text" name="name" id="name" placeholder="Your Name" v-model="contact.name" required>
      <small class="error"></small>

       <label for="email">Email:</label>
      <input type="email" name="email" id="email" placeholder="Your E-mail" v-model="contact.email" required>
      <small class="error"></small>

       <label for="message">Message:</label>
      <textarea type="text" name="message" id="message" placeholder="Your Message" rows="6" v-model="contact.message" required></textarea>
      <small class="error"></small>
      <div class="center">
        <input type="submit" name="" id="" value="Send">
        <p id="success"></p>
      </div>
      <input type="hidden" name="_next" value="http://localhost:3000/Thanks">
      <input type="hidden" name="_captcha" value="false">


    </form>
  </div>
</template>
<script>
import axios from 'axios';
export default{
  
data(){
  return{
contact: {
			name: '',
			email: '',
			message: '',
  },
  isSending: false
  }
  
},

methods:{
  	sendContact(){
      axios.post('/api/send-contact',{
       'name': this.contact.name,
       'email':this.contact.email,
       'message':this.contact.message
      }).then(res=>{
        console.log(res);
      }).catch(e=>{
        console.log(e);
      })
    }
}
}

</script>
<style >
#overlay{
  width: 100%;
  height: 100%;
  position: fixed;

}
.overlay h1{
font-size: 30px;
text-align: center;
margin: 0;
  font-family: arial;
}

form{

  max-width: 550px;
  width: 90%;
  background: white;
  margin: 17vh auto 0 auto;
  padding: 40px;
  border-radius: 4px;
  box-sizing: border-box;
}
label{
  display: block;
  margin: 20px 0;
}
input, textarea{
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  outline: none;
  resize: none;
  border: none;
  border-bottom: solid 1px #d3d3d3;
}
input:focus,textarea:focus{
border-bottom: 1px solid rgba(255,0,106);
}
textarea::-webkit-scrollbar{
  width: 4px;
}
textarea::-webkit-scrollbar-thumb{
  background-color: rgb(255,0,10);
}
.center{
  text-align: center;
}
input[type="submit"]{
margin-top: 30px;
width: 90%;
max-width: 200px;
background: linear-gradient(to right, rgb(136, 134, 134), rgb(143, 143, 143));
color: white;
font-size: 17px;
cursor: pointer;
border-radius: 3px;
}
.error{
  color: red;
}
.error-border{
  border-bottom: 1px solid red;
}
#success{
  color: #28a745;
}
</style>