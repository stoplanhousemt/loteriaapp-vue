import { store } from 'quasar/wrappers';
import Vuex from 'vuex';
import titleHeader from './titleHeader';
import usuario from './usuario';
import colorHeader from './colorHeader'

// import example from './module-example'
// import exampleState from './module-example/state'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export interface StoreInterface {
	// Define your own store structure, using submodules if needed
	// example: typeof exampleState;
	example: unknown;
}

export default store(function({ Vue }) {
	Vue.use(Vuex);

	const Store = new Vuex.Store({
		modules: {
			usuario,
			titleHeader,
			colorHeader
		},

		// enable strict mode (adds overhead!)
		// for dev mode only
		strict: !!process.env.DEV
	});

	return Store;
});
