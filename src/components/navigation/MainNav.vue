<template>
	<header :class="['w-full', 'text-sm', headerHightClass]">
		<div class="fixed top-0 left-0 w-full h-16 bg-white">
			<div
				class="
					flex flex-nowrap
					h-full
					px-8
					mx-auto
					border-b border-solid border-brand-grey-1
				"
			>
				<router-link :to="{ name: 'home' }" class="flex items-center h-full text-xl"
					>Kuka Alenami Ocam</router-link
				>
				<nav class="h-full ml-12">
					<ul class="flex h-full p-0 m-0 list-none">
						<li
							v-for="menuItem in menuItems"
							:key="menuItem.text"
							class="h-full ml-9 first:ml-0"
							data-test="main-nav-list-item"
						>
							<router-link :to="menuItem.url" class="flex items-center h-full py-2 5">
								{{ menuItem.text }}</router-link
							>
						</li>
					</ul>
				</nav>
				<div class="flex items-center h-full ml-auto">
					<profile-image v-if="isLoggedIn" data-test="profile-image" />
					<action-button
						v-else
						text="Sign in"
						data-test="login-button"
						@click="LOGIN_USER()"
					/>
				</div>
			</div>
			<sub-nav v-if="isLoggedIn" data-test="subnav" />
		</div>
	</header>
</template>

<script>
import { mapState, mapMutations } from "vuex";

import ActionButton from "@/components/shared/ActionButton.vue";
import ProfileImage from "@/components/navigation/ProfileImage.vue";
import SubNav from "@/components/navigation/SubNav.vue";

import { LOGIN_USER } from "@/store/constants";

export default {
	name: "MainNav",
	components: {
		ActionButton,
		ProfileImage,
		SubNav,
	},
	data() {
		return {
			menuItems: [
				{ text: "Teams", url: "/teams" },
				{ text: "Locations", url: "/" },
				{ text: "Life at MDB", url: "/" },
				{ text: "How we hire", url: "/" },
				{ text: "Students", url: "/" },
				{ text: "Jobs", url: "/jobs/results" },
			],
		};
	},
	computed: {
		headerHightClass() {
			return {
				"h-16": !this.isLoggedIn,
				"h-32": this.isLoggedIn,
			};
		},
		...mapState(["isLoggedIn"]),
	},
	methods: {
		...mapMutations([LOGIN_USER]),
	},
};
</script>


