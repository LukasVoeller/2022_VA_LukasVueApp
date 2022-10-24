<template>
  <div>
    <p>{{ book.title }}</p>
    <p>{{ book.subtitle }}</p>
    <p>{{ book.isbn }}</p>
    <p>{{ book.abstract }}</p>
    <p>{{ book.numPages }}</p>
    <p>{{ book.author }}</p>
    <p>{{ book.publisher }}</p>
    <p>{{ book.price }}</p>
  </div>

  <div>
    <router-link
      :to="{ name: 'BookEdit', params: { isbn: book.isbn } }"
      class="nav-link"
    >
      <button type="button" class="btn btn-primary">Edit Book</button>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { Book } from "../utils/types";
import http from "../utils/http";

interface ComponentData {
  book: Partial<Book>;
  isbn: string | null;
}

export default defineComponent({
  name: "BookDetail",

  data(): ComponentData {
    return {
      book: {},
      isbn: null,
    };
  },

  created() {
    const isbn = this.$route.params.isbn as string;
    this.getBookByIsbn(isbn);
  },

  methods: {
    async getBookByIsbn(isbn: string | string[]) {
      const book = await http<Book>("http://localhost:4730/books/" + isbn);
      this.book = book;
    },
  },
});
</script>
