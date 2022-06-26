import Button from './button/button.vue'
import Color from './color/color.vue'
import Dialog from './dialog/dialog.vue'
import Input from './input/input.vue'
import Switch from './switch/switch.vue'
import './fonts/iconfont.css'
const components = [
    Button,Color,Dialog,Input,Switch
]

const install = function(Vue) {
    components.forEach((item)=>{
        Vue.component(item.name,item)
    })
}

if(typeof window !== 'undefined' && window.Vue) {install(window.Vue)}
export default {
    install
}