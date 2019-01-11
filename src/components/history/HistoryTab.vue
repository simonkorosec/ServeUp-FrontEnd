<template>
    <div class="su-history-tab">
        <slot name="historyTimeSections"></slot>
    </div>
</template>

<script>
    export default {
        name: "HistoryTab"
    }
</script>

<style lang="scss" scoped>
    .su-history-tab {
        //flex: 8 1 auto;
        height: 100%;
        overflow-y: auto;
        overflow-x: hidden;
    }
</style>