import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faCertificate,
  faDumbbell,
  faGlobeAsia,
  faGuitar,
  faMountain,
} from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false
library.add(faMountain, faGlobeAsia, faGuitar, faDumbbell, faCertificate)

// Register the component globally
Vue.component('font-awesome-icon', FontAwesomeIcon)
