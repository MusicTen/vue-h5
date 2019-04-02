<template>
    <div class="news">
        <Header :isShow="!1"></Header>
        <h1>新闻</h1>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
            <circle cx="100" cy="50" r="40" stroke="black" stroke-width="2" fill="red" />
        </svg>
        <circle-progress
            ref="$circle"
            :progress="progress"
            :barColor="barColor"
            :backgroundColor="backgroundColor"
            >
        </circle-progress>
        <Footer :index="2"></Footer>
    </div>
</template>
<script>
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import CircleProgress from '@/components/content/circle-progress'
export default {
    components: {
        Header,
        Footer,
        CircleProgress
    },
    data() {
        return {
            progress: 50,
            barColor: '#F2AE57',
            backgroundColor: '#FFE8CC',
        }
    }
}
</script>
<style lang="scss" scoped>
    .news {
    }
</style>