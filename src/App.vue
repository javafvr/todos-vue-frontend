<template>
	<div>
		<appHeader>
			<div class="h1" slot='title'>Todos app</div>
			<div class="h5" slot='subtitle'>created with vue.js and express.js</div>
		</appHeader>
		<messages>
			
		</messages>
		<!-- <component :is='componentName'></component> -->
		<taskAdd></taskAdd>
		<tasksList></tasksList>
	</div>
</template>

<script>
	import appHeader from './header.vue'
	import messages from './messages.vue'
	import taskAdd from './taskAdd.vue'
	import tasksList  from './tasksList.vue'

	export	default {
		data(){
			return{
				alert:'success'
			}
		},

		computed: {
			componentName(){
				return this.mode == 'success' ? 'succsessMessage' : 'errorMessage';
			}
		},

		components:{
			appHeader,
			messages,
			taskAdd,
			tasksList
		}
	}
</script>;