const mongoose =require('mongoose');

const cartSch=new mongoose.Schema({
   id:{
    type:Number,
    required:true
   },
   title:{
    type:String,
    required:true,
   },
   price:{
    type:Number,
    required:true
   },
   quantity:{
    type:Number,
    required:true
   },
   createdAt: {
    type: Date,
    default: Date.now,
},
})

const cartModel=mongoose.model('Cart',cartSch);

module.exports=cartModel