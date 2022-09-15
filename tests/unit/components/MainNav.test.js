import { mount } from "@vue/test-utils";

import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("displays company name", () => {
    const wrapper = mount(MainNav);
    expect(wrapper.text()).toMatch("Kuka Alenami");
  });
  it("displays menu items for navigation", () => {
    const wrapper = mount(MainNav);
    // const navigationMenuItem = wrapper.find('li');
    // const navigationMenuItems = wrapper.findAll('li');
    const navigationMenuItems = wrapper.findAll(
      "[data-test='main-nav-list-item']"
    );
    const navigationMenuTexts = navigationMenuItems.map((item) => item.text());
    // console.log(navigationMenuTexts);
    expect(navigationMenuTexts).toEqual([
      "Teams",
      "Locations",
      "Life at MDB",
      "How we hire",
      "Students",
      "Jobs",
    ]);
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
