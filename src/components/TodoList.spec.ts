import { mount } from "@vue/test-utils";
import TodoList from "@/components/TodoList.vue";
import { expect, describe, it } from "vitest";

describe("TodoList", () => {
  it("mount an empty list", () => {
    const wrapper = mount(TodoList);
    const todoItems = wrapper.findAll("li");
    expect(todoItems).toHaveLength(0);
  });

  it("adds a new todo when the form is submitted", async () => {
    const wrapper = mount(TodoList);

    const todoForm = wrapper.findComponent({ name: "TodoForm" });
    const input = todoForm.find("input");
    const newTodo = "Buy groceries";

    await input.setValue(newTodo);
    await todoForm.find("button").trigger("click");

    expect(wrapper.find(".todo-list").text()).toContain(newTodo);
  });

  it("removes a todo when the remove button is clicked", async () => {
    const wrapper = mount(TodoList);

    const todoForm = wrapper.findComponent({ name: "TodoForm" });
    const input = todoForm.find("input");
    const newTodo = "Buy groceries";

    await input.setValue(newTodo);
    await wrapper.find("button").trigger("click");

    const removeButton = wrapper.find("button.todo__delete");
    await removeButton.trigger("click");

    expect(wrapper.find(".todo-list").text()).not.toContain(newTodo);
  });

  it("Display the 'TodoEdit' component when the edit button is clicked", async () => {
    const wrapper = mount(TodoList);

    const todoForm = wrapper.findComponent({ name: "TodoForm" });
    const input = todoForm.find("input");
    const newTodo = "Buy groceries";
    await input.setValue(newTodo);
    await wrapper.find("button").trigger("click");

    const editButton = wrapper.find("button.todo__edit");
    await editButton.trigger("click");

    expect(wrapper.findComponent({ name: "TodoEdit" }).exists()).toBe(true);
  });

  it("Should match the snapshot", () => {
    const wrapper = mount(TodoList);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
