const router = require('express').Router();
const MenuItemsController = require('./controller');

// Fetch all Role
router.get('/', MenuItemsController.fetchAll);
router.get('/deleteAll', MenuItemsController.deleteAll);
// // Fetch one Role
// router.get('/:id', MenuItemsController.fetchOne);

// // Create Role
// router.post('/', MenuItemsController.create);
//
// // Update Role
// router.put('/:id', hasValidParams, MenuItemsController.update);
//
// // Delete one Role
// router.delete('/:id', MenuItemsController.deleteOne);

module.exports = router;
