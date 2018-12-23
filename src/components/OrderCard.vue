<template>
    <div class="su-order-card-body">
        <div class="su-order-card-header">
            <p class="su-order-card-time">{{arrivalTime}}</p>
            <p class="su-order-card-owner">{{ownerName}}</p>
            <p class="su-order-card-total">{{priceTotal}}$</p>
        </div>
        <div class="su-order-card-items">
            <order-card-item v-for="item in orderItems" :key="item.id" :item="item"></order-card-item>
        </div>
        <div class="su-order-card-footer">
            <button>V PRIPRAVO</button>
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

    }
}

.su-order-card-body {
    flex-direction: column;
    margin: 32px;
    background: $su-color-content-light;
    box-shadow: $su-shadow;
    border-radius: $su-border-radius-m;
    overflow: hidden;

    .su-order-card-header {
        font-size: 1.2rem;
        @include su-mx-layout-menu-last-end;
        @include su-mx-color-first-last-child(
                        $su-color-primary,
                        $su-color-primary);

    }

    .su-order-card-items{
        flex-direction: column;
        margin-left: 16px;
        margin-right: 16px;
        border-top: 2px solid $su-color-light-gray;
        border-bottom: 2px solid $su-color-light-gray;
    }

    .su-order-card-footer{
        @include su-mx-layout-menu-last-end;

        button {
            margin-top: 8px;
            margin-bottom: 8px;
            padding-left: 16px;
            padding-right: 16px;
            background: $su-color-secondary;
            color: $su-color-content-light;
            box-shadow: $su-shadow;
            border: none;
            border-radius: $su-border-radius-m;


            &:active {
                background: $su-color-secondary-dark;
            }
        }
    }
}
</style>
