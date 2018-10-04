import Vue from 'vue'
import { bus } from './bus.js'

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
			this.tasks[id].isDone = this.tasks[id].isDone ? false : true;
		},

		taskAdd(title){
			this.tasks.push({id:this.nextTaskNumber++, title, isDone: false});
		},

		taskDelete(id){
			this.tasks.splice(id,1);
		},

		taskEdit(id){
			bus.$emit('taskEdit', id, this.tasks[id].title);
			return this.tasks[id].title;
		},

		taskUpdate(id, title){
			bus.$emit('taskEditEnd', id);
			this.tasks[id].title = title;
		},

		checkTask(title){

			for (var i = 0; i < this.tasks.length; i++) {
				if (this.tasks[i].title === title) return true;
			}

			return false;
		}
	}
});

