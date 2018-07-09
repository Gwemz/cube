<template>
    <div>
        <cube-input v-model="text" placeholder="E-mail"></cube-input>
        <cube-validator v-model="valid" :model="text" :rules="rules" :message="message"></cube-validator>
        <cube-popup type="my-popup" ref="myPopup">
            My Popup Content 1
        </cube-popup>
        <cube-button @click="showPopup('myPopup')">Show PopUp</cube-button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            text:'',
            valid:undefined,
            rules:{
                required:true,
                type:'email',
                pattern:/didi.com$/,
                custom(val){
                    return val.length >= 12
                }
            },
            message:{
                pattern:'The E-mail suffix need to be didi.com',
                custom: 'The E-mail need contain at least 12 characters.'
            },
        }
    },
    methods:{
        showPopup(refId){
            const component = this.$refs[refId];
            component.show()
            setTimeout(function(){
                component.hide()
            },1000)
        }
    }
}
</script>
