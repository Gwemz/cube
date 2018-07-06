<template>
    <div class="loading">
        <cube-loading></cube-loading>
        <cube-loading :size="28"></cube-loading>
        <cube-loading :size="40"></cube-loading>
    </div>
</template>
<script>
export default {
    name:'loading',
    data(){
        return{

        }
    }
}
</script>
<style scoped>
.cube-loading{
    display: flex;
    justify-content: center;
    margin-bottom:10px;
}    
</style>


