<template>
  <div class="container">
    <div class="row">
      <h1 class="display-4">Edit</h1>

      <div class="card">
        <div class="card-body">
          <form>
            <label for="title">Book title:</label>
            <input
              type="text"
              class="form-control"
              v-model="book.title"
              name="title"
              id="title"
              @change="validateTitle"
              :class="{ 'is-invalid': errors.title }"
            />

            <br />

            <label for="subtitle">Subtitle:</label>
            <input
              type="text"
              class="form-control"
              v-model.lazy.trim="book.subtitle"
              name="subtitle"
              required
            />

            <br />

            <label for="isbn">ISBN:</label>
            <input
              type="text"
              class="form-control"
              v-model.lazy.trim="book.isbn"
              name="isbn"
              required
            />

            <br />

            <label for="abstract">Abstract:</label>
            <input
              type="text"
              class="form-control"
              v-model.lazy.trim="book.abstract"
              name="abstract"
              minlength="12"
              required
            />

            <br />

            <label for="numPages">Pages:</label>
            <input
              type="text"
              class="form-control"
              v-model.lazy.trim="book.numPages"
              name="numPages"
              required
            />

            <br />

            <label for="author">Author:</label>
            <input
              type="text"
              class="form-control"
              v-model.lazy.trim="book.author"
              name="author"
              required
            />

            <br />

            <label for="publisher">Publisher:</label>
            <input
              type="text"
              class="form-control"
              v-model.lazy.trim="book.publisher"
              name="publisher"
              required
            />

            <br />

            <label for="price">Price:</label>
            <input
              type="text"
              class="form-control"
              v-model.lazy.trim="book.price"
              name="price"
              required
            />

            <br />

            <button class="btn btn-primary" @click="submit()">Save</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { Book } from "../utils/types";
import http from "../utils/http";
import { required, minLength } from "@/utils/validations";

interface ComponentData {
  book: Partial<Book>;
  isbn: string | null;
  errors: {
    [P in keyof Partial<Book>]: string;
  };
}

export default defineComponent({
  name: "BookEdit",

  data(): ComponentData {
    return {
      book: {},
      isbn: null,
      errors: {
        title: "",
      },
    };
  },

  created() {
    const isbn = this.$route.params.isbn;
    this.getBookByIsbn(isbn);
  },

  computed: {
    isInvalid(): boolean {
      return Object.keys(this.errors).some(
        (val) => this.errors[val as keyof ComponentData["errors"]] !== ""
      );
    },
  },

  methods: {
    async getBookByIsbn(isbn: string | string[]) {
      const book = await http<Book>("http://localhost:4730/books/" + isbn);
      this.book = book;
    },

    validateTitle() {
      if (!required(this.book?.title ?? "")) {
        this.errors.title = "Title is required.";
      } else if (!minLength(this.book?.title ?? "", 5)) {
        this.errors.title = "The title must be at least 5 characters long.";
      } else {
        this.errors.title = "";
      }
    },

    submit() {
      console.log(this.book);
    },
  },
});
</script>

<style>
.is-invalid {
  border: 1px solid red;
  color: red;
}
</style>
