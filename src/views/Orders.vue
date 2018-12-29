<template>
<div id="su-orders">
    <!--For each timeSlot generate a new time section-->
    <time-section v-for="(timeSlot, time) in timeSlots" :key="time">
        <template slot="timeLabel">{{time}}</template>

        <template slot="sectionNew">
            <!--For each orderCard in that time section generate a new order card-->
            <order-card v-for="card in timeSlot[0]" :key="card.orderId"
                        :order-id="card.orderId"
                        :class="{suHereNew: card.isHere}">
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
            <order-card v-for="card in timeSlot[1]" :key="card.orderId"
                        :order-id="card.orderId"
                        :class="{suHereMaking: card.isHere}">
                <template slot="arrivalTime">{{card.arrivalTime}}</template>
                <template slot="ownerName">{{card.ownerName}}</template>
                <template slot="priceTotal">{{card.priceTotal}}</template>

                <!--For each order item in the orderCard generate a new order card item-->
                <template slot="orderItems">
                    <order-card-item v-for="item in card.orderItems" :key="item.id" >
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
            <order-card v-for="card in timeSlot[2]" :key="card.orderId"
                        :order-id="card.orderId"
                        :class="{suHereReady: card.isHere}">
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
    <div class="su-time-section-footer" v-if="!isEmpty(orderCards)"></div>
</div>
</template>

<script>
import TimeSection from "../components/TimeSection";
import OrderCard from "../components/OrderCard";
import OrderCardItem from "../components/OrderCardItem";
import {EventBus} from "../Events.js";
import {serverUrl} from "../Events";
import axios from "axios";

export default {
    name: "Orders",

    components: {OrderCardItem, OrderCard, TimeSection},
    data() {
        return {
            orderCards: {},
        }
    },

    methods: {
        // Check if the object is empty
        isEmpty(obj) {
            for(let key in obj) {
                if(obj.hasOwnProperty(key))
                    return false;
            }
            return true;
        },
        parseOrder(unparsedOrder) {
            let unparsedTime = unparsedOrder.cas_prevzema.split("T")[1];
            let parsedTime = unparsedTime.slice(0, unparsedTime.lastIndexOf(':'));
            let parsedOrder = {
                orderId: unparsedOrder.id_narocila,
                orderStatus: unparsedOrder.status,
                isHere: unparsedOrder.checked_in,
                arrivalTime: parsedTime,
                ownerName: unparsedOrder.id_uporabnik,
                priceTotal: unparsedOrder.cena,
                totalPrepTime: 'TODO',
                // TODO parse the order items as well
                orderItems: [{id: 0, amount: 10, name: "Pizza", prepTime: 20}, {id: 1, amount: 19, name: "Taco", prepTime: 20},{id: 3, amount: 19, name: "Taco", prepTime: 20}]
            };
            return parsedOrder;
        }
    },

    computed: {
        // Builds an array of time slots out of orders
        // Structure: timeSlots{timeSlot1[New][Cooking][Ready], timeSlot2[New][Cooking][Ready], ...}
        timeSlots: function () {
            let timeSlots = {};
            Object.keys(this.orderCards).forEach(orderId => {
                let orderCard = this.orderCards[orderId];
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
                if (!(fullTime in timeSlots)) {
                    timeSlots[fullTime] = [[/*New*/], [/*Cooking*/], [/*Ready*/]];
                }

                // Assign the order card to the correct column based on its status
                timeSlots[fullTime][orderCard.orderStatus].push(orderCard);
            });
            return timeSlots;
        }
    },

    created() {
     /*   // TODO AJAX call to get the cards from the server
        let orderCardsTest = {
            0: {
                orderId: 0,
                orderStatus: 0,
                isHere: true,
                arrivalTime: "10:15",
                ownerName: "Joe Doe",
                priceTotal: 20,
                totalPrepTime: 30,
                orderItems: [{id: 0, amount: 10, name: "Pizza", prepTime: 20}, {id: 1, amount: 19, name: "Taco", prepTime: 20}]
            },
            1: {
                orderId: 1,
                orderStatus: 0,
                isHere: false,
                arrivalTime: "10:31",
                ownerName: "Joe Bro",
                priceTotal: 20,
                totalPrepTime: 30,
                orderItems: [{id: 0, amount: 10, name: "Pizza", prepTime: 20}, {id: 1, amount: 19, name: "Taco", prepTime: 20}]
            },
            2: {
                orderId: 2,
                orderStatus: 1,
                isHere: false,
                arrivalTime: "10:15",
                ownerName: "Joe Bro",
                priceTotal: 20,
                totalPrepTime: 30,
                orderItems: [{id: 0, amount: 10, name: "Pizza", prepTime: 20}, {id: 1, amount: 19, name: "Taco", prepTime: 20}]
            },
            3: {
                orderId: 3,
                orderStatus: 2,
                isHere: false,
                arrivalTime: "11:31",
                ownerName: "Joe Bro",
                priceTotal: 20,
                totalPrepTime: 30,
                orderItems: [{id: 0, amount: 10, name: "Pizza", prepTime: 20}]
            },
            4: {
                orderId: 4,
                orderStatus: 0,
                isHere: false,
                arrivalTime: "11:00",
                ownerName: "Joe Bro",
                priceTotal: 20,
                totalPrepTime: 30,
                orderItems: [{id: 0, amount: 10, name: "Pizza", prepTime: 20}, {id: 1, amount: 19, name: "Taco", prepTime: 20},{id: 3, amount: 19, name: "Taco", prepTime: 20}]
            },
        };
        console.log('Order cards test', orderCardsTest);
        this.orderCards = orderCardsTest;
        console.log('This Order cards test', this.orderCards);
        let orderCards = {};*/
        let self = this;
        axios.get(serverUrl + 'orders/?id_restavracija=6')
            .then(function (response) {
                console.log('Response data', response.data.data);
                Object.keys(response.data.data).forEach(objectId => {
                    let parsedOrder = self.parseOrder(response.data.data[objectId]);
                    //orderCards[parsedOrder.orderId] = parsedOrder;
                    self.$set(self.orderCards, parsedOrder.orderId, parsedOrder);
                });
            }
        );
       /* console.log('Order cards', orderCards);
        this.orderCards = orderCards;
        console.log('This Order cards', this.orderCards);*/
    },

    mounted() {
        // When a status of the card is changed intercept the event
        // and move the card in the next status group (New => Cooking => Ready => Done)
        self = this;
        EventBus.$on('changeStatus', orderId => {
            let orderCard = self.orderCards[orderId];
            // If the current status is Ready, remove the card from the list
            if (orderCard.orderStatus === 2) {
                this.$delete(self.orderCards, orderId);
            }
            // Else move it in the next status group
            else {
                orderCard.orderStatus += 1;
            }
        });
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

    .su-time-section-footer {
        position: sticky;
        background: $su-color-content-light;
        box-shadow: $su-shadow-top;
        z-index: 10;
        width: 100%;
        height: 8px;
        top: 0;
        left: 0;
    }
</style>