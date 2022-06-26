<template>
  <div :class="`wd-switch-${modelValue}`" @click="updateSwitch"> 
    
  </div>
</template>

<script>
export default {
    name: 'wd-switch',
   
    props: {
        modelValue: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        updateSwitch(e) {
            this.$emit('updateSwitch', !this.modelValue);
        }
    }
}
</script>

<style lang="scss" scoped>
    .wd-switch-false {
        width: 40px;
        height: 20px;
        position: relative;
        border-radius: 10px;
        box-sizing: border-box;
        border: 1px solid #dcdfe6;
        background-color: #dcdfe6;
        cursor: pointer;
        transition: all .3s;
        &::after {
            content: '';
            position: absolute;
            width: 16px;
            height: 16px;
            background-color: #fff;
            top: 1px;
            left: 1px;
            border-radius: 50%;
        }
    }
    .wd-switch-true {
        width: 40px;
        height: 20px;
        position: relative;
        border-radius: 10px;
        box-sizing: border-box;
        border: 1px solid #13ce66;
        background-color: #13ce66;
        cursor: pointer;
        transition: all .3s;
        &::after {
            content: '';
            position: absolute;
            width: 16px;
            height: 16px;
            background-color: #fff;
            top: 1px;
            right: 1px;
            border-radius: 50%;
        }
    }
</style>