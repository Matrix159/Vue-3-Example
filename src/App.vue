<template>
  <div :class="{ dark: getNightModeEnabled }" class="dark-mode-container">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <router-view/>
  </div>
</template>
<script lang="ts" setup>
import { getNightModeEnabled } from '@/state/night-mode'
</script>
<style lang="scss">
@import "@/assets/common.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  overflow-y: auto;
  background: var(--primary);
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.dark-mode-container {
  height: 100%;
}
</style>
