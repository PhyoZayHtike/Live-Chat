<template>
   <form>
    <textarea v-model="message" rows="3" @keypress.enter="handleSubmit" placeholder="text message and hit enter to send"></textarea>
    <div class="send">
        <button type="button" @click="handleSubmit">Send Message</button>
    </div>
   </form>
</template>

<script>
import { ref } from 'vue'
import getUser from '@/composables/getUser'
import { timestamp } from '@/firebase/config'
import useCollection from '../composables/useCollection'
export default {
   setup(){
    let message = ref('')
    let {user} = getUser()
    let {error,addDoc} = useCollection("messages")
    let handleSubmit=async()=>{
      let chat={
        message: message.value,
        name: user.value.displayName,
        created_at: timestamp()
      }
     await addDoc(chat);
      message.value = ''
    }
    return {message,handleSubmit}
   }
}
</script>

<style>
 form {
        margin: 10px;
      }
      textarea {
        width: 100%;
        max-width: 100%;
        margin-bottom: 6px;
        padding: 10px;
        box-sizing: border-box;
        border: 0;
        border-radius: 20px;
        font-family: inherit;
        outline: none;
        resize: none;
        background:  rgba(233, 231, 231, 0.5);
      }
      .send{
        display: flex;
        justify-content: flex-end ;
        padding: 15px;
      }
</style>