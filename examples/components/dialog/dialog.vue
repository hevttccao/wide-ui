<template>
  <transition name="fade">
    <div class="wd-dialog_wrapper" v-show="visible">
    <div class="wd-dialog" :style="{width,marginTop: top}">
      <div class="wd-dialog_header">
        <span class="wd-dialog_title">{{title}}</span>
        <button class="wd-dialog_headerbtn">
          <i class="iconfont icon-close" style="font-size:20px" @click="handleClose"></i>
        </button>
      </div>
      <div class="wd-dialog_body">
        <slot></slot>
      </div>
      <div class="wd-dialog_footer" v-if="$slots.footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
  </transition>
</template>

<script>
export default {
  name: "wd-dialog",
  props:{
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type:String,
      default: '30%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: 'false'
    }
  },
  methods: {
    handleClose() {
      this.$emit('close',false)
    }
  },
};
</script>

<style lang="scss" scoped>
.wd-dialog_wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0, 0, 0, 0.5);
  .wd-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;
    &_header {
      padding: 20px 20px 10px;
      .wd-dialog_title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .wd-dialog_headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .wd-icon-close {
          color: 909399;
        }
      }
    }
    &_body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &_footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      ::v-deep .wd-button:first-child {
        margin-right: 20px;
      }
    }
  }
}
.fade-enter-active {
  animation: run .3s
}
.fade-leave-active {
  animation: run .3s reverse
}
@keyframes run {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>