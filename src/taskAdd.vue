<template>
	<div class="card mb-5 bg-light">
		<div class="card-header">Add task</div>
		<div class="card-body">
			<form @submit.prevent="taskAdd" id="form-new-task">
				<div class="form-group">
					<div class="row">
						<div class="col-md-11">
							<input @keyup.enter="taskAdd" class="form-control" id="addNewTask" type="text" placeholder="Text task" v-model="newTaskTitle"/><small class="form-text text-muted mb-1" id="taskHelp">Describe details of task</small>
						</div>
						<div class="col-md-1">
							<button class="btn btn-primary" >Add task</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	</div>	
</template>

<script>
	import service from './Service.js'

	export default {
		data(){
			return{
				task: {},
				newTaskTitle:'',
				isDone:false,
				show: true
			}
		},

		methods: {
			taskAdd(){
				if(this.newTaskTitle !== '') {
					service.taskAdd(this.newTaskTitle);
					this.newTaskTitle = '';
				}
			}
		}
	}
</script>