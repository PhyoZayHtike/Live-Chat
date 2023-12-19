<template>
  <nav v-if="user">
    <div>
        <p>Hi {{user.displayName}}</p>
        <p class="email">logged in as {{user.email}}</p>
    </div>
    <button @click="logout">Logout</button>
  </nav>
</template>

<script>
import { auth } from '@/firebase/config'
import { ref } from 'vue'
import getUser from '../composables/getUser'
import signOut from '../composables/signOut'
export default {
  setup(){
    let {user} = getUser();
    let {logout} = signOut();
    return {logout,user}
  }
}
</script>

<style>

</style>