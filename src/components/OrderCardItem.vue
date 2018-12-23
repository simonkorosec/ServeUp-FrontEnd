<template>
    <div class="su-order-item-body">
        <p>{{item.amount}}x</p>
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
        margin: 4px;
        @include su-mx-layout-menu-last-end;
        @include su-mx-color-first-last-child(
                        $su-color-dark-gray,
                        $su-color-primary);

    }
</style>