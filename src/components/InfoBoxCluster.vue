<template>
  <div class="container" style="width: 350px">
    <div class="row justify-content-md-center" style="padding-top: 10px">
      <div class="col" align="center">
        <InfoBox></InfoBox>
      </div>
      <div class="col" align="center">
        <InfoBox></InfoBox>
      </div>
      <div class="col" align="center">
        <InfoBox></InfoBox>
      </div>
    </div>

    <div
      class="row justify-content-md-center"
      style="padding-bottom: 10px; padding-top: 10px"
    >
      <div class="col" align="center">
        <InfoBox></InfoBox>
      </div>
      <div class="col" align="center">
        <InfoBox></InfoBox>
      </div>
      <div class="col" align="center">
        <InfoBox></InfoBox>
      </div>
    </div>

    <div class="row justify-content-md-center" style="padding-bottom: 10px">
      <div class="col" align="center">
        <InfoBox></InfoBox>
      </div>
      <div class="col" align="center">
        <InfoBox></InfoBox>
      </div>
      <div class="col" align="center">
        <InfoBox></InfoBox>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InfoBox from "./InfoBox.vue";

export default defineComponent({
  name: "InfoBoxCluster",
  components: { InfoBox },
});
</script>

<style scoped>
#info-box-cluster {
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>
