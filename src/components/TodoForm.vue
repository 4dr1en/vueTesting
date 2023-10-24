<script setup lang="ts">
import { ref } from "vue";
const todo = ref<string>("");

const emit = defineEmits<{
  (e: "addTodo", todo: string): void;
}>();

function sendTodo() {
  if (!todo.value) return;
  emit("addTodo", todo.value);
  todo.value = "";
}
</script>

<template>
  <div>
    <label for="todo">Todo</label>
    <input type="text" v-model="todo" @keydown.enter="sendTodo" id="todo" />
    <button @click="sendTodo">Add</button>
  </div>
</template>

<style lang="scss"></style>
