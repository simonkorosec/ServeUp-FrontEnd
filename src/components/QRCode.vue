<template>
    <div >
        <label>asdasdasdads</label>
        <qrcode-vue :value="value" :size="size" level="H"></qrcode-vue>
        <input type="text" v-model="value" placeholder="Text"/><br>
        <button v-print>Print local range</button>
    </div>
</template>

<script>
    import QrcodeVue from 'qrcode.vue';
    export default {
        name: 'QRCode',
        data() {
            return {
                value: '',
                size: 300
            }
        },
        components: {
            QrcodeVue
        },
        beforeCreate: function () {
            try{
                if (this.$session.exists()) {
                    console.log('obstaja');
                }
                else{
                    this.$router.push({ name: "login" });
                }
            }
            catch (e) {
                this.$router.push({ name: "login" });
            }

        },
        mounted: function () {
            if (this.$session.exists()) {
                console.log('obstaja');
            }
            else{
                console.log('ne obstaja');
            }
        }

    }
</script>

<style scoped>

</style>