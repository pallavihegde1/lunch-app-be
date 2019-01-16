const Category = require('../../models/category')

// Fetch categories
const fetchAll = async (req, res, next) => {
  try {
    // Authorize request
    const categories = await Category.find({});
    res.status(200).json({categories});
  } catch (error) {
    console.error({error})
    res.status(500).json({error});
  }
};

const create = async (req, res, next) => {
  try {
    const {name, desc} = req.body
    let category = new Category({ name, desc });
    category = await category.save();
    return res.status(200).json({success: true, message: 'Category created successfully', data: category});
  } catch (error) {
    res.status(500).json({success: false, systemMessage: error.message, userMessage: 'Something went wrong. Please try again', data: null});
  }
};

module.exports = {fetchAll, create}
