<template>
  <div>
    <h1>Users</h1>
    <router-link to="/users/1">ユーザー1</router-link>
    <router-link to="/users/2">ユーザー2</router-link>
    <hr />
    <h1>User No. {{ id }}</h1>
    <router-link :to="'/users/' + (Number(id) + 1) + '/profile'"
      >次のユーザー</router-link
    >
    <router-view></router-view>
    <div style="height: 700px;"></div>
    <router-link
      id="next-user"
      :to="{
        name: 'user-id-profile',
        params: { id: Number(id) + 1 },
        query: { lang: 'ja', page: 2 },
      }"
      >次のユーザー</router-link
    >
  </div>
</template>

<script>
export default {
  props: ["id"],
  // beforeRouteEnter(to, from, next) {
  //   next((vm) => {
  //     console.log(vm.id);
  //   });
  // },
  // beforeRouteUpdate(to, from, next) {
  //   next();
  // },
  // beforeRouteLeave(to, from, next) {
  //   const isLeave = window.confirm("ページを離れますか?");
  //   if (isLeave) {
  //     next();
  //   } else {
  //     next(false);
  //   }
  // },
};
</script>
