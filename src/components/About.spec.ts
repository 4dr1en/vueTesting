import About from "./About.vue";
import { mount } from "@vue/test-utils";
import { expect, describe, it } from "vitest";

describe("About", () => {
  it("should match the snapshot", () => {
    const wrapper = mount(About);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
