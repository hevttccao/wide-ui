<template>
  
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      visible: false,
      username: '',
      changeSwitch: false
    };
  },
  methods: {
    close(value) {
      console.log(this.visible);
      this.visible = value
    },
    update(value) {
      this.username = value;
    },
    updateSwitch(value) {
      this.changeSwitch = value;
    }
  },
};
</script>

<style lang="scss" scoped>
.row {
  margin-bottom: 20px;
  .wd-button {
    margin-right: 10px;
  }
}
</style>
