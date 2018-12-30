<template>
<div id="su-orders">
    <div id="su-time-line-box">
        <time-line v-for="(timeSlot, time) in timeSlots" :key="time">
            <template slot="timeLabel">{{time}}</template>

            <template slot="sectionNew" class="su-time-line-item-new">
                <time-line-item v-for="card in timeSlot[0]" :key="card.orderId"
                                :order-id="card.orderId"
                                :class="{suHere: card.isHere}"
                                class="su-time-line-item-new">
                </time-line-item>
            </template>

            <template slot="sectionMaking" class="su-time-line-item-making">
                <time-line-item v-for="card in timeSlot[1]" :key="card.orderId"
                                :order-id="card.orderId"
                                :class="{suHere: card.isHere}"
                                class="su-time-line-item-making">
                </time-line-item>
            </template>

            <template slot="sectionReady" class="su-time-line-item-new">
                <time-line-item v-for="card in timeSlot[2]" :key="card.orderId"
                                :order-id="card.orderId"
                                :class="{suHere: card.isHere}"
                                class="su-time-line-item-ready">
                </time-line-item>
            </template>
        </time-line>
        <div class="su-time-section-footer" v-if="!isEmpty(orderCards)"></div>
    </div>

    <div id="su-time-section-box">
        <!--For each timeSlot generate a new time section-->
        <time-section v-for="(timeSlot, time) in timeSlots" :key="time">
            <template slot="timeLabel">{{time}}</template>

            <template slot="sectionNew">
                <!--For each orderCard in that time section generate a new order card-->
                <order-card v-for="card in timeSlot[0]" :key="card.orderId"
                            :order-id="card.orderId"
                            :class="{suHereNew: card.isHere, highlighted: card.isHighlighted}"
                            :id="'su-card-' + card.orderId">
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
                            :class="{suHereMaking: card.isHere, highlighted: card.isHighlighted}"
                            :id="'su-card-' + card.orderId">
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
                            :class="{suHereReady: card.isHere, highlighted: card.isHighlighted}"
                            :id="'su-card-' + card.orderId">
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
</div>
</template>

<script>
import TimeSection from "../components/TimeSection";
import OrderCard from "../components/OrderCard";
import OrderCardItem from "../components/OrderCardItem";
import {EventBus} from "../Events.js";
import {serverUrl} from "../Events";
import axios from "axios";
import TimeLine from "../components/TimeLine";
import TimeLineItem from "../components/TimeLineItem";
import VueScrollTo from "vue-scrollto/src/directive";

export default {
    name: "Orders",

    components: {TimeLineItem, TimeLine, OrderCardItem, OrderCard, TimeSection},
    data() {
        return {
            orderCards: {},
            // scrollOptions defines the way the scrolling behaves when clicking on
            // a card on the TimeLine
            scrollOptions: {
                container: '#su-time-section-box', // element to scroll
                easing: 'ease-in',
                offset: -60,
                force: true, // force scroll even if the object is in view
                cancelable: true,
                onStart: function(element) {
                    //console.log('started scrolling')
                },
                onDone: function(element) {
                    //console.log('stopped scrolling')
                },
                onCancel: function() {
                    // scrolling has been interrupted
                },
                x: false,
                y: true
            },
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


        sleep(milliseconds) {
            return new Promise(resolve => setTimeout(resolve, milliseconds));
        },


        parseOrder(unparsedOrder) {
            let unparsedTime = unparsedOrder.cas_prevzema.split("T")[1];
            let parsedTime = unparsedTime.slice(0, unparsedTime.lastIndexOf(':'));

            return {
                orderId: unparsedOrder.id_narocila,
                orderStatus: unparsedOrder.status,
                isHere: unparsedOrder.checked_in,
                arrivalTime: parsedTime,
                ownerName: unparsedOrder.id_uporabnik,
                priceTotal: unparsedOrder.cena,
                totalPrepTime: 'TODO',
                isHighlighted: false,
                // TODO parse the order items as well
                orderItems: [{id: 0, amount: 10, name: "Pizza", prepTime: 20}, {id: 1, amount: 19, name: "Taco", prepTime: 20},{id: 3, amount: 19, name: "Taco", prepTime: 20}]
            };
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
        };*/
        let self = this;
        axios.get(serverUrl + 'orders/?id_restavracija=6')
            .then(function (response) {
                // TODO remove log
                console.log('Response data', response.data.data);
                // Parse each card from the server response data and insert the parsed order
                // in the view's orderCards dict
                Object.keys(response.data.data).forEach(objectId => {
                    let parsedOrder = self.parseOrder(response.data.data[objectId]);
                    // Gotta use $set to make vue recognize the inserted object and make it reactive
                    self.$set(self.orderCards, parsedOrder.orderId, parsedOrder);
                });
            }
        );
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

        // Determine what happens when the user highlights the tiny card in the TimeLine
        EventBus.$on('highlight', async function(orderId) {
            self.orderCards[orderId].isHighlighted = true;

            let scrollId = '#su-card-' + orderId; // the ID of the object we scroll to
            // .scrollTo(objectId, scrollSpeed, options);
            VueScrollTo.scrollTo(scrollId, 200, self.scrollOptions);
            //self.sleep(1000);
            setTimeout(function () {
                self.orderCards[orderId].isHighlighted = false;
                console.log("timeout");
            }, 1000);
        });

        // Determine what happens when the user un-highlights the tiny card in the TimeLine
        /*EventBus.$on('unHighlight', orderId => {
            self.orderCards[orderId].isHighlighted = false;
        });*/
    }
}
</script>

<style lang="scss" scoped>
    @import "../styles/variables";

    #su-orders {
        display: flex;
        width: 100%;
        height: 100%;
        background: $su-color-background;

        #su-time-line-box {
            flex: 1 0 max-content;
            background: $su-color-primary-pale;
            overflow-y: scroll;
            overflow-x: hidden;
        }

        #su-time-section-box {
            flex: 8 1 auto;
            overflow-y: auto;
            overflow-x: hidden;
        }
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