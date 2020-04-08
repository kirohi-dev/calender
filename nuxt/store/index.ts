import { Store } from 'vuex';
import { initialiseStores } from '~/util/store-accessor';
const initializer = (store: Store<any>) => initialiseStores(store);
export const plugins = [initializer];
export * from '~/util/store-accessor';

// import Vuex from 'vuex';

// const createStore = () => {
//   return new Vuex.Store({
//     state: () => ({
//       counter: 0
//     }),
//     mutations: {
//       increment(state) {
//         state.counter++;
//       }
//     }
//   });
// };

// export default createStore;
