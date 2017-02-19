import { HYDRATE_STATE } from '../actions/types.js';

const initial_state = {
	keys: [],
	datas: {}
};

export function topics(state = initial_state, action) {
	switch (action.type) {
		case HYDRATE_STATE:
			return {
				datas: action.data.datas,
				keys: action.data.keys
			};
		default:
			return state;
	}
}