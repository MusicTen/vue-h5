<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <Header></Header>
        <!-- 展示router -->
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from './components/common/Header'
    import Footer from './components/common/Footer'
    export default {
        name: 'app',
        components: {
            Header,
            Footer
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
