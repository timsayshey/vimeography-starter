import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
Vue.use(Vuex)

import {
  Player,
  Lightbox,
  Search,
  Filters,
  DownloadLink,
  PagingControls,
  Mixins
} from 'vimeography-blueprint'

Vue.component('player', Player)
Vue.component('lightbox', Lightbox)
Vue.component('search', Search)
Vue.component('filters', Filters)
Vue.component('download-link', DownloadLink)
Vue.component('paging-controls', PagingControls)
Vue.component('mixins', Mixins)

import cloneDeep from 'lodash.clonedeep'

Vue.config.productionTip = false
import storeModules from './store'

for (var id in window.vimeography2.galleries.starter) {
  new Vue({
    router,
    render: h => h(App),
    store: new Vuex.Store({
      modules: cloneDeep(storeModules)
    }),
    data: {
      id
    }
  }).$mount('#vimeography-gallery-' + id + ' > div')
}
