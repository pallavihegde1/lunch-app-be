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
    let role = new Role({ name, desc });
    role = await role.save();
    res.status(201).send('Role created successfully', role);
  } catch (error) {
    res.status(500).send(error.message, 'Something went wrong. Please try again', null);
  }
};

module.exports = {fetchAll, create}
