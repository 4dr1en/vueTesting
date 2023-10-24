import { mount } from "@vue/test-utils";
import TodoForm from "@/components/TodoForm.vue";
import { expect, describe, it } from "vitest";

describe("TodoForm",  () => {
	it("The field is reset after submit", async() => {
		const wrapper = mount(TodoForm);
		const input = wrapper.find("input");
		await input.setValue("Buy groceries");
		const button = wrapper.find("button");
		await button.trigger("click");

		expect(input.text()).toBe("");
	});

	it("Emits a 'addTodo' event when the form is submitted", async() => {
		const wrapper = mount(TodoForm);
		const input = wrapper.find("input");
		await input.setValue("Buy groceries");
		const button = wrapper.find("button");
		await button.trigger("click");

		expect(wrapper.emitted("addTodo")).toHaveLength(1);
		expect(wrapper.emitted("addTodo")![0]![0]).toBe("Buy groceries");
	});
});