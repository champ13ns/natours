const express=require('express');
const router=express.Router();
const userController=require('../controllers/userController')
router.route('/').get(userController.getUser).post(userController.postUser);
router.route('/:id').get(userController.getUserById).patch(userController.patchUserById).delete(userController.patchUserById);

module.exports=router;