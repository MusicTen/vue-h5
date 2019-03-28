<template>
    <div class="header">
        <div class="title"><img :src="back" @click="goback" alt="返回">vue-app</div>
    </div>
</template>
<script>
export default {
    name: 'Header',
    data() {
        return {
            back: require('../../assets/back.png'),
        }
    },
    methods: {
        goback() {
            console.log(this.$router)
            this.$router.back(-1)
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
            color: #fff;
            background-color: skyblue;
            text-align: center;
            position: fixed;
            top: 0;
            left: 0;
            img {
                width: 24px;
                height: 24px;
                position: absolute;
                top: 13px;
                left: 13px;
            }
        }
        
    }
</style>