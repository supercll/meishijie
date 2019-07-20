const Mock = require('mockjs')
const Random = Mock.Random;


function randomNum(n){
  return Math.ceil(Math.random()*(n));
}

function createRandomId(){
  return randomNum(4) + '-' + randomNum(4);
}

export default function createMockMenuPublishData(userId){
  return Mock.mock({
    'menus|1': [
      {
        title: Random.csentence(6),  // 标题
        product_pic_url: 'https://s1.st.meishij.net/r/208/102/1025708/s1025708_156144940220181.jpg', // 成品图URL
        product_story: Random.csentence(20), // 成品图故事
        property: {
          craft: createRandomId(),  // 工艺 enum: [1,2,3,4],
          flavor: createRandomId(),  // 口味  enum: [1,2,3,4],
          hard: createRandomId(),   // 难度 enum: [1,2,3,4],
          pepole: createRandomId()  // pepole 人数: [1,2,3,4],
        },  // 属性
        raw_material: { // 料
          "main_material|3-5": [{name: Random.csentence(3), specs: Random.csentence(3)}], // 主料
          "accessories_material|3-5": [{name: Random.csentence(3), specs: Random.csentence(3)}], // 辅料
        },
        "steps|3-5": [{img_url: 'https://s1.st.meishij.net/rs/208/102/1025708/n1025708_156144944939153.jpg',describe: Random.csentence(310)}], // 步骤
        classify: createRandomId(), // 菜谱分类
        skill: Random.csentence(50),
      }]
  })
}