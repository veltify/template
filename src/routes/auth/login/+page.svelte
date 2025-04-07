<script lang="ts">
	import "../../../app.admin.css";

	import { Form } from "veltify/cms";
	import { Button, Card, CardBody, FormField, Input } from "veltify";

	let { data, form } = $props();

	let value = $state(form?.body ?? {});
</script>

<div
	class="w-full p-4 flex flex-col items-center justify-center text-content"
>
	<div class="p-4 pt-12">
		<h1 class="text-2xl font-bold">Login</h1>
	</div>
	<Card>
		<CardBody>
			<Form bind:value mode="default" method="POST">
				<FormField
					label="Username"
					required
					error={form?.errors.username}
				>
					<Input
						required
						name="username"
						placeholder="Enter your username"
						bind:value={value.username}
					/>
				</FormField>

				<FormField
					label="Password"
					required
					error={form?.errors.password}
				>
					<Input
						type="password"
						required
						name="password"
						placeholder="Enter your password"
						bind:value={value.password}
					/>
				</FormField>

				<Button type="submit" class="w-full mt-4">Login</Button>
			</Form>
		</CardBody>
	</Card>
</div>
