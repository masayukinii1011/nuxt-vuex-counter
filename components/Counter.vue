<template>
  <div>
    <p>Count:{{count}} Index:{{index}}</p>
    <!--counterストアのcountUpを呼び出し-->
    <button v-on:click="$store.dispatch('counter/countUp', index)">+</button>
    <!--counterストアのcountResetを呼び出し-->
    <button v-on:click="$store.dispatch('counter/countReset', index)">Reset</button>
  </div>
</template>

<script>
export default {
  props: {
    count: Number,
    index: Number
  }
};
</script>
