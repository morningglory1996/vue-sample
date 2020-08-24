<template>
  <div>
    <p v-border:solid.round.shadow="{ width: '5px', color: 'red' }">HOME</p>
    <h2>{{ title | upperCase | lowerCase }}</h2>
    <p>{{ subTitle | lowerCase | upperCase }}</p>
    <p>{{ number }}</p>
    <button @click="number++">+1</button>
    <hr />
    <CountNumber></CountNumber>
  </div>
</template>

<script>
import CountNumber from "./CountNumber.vue";
import { tokyoNumber } from "@/tokyoNumber";

export default {
  mixins: [tokyoNumber],
  data() {
    return {
      tmpData: "Hello",
    };
  },
  components: {
    CountNumber,
  },
  directives: {
    border(el, binding) {
      // this.tmpData = 'Hi' directivesではthisは使えない
      el.style.borderWidth = binding.value.width;
      el.style.borderColor = binding.value.color;
      el.style.borderStyle = binding.arg;
      if (binding.modifiers.round) {
        el.style.borderRadius = "0.5rem";
      }
      if (binding.modifiers.shadow) {
        el.style.boxShadow = "0 2px 5px rgba(0, 0, 0, .6)";
      }
    },
  },
};
</script>