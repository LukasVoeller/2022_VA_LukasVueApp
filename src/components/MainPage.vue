<template>
  <div class="container">
    <div class="row">
      <div class="col" align="center">
        <h1 class="display-4">Wilkommen</h1>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="card">
          <img
            class="card-img-top"
            src="../assets/booklist.png"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">BookList</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div class="card-footer text-center">
            <router-link
              to="/booklist"
              class="navbar-brand"
              style="margin-left: 20px"
            >
              <button type="button" class="btn btn-primary">
                View Component
              </button>
            </router-link>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            class="card-img-top"
            src="../assets/infoboxcluster.png"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">InfoBoxCluster</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div class="card-footer text-center">
            <router-link
              to="/infoboxcluster"
              class="navbar-brand"
              style="margin-left: 20px"
            >
              <button type="button" class="btn btn-primary">
                View Component
              </button>
            </router-link>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            class="card-img-top"
            src="../assets/mousecursor.png"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">MouseCursor</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div class="card-footer text-center">
            <router-link
              to="/mousecursor"
              class="navbar-brand"
              style="margin-left: 20px"
            >
              <button type="button" class="btn btn-primary">
                View Component
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainPage",
});
</script>

<style>
.card-img-top {
  width: 100%;
  height: 15vw;
  object-fit: cover;
}
</style>
