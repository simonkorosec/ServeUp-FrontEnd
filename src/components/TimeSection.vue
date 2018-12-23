<template>
    <div class="su-time-section">
        <div class="su-time-section-divider">
            <p>TIME:TIME</p>
        </div>
        <div class="su-time-section-container">
            <div class="su-time-section-new">

            </div>
            <div class="su-time-section-making">

            </div>
            <div class="su-time-section-ready">

            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "TimeSection",
        data() {
            return {
                orderCards: [
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
                ],
            }
        },
    }
</script>

<style lang="scss" scoped>
    .su-time-section {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;

        .su-time-section-divider {
            background: yellow;
        }

        .su-time-section-container {
            display: flex;
            align-content: stretch;
            align-items: stretch;
            background: #F30019;
            width: 100%;
            height: 100%;

            div {
                flex: 1;
            }

            .su-time-section-new {
                background: #00AF46;
            }

            .su-time-section-making {
                background: #001eaf;
            }

            .su-time-section-ready {
                background: #af0098;
            }
        }
    }
</style>