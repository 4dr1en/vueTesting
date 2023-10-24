<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  oldTodo: string;
}>();

const todo = ref<string>(props.oldTodo);

defineEmits<{
  (e: "editTodo", todo: string): void;
}>();
</script>

<template>
  <div>
    <label for="todo">Todo : </label>
    <input
      type="text"
      v-model="todo"
      @keydown.enter="$emit('editTodo', todo)"
      id="todo"
    />
    <button @click="$emit('editTodo', todo)">Update</button>
  </div>
</template>

<style lang="scss"></style>
