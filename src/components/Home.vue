<template>
  <div class="home">
    <ul>
      <li class="demos"><p>{{ msg }}</p></li>
      <li><a href="#/stateless"> Stateless </a></li>
      <li><a href="#/stateless-store"> Stateless with Vuex Store </a></li>
      <li><a href="#/persistent-store"> AWS Date Persistence and Vuex Store </a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Demos:'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.home {
  margin: 0px 0px 0px 30px;
  .demos {
    font-size: 20px;
    font-weight: 600;
  }
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: grey;
}
</style>
