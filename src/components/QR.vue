<template >
    <div class="qrticket">
        <label id="printMe"><b>{{value}}</b></label><br>
        <qrcode-vue  :value="value" :size="size" level="H"></qrcode-vue>

        <button type="button" v-print>Natisni QR kodoo</button>
    </div>

</template>

<script>
    import QrcodeVue from 'qrcode.vue';
    export default {
        name: "Qr",
        props: {
            value:String
        },
        data() {
            return {
                size: 200,
                items:[],
            }
        },
        components: {
            QrcodeVue
        },
        methods:{
            del:function (n) {
                if (localStorage.items) {
                    this.items = JSON.parse(localStorage.getItem("items"));
                    this.items.splice(this.items.indexOf(this.value), 1);
                    localStorage.setItem("items", JSON.stringify(this.items));
                    this.$router.go(n);
                }

            }
        }
    }
</script>

<style scoped>
.qrticket{

    background-color:#ebebeb;
    border: 1px solid #00c4ab;
    padding: 10px 25px;
    margin: 10px;
    display: inline-block;
    text-align: left;
}

b{
    margin-bottom: 13px;
    bottom: 13px;
}
</style>