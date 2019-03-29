<template>
    <div>
        <Header :isShow="!1"></Header>
        <h1>列表</h1>
        <div id="demo">
            <button @click="show = !show">
                Toggle
            </button>
            <transition name="fade">
                <p v-if="show">hello</p>
            </transition>
        </div>
        <Footer :currentIndex="1"></Footer>
    </div>
</template>
<script>
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
export default {
    components: {
        Header,
        Footer
    },
    data() {
        return {
            show: true
        }
    }
}
</script>
<style>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>