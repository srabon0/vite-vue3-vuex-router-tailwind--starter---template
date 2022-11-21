<template>
    <div class="container m-5">
       <p class="text-red-400 p-4 text-bold" >Name</p>
       <h1 class="text-black font-bold text-5xl mb-2">The name in the store is : {{name}}</h1>
       <input class="p-2 rounded border border-blue-600" v-model="newName"  type="text">
       <button class="btn mx-2 p-2 rounded bg-blue-600 text-white" type="submit" @click="saveName" >Save NewName</button>
    </div>
</template>

<script setup>
import { computed,ref } from 'vue';
import { useStore } from 'vuex';
import {useRouter} from 'vue-router'
const router = useRouter()
const store = useStore()
const name = computed(()=>{
    return store.state.user.name
})
  
const newName = ref('')

const saveName = ()=>{
    console.log(newName.value)
    store.dispatch('saveName', newName.value)
    newName.value = ""
    router.push('/about')
    

}
</script>

<style scoped >

</style>