<template>
    <div class="su-order-card-body">
        <div class="su-order-card-header">
            <p class="su-order-card-time"><slot name="arrivalTime"></slot></p>
            <p class="su-order-card-owner"><slot name="ownerName"></slot></p>
            <p class="su-order-card-total"><slot name="priceTotal"></slot>$</p>
        </div>
        <div class="su-order-card-items">
            <slot name="orderItems"></slot>
            <!--<order-card-item v-for="item in orderItems" :key="item.id" :item="item"></order-card-item>-->
        </div>
        <div class="su-order-card-footer">
            <button @click="changeStatus">V PRIPRAVO</button>
            <p><slot name="totalPrepTime"></slot></p>
            <!--<p>{{totalPrepTime}}</p>-->
        </div>
    </div>
</template>

<script>
export default {
    name: "OrderCard",
    methods: {
        changeStatus() {
            this.ownerName = "Ma boiii Joe";
            console.log(this.ownerName)
        }
    }
};
</script>
<style lang="scss" scoped>
@import "../styles/variables";

@keyframes example {
    from {background: red;}
    to {background: yellow;}
}

div {
    display: flex;
    :not(.su-order-card-body) {

    }
}

.su-order-card-body {
    flex-direction: column;
    margin: 32px;
    background: $su-color-content-light;
    box-shadow: $su-shadow;
    border-radius: $su-border-radius-m;
    overflow: hidden;
    //@include su-shadow-hover;
    &:hover {
        @include su-mx-shadow-hover;
    }

    .su-order-card-header {
        font-size: 1.2rem;
        @include su-mx-layout-menu-last-end;
        @include su-mx-color-first-last-child(
                        $su-color-primary,
                        $su-color-primary);

    }

    .su-order-card-items{
        flex-direction: column;
        margin-left: 16px;
        margin-right: 16px;
        border-top: 2px solid $su-color-light-gray;
        border-bottom: 2px solid $su-color-light-gray;
    }

    .su-order-card-footer{
        @include su-mx-layout-menu-last-end;

        * {

        }

        :last-child {
            color: $su-color-primary;
            font-size: 1.2rem;
        }

        button {
            margin-top: 8px;
            margin-bottom: 8px;
            padding-left: 64px;
            padding-right: 64px;
            background: $su-color-secondary;
            color: $su-color-content-light;
            box-shadow: $su-shadow;
            border: none;
            border-radius: $su-border-radius-m;


            &:active {
                background: $su-color-secondary-dark;
            }

            &:hover {
                @include su-mx-shadow-hover;
            }
        }
    }
}
</style>
