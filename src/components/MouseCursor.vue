<template>
  <div id="canvas" @mousemove="setCoords($event)">
    <!--<span id="dot"></span>-->
  </div>

  <div class v-bind:id="id" style="margin-left: 20px">
    Mausposition: X: {{ x }}, Y: {{ y }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "MouseCursor",

  data() {
    return {
      id: "my-id",
      x: 0,
      y: 0,
    };
  },

  methods: {
    setCoords($event: { offsetX: number; offsetY: number }) {
      this.x = $event.offsetX;
      this.y = $event.offsetY;
    },
  },

  computed: {
    cssPropsDotOffsetX() {
      return this.x - 10 + "px";
    },

    cssPropsDotOffsetY() {
      return this.y - 15 + "px";
    },
  },
});
</script>

<style scoped>
#canvas {
  height: 500px;
  margin: 20px;
  border-style: solid;
  border-radius: 10px;
  border-color: lightgray;
}

#dot {
  height: 10px;
  width: 10px;
  background-color: red;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  left: v-bind(cssPropsDotOffsetX);
  top: v-bind(cssPropsDotOffsetY);
}
</style>
