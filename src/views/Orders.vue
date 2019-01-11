<template>
<div id="su-orders">
    <div id="su-time-line-box">
        <time-line v-for="(timeSlot, time) in timeSlots" :key="time">
            <template slot="timeLabel">{{timeSlot[3]}}</template>

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
            <!--timeSlot[3] is the display time-->
            <template slot="timeLabel">{{timeSlot[3]}}</template>

            <template slot="sectionNew">
                <!--For each orderCard in that time section generate a new order card-->
                <order-card v-for="card in timeSlot[0]" :key="card.orderId"
                            :order-id="card.orderId"
                            :class="{suHereNew: card.isHere, highlighted: card.isHighlighted}"
                            :id="'su-card-' + card.orderId">
                    <template slot="arrivalTime">{{card.displayTime}}</template>
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
                    <template slot="arrivalTime">{{card.displayTime}}</template>
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
                    <template slot="arrivalTime">{{card.displayTime}}</template>
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
import TimeSection from "../components/orders/TimeSection";
import OrderCard from "../components/orders/OrderCard";
import OrderCardItem from "../components/orders/OrderCardItem";
import {EventBus} from "../Events.js";
import {serverUrl} from "../Events";
import axios from "axios";
import TimeLine from "../components/orders/TimeLine";
import TimeLineItem from "../components/orders/TimeLineItem";
import VueScrollTo from "vue-scrollto/src/directive";
import _ from 'lodash';

