<template>
  <div>
    <!--counterストアのcountsを呼び出し-->
    <Counter
      v-for="(count, index) in $store.state.counter.counts"
      v-bind:count="count"
      v-bind:index="index"
      v-bind:key="index"
    />
  </div>
</template>

<script>
import Counter from "../components/Counter.vue";

export default {
  components: {
    Counter
  }
};
</script>
