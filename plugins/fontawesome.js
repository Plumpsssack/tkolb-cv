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
import { faAngular, faBootstrap, faGitAlt, faHtml5, faJsSquare, faNode, faNodeJs, faPhp, faVuejs } from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false
library.add(faMountain, faGlobeAsia, faGuitar, faDumbbell, faCertificate, faAngular, faVuejs, faNodeJs, faPhp, faBootstrap, faHtml5, faNode, faJsSquare, faGitAlt)

// Register the component globally
Vue.component('font-awesome-icon', FontAwesomeIcon)
