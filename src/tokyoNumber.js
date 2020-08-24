export const tokyoNumber = {
  data() {
    return {
      title: "welcome",
      subTitle: "TOKYO",
      number: 0,
    };
  },
  filters: {
    lowerCase(value) {
      return value.toLowerCase();
    },
  },
  created() {
    console.log("created in mixin");
  },
};
