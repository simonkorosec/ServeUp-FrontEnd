<template>
    <button @click="clickMe()">CLICK</button>
</template>

<script>
    import { EventBus } from '../Events.js';

    export default {
        name: "EmitterComponent",
        data() {
            return {
                count: 0
            }
        },

        methods: {
            clickMe() {
                this.count++;
                EventBus.$emit('emittedEvent', this.count);
            }
        }
    }
</script>