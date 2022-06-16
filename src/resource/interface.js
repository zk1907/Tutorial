// 导入axios实例
import axios from '../assets/resource/axios';

// 获取用户信息
export default {
    getEchar(){
        return axios({
            url: '/apis/users',
            method: 'GET'
        })
    }
}
