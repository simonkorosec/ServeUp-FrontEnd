<template>
<div id="su-orders">
    <time-section v-for="(timeSlot, time) in timeSlots" :key="time">
        <template slot="timeLabel">{{time}}</template>
        <template slot="new">
            <order-card v-for="card in timeSlot" :key="card.orderId">
                <template slot="arrivalTime">{{card.arrivalTime}}</template>
                <template slot="ownerName">{{card.ownerName}}</template>
                <template slot="priceTotal">{{card.priceTotal}}</template>

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
        <!--<order-card v-for="card in localOrderCards" :key="card.orderId"-->
                    <!--:order-id="card.orderId"-->
                    <!--:arrival-time="card.arrivalTime"-->
                    <!--:owner-name="card.ownerName"-->
                    <!--:price-total="card.priceTotal"-->
                    <!--:total-prep-time="card.totalPrepTime"-->
                    <!--:order-items="card.orderItems">-->
            <!--<p class="su-order-card-total">{{card.priceTotal}}$</p>-->
        <!--</order-card>-->
    </time-section>
    <!--
    <order-card v-for="card in orderCards" :key="card.orderId"
        :order-id="card.orderId"
        :arrival-time="card.arrivalTime"
        :owner-name="card.ownerName"
        :price-total="card.priceTotal"
        :total-prep-time="card.totalPrepTime"
        :order-items="card.orderItems">
    </order-card>
-->
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
        // Assigns every order in the appropriate time slot
        /*extractTimeSlots() {
            self = this;
            this.orderCards.forEach(function (orderCard) {
                let fullTime = "";
                let [hour, minute] = orderCard.arrivalTime.split(':');
                let x = 10;
                fullTime += hour + ":";
                
                if (parseInt(minute, 10) < 30) {
                    fullTime += '00';
                }
                else {
                    fullTime += '30';
                }
                
                if (!(fullTime in self.timeSlots)) {
                    self.timeSlots[fullTime] = []
                }
                self.timeSlots[fullTime].push(orderCard);
            });
        }*/
    },
    created() {
        // TODO AJAX call to get the cards from the server
        let orderCards = [
            {
                orderId: 0,
                arrivalTime: "10:15",
                ownerName: "Joe Doe",
                priceTotal: 20,
                totalPrepTime: 30,
                orderItems: [{id: 0, amount: 10, name: "Pizza", prepTime: 20}, {id: 1, amount: 19, name: "Taco", prepTime: 20}]
            },
            {
                orderId: 1,
                arrivalTime: "10:31",
                ownerName: "Joe Bro",
                priceTotal: 20,
                totalPrepTime: 30,
                orderItems: [{id: 0, amount: 10, name: "Pizza", prepTime: 20}, {id: 1, amount: 19, name: "Taco", prepTime: 20}]
            },
            {
                orderId: 2,
                arrivalTime: "10:15",
                ownerName: "Joe Bro",
                priceTotal: 20,
                totalPrepTime: 30,
                orderItems: [{id: 0, amount: 10, name: "Pizza", prepTime: 20}, {id: 1, amount: 19, name: "Taco", prepTime: 20}]
            },
            {
                orderId: 3,
                arrivalTime: "11:31",
                ownerName: "Joe Bro",
                priceTotal: 20,
                totalPrepTime: 30,
                orderItems: [{id: 0, amount: 10, name: "Pizza", prepTime: 20}]
            },
            {
                orderId: 4,
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
                self.timeSlots[fullTime] = []
            }
            self.timeSlots[fullTime].push(orderCard);
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