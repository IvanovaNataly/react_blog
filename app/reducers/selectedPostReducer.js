import { SET_SELECTED_POST } from '../actions/actions';

export default function selectedPostReducer(state = {}, action) {
    switch(action.type){
        case SET_SELECTED_POST:
            return action.post;
    }
    return state;
}
