<template>
  <h1 class="title--component">
   <span :class="new_letter ? 'new_letter':''" v-for="letter,i in letters" :key="i" :title="title">{{ letter }}</span>      
  </h1>
</template>

<script>
export default {
  name: "Title",
  data(){
      return{
         letters:[],
         new_letter:false
      }
  },
  
  mounted(){
   this.cutTitle();
  },
  methods:{
      cutTitle(){
          //delete existant letter
          const exist_letters=document.querySelectorAll('.title--component span');
          for(const letter of exist_letters){
              letter.remove();
          }
          const Title= this.$props.title;
          for(const letter of Title){
              this.letters.push(letter);
          }     
      }
  },
  props:{
      title:{
          default:''
      }
  },
  watch: {
        title(newVal, oldVal){
           this.cutTitle();
           this.new_letter=true
        }
            
        } 
    }
    
</script>

<style lang="scss">
.title--component{
  overflow: hidden;
  span{
      display: inline-block;
      &.new_letter{
          transform: translateY(-100%);
      }
  }
}
</style>
