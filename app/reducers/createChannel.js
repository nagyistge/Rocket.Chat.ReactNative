import { CREATE_CHANNEL } from '../actions/actionsTypes';

const initialState = {
	isFetching: false,
	failure: false
};

export default function messages(state = initialState, action) {
	switch (action.type) {
		case CREATE_CHANNEL.REQUEST:
			return { ...state,
				error: undefined,
				failure: false,
				isFetching: true
			};
		case CREATE_CHANNEL.SUCCESS:
			return { ...state,
				isFetching: false,
				failure: false,
				result: action.data
			};
		case CREATE_CHANNEL.FAILURE:
			return { ...state,
				isFetching: false,
				failure: true,
				error: action.err
			};
		default:
			return state;
	}
}
