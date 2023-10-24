<script setup lang="ts">
import { ref } from "vue";
import TodoForm from "./TodoForm.vue";
import TodoEdit from "./TodoEdit.vue";

const todos = ref<string[]>([]);
const currentEdit = ref<number | null>(null);

function removeTodo(index: number) {
  todos.value.splice(index, 1);
}

function editTodo(index: number, text: string) {
  currentEdit.value = null;
  todos.value[index] = text;
}
</script>

<template>
  <div>
    <h1>LIST OF TODO</h1>
    <ul class="todo-list">
      <li v-for="(todo, index) in todos">
        <p>{{ todo }}</p>
        <button @click="removeTodo(index)" class="todo__delete">Delete</button>
        <button
          @click="
            currentEdit == index ? (currentEdit = null) : (currentEdit = index)
          "
          class="todo__edit"
        >
          {{ currentEdit == index ? "Cancel edit" : "Edit" }}
        </button>
        <TodoEdit
          v-if="index == currentEdit"
          :oldTodo="todo"
          @editTodo="editTodo(index, $event)"
        />
      </li>
    </ul>
    <TodoForm @addTodo="(e: string) => todos.push(e)" />
  </div>
</template>

<style lang="scss"></style>
