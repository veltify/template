<script>
	import {SidebarToggler} from 'veltify/cms';
	import { Alert } from 'veltify';

	let { data } = $props()
	
</script>

<div class="py-4">
	<div class="flex gap-2 items-center justify-start mb-4">
		<SidebarToggler />
		<h1 class="font-bold text-2xl">Admin Panel</h1>
	</div>
	<Alert icon="E" title="Veltify">
		Welcome {data.user?.username}!
	</Alert>
</div>

