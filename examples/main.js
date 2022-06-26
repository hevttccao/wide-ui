import { createApp } from 'vue'
import App from './App.vue'
import WDButton from './components/button/button.vue'
import WDDialog from './components/dialog/dialog.vue'
import WDInput from './components/input/input.vue'
import WDSwitch from './components/switch/switch.vue'
import WDColor from './components/color/color.vue'
import './assets/fonts/iconfont.css'
const app = createApp(App)
app.component('wd-button',WDButton)
app.component('wd-dialog',WDDialog)
app.component('wd-input',WDInput)
app.component('wd-switch',WDSwitch)
app.component('wd-color',WDColor)
app.mount('#app')
