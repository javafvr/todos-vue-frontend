import Vue from 'vue'

export default new Vue({
	data: {
		tasks: [
			{id: 1, title: 'task #1', isDone: true},
			{id: 2, title: 'task #2', isDone: false}
		],

		nextTaskNumber: 3

	},
	methods: {

		taskDone(id){
			console.log('task done');
			this.tasks[id].isDone = this.tasks[id].isDone ? false : true;
		},

		taskAdd(title){
			this.tasks.push({id:this.nextTaskNumber++, title, isDone: false});
		},

		taskDelete(id){
			this.tasks.splice(id,1);
		},

		taskEdit(id){
			console.log('task edit');
		}
	}
});

