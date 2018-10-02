<template>
	<header>
		<div class="container">
			<div class="display-4 mb-2">
				<slot name='title'>ToDo app default</slot>
				<slot name='subtitle'>ToDo app default</slot>
			</div>
			<div class="alert alert-warning" role="alert">Task added!</div>
			<div class="alert alert-danger" role="alert">Task deleted!</div>
			<div class="alert alert-success" role="alert">Task success!</div>
		</div>
	</header>
</template>

<script>
	export	default{

	}
</script>