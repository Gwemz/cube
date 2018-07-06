<template>
    <div class="tabbar">
        <template>
            <cube-tab-bar
                v-model="selectedLabelDefault"
                :data="tabs"
                @click="clickHandler"
                @change="changeHandler">
            </cube-tab-bar>
        </template>
        <template>
            <cube-tab-bar
                v-model="selectedLabelSlots"
                showSlider
                inline
                @click="clickHandler">
                <cube-tab v-for="(item,index) in tabs" :label="item.label" :key="item.label">
                    <i slot="icon" :class="item.icon"></i>
                    <div>{{item.label}}</div> 
                </cube-tab>
            </cube-tab-bar>
        </template>
        <template>
            <cube-tab-bar
                v-model="selectedLabelSlots1"
                showSlider
                inline
                @click="clickHandler">
                <cube-tab v-for="(item,index) in tabs" :label="item.label" :key="item.label">
                    <i slot="icon" :class="item.icon"></i>
                </cube-tab>
            </cube-tab-bar>
        </template>
        <template>
            <cube-tab-bar
                v-model="selectedLabelSlots2"
                showSlider
                inline
                @click="clickHandler">
                <cube-tab v-for="(item,index) in tabs" :label="item.label" :key="item.label">
                    {{item.label}}
                </cube-tab>
            </cube-tab-bar>
        </template>
        <template>
            <cube-tab-bar v-model="selectedLabel" showSlider>
                <cube-tab v-for="(item,index) in tabs1" :label="item.label" :key="item.label">
                </cube-tab>
            </cube-tab-bar>
            <cube-tab-panels v-model="selectedLabel">
                <cube-tab-panel v-for="(item,index) in tabs1" :label="item.label" :key="item.label">
                    <ul>
                        <li class="tab-panel-li" v-for="(hero,index) in item.heroes" :key="index">
                            {{hero}}
                        </li>
                    </ul>
                </cube-tab-panel>
            </cube-tab-panels>
        </template>
    </div>
</template>
<script>
export default {
    name:'tabbar',
    data(){
        return{
            selectedLabelDefault:'Home',
            selectedLabelSlots:'Like',
            selectedLabelSlots1:'Vip',
            selectedLabelSlots2:'Me',
            selectedLabel:'天辉',
            tabs:[
                {
                    label: 'Home',
                    icon: 'cubeic-home'
                },
                {
                    label: 'Like',
                    icon: 'cubeic-like'
                },
                {
                    label: 'Vip',
                    icon: 'cubeic-vip'
                },
                {
                    label: 'Me',
                    icon: 'cubeic-person'
                }
            ],
            tabs1: [{
                label: '天辉',
                icon: 'cubeic-like',
                heroes: ['敌法师', '卓尔游侠', '主宰', '米拉娜', '变体精灵', '幻影长矛手', '复仇之魂', '力丸', '矮人狙击手', '圣堂刺客', '露娜', '赏金猎人', '熊战士']
            }, {
                label: '夜魇',
                icon: 'cubeic-star',
                heroes: ['血魔', '影魔', '剃刀', '剧毒术士', '虚空假面', '幻影刺客', '冥界亚龙', '克林克兹', '育母蜘蛛', '编织者', '幽鬼', '司夜刺客', '米波']
            }]
        }
    },
    methods:{
        clickHandler(){

        },
        changeHandler(){

        }
    }
}
</script>
<style lang="stylus" scoped>
.cube-tab-bar{
    font-size:.5rem;
    margin-bottom:20px;
}
.tab-panel-li{
    padding:0 10px;
    box-sizing:border-box;
    display:flex;
    justify-content:flex-start;
    font-size:.5rem;
    line-height .7rem;
}
</style>