export default {
    name: "Orders",

    components: {TimeLineItem, TimeLine, OrderCardItem, OrderCard, TimeSection},

    data() {
        return {
            orderCards: [],
            // How often to refresh the page after the initial load, refresh function located in mounted
            refreshInterval: 5000, // milliseconds
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

    computed: {
        // Builds an array of time slots out of orders
        // Structure: timeSlots{timeSlot1[New][Cooking][Ready], timeSlot2[New][Cooking][Ready], ...}
        timeSlots: function () {
            let timeSlots = {};
            this.orderCards.forEach(orderCard => {
                let fullTime = orderCard.arrivalTime;// The time slot in which the card fits
                fullTime.setSeconds(0);

                // Decides in which time slot the card fits
                // This can be changed depending on how long the time slots need to be
                if (fullTime.getMinutes() < 30) {
                    fullTime.setMinutes(0);
                }
                else {
                    fullTime.setMinutes(30);
                }

                // If the time slot doesn't exist, make a new one
                if (!(fullTime in timeSlots)) {
                    timeSlots[fullTime] = [[/*New*/], [/*Cooking*/], [/*Ready*/], this.getDisplayTime(fullTime)];
                }

                // Assign the order card to the correct column based on its status
                timeSlots[fullTime][orderCard.orderStatus].unshift(orderCard);
            });

            return timeSlots;
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
            let parsedOrder = {
                orderId: unparsedOrder.id_narocila,
                orderStatus: unparsedOrder.status,
                isHere: unparsedOrder.checked_in,
                arrivalTime: new Date(unparsedOrder.cas_prevzema),
                displayTime: "",
                ownerName: unparsedOrder.id_uporabnik,
                priceTotal: unparsedOrder.cena,
                totalPrepTime: 0,
                isHighlighted: false,
                // TODO parse the order items as well
                orderItems: [/*{id: 0, amount: 10, name: "Pizza", prepTime: 20}, {id: 1, amount: 19, name: "Taco", prepTime: 20},{id: 3, amount: 19, name: "Taco", prepTime: 20}*/]
            };

            // set the time that will be displayed in the DOM
            parsedOrder.displayTime = this.getDisplayTime(parsedOrder.arrivalTime);

            // parse the orderItems
            Object.keys(unparsedOrder.jedi).forEach(indexJedi => {
                let unparsedItem = unparsedOrder.jedi[indexJedi];
                parsedOrder.totalPrepTime += unparsedItem.cena; // TODO prep time namesto cena
                parsedOrder.orderItems.push({
                    id: unparsedItem.id_jed,
                    amount: unparsedItem.kolicina,
                    name: unparsedItem.ime_jedi,
                    prepTime: unparsedItem.cena // TODO prep time namesto cena
                });
            });

            return parsedOrder;
        },

        // Extracts the hour and minute from the full date,
        // so it can be displayed in the DOM
        getDisplayTime(time) {
            return "" + time.getHours() + ":" + ('0' + time.getMinutes()).slice(-2);
        },
    },

    created() {
        let self = this;
        axios.get(serverUrl + 'orders/?id_restavracija=6')
            .then(function (response) {
                // TODO remove log
                console.log('Response data', response.data.data);
                // Parse each card from the server response data and insert the parsed order
                // in the view's orderCards dict
                Object.keys(response.data.data).forEach(objectId => {
                    if (response.data.data[objectId].status !== 3) {
                        let parsedOrder = self.parseOrder(response.data.data[objectId]);
                        self.orderCards.push(parsedOrder);
                    }
                });

                self.orderCards.sort(function (card1, card2) {
                    return card1.arrivalTime - card2.arrivalTime;
                });
            }
        );
    },

    mounted() {
        // the this of the vue object is not accessible inside other functions
        // in order to be acceded it must be stored in a variable
        self = this;

        // When a status of the card is changed intercept the event
        // and move the card in the next status group (New => Cooking => Ready => Done)
        EventBus.$on('changeStatus', orderId => {
            let clickedOrderCard = self.orderCards.filter(orderCard => {
                return orderCard.orderId === orderId;
            })[0];
            // If the current status is Ready, remove the card from the list
            if (clickedOrderCard.orderStatus === 2) {
                this.$delete(self.orderCards, orderId);
            }
            // Else move it in the next status group
            else {
                clickedOrderCard.orderStatus += 1;
            }

            // Update the server
            axios.post(serverUrl + 'orders/status_update/', {
                id_narocilo: clickedOrderCard.orderId,
                status: clickedOrderCard.orderStatus
            }).then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });
        });

        // Determine what happens when the user highlights the tiny card in the TimeLine
        EventBus.$on('highlight', async function(orderId) {
            let clickedOrderCard = self.orderCards.filter(orderCard => {
                return orderCard.orderId === orderId;
            })[0];
            clickedOrderCard.isHighlighted = true;
            let scrollId = '#su-card-' + orderId; // the ID of the object we scroll to
            VueScrollTo.scrollTo(scrollId, 200, self.scrollOptions);
            // The user has to wait 1 second, before they can highlight the item again
            setTimeout(function () {
                clickedOrderCard.isHighlighted = false;
                console.log("timeout");
            }, 1000);
        });

        // TODO Periodically refresh the page with new orders from the server
        /*setInterval(function () {
            let self = this;
            axios.get(serverUrl + 'orders/refresh/?id_restavracija=6')
                .then(function (response) {
                    console.log('Refresh data', response.data);
                    if (response.data.new_orders.length !== 0){
                        // TODO remove log
                        console.log('Refresh data rcv', response.data);
                        // Parse each card from the server response data and insert the parsed order
                        // in the view's orderCards dict
                        Object.keys(response.data.new_orders).forEach(objectId => {
                            let parsedOrder = self.parseOrder(response.data.new_orders[objectId]);
                            // Gotta use $set to make vue recognize the inserted object and make it reactive
                            self.$set(self.orderCards, parsedOrder.orderId, parsedOrder);
                        });
                    }
                    if (response.data.cancelled_orders.length !== 0) {
                        console.log('Refresh data rcv', response.data);
                        response.data.cancelled_orders.forEach(orderId => {
                            self.$delete(this.orderCards, orderId);
                        });
                    }
                }
                ).catch(function (error) {
                    console.log('refresh error', error);
                });
        }, this.refreshInterval);*/

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