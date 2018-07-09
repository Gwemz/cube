<template>
    <div>
        <cube-select v-model="value" :options="options"></cube-select>
        <cube-select
            v-model="value2"
            :title="title"
            :options="options"
            :placeholder="placeholder"
            :auto-pop="autoPop"
            :disabled="disabled"
            @change="change">
        </cube-select>
        <cube-switch v-model="value3">Switch</cube-switch>
        <cube-switch v-model="value4" :disabled="true">Switch</cube-switch>
        <cube-rate v-model="value5"></cube-rate>
    </div>
</template>
<script>
export default {
  data() {
    return {
      value: 2017,
      value2:'',
      options: [2013, 2014, 2015, 2016, 2017, 2018],
      title: "入职时间",
      placeholder: "请选择入职时间",
      autoPop: false,
      disabled: false,
      value3:true,
      value4:false,
      value5:3
    };
  },
  methods: {
    change(value, index, text) {
      console.log("change", value, index, text);
    }
  }
};
</script>
