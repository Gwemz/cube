<template>
<div>
    <cube-checkbox v-model="checked"></cube-checkbox>
    <cube-checkbox v-model="checked" position="right" shape="square" :hollow-style="true">
    Styled Checkbox
    </cube-checkbox>
    <cube-checkbox v-model="checked" :option="option" />
    <cube-checkbox v-model="checked" :option="{disabled: true}">
    Disabled Checkbox
    </cube-checkbox>
</div>
    
</template>
<script>
export default {
  data() {
    return {
      checked: true,
      option: {
        label: "Option Checkbox",
        value: "optionValue",
        disabled: false
      }
    };
  }
};
</script>
<style scoped>
</style>
