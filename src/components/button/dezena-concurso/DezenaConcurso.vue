<template>
	<q-btn v-if="match"
		   round
		   :label="dezena"
		   :color="color"/>
	<q-btn v-else
		   round
		   outline
		   :label="dezena"
	/>
</template>

<script>
	import { LOTERIAS } from 'components/index';

	export default {
		name: 'DezenaConcurso',
		props: {
			dezena: {
				type: String,
				required: true
			},
			match: {
				type: Boolean,
				required: true
			},
			tpLoteria: {
				type: String,
				required: true
			}
		},

		data() {
			return {
				color: LOTERIAS.MEGASENA.color
			};
		},

		watch: {
			tpLoteria: {
				immediate: true,
				handler: function(newVal, oldVal) {
					this.color = LOTERIAS.getType(newVal).color
				}
			}
		}
	};
</script>

<style>

	@media (max-width: 600px) {
		.q-btn {
			font-size: 10px;
		}

		.q-pa-sm {
			padding: 2px 2px;
		}
	}

</style>
