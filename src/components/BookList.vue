<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="card" style="margin-top: 20px">
          <div class="card-head" style="padding: 20px">
            <h1 class="display-4">Liste der Bücher</h1>

            <label for="filter">Nach Buchname suchen: </label>
            <br />
            <input
              v-model="filterBookName"
              id="filter"
              name="filter"
              placeholder="Suche nach Name"
            />

            <router-link to="/book/new" class="navbar-brand">
              <button type="button" class="btn btn-primary">New Book</button>
            </router-link>
          </div>

          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Author</th>
                    <th scope="col">ISBN</th>
                    <th scope="col">Aktionen</th>
                  </tr>
                </thead>
                <tbody>
                  <BookListItem
                    v-for="book in filteredBooks"
                    :key="book.isbn"
                    v-bind="book"
                  />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BookListItem from "../components/BookListItem.vue";
import type { Book } from "../utils/types";
import http from "../utils/http";

interface ComponentData {
  books: Book[];
  filterBookName: string;
}

export default defineComponent({
  name: "BookList",
  components: { BookListItem },

  created() {
    this.getBooks();
  },

  data(): ComponentData {
    return {
      books: [],
      filterBookName: "",
    };
  },

  methods: {
    toggleIsRead(index: number) {
      console.log("UBNADFONADOV");

      if (!this.books[index].isRead) {
        this.books[index] = {
          ...this.books[index],
          isRead: true,
        };
      } else if (this.books[index].isRead) {
        this.books[index] = {
          ...this.books[index],
          isRead: false,
        };
      }
    },

    async getBooks() {
      const books = await http<Book[]>("http://localhost:4730/books");
      this.books = books;
    },
  },

  computed: {
    filteredBooks() {
      return this.books.filter((book) =>
        book.title.includes(this.filterBookName)
      );
    },
  },
});
</script>
