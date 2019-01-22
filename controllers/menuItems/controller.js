const MenuItem = require('../../models/menuItem');

const fetchAll = async(req, res, next) => {
  try {
    const menuItems = await MenuItem.find({}).populate('category', 'name').lean()
    menuItems.forEach(a => {
      a.category = (a.category || {}).name
    })
    return res.status(200).json({sucess: true, data: menuItems})
  }
  catch (error) {
    console.error(error)
    return res.status(500).json({error})
  }
}

const deleteAll = async(req, res, next) => {
  try {
    const menuItems = await MenuItem.deleteMany({})
    return res.status(200).json({sucess: true, data: []})
  }
  catch (error) {
    console.error(error)
    return res.status(500).json({error})
  }
}

module.exports = { fetchAll, deleteAll}
