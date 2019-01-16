const router = require('express').Router();
const CategoriesController = require('./controller');

// Fetch all Role
router.get('/', CategoriesController.fetchAll);

// // Fetch one Role
// router.get('/:id', CategoriesController.fetchOne);

// // Create Role
router.post('/', CategoriesController.create);
//
// // Update Role
// router.put('/:id', hasValidParams, CategoriesController.update);
//
// // Delete one Role
// router.delete('/:id', CategoriesController.deleteOne);

module.exports = router;
