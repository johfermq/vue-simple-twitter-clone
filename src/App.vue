<template>
  <div id="app">
    <!-- <div class="ui stackable three column centered grid container">
      <div class="ui secondary menu">
        <router-link to="/" class="item" tag="a">Home</router-link>
        <router-link to="/register" class="item" tag="a">Register</router-link>
        <router-link to="/login" class="item" tag="a">Login</router-link>
      </div>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>

<style lang="scss">
	body {
        background-color: #f7f7f7;
        padding-top: 50px;
        padding-bottom: 50px;
    }

    .is-danger {
        color: #9f3a38;
    }
</style>
