import { HYDRATE_STATE } from '../actions/types.js';

const initial_state = {
	datas: {},
	ids: []
};

export function topics(state = initial_state, action) {
	switch (action.type) {
		case HYDRATE_STATE:
			return {
				datas: action.data.datas,
				ids: action.data.ids
			};
		default:
			return state;
	}
}