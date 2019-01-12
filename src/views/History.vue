<template>
    <div id="su-history">
        <div class="su-history-date">
            <p>DATE</p>
        </div>
        <div class="su-history-container">
            <div class="su-history-line-box">
                <history-line v-for="timeSlot in timeSlots" :key="timeSlot[1]">
                    <template slot="timeLabel">10:30</template>
                    <template slot="lineItems">
                        <history-line-item v-for="card in timeSlot[0]" :key="card.orderId" :order-id="card.orderId">

                        </history-line-item>
                    </template>
                </history-line>
            </div>

            <history-tab>
                <template slot="historyTimeSections">
                    <history-section v-for="timeSlot in timeSlots" :key="timeSlot[1]">
                        <template slot="timeLabel">{{timeSlot[1]}}</template>
                        <template slot="historyCards">
                            <history-card v-for="card in timeSlot[0]" :key="card.orderId">
                                <template slot="arrivalTime">{{card.displayTime}}</template>
                                <template slot="ownerName">{{card.ownerName}}</template>
                                <template slot="priceTotal">{{card.priceTotal}}</template>

                                <template slot="historyItems">
                                    <history-card-item v-for="item in card.orderItems" :key="item.id">
                                        <template slot="amount">{{item.amount}}</template>
                                        <template slot="foodName">{{item.name}}</template>
                                        <template slot="price">{{item.price}}</template>
                                    </history-card-item>
                                </template>
                            </history-card>
                        </template>
                    </history-section>
                </template>
            </history-tab>
        </div>
    </div>
</template>

<script>
    import HistoryTab from "../components/history/HistoryTab";
    import HistorySection from "../components/history/HistorySection";
    import HistoryCard from "../components/history/HistoryCard";
    import HistoryCardItem from "../components/history/HistoryCardItem";
    import axios from "axios";
    import {EventBus} from "../Events.js";
    import {serverUrl} from "../Events";
    import HistoryLine from "../components/history/HistoryLine";
    import HistoryLineItem from "../components/history/HistoryLineItem";

    export default {
        name: "History",
        components: {HistoryLineItem, HistoryLine, HistoryCardItem, HistoryCard, HistorySection, HistoryTab},

        data() {
            return {
                orderCards: [],
                //historyTimeSections: [1, 1, 1, 1, 1],
                //historyItems: [1, 1, 1, 1, 1],
            }
        },

        computed: {
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
                        timeSlots[fullTime] = [[], this.getDisplayTime(fullTime)];
                    }

                    timeSlots[fullTime][0].unshift(orderCard);
                });
                return timeSlots;
            }
        },

        methods: {
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
                        prepTime: unparsedItem.cena,
                        price: unparsedItem.cena// TODO prep time namesto cena
                    });
                });

                return parsedOrder;
            },

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
                        if (response.data.data[objectId].status === 3) {
                            let parsedOrder = self.parseOrder(response.data.data[objectId]);
                            self.orderCards.push(parsedOrder);
                        }
                    });

                    self.orderCards.sort(function (card1, card2) {
                        return card1.arrivalTime - card2.arrivalTime;
                    });
                });
        },
    }
</script>

<style lang="scss" scoped>
    @import "../styles/variables";

    #su-history {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        background: $su-color-background;

        .su-history-date {
            background: $su-color-content-light;
            margin-bottom: 8px;
            box-shadow: $su-shadow;

            p {
                font-weight: bold;
                color: $su-color-dark-gray;
            }
        }

        .su-history-container {
            display: flex;
            width: 100%;
            height: 100%;
            z-index: 10;
            box-shadow: $su-shadow;
        }

        .su-history-line-box {
            width: 20rem;
            flex: 1 0 max-content;
            background: $su-color-primary-pale;
            overflow-y: scroll;
            overflow-x: hidden;
        }

    }
</style>