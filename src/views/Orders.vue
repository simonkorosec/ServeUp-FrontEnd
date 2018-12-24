<template>
<div id="su-orders">
    <!--For each timeSlot generate a new time section-->
    <time-section v-for="(timeSlot, time) in timeSlots" :key="time">
        <template slot="timeLabel">{{time}}</template>

        <template slot="sectionNew">
            <!--For each orderCard in that time section generate a new order card-->
            <order-card v-for="card in timeSlot[0]" :key="card.orderId">
                <template slot="arrivalTime">{{card.arrivalTime}}</template>
                <template slot="ownerName">{{card.ownerName}}</template>
                <template slot="priceTotal">{{card.priceTotal}}</template>

                <!--For each order item in the orderCard generate a new order card item-->
                <template slot="orderItems">
                    <order-card-item v-for="item in card.orderItems" :key="item.id">
                        <template slot="amount">{{item.amount}}</template>
                        <template slot="foodName">{{item.name}}</template>
                        <template slot="prepTime">{{item.prepTime}}</template>
                    </order-card-item>
                </template>

                <template slot="totalPrepTime">{{card.totalPrepTime}}</template>
            </order-card>
        </template>

        <template slot="sectionMaking">
            <!--For each orderCard in that time section generate a new order card-->
            <order-card v-for="card in timeSlot[1]" :key="card.orderId">
                <template slot="arrivalTime">{{card.arrivalTime}}</template>
                <template slot="ownerName">{{card.ownerName}}</template>
                <template slot="priceTotal">{{card.priceTotal}}</template>

                <!--For each order item in the orderCard generate a new order card item-->
                <template slot="orderItems">
                    <order-card-item v-for="item in card.orderItems" :key="item.id">
                        <template slot="amount">{{item.amount}}</template>
                        <template slot="foodName">{{item.name}}</template>
                        <template slot="prepTime">{{item.prepTime}}</template>
                    </order-card-item>
                </template>

                <template slot="totalPrepTime">{{card.totalPrepTime}}</template>
            </order-card>
        </template>

        <template slot="sectionReady">
            <!--For each orderCard in that time section generate a new order card-->
            <order-card v-for="card in timeSlot[2]" :key="card.orderId">
                <template slot="arrivalTime">{{card.arrivalTime}}</template>
                <template slot="ownerName">{{card.ownerName}}</template>
                <template slot="priceTotal">{{card.priceTotal}}</template>

                <!--For each order item in the orderCard generate a new order card item-->
                <template slot="orderItems">
                    <order-card-item v-for="item in card.orderItems" :key="item.id">
                        <template slot="amount">{{item.amount}}</template>
                        <template slot="foodName">{{item.name}}</template>
                        <template slot="prepTime">{{item.prepTime}}</template>
                    </order-card-item>
                </template>

                <template slot="totalPrepTime">{{card.totalPrepTime}}</template>
            </order-card>
        </template>
    </time-section>
</div>
</template>

<script>
import TimeSection from "../components/TimeSection";
import OrderCard from "../components/OrderCard";
import OrderCardItem from "../components/OrderCardItem";

export default {
    name: "Orders",
    components: {OrderCardItem, OrderCard, TimeSection},
    data() {
        return {
            timeSlots: {}
        }
    },
    methods: {

    },
    computed: {

    },
    created() {
        // TODO AJAX call to get the cards from the server
        let orderCards = [
            {
                orderId: 0,
                orderStatus: 0,
                arrivalTime: "10:15",
                ownerName: "Joe Doe",
                priceTotal: 20,
                totalPrepTime: 30,
                orderItems: [{id: 0, amount: 10, name: "Pizza", prepTime: 20}, {id: 1, amount: 19, name: "Taco", prepTime: 20}]
            },
            {
                orderId: 1,
                orderStatus: 0,
                arrivalTime: "10:31",
                ownerName: "Joe Bro",
                priceTotal: 20,
                totalPrepTime: 30,
                orderItems: [{id: 0, amount: 10, name: "Pizza", prepTime: 20}, {id: 1, amount: 19, name: "Taco", prepTime: 20}]
            },
            {
                orderId: 2,
                orderStatus: 1,
                arrivalTime: "10:15",
                ownerName: "Joe Bro",
                priceTotal: 20,
                totalPrepTime: 30,
                orderItems: [{id: 0, amount: 10, name: "Pizza", prepTime: 20}, {id: 1, amount: 19, name: "Taco", prepTime: 20}]
            },
            {
                orderId: 3,
                orderStatus: 2,
                arrivalTime: "11:31",
                ownerName: "Joe Bro",
                priceTotal: 20,
                totalPrepTime: 30,
                orderItems: [{id: 0, amount: 10, name: "Pizza", prepTime: 20}]
            },
            {
                orderId: 4,
                orderStatus: 0,
                arrivalTime: "11:00",
                ownerName: "Joe Bro",
                priceTotal: 20,
                totalPrepTime: 30,
                orderItems: [{id: 0, amount: 10, name: "Pizza", prepTime: 20}, {id: 1, amount: 19, name: "Taco", prepTime: 20},{id: 3, amount: 19, name: "Taco", prepTime: 20}]
            },
        ];

        // Else it doesn't work
        self = this;

        // Assigns each card from orderCards in the correct time slot
        orderCards.forEach(function (orderCard) {
            let fullTime = ""; // The time slot in which the card fits
            let [hour, minute] = orderCard.arrivalTime.split(':');
            fullTime += hour + ":";

            // This can be changed depending on how long the time slots need to be
            if (parseInt(minute, 10) < 30) {
                fullTime += '00';
            }
            else {
                fullTime += '30';
            }

            // If the time slot doesn't exist, make a new one
            if (!(fullTime in self.timeSlots)) {
                self.timeSlots[fullTime] = [[], [], []];
            }

            // Assign the order card to the correct column based on its status
            self.timeSlots[fullTime][orderCard.orderStatus].push(orderCard);
        });
        //console.log(this.timeSlots);
    }
}
</script>

<style lang="scss" scoped>
    @import "../styles/variables";

    #su-orders {
        width: 100%;
        height: 100%;
        background: $su-color-background;
        overflow-y: auto;
        overflow-x: hidden;
    }
</style>