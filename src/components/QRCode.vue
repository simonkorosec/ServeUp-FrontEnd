<template>
    <div class="container">
        <input class="qrtext" v-model="value" type="text" placeholder="Vnesi ime mize"/><button id="insert"  type="button" v-on:click="name()">Generiraj QR kodo</button><br>
            <div class="test">
                <Qr id="test1" v-for="item in items" :value="item" > </Qr>
            </div>
    </div>
</template>

<script>
    import QrcodeVue from 'qrcode.vue';
    import Qr from "./Qr";
    export default {
        name: 'QRCode',
        data() {
            return {
                items: [],
                value:''
            }

        },
        components: {
            Qr,
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
.container{
    text-align: left;
    overflow-x: hidden;
    overflow-y: scroll;
    width:100%;
}
.qrtext{
    width:300px;
    position: -webkit-sticky;
    position: sticky;
    top: 20px;
    left: 20px;
    border: 1px solid #00c4ab;
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