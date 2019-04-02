<template>
    <div class="home">
        <Header :isShow="!1"></Header>
        <Guage></Guage>
        <Footer :index="3"></Footer>
    </div>
</template>
<script>
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import Guage from '@/components/content/guage'
export default {
    components: {
        Header,
        Footer,
        Guage
    },
    data() {
        return {
            
        }
    }
}
</script>
<style lang="scss" scoped>
    .home {
    }
</style>