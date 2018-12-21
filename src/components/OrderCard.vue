<template>
    <div class="su-order-card-body">
        <div class="su-order-card-header">
            <p>{{arrivalTime}}</p>
            <p>{{ownerName}}</p>
            <p class="su-order-card-total">{{priceTotal}}</p>
        </div>
        <div class="su-order-card-items">
            <order-card-item v-for="item in orderItems" :key="item.id" :item="item"></order-card-item>
        </div>
        <div class="su-order-card-footer">
            <button>V pripravo</button>
            <p>{{totalPrepTime}}</p>
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
    computed:{
        total() {
            let result = this.orderItems.map(a => a.prepTime);
            return result;
        }
    },
    methods: {
        getSum(total, num) {
            return total + num;
        }
    },
    mounted() {

    },
    created() {
        console.log(this.total)
    }
};
</script>
<style lang="scss" scoped>
@import "../styles/variables";

div {
    display: flex;
    :not(.su-order-card-body) {
        padding-left: 16px;
        padding-right: 16px;
    }
}

.su-order-card-body {
    flex-direction: column;
    background: $su-color-secondary;
    margin: 16px;
    border-radius: 4px;
    overflow: hidden;

    .su-order-card-header{
        background: $su-color-yellow;

        :last-child {
            color: #00AF46;
            margin-left: auto;
        }
    }

    .su-order-card-items{
        background: $su-color-green;
        flex-direction: column;
    }

    .su-order-card-footer{
        background: $su-color-red;
        flex-direction: row;

        :last-child {
            color: #00AF46;
            margin-left: auto;
        }
    }
}
</style>
