// import element3 from 'element3'
// import 'element3/lib/theme-chalk/index.css'

import {ElButton, ElInput, ElAvatar} from "element3"
import 'element3/lib/theme-chalk/button.css'
import 'element3/lib/theme-chalk/input.css'
import 'element3/lib/theme-chalk/avatar.css'

export default function(app) {
  // app.use(element3)
  app.use(ElButton).use(ElInput).use(ElAvatar)
}