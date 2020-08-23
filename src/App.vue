<template>
  <div>
    <LikeHeader header-text="HELLO">
      <h2>デフォルトスロット</h2>

      <template v-slot:title="slotProps">
        <h1>タイトル</h1>
        <h2>{{ slotProps.user.firstName }}</h2>
      </template>

      <template v-slot:number>
        <h2>{{number}}</h2>
      </template>

      <template #[title2]>
        <h1>TITLE</h1>
      </template>
    </LikeHeader>
    <LikeNumber :total-number="number" @my-click="number = $event"></LikeNumber>
    <LikeNumber :total-number="number"></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader";

export default {
  data() {
    return {
      number: 10,
      title2: "TITLE",
    };
  },
  components: {
    LikeHeader,
  },
};
</script>

<style scoped>
div {
  border: 1px solid red;
}
</style>