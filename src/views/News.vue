<template>
    <div>
        <Header :isShow="!1"></Header>
        <h1>新闻</h1>
        <Footer :currentIndex="2"></Footer>
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
            
        }
    }
}
</script>
<style>

</style>