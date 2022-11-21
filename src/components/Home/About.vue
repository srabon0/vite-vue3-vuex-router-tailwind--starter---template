<template>
    <div>
        the new name is :{{name}}

    </div>
</template>

<script setup>

import { computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore()


const name =  computed(()=>{
    return store.state.user.name 
})

</script>

<style lang="scss" scoped>

</style>