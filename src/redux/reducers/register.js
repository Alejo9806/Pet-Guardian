import {RegisterType} from '../actions/RegisterAction'
const registerState = {
    errMess: null,
    register:[],
}

export const register= (state = registerState , action) => {
    switch (action.type) {
        case RegisterType.REGISTER_SUCCESS:
            
            return{...state, errMess: false, register: action.payload};

        case RegisterType.REGISTER_FAIL:

            return{...state, errMess: action.payload};
            
        default:
            break;
    }
    return state;
};

