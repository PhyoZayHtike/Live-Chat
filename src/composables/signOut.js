import { ref } from "vue"
import { auth } from '@/firebase/config'

let logout=async()=>{
    let error=ref(null)
    try{
        await auth.signOut();
    }catch(err){
         error.value = err.message;
    }
   }
let signOut=()=>{
    return {logout}
}
export default signOut