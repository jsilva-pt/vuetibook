<template>
  <v-app>
    <div class="logos pa-3">
      <div>
        <div><img src="@/assets/vuetify.webp" alt="alt text" /></div>
        <div>Vuetify yo</div>
      </div>
      <div>
        <div><img src="@/assets/vue.webp" alt="alt text" /></div>
        <div>Vue.js</div>
      </div>
      <div>
        <div><img src="@/assets/storybook.webp" alt="alt text" /></div>
        <div>Storybook</div>
      </div>
    </div>
    <div id="nav" class="links pa-3">
      <router-link to="/">Grid</router-link> |
      <router-link to="/add">Add</router-link> |
      <router-link to="/view">View</router-link>
    </div>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: blue;
}

.links {
  text-align: center;
}

.logos {
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 16px;
}

.logos img {
  height: 100px;
}
</style>
