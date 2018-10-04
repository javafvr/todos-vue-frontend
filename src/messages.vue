<template>
	<div class="container">
		<transition name="fade">
			<div v-show="show" class="alert alert-danger" role="alert">{{text}}</div>
		</transition>
	</div>
</template>
<script>
	import { bus } from './bus.js'
	
	export default {
		data(){
			return{
				show:false,
				text:''

			}
		},

		mounted(){
			bus.$on('error', (title, text) => {
				this.show = true;
				this.text = text;
				setTimeout( ()  => {
					this.show = false;
					// bus.$off('error');
				}, 3000);
			});

		}

	}
</script>

<style scoped>

.alert{
	transition: opacity 5s;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>