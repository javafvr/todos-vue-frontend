<template>
	<div class="sticky-top shadow card mb-5 bg-light">
		<div class="card-header">Add task</div>
		<div class="card-body">
			<form @submit.prevent="taskAdd" id="form-new-task">
				<div class="form-group">
					<div class="row">
						<div class="col-md-11">
							<input @keyup.enter="taskAdd" class="form-control" id="addNewTask" type="text" placeholder="Text task" v-model.lazy="newTaskTitle"/><small class="form-text text-muted mb-1" id="taskHelp">Describe details of task</small>
						</div>
						<div v-show="!editMode" class="col-md-1">
							<button class="btn btn-primary" >Add task</button>
						</div>
						<div v-show="editMode" class="col-md-1">
							<div class="btn-group" role="group" aria-label="task controls">
								<button class="shadow btn btn-primary" type="button" aria-label="accept task" v-on:click="taskUpdateClicked"><font-awesome-icon icon="check" />
								</button>
								<button class="shadow btn btn-danger" type="button" aria-label="cancel" v-on:click="taskUpdateCancelClicked"><font-awesome-icon icon="times" />
								</button>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>

	</div>	
</template>

<script>
	import service from './Service.js'
	import { bus } from './bus.js'

	export default {
		data(){
			return{
				task: {},
				newTaskTitle:'',
				isDone:false,
				editMode: false,
				id: Number
			}
		},

		mounted(){
			bus.$on('taskEdit', (id, title) => {
				this.id = id;
				this.newTaskTitle = title;
				this.editMode = true;
			});
		},

		beforeDestroy(){
			bus.$off('taskEdit');
		},

		methods: {
			taskAdd(){
				if(this.newTaskTitle !== '') {
					console.log(service.checkTask(this.newTaskTitle));
					if(service.checkTask(this.newTaskTitle)){
						bus.$emit('error', this.newTaskTitle, `Task with name: ${this.newTaskTitle} is exists!!!`);
					}else{
						service.taskAdd(this.newTaskTitle);
						this.newTaskTitle = '';
					}
				}
			},

			taskUpdateClicked(){
				this.editMode=!this.editMode;
				service.taskUpdate(this.id, this.newTaskTitle);
				this.newTaskTitle = '';
			},

			taskUpdateCancelClicked(){
				this.newTaskTitle = '';
				this.editMode=!this.editMode;
			}
		}
	}
</script>