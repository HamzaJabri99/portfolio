<template>
  <div class="padding">
      
    <div class="contact-us ">
        
      <form action="">
          <h1 id="title-con">Contact Me ;)</h1>
        <label for="name">NAME</label>
        <input type="text" name="name" id="name" />
        <label for="email">EMAIL</label>
        <input type="email" name="email" id="email" />
        <label for="message">YOUR MESSAGE</label>
        <textarea
          cols="30"
          rows="4"
          id="message"
          name="message"
          required=""
        ></textarea>
        <div class="downloadd">
            <button type="submit" id="customerOrder">Send</button>
        </div>
        
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
$form-bg: #dee2e6;
$form-border: #f45702;
$form-shadow: #776e5b;
$form-focus: #ffffff;
$font-size: 20px;
$font-face: "Spartan";
$font-color: #2a293e;
body {
  //   width: 100vw;
  //   height: 100vh;
  //   display: grid;
  //   align-items: center;
  //   justify-items: center;
  //   font-size: $font-size;
  //   font-family: $font-face;
  //   color: $font-color;
}
form {
  width: 80%;
  margin: 3rem auto;
  background: $form-bg;
  padding: 5rem 1rem   ;
  border-radius: 5px;
  text-align: left;
  display: block;
  font-size: 30px;
}

label{
    margin: 0 2rem;
}
label,
input,
textarea {
  display: block;
  font-size: $font-size;
  line-height: $font-size * 2;
  font-family: $font-face;
  margin: 1rem auto;
  
}

input {
  margin-bottom: $font-size * 2;
  
}

// h3 {
//   font-weight: normal;
//   font-size: 10pt;
//   line-height: $font-size * 2;
//   font-style: italic;
//   margin: 0 0 0.5em 0;
// }

// span {
//   font-size: 8pt;
// }

input,
textarea {
  border: none;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  background: $form-bg;
  padding-left: 5px;
  outline: none;
  width: 80%;
  margin: 0 auto; 
  color:black
}

input:focus,
textarea:focus {
  border: 1px solid $form-focus;
}

textarea {
  resize: none;
}


#title-con{
    font-family: 'spartan';
    font-size: 20px;
}
.downloadd{
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
      &:hover{
       
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
}

   
    
</style>
