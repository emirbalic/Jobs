<template>
  <header :class="['w-full', 'text-sm', headerHightClass]">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-grey-1">
        <a :href="url" class="flex items-center h-full text-xl">{{company}}</a>
        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none">
            <li 
              v-for="menuItem in menuItems" 
              :key="menuItem" 
              class="h-full ml-9 first:ml-0"  
              data-test='main-nav-list-item'
             ><a href="#" class="flex items-center h-full py-2 5">{{menuItem}}</a></li>
          </ul>
        </nav>
        <div class="flex items-center h-full ml-auto">
          <profile-image v-if="isLoggedIn" data-test='profile-image' />
          <action-button 
            v-else 
            text="Sign in"
            data-test='login-button' 
            @click="loginUser" />
          </div>
          <!-- type="primary" -->
      </div>
      <sub-nav v-if="isLoggedIn" data-test=" subnav" />
    </div>
  </header>
</template>

<script>
  import ActionButton from "@/components/shared/ActionButton.vue";
  import ProfileImage from "@/components/navigation/ProfileImage.vue";
  import SubNav from "@/components/navigation/SubNav.vue";

export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
    SubNav
  },
  data() {
    return {
      company:'Kuka Alenami',
      url: 'https://careers.google.com',
      menuItems: ['Teams', 'Locations', 'Life at MDB', 'How we hire', 'Students', 'Jobs'],
      isLoggedIn: false,
    }
  },
  computed: {
    headerHightClass() {
      return {
        "h-16": !this.isLoggedIn,
        "h-32": this.isLoggedIn
      }
    }
  },
  methods: {
    loginUser() {
      this.isLoggedIn = !this.isLoggedIn;
    }
  }
};
</script>

<!-- <style scoped>

</style> -->
