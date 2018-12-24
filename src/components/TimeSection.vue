<template>
    <div class="su-time-section">
        <div class="su-time-section-divider" @click="toggleContent">
            <p>{{timeLabel}}</p>
        </div>
        <div class="su-time-section-container" v-if="visible">
            <div class="su-time-section-new">
                <order-card v-for="card in localOrderCards" :key="card.orderId"
                            :order-id="card.orderId"
                            :arrival-time="card.arrivalTime"
                            :owner-name="card.ownerName"
                            :price-total="card.priceTotal"
                            :total-prep-time="card.totalPrepTime"
                            :order-items="card.orderItems">
                    <p class="su-order-card-total">{{card.priceTotal}}$</p>
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
                visible: true,
                localOrderCards: []
            }
        },
        methods: {
            toggleContent() {
                this.visible = !this.visible
            }
        },
        created() {
            this.localOrderCards = this.orderCards;
        }
    }
</script>

<style lang="scss" scoped>
    @import "../styles/variables";

    .su-time-section {
        width: 100%;
        display: flex;
        flex-direction: column;

        .su-time-section-divider {
            position: sticky;
            background: $su-color-content-light;
            box-shadow: $su-shadow;
            z-index: 10;
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
                background: $su-color-red;
            }

            .su-time-section-making {
                background: $su-color-yellow;
            }

            .su-time-section-ready {
                background: $su-color-green;
            }
        }
    }
</style>