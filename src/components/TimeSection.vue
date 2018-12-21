<template>
    <div class="su-time-section">
        <div class="su-time-section-new">

        </div>
        <div class="su-time-section-making">

        </div>
        <div class="su-time-section-ready">

        </div>
    </div>
</template>

<script>
    export default {
        name: "TimeSection"
    }
</script>

<style lang="scss" scoped>
    .su-time-section {
        display: flex;
        align-content: stretch;
        align-items: stretch;
        background: #F30019;
        width: 100%;
        height: 100%;

        div {
            flex: 1;
        }

        .su-time-section-new {
            background: #00AF46;
        }

        .su-time-section-making {
            background: #001eaf;
        }

        .su-time-section-ready {
            background: #af0098;
        }
    }
</style>