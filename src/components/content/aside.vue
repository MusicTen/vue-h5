<template>
    <div class="aside">
        <ul>
            <li>外观</li>
            <li>内饰</li>
            <li>配置</li>
            <li>价格</li>
            <li>选配</li>
        </ul>
    </div>
</template>
<script>
export default {
    components: {
    },
    data() {
        return {
            
        }
    }
}
</script>
<style lang="scss" scoped>
    .aside {
        width: 40%;
        height: 100%;
        position: fixed;
        top: 0;
        right: 0;
        padding: 50px 20px;
        box-sizing: border-box;
        background-color: #fff;
        ul {
            li {
                width: 100%;
                height: 60px;
                line-height: 60px;
                text-align: center;
                border-bottom: 1px solid #ddd;
                font-size: 18px;
                font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
            }
        }
    }
</style>