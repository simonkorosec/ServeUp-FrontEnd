<template>
    <home></home>
</template>

<script>
    import Home from "./Home";
    export default {
        name: "MainPage",
        components: {Home},
        data () {
            return { }
        },
        /*beforeCreate: function () {
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

        }*/
    }
</script>

<style scoped>

</style>
