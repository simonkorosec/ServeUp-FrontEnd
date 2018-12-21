<template>
  <div class="home">

  </div>
</template>

<script>
import OrderCard from "../components/OrderCard";

export default {
    name:"Home",
    components: {OrderCard},
    data() {
        return {
            orderCards: [
                {
                    orderId: 0,
                    arrivalTime: "10 15",
                    ownerName: "Joe Doe",
                    priceTotal: 20,
                    totalPrepTime: 30,
                    orderItems: [{amount: 10, name: "Pizza", prepTime: 20}, {amount: 19, name: "Taco", prepTime: 20}]
                },
                {
                    orderId: 0,
                    arrivalTime: "10 15",
                    ownerName: "Joe Doe",
                    priceTotal: 20,
                    totalPrepTime: 30,
                    orderItems: [{amount: 10, name: "Pizza", prepTime: 20}, {amount: 19, name: "Taco", prepTime: 20}]
                }
            ]
        }
    }
}
</script>
