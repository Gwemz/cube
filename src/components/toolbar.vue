<template>
    <div class="toolbar">
        <cube-toolbar :actions="actions" @click="clickHandler"></cube-toolbar>
    </div>
</template>
<script>
export default {
  name: "toolbar",
  data() {
    return {
      money: 10,
      actions: [
        {
          text: "完成订单",
          action: "showText"
        },
        {
          text: "打车来接",
          checked: false,
          type: "checkbox"
        },
        {
          text: "一口价<span>10</span>元",
          action: "moreMoney"
        }
      ]
    };
  },
  methods: {
    showText(item) {
      this.$createToast({
        type: "correct",
        txt: "clicked " + item.text,
        time: 1000
      }).show();
    },
    moreMoney(item) {
      this.money += 10;
      item.text = "一口价<span>" + this.money + "元</span>";
    },
    clickHandler(item) {
      if (item.action) {
        this[item.action](item);
      }
    }
  }
};
</script>
<style scoped>
.colorOrange {
  color: #fc9153;
}
</style>

