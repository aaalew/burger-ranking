<template>
  <div id="app">
    <div id="header">
      <h1>THE BURGER HIERARCHY</h1>
      <i class="fas fa-hamburger"></i>
      <i class="fas fa-hamburger fa-2x"></i>
      <i class="fas fa-hamburger fa-3x"></i>
      <i class="fas fa-hamburger fa-4x"></i>
      <i class="fas fa-hamburger fa-3x"></i>
      <i class="fas fa-hamburger fa-2x"></i>
      <i class="fas fa-hamburger"></i>
    </div>

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/add">Add</router-link>
    </div>
    <router-view/>
    <footer>
      <a href="https://github.com/aaalew/burger-ranking" target="_blank">GitHub</a>
    </footer>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
