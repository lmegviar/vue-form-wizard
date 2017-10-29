<!-- Open Source Logo https://pixabay.com/en/dog-puppy-pet-wizard-robe-pup-47229/ -->
 <template>
  <div id="app">
    <table class="demo-table">
    <td class="logo-cell"><img class="logo" src="./assets/logo.png"></td>
    <td class="header">
      <h1> Vue Form Wizard </h1>
      <h4 class="subheader"> Demo application for a configurable form and "wizard" that walks users through the form submission process </h4> 
    </td>
    </table>
    <br>
    <hr>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang='scss'>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
    .logo {
      height: 150px;
    }
    .logo-cell {
      width: 20%;
      text-align: right;
    }
    .demo-table {
      vertical-align: middle;
      width: 100%;
    }
    .header {
      text-align: left;
      padding: 0px 80px 0px 50px;
        .subheader {
          color: grey;
        }
    }
}
</style>
