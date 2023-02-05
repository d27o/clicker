import { createStore, Store } from 'vuex'
import { clicker } from './clicker.module'

export default createStore({
  modules: {
    clicker,
  }
})
