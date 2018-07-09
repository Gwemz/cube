<template>
    <div>
        <cube-radio-group v-model="selected" :options="options"></cube-radio-group>
        <cube-radio-group v-model="selected2" :options="options2" position="right" :hollow-style="true"></cube-radio-group>
        <cube-radio-group v-model="selected3" :options="options3" :horizontal="true"></cube-radio-group>
        <!-- 使用默认插槽 -->
        <cube-radio-group> 
            <cube-radio v-for="(option,index) of options4" :key="index" :option="option" v-model="selected4">
                <img :src="option.src" alt="">
            </cube-radio>
        </cube-radio-group>
    </div>
</template>
<script>
export default {
  data() {
    return {
      selected: "",
      options: ["Option1", "Option2"],
      selected2: 1,
      options2: [
        {
          label: "Option1",
          value: 1
        },
        {
          label: "Option2",
          value: 2
        },
        {
          label: "Option3",
          value: 3,
          disabled: true
        }
      ],
      selected3: 1,
      options3: [
        {
          label: "one",
          value: 1
        },
        {
          label: "two",
          value: 2
        },
        {
          label: "three",
          value: 3,
          disabled: true
        }
      ],
      selected4: "1",
      options4: [
        {
          label: "1",
          value: "1",
          src:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516805611092&di=80d0f229dd999ffa3be79d6e317832b0&imgtype=0&src=http%3A%2F%2Fimglf0.ph.126.net%2F1EnYPI5Vzo2fCkyy2GsJKg%3D%3D%2F2829667940890114965.jpg"
        },
        {
          label: "2",
          value: "2",
          src:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516805611092&di=80d0f229dd999ffa3be79d6e317832b0&imgtype=0&src=http%3A%2F%2Fimglf0.ph.126.net%2F1EnYPI5Vzo2fCkyy2GsJKg%3D%3D%2F2829667940890114965.jpg"
        },
        {
          label: "3",
          value: "3",
          src:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516805611092&di=80d0f229dd999ffa3be79d6e317832b0&imgtype=0&src=http%3A%2F%2Fimglf0.ph.126.net%2F1EnYPI5Vzo2fCkyy2GsJKg%3D%3D%2F2829667940890114965.jpg",
          disabled: true
        }
      ]
    };
  }
};
</script>
<style scoped>
img{
    width:3rem;
}
</style>
