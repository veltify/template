<script>
	import { ThemeButton, ThemeProvider } from "veltify";
	import { Navigation, Sidebar } from 'veltify/cms';
	
	import { onMount } from "svelte";
	import { goto } from "$app/navigation";
	import { page } from "$app/state";
	
	import "../../app.admin.css";

	let { children, data } = $props();

	const links = {
		users: "Users",
		settings: 'Settings'
	};

	let theme = $state('dark')
	onMount(() => {
		if (!data.user) goto("/auth/login");
	});
</script>

<ThemeProvider />
<div data-theme="{data.settings?.theme ?? 'default'}" class="bg-base-100 text-content">
	{#if data.user && page.url.pathname !== "/admin/login"}
		<div class="flex h-dvh">
			<Sidebar>
				<div class="text-2xl font-bold flex items-center justify-between p-2 pe-0">
					Veltify
					<ThemeButton />
				</div>
				<Navigation pathname={page.url.pathname} {links} />
			</Sidebar>

			<div class="flex-1 overflow-y-auto px-4">
				{@render children()}
			</div>
		</div>
	{:else}
		<div class="flex items-center justify-center h-dvh">
			{@render children()}
		</div>
	{/if}
</div>