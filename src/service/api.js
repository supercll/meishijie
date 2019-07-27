import axios from 'axios';

axios.interceptors.request.use(
  config => {
    let token = localStorage.getItem('token');
    if (token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.authorization = `token ${token}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

// 获取所有属性分类
export async function getProperty(){
  let data = await axios.get('/api/menu/property');
  return data.data;
}
// 获取所有菜谱分类
export async function getClassify(){
  let data = await axios.get('/api/menu/classify');
  return data.data;
}

// 发布菜谱
export async function publish(params){
  let data = await axios.post('/api/menu/publish', params);
  return data.data;
}

// 注册账号
export async function register(params){
  let data = await axios.post('/api/user/create', params);
  return data.data;
}
// 登录
export async function login(params){
  let data = await axios.post('/api/user/login', params);
  return data.data;
}
// 用户信息
export async function userInfo(params){
  let data = await axios.post('/api/user/info', params);
  return data.data;
}
// 拿到用户发布的菜谱
export async function getMenus(params){
  let data = await axios.get('/api/menu/query', {params: params});
  return data.data;
}