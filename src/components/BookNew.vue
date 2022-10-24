<template>
  <div class="container">
    <div class="row">
      <h1 class="display-4">Create new book</h1>

      <div class="card">
        <div class="card-body">
          <form novalidate @submit.prevent="submit">
            <label for="title">Book title:</label>
            <input
              type="text"
              class="form-control"
              v-model.lazy.trim="book.title"
            />

            <br />

            <label for="subtitle">Subtitle:</label>
            <input
              type="text"
              class="form-control"
              v-model.lazy.trim="book.subtitle"
            />

            <br />

            <label for="isbn">ISBN:</label>
            <input
              type="text"
              class="form-control"
              v-model.lazy.trim="book.isbn"
            />

            <br />

            <label for="abstract">Abstract:</label>
            <input
              type="text"
              class="form-control"
              v-model.lazy.trim="book.abstract"
            />

            <br />

            <label for="numPages">Pages:</label>
            <input
              type="text"
              class="form-control"
              v-model.lazy.trim="book.numPages"
            />

            <br />

            <label for="author">Author:</label>
            <input
              type="text"
              class="form-control"
              v-model.lazy.trim="book.author"
            />

            <br />

            <label for="publisher">Publisher:</label>
            <input
              type="text"
              class="form-control"
              v-model.lazy.trim="book.publisher"
            />

            <br />

            <label for="price">Price:</label>
            <input
              type="text"
              class="form-control"
              v-model.lazy.trim="book.price"
            />

            <br />
          </form>

          <button class="btn btn-primary" @click="submit()">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { Book } from "../utils/types";
import { post } from "../utils/http";

interface ComponentData {
  book: Partial<Book>;
}

export default defineComponent({
  name: "BookNew",

  data(): ComponentData {
    return {
      book: {},
    };
  },

  methods: {
    async submit() {
      await post<Book>("http://localhost:4730/books", this.book, {
        headers: { "Content-Type": "application/json" },
      });
      console.log(this.book);
    },
  },
});
</script>

<style></style>
