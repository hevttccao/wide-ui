<template>
  <button class="wd-button" :class="[`wd-button--${type}`,{
    'wd-button--round':round,
    'wd-button--disabled': disabled,
  }]" :disabled="disabled" >
    
    <slot></slot>
  </button>
  
</template>

<script>
export default {
    name: 'wd-button',
    // props校验，确保传入的参数合法
    props: {
      type: {
        type: String,
        default: 'main'
      },
      round: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },  
   
}
</script>

<style lang="scss" scoped>
   .wd-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #ffffff;
    border: 1px solid #dcdfe6;
    color: #fff;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    //禁止元素的文字被选中
    -moz-user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
   }
   .wd-button--normal {
      background-color: #fff;
      color: #606266;
      &:hover,&:focus {
        background: #ecf5ff;
        color: #409eff;
        border-color: #c6e2ff;
      }
   }
   .wd-button--main {
      background-color: #409eff;
      &:hover,&:focus {
        background: #66b1ff;
        border-color: #66b1ff;
      }
   }
   .wd-button--success {
      background-color: #67c23a;
      &:hover,&:focus {
        background: #85ce61;
        border-color: #85ce61;
      }
   }
   .wd-button--warning {
      background-color: #e6a23c;
      &:hover,&:focus {
        background: #ebb563;
        border-color: #ebb563;
      }
   }
   .wd-button--danger {
      background-color: #f56c6c;
      &:hover,&:focus {
        background: #f78989;
        border-color: #f78989;
      }
   }
   .wd-button--round {
      border-radius: 20px;
   }
   .wd-button--circle {
      border-radius: 50%;
   }
   .wd-button--disabled {
      cursor: not-allowed;
      opacity: .5;
   }
</style>