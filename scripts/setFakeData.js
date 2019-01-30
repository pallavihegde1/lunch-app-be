const faker = require('faker');
const MenuItem = require('../models/menuItem');
const food = ['masalpuri', 'bhelpuri', 'gobi', 'bisi bele bath', 'curd rice', 'palak paneer', 'pasta']

async function createFakeMenuItems() {
  try{
   const items = food.map(o => {
        return {
        name: o,
        desc: faker.lorem.sentence()
      }})
    return await MenuItem.create(items)
  }catch (error){
    console.error({error})
  }
}

createFakeMenuItems()
