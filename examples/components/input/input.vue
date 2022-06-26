<template>
  <div class="wd-input">
    <input
      class="wd-input_inner"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :disabled="disabled"
      :class="{ 'is-disabled': disabled }"
      :value="modelValue"
      @input="handleInput"
    />
    <span class="wd-input_suffix">
      <i
        class="iconfont icon-ziyuanxhdpi"
        v-if="clearable && modelValue"
        @click="clear"
      ></i>
    </span>
  </div>
</template>

<script>
export default {
  name: "wd-input",
  props: {
    type: {
      type: String,
      default: "text",
    },
    name: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "请输入内容",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: String,
      default: "",
    },
    clearable: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleInput(e) {
      this.$emit("update", e.target.value);
    },
    clear() {
      this.$emit("update", "");
    },
  },
};
</script>

<style lang="scss" scoped>
.wd-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .wd-input_inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 045, 0.355, 1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #409eff;
    }
    // input禁用样式
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}

.wd-input_suffix {
  position: absolute;
  right: 10px;
  height: 100%;
  top: 0;
  line-height: 40px;
  text-align: center;
  color: #c0c4cc;
  transition: all 0.3s;
  z-index: 900;
  i {
    color: #c0c4cc;
    font-size: 14px;
    cursor: pointer;
    transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
}
</style>