import axios from "axios";
import jwt from "jwt-decode";
import {AuthType} from '../actions/AuthAction'

const authState = {
    isLoggedIn:false,
    user:{
        email:"",
        typeToken:"",
        token:"",
        roles:[],
    },
}

const getAuthState = () =>{
    const auth = localStorage.getItem("auth");
    try {
        const authobj = JSON.parse(auth);
        const {token} = authobj.user;
        const tokenDecode = jwt(token)     
        const {exp} = tokenDecode;
        if(new Date(exp * 1000) > new Date()){
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            return authobj;
        }
        return authState;
    } catch (error) {
        return authState;
    }
}

const newAuth = getAuthState();

export const auth= (state = newAuth , action) => {
    switch (action.type) {
        case AuthType.LOGIN_SUCCESS:
            const newAuthState = {
                isLoggedIn:true,
                user:action.payload
            };
            axios.defaults.headers.common["Authorization"] = `Bearer ${action.payload.token}`;
            localStorage.setItem("auth",JSON.stringify(newAuthState));
            return newAuthState;

        case AuthType.LOGIN_FAIL:
            return authState;
        
        case AuthType.LOGOUT_SUCCESS:
            localStorage.removeItem("auth");
            return authState;
                 
        case AuthType.LOGOUT_FAIL:
            localStorage.removeItem("auth");
            return authState;

        default:
            break;
    }
   return state;
};


    
