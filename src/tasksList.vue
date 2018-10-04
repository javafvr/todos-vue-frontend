<template>
	<div id='task'>
		<div class="shadow mb-3 card bg-light">
			<div class="card-header">Tasks list</div>
				<ul class="list-group list-group-flush" id="listOfTasks">
					<task
						v-for="(task, i) in tasks" 
						:key="task.id"
						:id = "i"
						:title="task.title"
						:isDone="task.isDone"
						>
					</task>
				</ul>
		</div>
	</div>
</template>

<script>
	import task	from './task.vue'
	import service	from './Service.js'
	export	default {
		data(){
			return {
				tasks:[]	
			}
		},

		components:{
			task
		},
		
		//Created, but isn`t inserted in DOM (Lifecycles of vue components)
		created(){
			this.tasks = service.tasks;
		}


	}
</script> 