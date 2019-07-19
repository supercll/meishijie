import axios from 'axios';




// 获取所有属性分类
export async function getProperty(){
  let data = await axios.get('/api/menu/property');
  return data.data;
}

