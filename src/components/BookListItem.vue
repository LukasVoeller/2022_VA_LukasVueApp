<template>
  <tr>
    <td>{{ title }}</td>
    <td>{{ author }}</td>
    <td>{{ isbn }}</td>
    <td>
      <div class="btn-group" role="group">
        <!--
        <button
          class="btn btn-outline-primary"
          :class="{ active: isRead }"
          @click="$emit('isRead')"
        >
          Gelesen
        </button>
        -->

        <router-link
          :to="{ name: 'BookDetail', params: { isbn: isbn } }"
          class="nav-link"
        >
          <button
            type="button"
            class="btn btn-outline-primary"
            style="margin-right: 5px"
          >
            View
          </button>
        </router-link>

        <router-link
          :to="{ name: 'BookEdit', params: { isbn: isbn } }"
          class="nav-link"
        >
          <button
            type="button"
            class="btn btn-outline-primary"
            style="margin-right: 5px"
          >
            Edit
          </button>
        </router-link>

        <button
          type="button"
          class="btn btn-outline-danger rounded"
          data-bs-toggle="modal"
          :data-bs-target="'#exampleModal' + isbn"
        >
          Delete
        </button>
      </div>

      <CustomModal :isbn="isbn" :title="title"></CustomModal>
    </td>
  </tr>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CustomModal from "./CustomModal.vue";

export default defineComponent({
  name: "BookListItem",
  components: { CustomModal },

  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
    },
    isbn: {
      type: String,
      required: true,
    },
    abstract: {
      type: String,
    },
    numPages: {
      type: Number,
      //validator: (value: number) => value < 1000,
    },
    author: {
      type: String,
      required: true,
    },
    publisher: {
      type: String,
    },
    price: {
      type: String,
    },
    isRead: {
      type: Boolean,
    },
  },

  emits: ["isRead"],

  methods: {
    async deleteBook(isbn: string) {
      await fetch("http://localhost:4730/books/" + isbn, { method: "DELETE" });
    },

    addToModal() {
      return this.isbn;
      //console.log(this.isbn);
    },
  },
});
</script>

<style scoped></style>
