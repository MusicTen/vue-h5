<template>
    <div>
        <Header :isShow="!1"></Header>
        <h1>home</h1>
        <Footer :currentIndex="3"></Footer>
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