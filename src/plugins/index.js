/* 公共引入,勿随意修改,修改时需经过确认 */
import Vue from 'vue'
import 'remixicon/fonts/remixicon.css'
import './element'
import './echarts'
import '@/styles/index.scss'
import '@/icons'
import '@/permission'

import Components from '@/components'
import Directive from '@/directive'
import Tools from '@/utils/tools'

Vue.use(Components)
Vue.use(Directive)
Vue.use(Tools)
