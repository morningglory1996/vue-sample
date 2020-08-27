<template>
  <div>
    <h1>Home</h1>
    <button @click="toUsers">Usersページへ行く</button>
  </div>
</template>

<script>
export default {
  methods: {
    toUsers() {
      this.$router.push({
        name: "user-id-profile",
        params: {
          id: 1,
        },
      });
    },
  },
};
</script>
