<template>
        <qrcode-vue :value="value" :size="size" level="H"></qrcode-vue>
        <input type="text" v-model="value" placeholder="Text"/><br>
</template>

<script>
    import QrcodeVue from 'qrcode.vue';
    export default {
        name: 'QR',
        data() {
            return {
                value: '',
                size: 300
            }
        },
        components: {
            QrcodeVue
        }
    }
</script>

<style scoped>

</style>