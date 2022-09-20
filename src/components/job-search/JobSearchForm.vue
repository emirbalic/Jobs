<template>
  <form 
    class="
      flex 
      items-center 
      w-full 
      h-12 
      mt-14 
      border 
      border-solid 
      border-brand-gray-3
      rounded-3xl"
    >
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3"/> 

    <div class="flex flex-nowrap flex-1 h-full text-base font-light">
      <div class="relative flex items-center flex-1 h-full pr-3">
        <label for="" class="absolute left-0 -top-10"></label>
        <text-input 
          v-model="role"
          placeholder="Software Engineer" 
          />
          <!-- :value="role"
          @handle-input="updateRole" -->
      </div>
      <span 
        class="
          flex 
          items-center 
          h-full 
          px-3 
          border-l 
          border-r 
          border-brand-grey-3 
          bg-brand-grey-2">in</span>
      <div class="relative flex items-center flex-1 h-full pl-3">
        <label for="" class="absolute left-0 -top-10">Where?</label>
        <text-input 
          v-model="location"
          placeholder="Los Angeles" 
        />
        <!-- <text-input placeholder="Los Angeles" @handle-input="location = $event" /> -->

      </div>
    </div>
    <action-button 
      text="Search" 
      type="secondary"
      class="rounded-r-3xl"
      />
    </form>
</template>

<script>
  import ActionButton from '../shared/ActionButton.vue';
  import TextInput from '../shared/TextInput.vue';
  export default {
    name: 'JobSearchForm',
    components: {
      ActionButton,
      TextInput
    },
    data() {
      return {
        role: '',
        location: '',
      }
    },
    methods: {
      updateRole(payload){
        this.role = payload;
      },
      updateLocation(payload){
        this.location = payload;
      }
    }
  }
</script>