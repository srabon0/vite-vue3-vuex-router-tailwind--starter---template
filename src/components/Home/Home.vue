<template>
    <div>
       <p class="text-primary" >Name</p>
       <h1>The name in the store is : {{name}}</h1>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore()
const name = computed(()=>{
    return store.state.user.name
})
  


</script>

<style >

</style>