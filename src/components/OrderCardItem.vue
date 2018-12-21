<template>
    <div>
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

<style scoped>

</style>