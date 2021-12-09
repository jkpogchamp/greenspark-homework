import axios from 'axios';
import VTooltip from '../tooltip/tooltip.vue';

export default {
	name: 'product-list',
	components: {
		VTooltip
	},
	data() {
		return {
			model: [],
			products: null,
		}
	},
	mounted() {
		axios
			.get('https://getgreenspark.mocklab.io/products')
			.then(({data}) => {
				this.products = data.map(item => ({...item, color: ''}));
			})
			.catch(err => console.error('product-list GET call' + err))
	}
};
