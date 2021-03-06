<template>
    <div slot="content" class="composite">
      <cube-tab-bar v-model="selectedLabel"
                    showSlider
                    :useTransition="disabled"
                    ref="tabNav"
                    :data="tabLabels">
      </cube-tab-bar>
      <div class="tab-slide-container">
        <cube-slide
          ref="slide"
          :loop="loop"
          :initial-index="initialIndex"
          :auto-play="autoPlay"
          :show-dots="showDots"
          :options="options"
          @scroll="scroll"
          @change="changePage"
        >
          <!-- 关注 -->
          <cube-slide-item>
            <cube-scroll :data="followersData">
              <ul class="list-wrapper">
                <li v-for="(item, index) in followersData" class="list-item" :key="index">
                  <div class="top">
                    <img :src="item.avatar" class="avatar">
                    <span class="time">{{resolveTitle(item)}}</span>
                  </div>
                  <div class="middle is-bold line-height">{{item.question}}</div>
                  <div>{{resolveQuestionFollowers(item)}}</div>
                </li>
              </ul>
            </cube-scroll>
          </cube-slide-item>
          <!-- 推荐 -->
          <cube-slide-item>
            <cube-scroll :data="recommendData">
              <ul class="list-wrapper">
                <li v-for="(item, index) in recommendData" class="list-item" :key="index">
                  <div class="top is-black is-bold line-height">
                    {{item.question}}
                  </div>
                  <div class="middle is-grey line-height">{{item.content}}</div>
                  <div>{{resolveQuestionFollowers(item)}}</div>
                </li>
              </ul>
            </cube-scroll>
          </cube-slide-item>
          <cube-slide-item>
            <cube-scroll :data="hotData">
              <ul class="list-wrapper">
                <li v-for="(item, index) in hotData" class="list-item" :key="index">
                  <div class="hot-title">
                    <span class="hot-sequence">{{item.sequence}}</span>
                    <span></span>
                    {{item.label}}
                  </div>
                  <div class="hot-content is-bold is-black">{{item.question}}</div>
                </li>
              </ul>
            </cube-scroll>
          </cube-slide-item>
        </cube-slide>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
import { FOLLOWERS_DATA, RECOMMEND_DATA, HOT_DATA } from "../js/tab-bar.js";
import { findIndex } from "../js/util.js";
export default {
  data() {
    return {
      selectedLabel: "推荐",
      disabled: false,
      tabLabels: [
        {
          label: "关注"
        },
        {
          label: "推荐"
        },
        {
          label: "热榜"
        }
      ],
      loop: false,
      autoPlay: false,
      showDots: false,
      options: {
        listenScroll: true,
        probeType: 3
      },
      followersData: FOLLOWERS_DATA,
      recommendData: RECOMMEND_DATA,
      hotData: HOT_DATA
    };
  },
  methods: {
    changePage(current) {
      this.selectedLabel = this.tabLabels[current].label;
      console.log(current);
    },
    scroll(pos) {
      const x = Math.abs(pos.x);
      const tabItemWidth = this.$refs.tabNav.$el.clientWidth;
      const slideScrollerWidth = this.$refs.slide.slide.scrollerWidth;
      const deltaX = x / slideScrollerWidth * tabItemWidth;
      this.$refs.tabNav.setSliderTransform(deltaX);
    },
    resolveTitle(item) {
      return `${item.name}关注了问题 · ${item.postTime} 小时前`;
    },
    resolveQuestionFollowers(item) {
      return `${item.answers} 赞同 · ${item.followers} 评论`;
    }
  },
  computed: {
    initialIndex() {
      let index = 0;
      index = findIndex(
        this.tabLabels,
        item => item.label === this.selectedLabel
      );
      return index;
    }
  },
  components: {}
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
/* 覆盖样式 */
.composite {
    font-size: 0.5rem;
}

.cube-page {
    &.tab-composite-view {
        > .wrapper {
            > .content {
                margin: 0;
            }
        }
    }
}

.tab-composite-view {
    .cube-tab-bar {
        background-color: white;
    }

    .cube-tab, .cube-tab_active {
        color: black;
    }

    .cube-tab-bar-slider {
        background-color: black;
    }

    .tab-slide-container {
        position: fixed;
        top: 74px;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .list-wrapper {
        overflow: hidden;

        li {
            padding: 15px 10px;
            margin-top: 10px;
            text-align: left;
            background-color: white;
            font-size: 14px;
            color: #999;
            white-space: normal;

            .line-height {
                line-height: 1.5;
            }

            .is-black {
                color: black;
            }

            .is-grey {
                color: #999;
            }

            .is-bold {
                font-weight: bold;
            }

            .top {
                display: flex;

                .avatar {
                    width: 15px;
                    height: 15px;
                    margin-right: 2px;
                    border-radius: 100%;
                }

                .time {
                    flex: 1;
                }
            }

            .middle {
                display: flex;
                margin: 10px 0;
                color: black;
            }

            .hot-title {
                display: flex;
                align-items: center;
                font-size: 12px;

                .hot-sequence {
                    display: inline-block;
                    margin-right: 2px;
                    padding: 3px 6px;
                    border-radius: 2px;
                    background-color: darkgoldenrod;
                    color: white;
                }
            }

            .hot-content {
                margin-top: 15px;
            }
        }
    }
}
</style>