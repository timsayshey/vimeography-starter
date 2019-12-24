<template>
    <div id="subbie">
        Test
        <player :activeVideo="myVideo" v-if="loaded"></player>
    </div>
</template>

<script>
export default {
    name: 'home',
    data() {
        return {
            loaded: false
        }
    },
    mounted(){
        this.$store.dispatch("loadGallery",window.vimeography2.galleries.starter[this.$root.id]).then(() => {
            this.loaded = true;
            console.log( this.$root.id, this.$store.state.videos.items[Object.keys(this.$store.state.videos.items)[0]].name )
        })
    },
    computed: {
        myVideo() {
            console.log( this.$root.id, this.$store.state.videos.items[Object.keys(this.$store.state.videos.items)[0]].name )
            return this.$store.state.videos.items[Object.keys(this.$store.state.videos.items)[0]]
        }
    }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
