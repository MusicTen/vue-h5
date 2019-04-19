<template>
    <div class="home">
        <Header></Header>
        <Guage></Guage>
    </div>
</template>
<script>
import Header from '@/components/common/Header'
import Guage from '@/components/content/guage'
export default {
    components: {
        Header,
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