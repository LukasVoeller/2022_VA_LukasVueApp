<template>
  <div
    class="box"
    :class="{ red: isRed, blue: isBlue, green: isGreen }"
    @click="randomize()"
  ></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "InfoBox",

  data() {
    return {
      isRed: false,
      isBlue: false,
      isGreen: false,
    };
  },

  methods: {
    getRndInteger(min: number, max: number): number {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    randomize() {
      const randomNumber = this.getRndInteger(1, 3);

      if (randomNumber === 1 && !this.isRed) {
        this.isRed = true;
        this.isBlue = false;
        this.isGreen = false;
      } else if (randomNumber === 1 && this.isRed) {
        this.randomize();
      } else if (randomNumber === 2 && !this.isBlue) {
        this.isRed = false;
        this.isBlue = true;
        this.isGreen = false;
      } else if (randomNumber === 2 && this.isBlue) {
        this.randomize();
      } else if (randomNumber === 3 && !this.isGreen) {
        this.isRed = false;
        this.isBlue = false;
        this.isGreen = true;
      } else if (randomNumber === 3 && this.isGreen) {
        this.randomize();
      }
    },
  },
});
</script>

<style scoped>
.box {
  width: 90px;
  height: 90px;
  background-color: gray;
}

.red {
  background-color: red;
}

.blue {
  background-color: blue;
}

.green {
  background-color: green;
}
</style>
