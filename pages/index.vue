<template>
  <section class="container">
    <div class="gritty"></div>
  </section>
</template>

<script>
export default {
  mounted() {
    if(process.browser) {
      const gritty = require('gritty/dist-dev/gritty.js')
      const prefix = '/gritty'; // default
      const env = {}; // default
      const fontFamily = 'Courier'; // default

      gritty('.gritty', {
        prefix,
        env,
        fontFamily,
      });
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.gritty {
  height: 100%;
}
</style>

