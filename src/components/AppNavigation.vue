<template>
  <div class="card text-center">
    <div class="card-header">
      <ul class="nav nav-tabs card-header-tabs">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/booklist" class="nav-link"> BookList </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/infoboxcluster" class="nav-link">
            InfoBoxCluster
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/mousecursor" class="nav-link">
            MouseCursor
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppNavigation",
});
</script>

<style></style>
