<template>
    <div class="container">
        <input class="qrtext" v-model="value" type="text" placeholder="Vnesi ime mize"/><button id="insert"  type="button" v-on:click="name()">Generiraj QR kodo</button><br>
            <div class="test">
                <QR id="test1" v-for="item in items" :value="item" > </QR>
            </div>
    </div>
</template>

<script>
    import QrcodeVue from 'qrcode.vue';
    import QR from "./QR";
    export default {
        name: 'QRCode',
        data() {
            return {
                items: [],
                value:''
            }

        },
        components: {
            QR,
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
            if (localStorage.items) {
                this.items ="";
                this.items = JSON.parse(localStorage.getItem("items"));
            }
        },
        methods:{
            add:function () {
                this.items.push(this.value);
            },
            name:function() {
                this.items.push(this.value);
                localStorage.setItem("items", JSON.stringify(this.items));
                this.$router.push({ path: "/home/QRCode" });
            }
        }

    }
</script>

<style lang="scss" scoped>
    @import "../styles/variables";

.container{
    background: $su-color-background;
    text-align: left;
    overflow-x: hidden;
    overflow-y: scroll;
    width:100%;
}
.qrtext{
    width:300px;
    color: $su-color-dark-gray;
    position: -webkit-sticky;
    position: sticky;
    background: $su-color-content-light;
    top: 20px;
    left: 20px;
    border: 2px solid $su-color-light-gray;
    outline:none;

}
.test{
    text-align: center;
    margin-top: 50px;
}

#insert{
    width:200px;;
    position: -webkit-sticky;
    position: sticky;
    top: 20px;
    margin-left: 35px;
}

</style>