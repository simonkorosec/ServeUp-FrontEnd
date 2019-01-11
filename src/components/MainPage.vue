<template>
    <p>MAIN PAGE</p>
</template>

<script>
    export default {
        name: "MainPage",
        data () {
            return { }
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

        }
    }
</script>

<style scoped>

</style>
