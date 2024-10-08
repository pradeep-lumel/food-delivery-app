const cartModel=require('../models/cartModel')

exports.addToCart = async (req, res) => {
    try {
      const cartDetails = req.body;
      console.log(cartDetails);
      
      const cart = await cartModel.create(cartDetails);
      res.status(201).json({
        success: true,
        message: "Item added to cart successfully",
        cart,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to add item to cart",
        error: error.message,
      });
    }
  };

  exports.getCartItems = async (req, res) => {
    try {
      const cartItems = await cartModel.find({});
      res.status(200).json({
        success: true,
        message: "Cart items retrieved successfully",
        cartItems,
      });
    } catch (error) {
      console.error("Error retrieving cart items:", error);
      res.status(500).json({
        success: false,
        message: "Failed to retrieve cart items",
        error: error.message,
      });
    }
  };
  

  exports.getCartItemById = async (req, res) => {
    try {
      const cartItemId = req.params.id;
      const cartItem = await cartModel.findById(cartItemId);
      if (!cartItem) {
        return res.status(404).json({
          success: false,
          message: "Cart item not found",
        });
      }
      res.status(200).json({
        success: true,
        message: "Cart item retrieved successfully",
        cartItem,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to retrieve cart item",
        error: error.message,
      });
    }
  };

  
  exports.updateCartItemById = async (req, res) => {
    try {
      const cartItemId = req.params.id;
      const updatedCartDetails = req.body;
      const updatedCartItem = await cartModel.findByIdAndUpdate(cartItemId, updatedCartDetails, { new: true });
  
      if (!updatedCartItem) {
        return res.status(404).json({
          success: false,
          message: "Cart item not found",
        });
      }
      res.status(200).json({
        success: true,
        message: "Cart item updated successfully",
        updatedCartItem,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to update cart item",
        error: error.message,
      });
    }
  };

  exports.deleteCartItemById = async (req, res) => {
    try {
      const cartItemId = req.params.id;
      const deletedCartItem = await cartModel.findByIdAndDelete(cartItemId);
  
      if (!deletedCartItem) {
        return res.status(404).json({
          success: false,
          message: "Cart item not found",
        });
      }
      res.status(200).json({
        success: true,
        message: "Cart item deleted successfully",
        deletedCartItem,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to delete cart item",
        error: error.message,
      });
    }
  };
  
  exports.clearCart = async (req, res) => {
    try {
      await cartModel.deleteMany();
      res.status(200).json({
        success: true,
        message: "All cart items cleared successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to clear cart items",
        error: error.message,
      });
    }
  };
  

  
  