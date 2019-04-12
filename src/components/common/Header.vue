<template>
    <div class="header">
        <img v-if="isShow" src="../../assets/back.png" @click="goback" alt="返回">vue-app
        <span>{{['&#x2600;', '&#x263c;', '&#x2601;', '&#x2746;', '&#x2745;', '&#x2745;'][random]}}</span>
    </div>
</template>
<script>
export default {
    name: 'Header',
    props: {
        isShow: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            random: Math.ceil(Math.random() * 5)
        }
    },
    methods: {
        goback() {
            // console.log(this.$router)
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
        line-height: 50px;
        color: #fff;
        background-color: skyblue;
        text-align: center;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 2;
        font-size: 20px;
        img {
            width: 24px;
            height: 24px;
            position: absolute;
            top: 13px;
            left: 13px;
        }
        span {
            position: absolute;
            top: 0;
            right: 20px;
        }
    }
</style>