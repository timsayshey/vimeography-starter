import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import { gallery, player, videos } from './modules'

const storeModules = {
  gallery,
  player,
  videos
}

export default storeModules
