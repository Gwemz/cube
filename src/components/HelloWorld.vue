<template>
  <div class="hello">
    <!-- button -->
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
    <!-- loading -->
    <cube-loading></cube-loading>
    <cube-loading :size="28"></cube-loading>
    <cube-loading :size="40"></cube-loading>
    <!-- tip -->
    <cube-button :inline="true" :outline="true" :primary="true" @click="$refs.tip.show()">show tip</cube-button>
    <cube-tip ref="tip" direction="bottom" style="left:123px;top:-50px;">Tip</cube-tip>
    <p class="tip-eg">
      <span>cube-ui</span>
      <cube-tip
        ref="tip2"
        :direction="direction"
        :style="tipStyle"
        @close="close"
        >
        <div>Awesome!</div>
      </cube-tip>
    </p>
    <cube-button @click="showTip('bottom')">top</cube-button>
    <cube-button @click="showTip('top')">bottom</cube-button>
    <cube-button @click="showTip('right')">left</cube-button>
    <cube-button @click="showTip('left')">right</cube-button>
    <!-- toolbar -->
    <cube-toolbar :actions="actions" @click="clickHandle"></cube-toolbar>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      toastTxt: 'I am winter Guo',
      direction:'',
      tipStyle:'',
      money:10,
      actions:[
        {
          text:'完成订单',
          action:'showText'
        },
        {
          text:'打车来接',
          checked:false,
          type:'checkbox'
        },
        {
          text:'一口价<span class="orange">10元</span>',
          action:'moreMoney'
        }
      ]
    }
  },
  methods: {
    showToast () {
      this.$createToast({
        txt: this.toastTxt
      }).show()
    },
    showTip(direction){
      this.direction = direction;
      switch(direction){
        case 'top':
        this.tipStyle = 'left:100px;top:30px;'
        break
        case 'bottom':
        this.tipStyle = 'left:100px;top:-50px;'
        break
        case 'left':
        this.tipStyle = 'left:200px;top:-10px;'
        break
        case 'right':
        this.tipStyle = 'left:2px;top:-10px;'
        break
      }
    },
    close(){
      console.log('click close button');
    },
    // clickHandle(){
    //   console.log('click tip area');
    // },
    showText(item){
      this.$createToast({
        type:'correct',
        txt:'clicked' + item.text,
        time:1000
      }).show()
    },
    moreMoney(item){
      this.money += 10
      item.text = '一口价<span class="orange">'+ this.money +'元</span>'
    },
    clickHandle(item){
      if(item.action){
        this[item.action](item)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.orange{
  color: #fc9153;
}
</style>
