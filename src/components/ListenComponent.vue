<template>
    <div>
        Count number is: {{ value }}
    </div>
</template>

<script>
    import { EventBus } from '../Events.js';

    export default {
        name: "ListenComponent",
        data() {
            return {
                value: 0
            }
        },
        mounted() {
            EventBus.$on('emittedEvent', data => {
                console.log('emitted caught');
                this.value = data;
            });
        }
    }
</script>