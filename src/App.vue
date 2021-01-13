<template>
  <div>
    <h1>Hello App!</h1>
    <p>
      <router-link to="/foo">Go to Foo</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss" scoped>
</style>