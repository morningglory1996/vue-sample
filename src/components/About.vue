<template>
  <div>
    <p>ABOUT</p>
    <input type="text" />
  </div>
</template>

<script>
export default {
  created() {
    console.log("created");
  },
  destroyed() {
    console.log("destroyed");
  },
  deactivated() {
    console.log("deactivated");
  },
  activated() {
    console.log("activated");
  },
};
</script>