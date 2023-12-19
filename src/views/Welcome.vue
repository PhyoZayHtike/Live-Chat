<template>
  <div class="welcome container">
    <div v-if="showLoginForm">
        <Login @enterChatroom="enterChatroom"></Login>
        <p>Not a menber? <span @click="showLoginForm= !showLoginForm">Create Account?</span></p>
    </div>
    <div v-else>
        <Sign @enterChatroom="enterChatroom"></Sign>
        <p>Already a menber? <span @click="showLoginForm= !showLoginForm">Login Account?</span></p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import Login from '../components/Login'
import Sign from '../components/Sign'
import {useRouter} from 'vue-router'
export default {
  components: {
    Login, Sign 
    },
    setup(){
        let showLoginForm = ref(true);
        let router = useRouter();
        let enterChatroom=()=>{
           router.push({name:"Chatroom"})
        }
        return {showLoginForm,enterChatroom};
    }
  
}
</script>

<style>
     .welcome {
        text-align: center;
        padding: 20px 0;
      }
  /* form styles */
  .welcome form {
    width: 300px;
    margin: 20px auto;
  }
  /* .welcome label {
    display: block;
    margin: 20px 0 10px;
  } */
  .welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
  }
  .welcome span{
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }
  .welcome button {
    margin: 20px auto;
    cursor: pointer;
  }
</style>