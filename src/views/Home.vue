<template>
  <div class="home">
      <order-card v-for="card in orderCards" :key="card.orderId"
                  :order-id="card.orderId"
                  :arrival-time="card.arrivalTime"
                  :owner-name="card.ownerName"
                  :price-total="card.priceTotal"
                  :total-prep-time="card.totalPrepTime"
                  :order-items="card.orderItems">
      </order-card>
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
