<template>
    <div class="home">
        <cube-button v-for="(item,index) in list" :key="index" :id="index" :link="item.link">
            <router-link :to="item.link">
                {{item.title}}
            </router-link>
        </cube-button>
    </div>
</template>
<script>
export default {
    name:'home',
    data(){
        return {
            list:[
                {title:'Button',link:'/button'},
                {title:'Loading',link:'/loading'},
                {title:'Tip',link:'/tip'},
                {title:'ToolBar',link:'/ToolBar'},
                {title:'TabBar',link:'/tabbar'},
                {title:'tab-composite',link:'/composite'},
                {title:'checkbox',link:'/checkbox'},
                {title:'checkboxgroup',link:'/checkboxgroup'},
                {title:'radio',link:'/radio'},
                {title:'input',link:'/input'},
                {title:'select',link:'/select'}
            ]
        }
    }
}
</script>
<style scoped>
button{
    margin-bottom:10px;
}
button a{
    display: block;
    width: 100%;
    height: 100%;
    color:#ffffff;
}
</style>


