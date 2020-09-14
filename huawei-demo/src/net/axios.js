import axios from "axios"
import store from "../store/index"

//配置
axios.defaults.baseURL = "http://localhost:2020/"
//超过2000ms就要重新登陆就会超时了
axios.defaults.timeout = 2000
axios.defaults.headers["Content-type"]='application/json'

//请求头
axios.interceptors.request.use(
    config=>{
        config.headers["Token"]=store.state.token;
        return config;
    },
    error=>{
        return error
    }
)

//接收数据
axios.interceptors.response.use(
    data=>{
        return data;
    },
    error=>{
        return error
    }
)



export default axios