<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js App" />
        <!-- <player activeVideo="1"></player> -->
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'home',
    components: {
        HelloWorld
    },
    mounted: function(){
        debugger
        // this.$store.gallery.actions.loadGallery(this.$store.gallery, window.vimeography2.galleries.starter)
    },
}

</script>

