<template>
	<accordion header="Organizations">
		<div class="mt-5">
			<fieldset>
				<ul class="flex flex-row flex-wrap">
					<li
						v-for="organization in UNIQUE_ORGANIZATIONS"
						:key="organization"
						class="w-1/2 h-8"
					>
						<input
							:id="organization"
							v-model="selectedOrganizations"
							:value="organization"
							type="checkbox"
							class="mr-3"
							:data-test="organization"
							@change="selectOrganization"
						/>
						<label :for="organization" data-test="organization">{{ organization }}</label>
					</li>
				</ul>
			</fieldset>
		</div>
	</accordion>
</template>

<script>
import { mapGetters, mapMutations } from "vuex"; //

import { UNIQUE_ORGANIZATIONS, ADD_SELECTED_ORGANIZATIONS } from "@/store/constants"; //

import Accordion from "@/components/shared/Accordion.vue";

export default {
	name: "JobFiltersSidebarOrganizations",
	components: {
		Accordion,
	},
	data() {
    return {
      selectedOrganizations: [],
    };
  },
	computed: {
		...mapGetters([UNIQUE_ORGANIZATIONS]),
	},
	methods: {
	  ...mapMutations([ADD_SELECTED_ORGANIZATIONS]),
	  selectOrganization() {
	    this.ADD_SELECTED_ORGANIZATIONS(this.selectedOrganizations);
			this.$router.push({ name: "job-results" });
	  },
	},
};
</script>
