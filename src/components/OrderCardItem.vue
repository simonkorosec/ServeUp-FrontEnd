<template>
    <div class="su-order-item-body">
        <p>{{item.amount}}</p>
        <p>{{item.name}}</p>
        <p>{{item.prepTime}}</p>
    </div>
</template>

<script>
export default {
    name: "OrderCardItem",
    props: {
        /*amount: {required: true},
        name: {required: true},
        prepTime: {required: true},*/
        item: Object
    },
}
</script>

<style lang="scss" scoped>
    @import "../styles/variables";

    .su-order-item-body {
        display: flex;
        background: $su-color-primary;
    }
</style>