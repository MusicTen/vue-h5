<template>
    <div class="header">
        <div class="title">vue-app</div>
    </div>
</template>
<script>
export default {
    name: 'Header',
    data() {
        return {
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .header {
        width: 100%;
        height: 50px;
        .title {
            width: 100%;
            height: 50px;
            line-height: 50px;
            background-color: skyblue;
            text-align: center;
            position: fixed;
            top: 0;
            left: 0; 
        }
    }
</style>