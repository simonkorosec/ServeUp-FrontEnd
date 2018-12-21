<template>
    <div class="su-order-card">
        <div>
            <p>Prep {{totalPrepTime}}</p>
            <p>Owner {{ownerName}}</p>
            <p>Price {{priceTotal}}</p>
        </div>
        <div>
            <order-card-item v-for="item in orderItems" :key="item" :item="item"></order-card-item>
        </div>
    </div>
</template>

<script>
import OrderCardItem from "./OrderCardItem";
export default {
    name: "OrderCard",
    components: {OrderCardItem},
    props: {
        orderId: Number,
        arrivalTime: String,
        ownerName: String,
        priceTotal: Number,
        totalPrepTime: Number,
        orderItems: Array
    },
    data() {
        return {

        };
    },

    mounted() {

    },

    created() {
        //this.orderItems = this.$children;
    }
};
</script>
<style lang="scss" scoped>
    @import "../styles/variables";

    .su-order-card {
        background: $su-color-yellow;
    }
</style>
