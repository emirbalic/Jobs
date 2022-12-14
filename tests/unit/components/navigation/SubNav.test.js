import { mount } from '@vue/test-utils';

import Subnav from '@/components/navigation/SubNav.vue';

describe('Subnav', () => {
  const createConfig = (routeName, $store = {}) => ({
    global: {
      mocks: {
        $route: {
          name: routeName,
        },
        $store,
      },
      stubs: {
        FontAwesomeIcon: true,
      },
    },
  });

  describe('when user is on job page', () => {
    it('displays job count', () => {
      const routeName = 'job-results';
      const $store = {
        getters: {
          FILTERED_JOBS: [{ id: 1 }, { id: 2 }],
        },
      };
      const wrapper = mount(Subnav, createConfig(routeName, $store));
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.text()).toMatch('2 jobs matched');
    });
  });

  describe('when user is not on job page', () => {
    it('does NOT display job count', () => {
      const routeName = 'home';

      const wrapper = mount(Subnav, createConfig(routeName));

      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(false);
    });
  });
});
