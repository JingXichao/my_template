/* 公共引入,勿随意修改,修改时需经过确认 */
import Vue from 'vue'
import 'remixicon/fonts/remixicon.css'
import './element'
import './echarts'
import '@/styles/index.scss'
import '@/icons'
import '@/permission'
import '@/components'
import '@/layouts/export'

import Tools from '@/utils/tools'
import Permissions from '@/utils/Permissions'

Vue.use(Tools)
Vue.use(Permissions)
