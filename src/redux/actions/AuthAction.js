import axios from 'axios'


const AuthType = {
    LOGOUT_SUCCESS:"LOGOUT_SUCCESS",
    LOGOUT_FAIL:"LOGOUT_FAIL",
    LOGIN_SUCCESS:"LOGIN_SUCCESS",
    LOGIN_FAIL:"LOGIN_FAIL"
}
const LoginAuthAction = (loginState,history) =>{
    return async (dispatch) => {
        try {
            const res = await axios.post("user/login",loginState);
            const {data} = res;
            console.log(data);
            dispatch({type:AuthType.LOGIN_SUCCESS,payload:data});
            history.push("/")
        } catch (error) {
            console.log(error)
            dispatch({type:AuthType.LOGIN_FAIL,payload:{}});
        }
    }
}
const LogOutAuthAction = (history) =>{
    return async (dispatch) => {
        try {
            // const res = await axios.get("user/logout");
            // const {data} = res;
            // console.log(data);
            dispatch({type:AuthType.LOGOUT_SUCCESS,payload:{}});
            history.push("/")
        } catch (error) {
            console.log(error.response)
            dispatch({type:AuthType.LOGOUT_FAIL,payload:{}});
        }
    }
}
export {AuthType,LoginAuthAction,LogOutAuthAction}