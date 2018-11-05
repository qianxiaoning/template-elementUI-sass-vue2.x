const host_dev = '/api';//开发以'/'本地localhost发起
const host_prod = 'http://a.cloud.cn/api';
// 根据 process.env.NODE_ENV 判断 开发或生产接口地址
const host = process.env.NODE_ENV == 'development' ? host_dev : host_prod; 

// 后台各个服务地址头
// const hostV1 = host + '/v1';
// const hostV2 = host + '/v2';
// const hostV3 = host + '/v3';
// const hostV4 = host + '/v4';  

const urls = {
    login:host+'/r/sys/login',
}

export default urls;