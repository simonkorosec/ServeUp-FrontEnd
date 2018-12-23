<template>
    <div class="su-time-section">
        <div class="su-time-section-divider">
            <p>{{timeLabel}}</p>
        </div>
        <div class="su-time-section-container">
            <div class="su-time-section-new">
                <order-card v-for="card in orderCards" :key="card.orderId"
                    :order-id="card.orderId"
                    :arrival-time="card.arrivalTime"
                    :owner-name="card.ownerName"
                    :price-total="card.priceTotal"
                    :total-prep-time="card.totalPrepTime"
                    :order-items="card.orderItems">
                </order-card>
            </div>
            <div class="su-time-section-making">

            </div>
            <div class="su-time-section-ready">

            </div>
        </div>
    </div>

</template>

<script>
    import OrderCard from "./OrderCard";
    export default {
        name: "TimeSection",
        components: {OrderCard},
        props:{
            timeLabel: String,
            orderCards: Array
        },
        data() {
            return {
                /*orderCards: [
                    {
                        orderId: 0,
                        arrivalTime: "10 15",
                        ownerName: "Joe Doe",
                        priceTotal: 20,
                        totalPrepTime: 30,
                        orderItems: [{id: 0, amount: 10, name: "Pizza", prepTime: 20}, {id: 1, amount: 19, name: "Taco", prepTime: 20}]
                    },
                    {
                        orderId: 1,
                        arrivalTime: "10 15",
                        ownerName: "Joe Bro",
                        priceTotal: 20,
                        totalPrepTime: 30,
                        orderItems: [{id: 0, amount: 10, name: "Pizza", prepTime: 20}, {id: 1, amount: 19, name: "Taco", prepTime: 20}]
                    },
                ],*/
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import "../styles/variables";

    .su-time-section {
        width: 100%;
        display: flex;
        flex-direction: column;
        position: relative;

        .su-time-section-divider {
            position: absolute;
            width: 100%;
            top: 0;
            left: 0;
            p {
                font-weight: bold;
                color: $su-color-dark-gray;
            }
        }

        .su-time-section-container {
            display: flex;
            align-content: stretch;
            align-items: stretch;
            width: 100%;
            height: 100%;

            div {
                flex: 1;
            }

            .su-time-section-new {

            }

            .su-time-section-making {
                background: $su-color-primary-pale;
            }

            .su-time-section-ready {

            }
        }
    }
</style>