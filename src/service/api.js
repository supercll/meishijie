import axios from 'axios';




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