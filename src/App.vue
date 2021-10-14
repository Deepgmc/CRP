<template lang="">
    <div v-if="loading">loading</div>
    <div v-else="loading">loaded</div>
</template>



<script>
export default {
    data: () => ({
        loading: true
    }),
}
</script>




<style lang="scss">
    
</style>