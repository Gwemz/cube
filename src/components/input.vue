<template>
<div>
    <cube-input v-model="value"></cube-input>
    <cube-input v-model="value1" :placeholder="placeholder" :type="type" :maxlength="maxlength" :readonly="readonly" :disabled="disabled" :autofocus="autofocus" :autocomplete="autocomplete" :clearable="clearable" :eye="eye"></cube-input>
    value: {{value1}}
    <cube-textarea v-model="value3" indicator="indicator"></cube-textarea>
    <cube-textarea v-model="value4"  :placeholder="placeholder" :maxlength="maxlength" :readonly="readonly" :disabled="disabled" :autofocus="autofocus"></cube-textarea>
</div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      value1: "",
      placeholder: "请输入内容",
      type: "password",
      readonly: false,
      maxlength: 100,
      disabled: false,
      autofocus: true,
      autocomplete: true,
      clearable: true,
      /*
       * 眼睛可见，且密码可见
       * 如果为 false 则眼睛不可见，密码不可见
       * 如果想要眼睛可见但是密码不可见，则配置为对象 { open: false }
       */
      open: false, 
      reverse: true, 
      eye: true,
      value3:'',
      indicator: {
        negative: true,
        remain: true
      },
      value4:''
    };
  }
};
</script>
<style scoped>
body {
  background-color: #cccccc;
}
</style>
