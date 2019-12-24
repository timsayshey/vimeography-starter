<template>
    <div class="hello">
        <!-- <div class="vimeography-lightbox">
            <modal :name="this.modalId" :max-width="800" :scrollable="true" :adaptive="true" :reset="true" @closed="clearRoute" width="90%" height="auto" classes="vimeography-modal">
                <component :is="layout" :modalId="this.modalId" :activeVideo="this.activeVideo" :nextVideoUrl="this.nextVideoUrl"></component>
            </modal>
        </div>-->
    </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
