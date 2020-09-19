import Axios from '../utils/request';

export const getList = function() {
    const axiosConfig = Axios({
        url: '/api/home/getList',
        method: 'get',
        dataType: "json",
        contentType: "application/x-www-form-urlencoded;charset=UTF-8",
    })
    return axiosConfig
}