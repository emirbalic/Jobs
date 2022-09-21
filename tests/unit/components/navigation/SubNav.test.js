import { mount } from "@vue/test-utils";

import Subnav from '@/components/navigation/SubNav.vue';


describe("Subnav", () => {
  
  const createConfig = (routeName) => ({
    global: {
      mocks: {
        $route:{
          name: routeName
        }
      },
      stubs: {
        FontAwesomeIcon: true,
      }
    },
  })

  describe("when user is on job page", () => {
    it("displays job count", () => {
      const routeName = "job-results";

      const wrapper = mount(Subnav, createConfig(routeName));
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(true);
    })
  });

  describe("when user is not on job page", () => {
    it("does NOT display job count", () => {
      const routeName = "home";

      const wrapper = mount(Subnav, createConfig(routeName));

      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(false);
    })
  });
})