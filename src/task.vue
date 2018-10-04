<template>
	<li @mouseover="mouseOver" @mouseleave="mouseOut" class="list-group-item d-flex justify-content-between task-item">
		<span @click="taskDoneClicked" v-bind:class="{'task-title--done': isDone}" class="task-title col-11">{{ id+1 }} {{ title }}</span>
		<div v-show="hover && !editMode" class="btn-group col-1" role="group" aria-label="task controls">
			<button class="shadow btn btn-primary" type="button" aria-label="edit task" v-on:click="taskEditClicked"><font-awesome-icon icon="edit" />
			</button>
			<button class="shadow btn btn-danger" type="button" aria-label="delete task" v-on:click="taskDeleteClicked"><font-awesome-icon icon="trash-alt" />
			</button>
		</div>
	</li>
</template>

<script>
	import service	from './Service.js'
	import { bus } from './bus.js'



	export default {
		props: {
			id: Number,
			title: String,
			taskDelete: Function,
			taskDoneClass: 'task-title--done',
			isDone: false,
		},

		data () {
			return {
				hover: false,
				editMode: false,
				newTaskTitle: ''
			}
		},

		mounted(){
			bus.$on('taskEdit', (id, title) => {
				this.editMode = true;
			});

			bus.$on('taskEditEnd', (id, title) => {
				this.editMode = false;
			});
		},

		beforeDestroy(){
			bus.$off('taskEdit');
			bus.$off('taskEditEnd');
		},

		methods: {
			mouseOver:function(){
				this.hover = true;
			},
			mouseOut:function(){
				this.hover=false;
			},
			
			taskDoneClicked(){
				service.taskDone(this.id);
			},

			taskEditClicked(){
				this.editMode = true;
				this.newTaskTitle=service.taskEdit(this.id);
			},

			taskDeleteClicked(){
				service.taskDelete(this.id);
			},
		}
	}
</script> 