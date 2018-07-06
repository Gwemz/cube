<template>
    <div class="tip">
        <cube-button
        :inline="true"
        :outline="true"
        :primary="true"
        @click="$refs.tip.show()">Show tip</cube-button>
        <cube-tip ref="tip" direction="bottom" style="left:123px;top:-50px;">Tip</cube-tip>

        <p class="tip-eg">
        <span>cube-ui</span>
        <cube-tip
            ref="tip2"
            :direction="direction"
            :style="tipStyle"
            @close="close"
            @click="clickHandler">
            <div>Awesome!</div>
        </cube-tip>
        </p>
        <cube-button @click="showTip('bottom')">top</cube-button>
        <cube-button @click="showTip('top')">bottom</cube-button>
        <cube-button @click="showTip('right')">left</cube-button>
        <cube-button @click="showTip('left')">right</cube-button>
    </div>
</template>
<script>
export default {
    name:'tip',
    data(){
        return{
            direction: '',
            tipStyle: ''
        }
    },
    methods: {
        showTip(direction) {
            this.direction = direction
            this.$refs.tip2.show()

            switch (direction) {
                case 'top':
                this.tipStyle = 'left: 100px; top: 30px;'
                break
                case 'bottom':
                this.tipStyle = 'left: 100px; top: -50px;'
                break
                case 'left':
                this.tipStyle = 'left: 200px; top: -10px;'
                break
                case 'right':
                this.tipStyle = 'left: 2px; top: -10px;'
                break
            }
        },
        close() {
            console.log('click close button')
        },
        clickHandler() {
            console.log('click tip area')
        }
    }
}
</script>
<style scoped>
.cube-btn{
    margin-bottom:10px;
}
</style>

