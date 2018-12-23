<template>
<div id="su-orders">
    <time-section>

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
import OrderCard from "../components/OrderCard";
import TimeSection from "../components/TimeSection";

export default {
    name: "Orders",
    components: {TimeSection, OrderCard},
    data() {
        return {
            orderCards: [
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
                    orderItems: [{id: 0, amount: 10, name: "Pizza", prepTime: 20}, {id: 1, amount: 19, name: "Taco", prepTime: 20}]
                },
                {
                    orderId: 4,
                    arrivalTime: "11:00",
                    ownerName: "Joe Bro",
                    priceTotal: 20,
                    totalPrepTime: 30,
                    orderItems: [{id: 0, amount: 10, name: "Pizza", prepTime: 20}, {id: 1, amount: 19, name: "Taco", prepTime: 20}]
                },
            ],
            timeSlots: {}
        }
    },
    methods: {
        // Assigns every order in the appropriate time slot
        extractTimeSlots() {
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
        }
    },
    mounted() {
        this.extractTimeSlots();
    }
}
</script>

<style lang="scss" scoped>
    #su-orders {
        width: 100%;
        height: 100%;
    }
</style>