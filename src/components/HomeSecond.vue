<template>
  <div class="mian">
    <button @click="show = !show">切り替え</button>
    <transition name="fade" mode="out-in">
      <p v-if="show" key="hello">こんにちは。</p>
      <p v-if="!show" key="goodAfternoon">こんばんは。</p>
    </transition>

    <button @click="myAnimation = 'slide'">Slide</button>
    <button @click="myAnimation = 'fade'">Fade</button>
    <p>{{ myAnimation }}</p>
    <transition name="fade" enter-active-class="animate__animated animate__bounce" appear>
      <p v-if="show">切り替わります</p>
    </transition>

    <transition :name="myAnimation" appear>
      <p v-if="show">切り替わります2</p>
    </transition>
    <br />

    <h2>コンポーネント</h2>
    <button @click=" myComponent = 'ComponentA'">コンポーネントA</button>
    <button @click=" myComponent = 'ComponentB'">コンポーネントB</button>
    <transition name="fade" mode="out-in">
      <component :is="myComponent"></component>
    </transition>

    <hr />
    <transition :css="false" @before-enter="beforeEnter" @enter="enter" @leave="leave">
      <div class="circle" v-if="show"></div>
    </transition>

    <br />
    <hr />

    <button @click="add">追加</button>
    <ul>
      <transition-group name="fade">
        <li
          v-for="(number, index) of numbers"
          @click="remove(index)"
          style="cursor: pointer;"
          :key="number"
        >{{ number }}</li>
      </transition-group>
    </ul>
  </div>
</template>

<script>
import ComponentA from "@/components/ComponentA.vue";
import ComponentB from "@/components/ComponentB.vue";

export default {
  data() {
    return {
      numbers: [0, 1, 2],
      nextNumber: 3,
      show: true,
      myAnimation: "slide",
      myComponent: "ComponentA",
    };
  },
  components: {
    ComponentA,
    ComponentB,
  },
  methods: {
    beforeEnter(el) {
      el.style.transform = "scale(0)";
    },
    enter(el, done) {
      let scale = 0;
      const interval = setInterval(() => {
        el.style.transform = `scale(${scale})`;
        scale += 0.1;
        if (scale > 1) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    leave(el, done) {
      let scale = 1;
      const interval = setInterval(() => {
        el.style.transform = `scale(${scale})`;
        scale -= 0.1;
        if (scale < 0) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    randomIndex() {
      return Math.floor(Math.random() * this.numbers.length);
    },
    add() {
      this.numbers.splice(this.randomIndex(), 0, this.nextNumber);
      this.nextNumber += 1;
    },
    remove(index) {
      this.numbers.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.circle {
  width: 200px;
  height: 200px;
  margin: auto;
  background-color: palevioletred;
  border-radius: 100px;
}

.fade-move {
  transition: transform 0.5s;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 0.5s;
  position: absolute;
}
.fade-leave-to {
  opacity: 0;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
}

.slide-enter-active {
  animation: slide-in 0.5s;
  transition: 1s;
}

.slide-leave-active {
  animation: slide-in 0.5s reverse;
  transition: 1s;
}

@keyframes slide-in {
  from {
    transform: translateX(100px);
  }
  to {
    transform: translateX(0);
  }
}
</style>