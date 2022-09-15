import { mount } from "@vue/test-utils";

import MainNav from '@/components/MainNav.vue';

describe(('MainNav'), () => {
  it('displays company name', () => {
    const wrapper = mount(MainNav);
    expect(wrapper.text()).toMatch('Kuka Alenami');
  });
});

// describe(('MainNav'), () => {
//   it('displays company name', async () => {
//     const wrapper = mount(MainNav);
//     await wrapper.setData({
//       company: 'Gige Mige'
//     })
//     expect(wrapper.text()).toMatch('Gige Mige');
//   });
// });