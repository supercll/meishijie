import axios from 'axios';

class HttpRequest {
  constructor(options){
    this.defaults = {
      baseUrl: ''
    }
    this.defaults = Object.assign(this.defaults, options);
  }
  interceptors(install){
    install.interceptors.request.use(
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
    install.interceptors.response.use(
      res => {
        const { data, status } = res;
        return data;
      },
      err => {
        return Promise.reject(err);
      }
    );
  }
  request(options){
    options = Object.assign(this.defaults, options)
    const instance = axios.create(options)
    this.interceptors(instance);
    return instance
  }
}

const request = new HttpRequest({
  baseURL: '/api'
});

const http = request.request();

// 获取banner数据
export function getBanner(){
  return http.get('/banner');
}

// 获取所有属性分类
export function getProperty(){
  return http.get('/menu/property');
}
// 获取所有菜谱分类
export function getClassify(){
  return http.get('/menu/classify');
}

/**
 * 发布菜谱
 * @export
 * @param {Object} params - 参考mock的数据
 * @returns
 */
export function publish(params){
  return http.post('/menu/publish', params);
}

/**
 * 注册账号
 * @export
 * @param {Object} params - 
 * @param {Object} params.name - 用户名
 * @param {Object} params.password - 密码
 * @returns
 */
export function register(params){
  return http.post('/user/create', params);
}

/**
 * 账号登录
 * @export
 * @param {Object} params - 
 * @param {string} params.name - 用户名
 * @param {string} params.password - 密码
 * @returns
 */
export function login(params){
  return http.post('/user/login', params);
}

/**
 * 获取用户信息
 * @export
 * @param {Object} params - 
 * @param {string} params.userId - 用户id
 * @returns
 */
export function userInfo(params){
  return http.post('/user/info', params);
}

/**
 * 拿到用户发布的菜谱，可做筛使用选
 * @export
 * @param {Object} [params] - 不填写，则获取所有的菜谱
 * @param {string} [params.userId] - 指定用户的菜单
 * @param {string} [params.classify] - 按照菜单分类，进行筛选
 * @param {string} [params.property] - 指定菜单属性进行筛选
 * @param {string} [params.page] - 指定页码
 * @returns
 */
export function getMenus(params){
  return http.get('/menu/query', {params});
}

/**
 * 根据菜单id，拿到菜谱的详细信息
 * @export
 * @param {Object} [params] - 
 * @param {string} [params.menuId] - 指定菜单的id
 * @returns
 */
export function menuInfo(params){
  return http.get('/menu/menuInfo', {params});
}

/**
 * toggle 收藏。收藏的取消收藏；没收藏的，要收藏。
 * @export
 * @param {Object} [params] - 
 * @param {string} [params.menuId] - 指定要收藏的菜单的id
 * @returns
 */
export function toggleCollection(params){
  return http.post('/user/collection', params);
}
/**
 * toggle 关注。关注的取消关注；没关注的，要关注。
 * @export
 * @param {Object} [params] - 
 * @param {string} [params.followUserId] - 指定要关注的用户的id
 * @returns
 */
export function toggleFollowing(params){
  return http.post('/user/following', params);
}

/**
 * 获取指定用户的收藏的菜单
 * @export
 * @param {Object} [params] - 
 * @param {string} [params.userId] - 指定的用户id
 * @returns
 */
export function collection(params){
  return http.get('/user/collection', {params});
}

/**
 * 获取指定用户关注的人
 * @export
 * @param {Object} [params] - 
 * @param {string} [params.userId] - 指定的用户id
 * @returns
 */
export function following(params){
  return http.get('/user/following', {params});
}

/**
 * 获取指定用户的粉丝
 * @export
 * @param {Object} [params] - 
 * @param {string} [params.userId] - 指定的用户id
 * @returns
 */
export function fans(params){
  return http.get('/user/fans', {params});
}