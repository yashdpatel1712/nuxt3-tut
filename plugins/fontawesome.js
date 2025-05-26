import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Import individual icons
import { faShoppingCart, faUser, faEnvelope, faHeart, faBars, faAngleDown, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faFacebookF, faXTwitter, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons'

// Add them to the library
library.add(faShoppingCart, faUser, faEnvelope, faGithub, faHeart, faBars, faAngleDown, faAngleLeft, faAngleRight, faFacebookF, faXTwitter, faInstagram, faGoogle)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})
