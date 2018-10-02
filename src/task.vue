<template>
	<li  class="list-group-item d-flex justify-content-between task-item">
		<span @click="taskDoneClicked" v-bind:class="{'task-title--done': isDone}" class="task-title">{{ id+1 }} {{ title }}</span>
		<div class="btn-group" role="group" aria-label="task controls">
			<button class="close" type="button" aria-label="delete task" v-on:click="taskDeleteClicked"><span aria-hidden="true">&times;</span>
			</button>
		</div>
	</li>
</template>

<script>
	import service	from './Service.js'
	export default {
		props: {
			id: Number,
			title: String,
			taskDelete: Function,
			taskDoneClass: 'task-title--done',
			isDone: false
		},

		methods: {
			taskDoneClicked(){
				// console.log(isDone);
				service.taskDone(this.id);
			},

			taskDeleteClicked(){
				service.taskDelete(this.id);
			},

			taskEditClicked(){
				service.taskEdit(this.id);
			}
		}
	}
</script> 