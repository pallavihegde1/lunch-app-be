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

const deleteAll = async (req, res, next) => {
  try {
      const {ids} = req.body
      if (!(ids || []).length) {
        return res.status(400).json({success: false, systemMessage: '', userMessage: 'Something went wrong. Please try again', data: null});
      }
      const menuItems = await MenuItem.deleteMany({_id: ids})
      return res.status(200).json({success: true, message: 'MenuItems deleted successfully', data: ids});
    } catch (error) {
    res.status(500).json({success: false, systemMessage: error.message, userMessage: 'Something went wrong. Please try again', data: null});
  }
}

module.exports = { fetchAll, deleteAll}
