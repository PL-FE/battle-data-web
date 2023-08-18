import axios from 'axios'
import { ElMessage } from 'element-plus'// 创建一个 axios 实例

const errStatus = {
    400: '错误请求',
    401: '未授权，请重新登录',
    403: '拒绝访问',
    404: '请求错误,未找到该资源',
    405: '请求方法未允许',
    408: '请求超时',
    500: '程序开小差了，请联系管理员处理问题！',
    501: '网络未实现',
    502: '网络错误',
    503: '服务不可用',
    504: '网络超时',
    505: 'http版本不支持该请求'
}

const http = axios.create({
    baseURL: '/api', // 所有的请求地址前缀部分
    timeout: 60000, // 请求超时时间毫秒
})

// 添加请求拦截器
http.interceptors.request.use(
    function (config) {
        return config
    },
    function (error) {
        console.log(error)
        return Promise.reject(error)
    }
)

// 添加响应拦截器
http.interceptors.response.use(
    function (response) {
        const dataAxios = response.data
        if (dataAxios.code === 10000) {
            return dataAxios.data
        }
        ElMessage.error('请求失败，请重试')
        return Promise.reject(dataAxios)
    },
    function (err) {
        let msg = ''
        let status = ''
        const { response, message } = err
        if (response) {
            status = response.status
            msg = message || errStatus?.[status]
        } else {
            msg = '系统错误,请稍后再试'
        }
        ElMessage.error(msg)
        return Promise.reject(err)
    }
)

export default http