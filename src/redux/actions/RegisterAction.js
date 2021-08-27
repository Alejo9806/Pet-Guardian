import axios from 'axios'

const RegisterType = {
    REGISTER_SUCCESS: "REGISTER_SUCCESS",
    REGISTER_FAIL: "REGISTER_FAIL"
}

const RegisterEmployeeAction = (userState,history) =>{
    return async (dispatch) => {
        try {
            const res = await axios.post("user/create",userState);
            const {data} = res;
            console.log(data);
            dispatch({type:RegisterType.REGISTER_SUCCESS,payload:data});
            history.push("/employee-management")
        } catch (error) {
            console.log(error)
            dispatch({type:RegisterType.REGISTER_FAIL,payload:true});
        }
    }
}



export {RegisterType,RegisterEmployeeAction}