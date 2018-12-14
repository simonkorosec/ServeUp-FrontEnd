 <template>
  <div id="app">

    <router-view/>
  </div>
</template>

<style lang="scss">
html,body{
    height: 100%;
    width:100%;
    margin: 0;
}
#app {
    background: url(assets/restaurant_cafe_design_style_tables_chairs_39235_1920x1080.png) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;

  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;



  height: 100%;
  width: 100%;
}
.login{
    background-color: white;
    width: 30%;
    height: 100%;
}

.login form{
    top: 50%;
    left: 50%;
    -moz-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    position:relative;
    width: 50%;



}
input[type=text]{
    background-color: #ebebeb;
    border: none;
    border-radius: 20px;
    padding: 10px 10px 10px 20px;
    width: 88%;
    margin: 3px 3px 6px;
    color:#444444;
}
input[type=text]:focus{
    outline: 1px solid #00c4ab;
    outline-offset: -1px;
    -moz-outline-radius:20px ;
}
button[type=button]{
    background-color: #00c4ab;
    border: none;
    border-radius: 20px;
    padding: 10px;
    width: 99%;
    margin: 3px;
    color:white;
}
button[type=button]:hover{
    background-color: #00b39b;
}
.companyName{
    color:#00c4ab;
    font-size: 27px;
}
p,label{
    color: gray;
}
label{
    font-size: 13px;
}
.forgot_pass{
    text-align: right;
    margin: 0;
    font-size: 12px;
}
.link{
    color:#00c4ab;
    text-decoration: none;
}
</style>
