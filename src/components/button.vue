<template>
    <div class="btn">
        <cube-button>Button</cube-button>
        <cube-button type="submit">Submit button</cube-button>
        <cube-button :active="true">Active button</cube-button>
        <cube-button :disabled="true">Disabled button</cube-button>
        <cube-button @click="showToast">show toast</cube-button>
        <cube-button icon="cubeic-right">Button with Icon</cube-button>
        <cube-button :light="true">Light button</cube-button>
        <cube-button :inline="true">Inline button</cube-button>
        <cube-button :outline="true">Outline button</cube-button>
        <cube-button :primary="true">Primary button</cube-button>
    </div>
</template>
<script>
export default {
    name:'btn',
    data(){
        return{
            
        }
    },
    methods: {
        showToast () {
            this.$createToast({
                txt: this.toastTxt
            }).show()
        },
    }
}
</script>
<style scoped>
button.cube-btn{
    margin-bottom: 10px;
}
</style>

