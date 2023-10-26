import TodoEdit from "./TodoEdit.vue";
import { mount } from "@vue/test-utils";
import { expect, describe, it } from "vitest";

describe("TodoEdit", () => {
  it("Prepend the input field withe the old value", async () => {
    const wrapper = mount(TodoEdit, {
      props: {
        oldTodo: "Buy groceries",
      },
    });
    const input = wrapper.find("input");
    expect(input.element.value).toBe("Buy groceries");
  });

  it('Emits a "editTodo" event when the form is submitted', async () => {
    const wrapper = mount(TodoEdit, {
      props: {
        oldTodo: "Buy groceries",
      },
    });
    const input = wrapper.find("input");
    const newValue = "Go to the gym";
    await input.setValue(newValue);
    const button = wrapper.find("button");
    await button.trigger("click");

    expect(wrapper.emitted("editTodo")).toHaveLength(1);
    expect(wrapper.emitted("editTodo")![0]![0]).toBe(newValue);
  });

  it("Should match the snapshot", () => {
    const wrapper = mount(TodoEdit, {
      props: {
        oldTodo: "Buy groceries",
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
