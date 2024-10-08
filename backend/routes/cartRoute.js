const express = require('express');
const { 
  addToCart, 
  getCartItems, 
  getCartItemById, 
  updateCartItemById, 
  deleteCartItemById, 
  clearCart 
} = require('../controllers/cartController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();
//todo--add authMiddleware before the route
router.route('/add-cart').post(addToCart);
router.route('/all-cart').get(getCartItems);
router.route('/clear-cart').delete( clearCart);
router.route('/cart/:id').get( getCartItemById);
router.route('/cart/:id').put( updateCartItemById);
router.route('/cart/:id').delete( deleteCartItemById);

module.exports = router;
