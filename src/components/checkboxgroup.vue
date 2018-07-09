<template>
    <div>
        <cube-checkbox-group v-model="checkList" :options="options"></cube-checkbox-group>
        <cube-checkbox-group v-model="checkList" :options="options" :horizontal="true" shape="square" :hollow-style="true"></cube-checkbox-group>
        <cube-checkbox-group v-model="checkList">
            <cube-checkbox option="1"><i>Checkbox 1</i> </cube-checkbox>
            <cube-checkbox option="2"><i>Checkbox 2</i> </cube-checkbox>
            <cube-checkbox :option="{value:'3',disabled:true}"><i>Disabled checkbox</i></cube-checkbox>
            <cube-checkbox :option="{value:'4',disabled:true}"><i>Disabled & checkbox</i></cube-checkbox>
        </cube-checkbox-group>
    </div>
</template>
<script>
export default {
    data(){
        return{
            checkList:['1','4'],
            options:[
                '1',
                '2',
                {
                    label:'3',
                    value:'3',
                    disabled:true
                },
                {
                    label:'4',
                    value:'4',
                    disabled:true
                }
            ]
        }
    }
}
</script>
