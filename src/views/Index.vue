<template>
    <div class="index">
        <Header :isShow="!1"></Header>
        <Slider :imgData="lists"></Slider>
        <Footer :currentIndex="0"></Footer>
    </div>
</template>
<script>
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import Slider from '@/components/content/banner.vue'
export default {
    components: {
        Header,
        Footer,
        Slider
    },
    data() {
        return {
            lists: [
                require('../assets/banner/1.jpg'),
                require('../assets/banner/2.jpg'),
                require('../assets/banner/3.jpg'),
            ]
        }
    },
    mounted: () => {
    }
}
</script>
<style>
    .index {
        height: 500px;
    }
</style>
